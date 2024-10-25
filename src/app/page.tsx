import Logout from "@/app/components/auth/Logout";
import { cookies } from "next/headers";

const Home = () => {
  const cookieStore = cookies()

  const token = cookieStore.getAll()

  console.log(token);


  return (
    <div className="w-full grid justify-center mt-20">
      <Logout />
    </div>
  );
}

export default Home
