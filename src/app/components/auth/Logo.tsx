import Image from "next/image"
import logo from '../../../../public/Logo.png'
import Link from "next/link"

const Logo = () => {
    return (
        <div className="max-w-full h-full mt-[10px] pl-[10px] grid lg:place-items-start place-items-center border border-transparent border-b-slate-200">
            <Link href={'/'}>
                <Image
                    src={logo} alt="logo"
                    placeholder="blur"
                    loading="eager"
                    className="lg:w-[200px] w-[250px] h-full object-contain"
                />
            </Link>
        </div>
    )
}

export default Logo