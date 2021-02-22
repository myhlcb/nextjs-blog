import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const gotoAbout = () => {
    router.push('/news')
  }
  return (
    <div>
      <div>Hello Next.js!</div>
      <div>
        <Link href='/about'>
          <a>关于</a>
        </Link>
      </div>
      <div>
        <button onClick={ gotoAbout}>新闻</button> 
      </div>
    </div>
  )
}
