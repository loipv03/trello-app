import Dashboard from '@/app/dashboard/page'
import { cookies } from 'next/headers'

const Home = async () => {
  const cookieStore = await cookies()

  console.log(cookieStore.getAll());

  return <div>
    <Dashboard />
  </div>
}

export default Home
