import Head from 'next/head';
import ProductPages from './product';
import 'tailwindcss/tailwind.css';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <ProductPages/>

      </main>
    </div>
  );
}
