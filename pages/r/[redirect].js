import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function Redirect() {
    const router = useRouter()
    const { redirect } = router.query
    
    useEffect(() => {
        redirecting()
    }, [])

    const redirecting = async () => {
        const url = `${process.env.NEXT_PUBLIC_FUNCTIONS_ENDPOINT}/q/${redirect}`
        console.log(url)
        const res = await fetch(url)
        const response = await res.json()
        document.location.replace(response.token)
    }
    return (
        <>
            Redirecting
        </>
    )
}

export async function getServerSideProps(context) {
    return {
      props: {},
    }
  }