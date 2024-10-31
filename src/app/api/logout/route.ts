import { cookies } from "next/headers"
import { NextResponse } from "next/server"


const GET = async () => {
    try {
        const cookieStore = await cookies()

        cookieStore.delete('accessToken')
        cookieStore.delete('refreshToken')

        return NextResponse.json(({
            message: "Logout success"
        }))
    } catch (error) {
        return NextResponse.json({
            message: "Logout failed",
            error: error
        }, { status: 500 })
    }
}

export default GET