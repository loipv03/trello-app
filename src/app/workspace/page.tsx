'use client'
import Loading from "@/app/workspace/[id]/loading"
import { useGetAllWorkspaceQuery } from "@/redux/api/workspace"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Workspace = () => {
    const router = useRouter()

    const { data, isSuccess } = useGetAllWorkspaceQuery()

    useEffect(() => {
        if (isSuccess && data.length) {
            router.push(`/workspace/${data[0]._id}`);
        }
    }, [isSuccess, data, router]);

    return (
        <Loading />
    )
}

export default Workspace