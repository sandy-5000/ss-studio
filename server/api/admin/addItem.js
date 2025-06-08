import { readMultipartFormData } from 'h3'
import { uploadToS3 } from '../../utils/s3'

export default defineEventHandler(async (event) => {
  try {
    const formParts = await readMultipartFormData(event)

    const files = []
    const fields = {}

    for (const part of formParts || []) {
      if (part.filename) {
        files.push(part)
      } else {
        const value = part.data.toString()
        try {
          fields[part.name] = JSON.parse(value)
        } catch {
          fields[part.name] = value
        }
      }
    }

    console.log('Fields:', fields) // -> { update, product, profile }
    console.log('Files:', files)

    // Example: Upload files to S3
    const uploadedImages = []
    for (const file of files) {
      const buffer = file.data
      const contentType = file.type
      const originalFilename = file.filename
      const fileKey = `products/${Date.now()}-${originalFilename}`

      try {
        const s3Url = await uploadToS3(buffer, fileKey, contentType)
        uploadedImages.push({ name: originalFilename, url: s3Url })
      } catch (s3Error) {
        console.error('S3 upload failed:', s3Error)
        throw createError({
          statusCode: 500,
          statusMessage: 'S3 Upload Failed',
          data: s3Error,
        })
      }
    }

    return {
      message: 'Product received',
      product: fields.product,
      profile: fields.profile,
      uploadedImages,
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      error: 'Failed to process request',
      details: error.message || error,
    }
  }
})
