import ActionIcons from "@/app/components/header/ActionIcons"
import Logo from "@/app/components/header/Logo"
import Nav from "@/app/components/header/Nav"
import SearchInput from "@/app/components/header/SearchInput"

const Header = () => {
    return (
        <div className='w-full h-[48px] max-h-[50px] flex gap-3 p-2 border border-transparent border-b-slate-200 '>
            <Logo />
            <Nav />
            <div className="w-full flex gap-x-3 justify-end">
                <SearchInput className="hidden sm:flex w-full h-full gap-x-3 justify-end" />
                <ActionIcons />
            </div>
        </div>
    )
}

export default Header