import { cn } from "@/lib/utils";

interface IPropsSidebarHeader {
    className?: string,
    children?: React.ReactNode;
}

const SidebarHeader = ({ className, children }: IPropsSidebarHeader) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

export default SidebarHeader