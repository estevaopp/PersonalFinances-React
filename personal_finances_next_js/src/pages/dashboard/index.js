import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Sidebar  from '../../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardPage() {
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