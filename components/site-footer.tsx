import Link from "next/link"
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        
        {/* Left Side: Logo + Text */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image 
            src="/fennecossfund-logo02.png" 
            alt="Fennec OSS Fund Logo" 
            width={30} 
            height={30} 
          />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Fennec OSS Fund. All rights reserved.
          </p>
        </div>

        {/* Right Side: Contact Info + Icons */}
        <div className="flex flex-col items-center md:flex-row md:space-x-6 space-y-2 md:space-y-0">

          <div className="flex items-center space-x-4">
            <Link href="mailto:contact@fennecossfund.org">
              <Image 
                src="/icons/mail.svg" 
                alt="Email" 
                width={25} 
                height={25} 
                className="hover:opacity-80"
              />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/x.svg" 
                alt="Twitter" 
                width={25} 
                height={25} 
                className="hover:opacity-80"
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/github.svg" 
                alt="GitHub" 
                width={25} 
                height={25} 
                className="hover:opacity-80"
              />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/company/fennec-oss-fund/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/linkedin.svg" 
                alt="LinkedIn" 
                width={25} 
                height={25} 
                className="hover:opacity-80"
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
