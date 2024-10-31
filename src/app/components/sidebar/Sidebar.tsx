import { cn } from "@/lib/utils";

interface IPropsSidebar {
    className?: string,
    children?: React.ReactNode;
}


export default function Sidebar({ className, children }: IPropsSidebar) {
    return (
        <div className={cn("w-[250px] h-full border", className)}>
            {children}
        </div >
    )
}
