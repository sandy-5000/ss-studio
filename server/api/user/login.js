import Users from '~/server/models/user.model'
import { Hash, IsMatch } from '~/server/utils/Hash'

export default defineEventHandler(async (event) => {
  try {
    const req = event.node.req
    const res = event.node.res
    res.setHeader('Content-Type', 'application/json')
    if (req.method === 'POST') {
      const body = await readBody(event)
      if (!body.email || !body.passwd) {
        res.statusCode = 400
        return res.end(str({ error: 'Missing parameters' }))
      }
      const user = await post(body)
      return res.end(str(user))
    } else {
      res.statusCode = 405
      return res.end(str({ error: 'Unsupported method' }))
    }
  } catch (e) {
    return res.end(str({ error: e }))
  }
})

async function post({ email, passwd }) {
  const user = await Users.findOne({ email })

  if (!user) {
    return { error: ['User not Found'] }
  }

  const match = await IsMatch(passwd, user.passwd)

  if (!match) {
    return { error: ['Email or password incorrect'] }
  }

  return user
}
