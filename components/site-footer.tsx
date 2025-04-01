import Link from "next/link"
import { RabbitIcon as Fox, Github, Mail, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Fox className="h-5 w-5 text-green-600" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Fennec OSS Fund. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="mailto:contact@fennecossfund.org">
            <Mail className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

