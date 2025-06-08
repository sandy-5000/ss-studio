// server/utils/s3.js
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3'

import { v4 as uuid } from 'uuid'
import path from 'path'

import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import config from './config'


const s3 = new S3Client({
    region: config.AWS_REGION,
    credentials: {
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
})

const BUCKET_NAME = config.AWS_S3_BUCKET_NAME


export const uploadToS3 = async (
    buffer,
    key,
    contentType,
    isPublic = false
) => {
    const uniqueKey =
      key || `uploads/${Date.now()}-${uuid()}${path.extname(contentType)}`
    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: uniqueKey,
        Body: buffer,
        ContentType: contentType,
    })
    await s3.send(command)

    if (isPublic) {
      return `https://${BUCKET_NAME}.s3.${config.AWS_REGION}.amazonaws.com/${key}`
    } else {
      return await generateSignedUrl(key) // Use signed URL for private files
    }
}

export const deleteFromS3 = async (key) => {
    const command = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    })

    await s3.send(command)
}

export const generateSignedUrl = async (key, expiresIn = 60 * 5) => {
    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    })

    return await getSignedUrl(s3, command, { expiresIn })
}
