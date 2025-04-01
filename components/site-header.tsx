import Link from "next/link"
import { RabbitIcon as Fox } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          <Fox className="h-6 w-6 text-green-600" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Fennec OSS Fund</span>
          </Link>
        </div>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Link href="/apply">
              <Button className="bg-green-600 hover:bg-green-700">Apply</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

