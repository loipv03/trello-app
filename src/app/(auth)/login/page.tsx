import Image from "next/image"
import Saly from '../../../../public/auth_image.png'
import Link from "next/link"
import LoginForm from "@/app/(auth)/login/loginForm"
import Logo from "@/app/components/auth/Logout"
const Login = () => {
    return (
        <div className="w-full h-screen grid lg:grid-rows-[50px_auto] grid-rows-[100px_auto] gap-y-[30px] ">
            <Logo />
            <div className="w-[80%] mx-auto grid lg:grid-cols-[60%_auto] lg:grid-rows-1 grid-rows-[max-content_auto] lg:gap-5 gap-10 h-full ">
                <div className="w-full h-max grid">
                    <div className="w-full h-max lg:relative lg:pt-[20%] ">
                        <div className="font-semibold lg:text-5xl md:text-4xl text-3xl select-none">Login to</div>
                        <div className="font-medium lg:text-2xl text-xl select-none mt-4">Project management tools is simple</div>
                        <div className="font-normal lg:text-lg text-base lg:mt-12 mt-5 select-none">If you do not have an account </div>
                        <div className="font-normal lg:text-lg text-base select-none mt-1">
                            You can
                            <Link href={'/signup'} className="text-[#4D47C3] font-semibold focus:outline-none cursor-pointer"> Sign up here !</Link>
                        </div>
                        <div className="hidden lg:grid absolute w-[25%] h-full top-[70%] right-[15%] place-items-end">
                            <Image src={Saly} alt="Saly" quality={100} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-max max-h-[430px] lg:h-full grid">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login