import '@/styles/globals.css'
import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { magic } from '@/lib/magic'
import Loading from '@/components/loading/loading'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isLoading, setIsLoading]= useState(true)


  useEffect(() => {
    const handleLogin = async () => {
      const isLoggedIn = await magic.user.isLoggedIn()
      if(isLoggedIn) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
    handleLogin()
  }, [])

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false)
    }
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  },[router])

  return isLoading ? <Loading /> : <Component {...pageProps} />
}
