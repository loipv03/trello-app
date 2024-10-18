import Logout from "@/app/components/Logout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies()

  const access_token = cookieStore.getAll()
  console.log(access_token);

  !access_token && redirect('/login')
  return (
    <div className="w-full grid justify-center mt-20">
      {access_token && <Logout />}
    </div>
  );
}
