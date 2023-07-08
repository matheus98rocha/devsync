import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">Nos não encontramos essa página.</p>

        <Link href={'/'}>
          <p className="inline-block px-5 py-3 mt-6 text-sm font-medium text-contrastBackground bg-primary rounded hover:bg-primaryFocus focus:outline-none focus:ring">
            Go Back Home
          </p>
        </Link>
      </div>
    </div>
  )
}
