import { Demonstration } from '@/components/Demonstration'
import { Header } from '@/components/Header'
import { Slogan } from '@/components/Slogan'
import { Videos } from '@/components/Videos'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col items-center'>
      <Header />
      <Slogan />
      <Videos />
      <Demonstration />
    </main>
  )
}
