import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const tokenSchema = z.object({
    access_token: z.string(),
    refresh_token: z.string()
});

export async function POST(req: NextRequest) {
    try {
        const { access_token, refresh_token } = tokenSchema.parse(await req.json());

        const response = NextResponse.json({ message: "set-cookie success" });

        response.cookies.set('accessToken', access_token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: '/',
            maxAge: 1 * 24 * 60 * 60
        });

        response.cookies.set('refreshToken', refresh_token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: '/',
            maxAge: 1 * 24 * 60 * 60
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
}