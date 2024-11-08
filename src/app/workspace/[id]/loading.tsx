import { Skeleton } from '@/components/ui/skeleton'
import { CgTrello } from 'react-icons/cg'

const Loading = () => {
    return (
        <div className="w-full my-5 md:my-10">
            <div className="w-full h-[100px] p-5 md:h-[125px] md:p-8 flex gap-x-[10px] items-center">
                <Skeleton className="h-full aspect-square rounded-sm" />
                <div className="w-full h-[80%] flex flex-col">
                    <div className="h-full w-[80%] md:w-[50%] grid grid-rows-[60%_auto] gap-y-1">
                        <Skeleton className='size-h rounded-sm' />
                        <Skeleton className='w-[80%] h-full rounded-sm' />
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <div className="w-full flex gap-x-2 items-center">
                    <CgTrello className="size-4 md:size-6 text-[#172b4d]" />
                    <h2 className="text-sm font-medium md:text-lg md:font-semibold text-[#172b4d]">Các bảng của bạn</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-10 my-5">
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                    <Skeleton className='w-full h-[50px] md:h-[90px]' />
                </div>
            </div>
        </div>
    )
}

export default Loading
