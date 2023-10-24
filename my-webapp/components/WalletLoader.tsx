import {ReactNode} from 'react'
import {useSigningClient} from 'contexts/client'
import Loader from './Loader'

function WalletLoader({
                        children,
                        loading = false,
                      }: {
  children: ReactNode
  loading?: boolean
}) {
  const {
    walletAddress,
    loading: clientLoading,
    error,
    connectWallet,
  } = useSigningClient()

  if (loading || clientLoading) {
    return (
      <div className="justify-center">
        <Loader/>
      </div>
    )
  }

  if (walletAddress === '') {
    return (
      <div className="max-w-full">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="link link-primary link-hover" href="#">
            dmusic
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started with{' '}
          <a
            className="pl-1 link link-primary link-hover"
            href="#"
          >
            Decentralized music
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-around md:max-w-4xl mt-6 sm:w-full">
          <button
            className="p-6 mt-6 text-left border border-secondary hover:border-primary w-96 rounded-xl hover:text-primary focus:text-primary-focus"
            onClick={connectWallet}
          >
            <h3 className="text-2xl font-bold">Connect your wallet</h3>

          </button>
        </div>
      </div>
    )
  }

  if (error) {
    return <code>{JSON.stringify(error)}</code>
  }

  return <>{children}</>
}

export default WalletLoader
