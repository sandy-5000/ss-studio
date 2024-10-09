import ssuser from '@/models/user'
import connect from '@/config/mongodb'
import { bind } from '@/utils/parser'

export async function POST(req) {
  let { handler, passwd } = await req.json()
  const { result } = await authenticate({ handler, passwd })
  return bind(result)
}

const authenticate = async ({ handler, passwd }) => {
  try {
    await connect()
    const user = await ssuser.findOne({ email: handler, passwd })
    if (!user) {
      return { status: 404, result: null }
    }
    return { status: 200, result: user }
  } catch (e) {
    console.log(e)
    return {
      status: 500,
      result: 'Internal Server Error!',
    }
  }
}
