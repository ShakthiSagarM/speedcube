import Head from 'next/head';
import SpeedCube from '@/components/SpeedCube/SpeedCube.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedCube</title>
      </Head>
      <SpeedCube/>
    </>
  );
}
