import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { GetServerSideProps } from 'next'
import { getAPIClient } from '@/services/axios' 
import { parseCookies } from 'nookies'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardPage(props) {

  const [post, setPost] = useState(null);

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


export async function getServerSideProps(ctx){
  var apiClient = getAPIClient(ctx);

  const data = 'token = true';

  const { 'personalfinances.token': token } = parseCookies(ctx);

  if(!token)
  {
    const data = 'token = false';
    console.log(data);
    return {
      redirect: {
        destination: '/account/login',
        permanent: false
      }
    };
  }
  
  console.log(data);

  return {
    redirect: {
      destination: '/dashboard',
      permanent: true
    }
  }
}