import { cn } from "@/lib/utils";

interface IPropsSidebarFooter {
    className?: string,
    children?: React.ReactNode;
}

const SidebarFooter = ({ className, children }: IPropsSidebarFooter) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

export default SidebarFooter