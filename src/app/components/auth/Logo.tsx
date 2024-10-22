import Image from "next/image"
import logo from '../../../../public/Logo.png'

const Logo = () => {
    return (
        <div className="max-w-full h-full mt-[10px] ml-[10px] grid lg:place-items-start place-items-center">
            <Image src={logo} alt="logo" className="lg:w-[200px] w-[250px] h-full object-contain" />
        </div>
    )
}

export default Logo