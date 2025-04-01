import Link from "next/link"
import { ArrowRight, Code2, Landmark, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Fennec OSS Fund
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Supporting open-source software development in Algeria with €100-500 microgrants
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/apply">
                <Button className="bg-green-600 hover:bg-green-700">
                  Apply for Funding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Code2 className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Open Source Focus</CardTitle>
                <CardDescription>Supporting projects that contribute to the open source ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We fund projects that are open source and accessible to the community, promoting collaboration and
                  knowledge sharing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Landmark className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Microgrants</CardTitle>
                <CardDescription>€100-500 grants to kickstart or sustain your project</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our microgrants provide just enough funding to help developers focus on their projects without
                  bureaucratic overhead.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Algerian Innovation</CardTitle>
                <CardDescription>Empowering Algerian developers to showcase their talents</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We believe in the potential of Algerian developers to create impactful open source solutions for local
                  and global challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Funded Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover some of the innovative open source projects we've supported
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project cards will be dynamically loaded from Firebase */}
            <ProjectCard
              title="AlgDev Tools"
              description="A collection of development tools tailored for Algerian developers"
              github="https://github.com/example/algdev-tools"
              developer="Amina Benali"
            />
            <ProjectCard
              title="Sahara DB"
              description="A lightweight database solution optimized for low-resource environments"
              github="https://github.com/example/sahara-db"
              developer="Karim Hadj"
            />
            <ProjectCard
              title="Atlas Localization"
              description="Localization library with support for Algerian dialects and Tamazight"
              github="https://github.com/example/atlas-localization"
              developer="Yacine Merzouk"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Apply?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Submit your open source project for consideration and join our growing community of Algerian developers
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/apply">
                <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, github, developer }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>By {developer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            View on GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

