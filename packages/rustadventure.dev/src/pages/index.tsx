import * as React from 'react'
import ConvertkitSubscribeForm from 'components/forms/convertkit'
import Link from 'next/link'
import Layout from 'layouts'
import LandingCopy from 'components/landing-copy.mdx'
import FerrisCodingAnimation from 'components/ferris-coding-animation'
import {FerrisOnCogwheel} from 'components/ferris'

export default function Home() {
  return (
    <Layout
      meta={{title: 'Learn to build reliable and efficient software in Rust'}}
    >
      <header className="-mx-page sm:-mt-page -mt-8 sm:pt-32 pt-16 sm:pb-24 pb-16 flex md:flex-row flex-col-reverse items-center justify-between lg:px-12 px-0">
        <div className="flex-shrink-0 md:pt-0 sm:pt-16 pt-10">
          <h1 className="sm:text-4xl text-3xl font-bold max-w-[16ch] sm:text-left text-center">
            Learn to build reliable and efficient software
            <div className="font-light text-brand-orange-600 text-3xl">
              in Rust
            </div>
          </h1>
        </div>
        <FerrisCodingAnimation />
      </header>
      <main>
        <article className="max-w-2xl mx-auto w-full prose sm:prose-lg">
          <LandingCopy />
        </article>
        <section id="subscribe" className="mt-10">
          <div className="max-w-sm mx-auto py-24">
            <div className="w-24 mx-auto pb-5">
              <FerrisOnCogwheel />
            </div>
            <h2 className="text-center text-4xl font-bold pb-8">
              Jump in, we're going to learn Rust!
            </h2>
            <ConvertkitSubscribeForm />
          </div>
        </section>
      </main>
    </Layout>
  )
}
