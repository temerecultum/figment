import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head"
import Socials from "../utils/Socials"
import { Lanyard } from '../utils/lanyard'

const IndexPage = () => (
  <>

    <Head>
      <title>Lio</title>
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="Lio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://teme.re" />
      {/* <script async defer data-website-id="94288e75-da3b-48a9-abb9-e878fe8c4028" src="https://stats.himbo.cat/umami.js"></script> */}
      <meta property="og:description" content="Developer / Graphic Designer / Artist" />
      <meta property="og:image" content="/assets/caecus.png" />

      <meta name="theme-color" content="#EE1B22" />

      <meta name="description" content="Developer / Graphic Designer / Artist" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/assets/caecus.png" />
      <meta name="twitter:creator" content="@temerecultum" />
    </Head>
    <div>
      <div className="font-sans  min-h-screen flex justify-center items-center text-center relative">
        <article className="p-11 mix-blend-difference bg-red-600 flex flex-wrap md:flex-nowrap shadow-2xl mx-auto justify-center items-center text-left rounded-none relative">

          <Image height={156 / 1.5} width={110 / 1.5} src="/assets/caecus.png" alt="Caecus Logo" className="md:w-1/3 pb-1" />
          <div className="ml-8 p-1">
            <p className="text-white mt-2 font-semibold">
              Joshua
            </p>
            <p className="text-white mt-2 font-semibold">
              Developer / Graphic Designer / Artist
            </p>
            <div className="flex text-white justify-start">
              <ul className="flex mt-3">
                {Socials.map((social, index) => {
                  return (
                    <li className="mr-5" key={index}>
                      <Link href={`${social.string}`}>
                        <a>{social.icon}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <p className="font-sans text-white mt-4 font-bold justify-start">
                <Link href="/portfolio">
                  <a >Portfolio</a>
                </Link>
              </p>
            </div>
          </div>
        </article>
        <div className="font-sans text-white font-thin italic absolute text-left p-1" style={{
          position: "absolute",
          top: "0",
          left: "0",
        }}>

          <Lanyard />
        </div>
      </div>
    </div>


  </>
)

export default IndexPage

// {/* <div className="bg-gradient-to-r from-pink-300 to-pink-400  rounded-lg shadow-2xl md:flex"> */}
// {/* <Link href="mailto:puma@himbo.cat">Email</Link> */}
// {/* <Image width={256 / 2} height={96 / 2} src="/assets/logo.png" alt="Kusaki Avatar" className=" items-center md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
// {/* <Image width={476 / 2} height={476 / 2} src="/assets/kitty.jpg" alt="Kusaki Avatar" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" /> */} */}
