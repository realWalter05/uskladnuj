import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uskladnuj</title>
        <meta name="description" content="Uskladnuj - správa skladů" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='p-5'>
        <h2 className='display-4 text-center'>Uskladnuj</h2>
      </main>
    </>
  )
}
