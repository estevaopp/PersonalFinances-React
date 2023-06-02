import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Sidebar  from '../../components/Sidebar'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardPage() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get("/User/me").then((response) => {
      setPost(response.data);

      console.log(response.data)
    });
  }, []);


  return (
    <main
      className={`flex`}
    >
      <div>
        <Sidebar/>
      </div>
      <div><h1>OOOOOOOOOOOI</h1></div>
    </main>
  )
}