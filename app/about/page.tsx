import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Fennec OSS Fund</h1>
          <p className="text-gray-500 dark:text-gray-400">Supporting open-source innovation in Algeria</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Fennec OSS Fund was established in 2023 with a simple mission: to support and nurture the open-source
            software ecosystem in Algeria. We believe that by providing small but meaningful financial support to
            developers and projects, we can help foster innovation, build technical skills, and create a vibrant
            community of open-source contributors.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to identify promising open-source projects created by Algerian developers and provide them
            with the financial support they need to grow. We focus on projects that demonstrate technical excellence,
            solve real problems, and have the potential for broader impact.
          </p>

          <h2>Why Microgrants?</h2>
          <p>
            We believe that even small amounts of funding (€100-500) can make a significant difference for developers
            who are passionate about their projects but may lack resources. These microgrants can help cover costs such
            as:
          </p>
          <ul>
            <li>Server and infrastructure expenses</li>
            <li>Development tools and software</li>
            <li>Learning resources</li>
            <li>Time to focus on development</li>
          </ul>

          <h2>Our Values</h2>
          <p>The Fennec OSS Fund operates according to these core values:</p>
          <ul>
            <li>
              <strong>Transparency:</strong> We are open about our selection process and funding decisions.
            </li>
            <li>
              <strong>Community:</strong> We believe in the power of community and collaboration.
            </li>
            <li>
              <strong>Innovation:</strong> We support creative solutions to real problems.
            </li>
            <li>
              <strong>Accessibility:</strong> We keep our application process simple and straightforward.
            </li>
            <li>
              <strong>Diversity:</strong> We actively seek to support developers from all backgrounds.
            </li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
              <CardDescription>The people behind Fennec OSS Fund</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our team consists of experienced developers, open-source enthusiasts, and community builders who are
                passionate about supporting the Algerian tech ecosystem. We volunteer our time to review applications,
                mentor grantees, and help build connections within the community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Partners</CardTitle>
              <CardDescription>Organizations that support our mission</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We collaborate with tech companies, educational institutions, and other organizations that share our
                commitment to open-source software and the development of technical talent in Algeria. If you're
                interested in becoming a partner, please contact us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

