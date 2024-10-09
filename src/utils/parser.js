import { NextResponse } from 'next/server'

const bind = (data) => {
  return new NextResponse(JSON.stringify(data))
}

export { bind }
