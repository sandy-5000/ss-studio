import Card from '@/components/Card'
import { saree_1, saree_2 } from '@/utils/temp'

const Page = () => {
  return (
    <div className="h-main-screen w-screen p-4 md:px-8 lg:p-8 lg:px-16">
      <div className="pb-2">
        <p className="uppercase text-sm font-semibold">
          <span className="underline text-red-400">Top picks</span>
          <span className="text-slate-800"> For you </span>
        </p>
      </div>
      <div className="pb-2 w-full flex justify-start overflow-x-scroll">
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
        <Card cloth={saree_1} />
        <Card cloth={saree_2} />
      </div>
    </div>
  )
}

export default Page
