import qr from '@/assets/qr.jpg'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="h-main-screen w-screen a-center">
      <div>
        <p className="p-2 m-2 text-center">Pay with UPI !</p>
        <Image src={qr} alt="qr code" width={300} />
      </div>
    </div>
  )
}

export default Page
