import Description from '@/components/Description'
import DescriptionCard from '@/components/Description/DescriptionCard'
import { saree_1, saree_2 } from '@/utils/temp'

const Page = () => {
  return (
    <div className="h-main-screen w-screen p-4 md:px-8 lg:p-8 lg:px-16">
      <div className="flex  grid gap-4 grid-cols-12">
        <div class="box sm:col-span-12 md:col-span-4">
          <div className="w-[316px]">
            <DescriptionCard cloth={saree_1} />
          </div>
        </div>
        <div class="box col-span-12 sm:col-span-6 md:col-span-5">
          <Description cloth={saree_1} />
        </div>
        <div class="box col-span-12 sm:col-span-6 md:col-span-3">1</div>
      </div>
    </div>
  )
}

export default Page
