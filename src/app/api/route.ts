import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
    const accessToken = "your_access_token";

    // Tạo response với cookie
    const response = NextResponse.json({ data: "set-cookie ok" });

    // Thiết lập cookie
    response.cookies.set('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/',
        maxAge: 1 * 24 * 60 * 60
    });

    return response;
}
