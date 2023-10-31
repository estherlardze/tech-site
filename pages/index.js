import Head from 'next/head'
import {HomeHero, Clients, AboutSection} from '../components/links'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Tech site
        </title>
      
      </Head>

      <main>
        <Hero /> 
        <Clients/>  
        <AboutSection/>
      </main>
    </div>
  );
}
