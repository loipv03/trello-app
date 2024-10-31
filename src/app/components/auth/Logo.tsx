import Image from "next/image"
import logo from '../../../../public/Logo.png'
import Link from "next/link"

const Logo = () => {
    return (
        <div className="w-full h-full mt-[10px] pl-[10px] border border-transparent border-b-slate-200 grid lg:place-items-start place-items-center">
            <Link href={'/'} className="size-max">
                <Image
                    src={logo} alt="logo"
                    placeholder="blur"
                    loading="eager"
                    className="lg:w-[150px] w-[100px] h-full object-contain"
                />
            </Link>
        </div>
    )
}

export default Logo