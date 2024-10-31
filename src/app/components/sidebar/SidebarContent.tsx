import { cn } from "@/lib/utils";

interface IPropsSidebarContent {
    className?: string,
    children?: React.ReactNode;
}

const SidebarContent = ({ className, children }: IPropsSidebarContent) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

export default SidebarContent