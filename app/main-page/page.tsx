import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Logo and Title */}
      <section className="w-full py-12 md:py-10 lg:py-10 bg-gradient-to-b from-white to-green-50 dark:from-green-950 dark:to-white">
        <div className="max-w-4xl px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center  space-y-5 text-left">
            <div className="flex items-center space-x-10 ">
            <Image 
                src="/fennecossfund-logo02.png" 
                alt="Fennec OSS Fund Logo" 
                width={400} 
                height={100} 
              />
            </div>
            {/* Description */}
            <div className="space-y-5">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
                <strong>Fennec OSS Fund </strong> 
                 supports passionate Algerian developers working on Open-Source projects by offering $100–500 microgrants.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
                Contributing to an Open-Source project and in need of funding?{" "}
                <Link
                  href="/apply"
                  className="underline text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-white transition-colors"
                >
                    Apply now
                </Link>  
                , and we'll get back to you via email if it's a good fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container max-w-4xl px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center  space-y-5 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-left w-full">
              How to apply?
            </h2>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">1. Submit {" "}
                <Link
                  href="/apply"
                  className="underline text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-white transition-colors"
                >
                  the form
                </Link>   with the issue of the open-source project you will work on and the funding amount.</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">2. Application reviewed then approved.</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">3. Start hacking.</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">4. Share your commit link and a payment request.</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">5. Submission reviewed, then you get paid. </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">6. Repeat. </p>
          </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="w-full py-12 md:py-5 pb-20 mb-16 bg-white">
        <div className="container max-w-4xl px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center  space-y-5 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-left w-full">
              Selection Criteria
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"> • The issue should be part of a fully open-source project available in GitHub, GitLab or any other Git registry.</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"> • The contribution should be valuable ( not an edit to a readme.md file ).</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"> • The developer should be Algerian ( that's the current scope of the grant, it could grow in the future ).</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"> • The work should be submitted within 2 months after approval.</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
