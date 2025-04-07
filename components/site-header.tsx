import Link from "next/link"
import { RabbitIcon as Fox } from "lucide-react"
import Image from 'next/image';
import Logo from "/fennecossfund-logo.svg"

import { Button } from "@/components/ui/button"
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container max-w-4xl px-4 md:px-6 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="fennecossfund-logo.png" 
              alt="Fennec OSS Fund Logo" 
              width={24} 
              height={24} 
              className="h-6 w-6" 
            />
            <span className="inline-block font-bold">Fennec OSS Fund</span>
          </Link>
        </div>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link href="/apply">
            <Button>Apply</Button>
          </Link>
        </nav>
      </div>
    </div>
    </header>
  )
}

