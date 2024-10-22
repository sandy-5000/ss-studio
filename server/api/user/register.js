import Users from '~/server/models/user.model'
import { Hash } from '~/server/utils/Hash'

export default defineEventHandler(async (event) => {
  const req = event.node.req
  const res = event.node.res
  res.setHeader('Content-Type', 'application/json')
  if (req.method === 'POST') {
    const body = await readBody(event)
    if (!body.name || !body.email || !body.phone_no || !body.passwd) {
      res.statusCode = 400
      return res.end(str({ error: 'Missing parameters' }))
    }
    const data = await post(body)
    res.end(str(data))
  } else {
    res.statusCode = 405
    return res.end(str({ error: 'Unsupported method' }))
  }
})

async function post({ name, email, phone_no, passwd }) {
  const hash = await Hash(email + passwd + config.SALT)
  const user = new Users({
    name,
    email,
    phone_no,
    passwd: hash,
  })
  try {
    const result = await user.save()
    return {
      _id: result._id,
      name,
      email,
      phone_no,
    }
  } catch (e) {
    const errors = {
      11000: 'User already exists!',
    }
    console.log(e)
    return {
      error: errors[e.code] || 'User Creating Failed',
    }
  }
}
