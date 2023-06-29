import { Header } from '@/components/Header'
import { Slogan } from '@/components/Slogan'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col items-center'>
      <Header />
      <Slogan />
    </main>
  )
}
