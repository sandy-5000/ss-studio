import ssuser from '@/models/user'
import connect from '@/config/mongodb'
import { bind } from '@/utils/parser'

export async function POST(req) {
  let { name, usermail, passwd, phone_no } = await req.json()
  const { result } = create({ name, usermail, passwd, phone_no })
  return bind(result)
}

const create = async ({ name, usermail, passwd, phone_no }) => {
  let errors = {
    11000: 'User already exists!',
  }
  try {
    await connect()
    let user = new ssuser({
      name,
      email: usermail,
      phone_no,
      passwd,
    })
    var result = await user.save()
    return { status: 201, result }
  } catch (e) {
    console.log(e)
    return {
      status: 400,
      result: errors[e.code] || 'User Creation failed!',
    }
  }
}
