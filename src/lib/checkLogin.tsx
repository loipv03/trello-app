import { useLazyCheckLoginQuery } from "@/redux/api/auth";
import { usePathname, useRouter } from "next/navigation";
import { ComponentType, FC, PropsWithChildren, useEffect, useState } from "react";

export default function checkLogin<P extends object>(WrappedComponent: ComponentType<P>): FC<PropsWithChildren<P>> {
    const LoginState = (props: P) => {
        const [isLogin, setIsLogin] = useState<boolean>(false);

        const router = useRouter();
        const pathName = usePathname();

        const [checkLoginApi] = useLazyCheckLoginQuery();

        const isPublicPage = (path: string) =>
            path.startsWith('/login') || path.startsWith('/signup') || path.startsWith('/activate');

        useEffect(() => {
            const callApiCheckLogin = async () => {
                try {
                    const result = await checkLoginApi().unwrap();

                    if (result.message === 'ok') {
                        if (isPublicPage(pathName)) {
                            router.push('/');
                        } else {
                            setIsLogin(true);
                        }
                    } else {
                        if (!isPublicPage(pathName)) {
                            throw new Error('Not logged in');
                        }
                        setIsLogin(true);
                    }
                } catch {
                    if (isPublicPage(pathName)) {
                        setIsLogin(true);
                    } else {
                        router.push('/login');
                    }
                }
            };

            callApiCheckLogin();
        }, [checkLoginApi, pathName, router]);

        if (!isLogin) {
            return (
                <div />
            )
        }

        return <WrappedComponent {...props} />;
    };

    return LoginState;
}
