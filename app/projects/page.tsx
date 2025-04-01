import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would normally be fetched from Firebase
const projects = [
  {
    id: "1",
    name: "AlgDev Tools",
    description:
      "A collection of development tools tailored for Algerian developers, including localization utilities, payment gateway integrations, and address formatting helpers.",
    developer: "Amina Benali",
    github: "https://github.com/example/algdev-tools",
    website: "https://algdev-tools.example.com",
    amount: 300,
    date: "2023-11-15",
    tags: ["utilities", "localization", "payments"],
  },
  {
    id: "2",
    name: "Sahara DB",
    description:
      "A lightweight database solution optimized for low-resource environments, with special focus on offline-first capabilities and data synchronization.",
    developer: "Karim Hadj",
    github: "https://github.com/example/sahara-db",
    website: "https://saharadb.example.com",
    amount: 500,
    date: "2023-10-22",
    tags: ["database", "offline-first", "sync"],
  },
  {
    id: "3",
    name: "Atlas Localization",
    description:
      "Localization library with support for Algerian dialects and Tamazight, making it easier for developers to create applications that are accessible to all Algerians.",
    developer: "Yacine Merzouk",
    github: "https://github.com/example/atlas-localization",
    website: null,
    amount: 200,
    date: "2023-12-05",
    tags: ["localization", "i18n", "accessibility"],
  },
  {
    id: "4",
    name: "DZ Open Data",
    description:
      "An open-source API and dataset collection focused on Algerian public data, making government information more accessible to developers and researchers.",
    developer: "Leila Brahimi",
    github: "https://github.com/example/dz-open-data",
    website: "https://dzopendata.example.com",
    amount: 400,
    date: "2024-01-10",
    tags: ["data", "api", "government"],
  },
  {
    id: "5",
    name: "Maghreb UI",
    description:
      "A React component library inspired by North African design patterns and aesthetics, providing a unique and culturally relevant UI toolkit.",
    developer: "Omar Bensouda",
    github: "https://github.com/example/maghreb-ui",
    website: "https://maghreb-ui.example.com",
    amount: 350,
    date: "2024-02-18",
    tags: ["ui", "components", "design-system"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Funded Projects</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
            Discover the innovative open-source projects we've supported through the Fennec OSS Fund
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>By {project.developer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 border-t pt-4">
                <div className="text-sm text-muted-foreground">
                  Funded: €{project.amount} on {new Date(project.date).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  {project.website && (
                    <Link href={project.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

