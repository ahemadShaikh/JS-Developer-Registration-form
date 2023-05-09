import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Login App" />
      </Head>

      <main id='login-app-main-body'>

        {/* Landing Screen */}
        <LandingPage />  

        {/* Login Screen */}
        {/* <LoginPage /> */}

        {/* Signup Screen */}
        {/* <SignupPage /> */}

        {/* Profile */}
        {/* <ProfilePage /> */}


      </main>

    </div>
  )
}

