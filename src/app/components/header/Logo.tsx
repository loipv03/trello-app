"use client"
import Image from "next/image"
import logo from '../../../../public/Logo.png'
import Link from "next/link"

const Logo = () => {
    return (
        <div className="min-w-[75px] w-[75px] h-max flex place-items-center">
            <Link href={'/'}>
                <Image
                    src={logo} alt="logo"
                    placeholder="blur"
                    loading="eager"
                    className="w-full h-[32px] max-h-full object-contain"
                />
            </Link>
        </div>
    )
}

export default Logo