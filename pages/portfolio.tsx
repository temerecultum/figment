// import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head"
// import Socials from "../utils/Socials"
// import { Lanyard } from '../utils/lanyard'
import Card from "../components/Card"
// import Projects from '../utils/projects'
// @ts-ignore
import 'tailwindcss/tailwind.css'
import card from '../styles/card.module.sass'
// @ts-ignore
import p from "../data/projects.yml"

type Project = {
    src: string,
    title: string
    link: string
    subtitle: string
    tags: string[]
}

const IndexPage = () => (
    <>

        <Head>
            <title>Portfolio | TemereCultum</title>
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:title" content="Portfolio | TemereCultum" />
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
        <body className="cae-bgblur">
            <div className="min-h-screen">
                <div className={card.nav}>
                    <h1>
                        <Link href="/">
                            <a>
                                {"<"}- Back
                            </a>
                        </Link>
                    </h1>
                </div>
                <div className="lg:flex lg:flex-wrap justify-center sm:flex">
                    {[...p].map((element: Project, index) => {

                        return (
                            <Card link={element.link} src={element.src} title={element.title} subtitle={element.subtitle} key={index} />
                        )
                    })})
                </div>


                {/* <Lanyard /> */}
            </div>
        </body>



    </>
)

export default IndexPage

