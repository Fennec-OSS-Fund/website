import { Check, Info } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CriteriaPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Selection Criteria</h1>
          <p className="text-gray-500 dark:text-gray-400">How we evaluate applications for the Fennec OSS Fund</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Fennec OSS Fund aims to support open-source projects that demonstrate technical merit, potential impact,
            and alignment with our mission to foster the open-source ecosystem in Algeria. Our selection process is
            designed to be transparent and fair, with all applications evaluated against the same criteria.
          </p>

          <h2>Eligibility Requirements</h2>
          <p>Before applying, please ensure your project meets these basic requirements:</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                Project Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Your project must:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be open-source with a recognized license (MIT, GPL, Apache, etc.)</li>
                <li>Have a public repository (GitHub, GitLab, etc.)</li>
                <li>Be developed by an individual or team based in Algeria</li>
                <li>Demonstrate a clear purpose and potential value</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                Application Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Your application must:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clearly describe the project's purpose and goals</li>
                <li>Explain how the funding will be used</li>
                <li>Provide links to the project repository and any demos</li>
                <li>Include contact information for the project lead</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important Note</AlertTitle>
          <AlertDescription>
            Projects at any stage of development are welcome to apply, from early-stage concepts to established projects
            seeking support for new features or maintenance.
          </AlertDescription>
        </Alert>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Evaluation Criteria</h2>
          <p>Applications are evaluated based on the following criteria, with each category weighted as indicated:</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Criteria</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Weight</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Technical Merit</TableCell>
              <TableCell>Code quality, architecture, and technical approach</TableCell>
              <TableCell className="text-right">25%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Innovation & Originality</TableCell>
              <TableCell>Uniqueness of the solution and creative approach to problem-solving</TableCell>
              <TableCell className="text-right">20%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Potential Impact</TableCell>
              <TableCell>Potential benefit to users, developers, or the broader community</TableCell>
              <TableCell className="text-right">20%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feasibility</TableCell>
              <TableCell>Likelihood of successful implementation and sustainability</TableCell>
              <TableCell className="text-right">15%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Team Capability</TableCell>
              <TableCell>Skills, experience, and commitment of the development team</TableCell>
              <TableCell className="text-right">10%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Community Engagement</TableCell>
              <TableCell>Efforts to build a community around the project and engage with users</TableCell>
              <TableCell className="text-right">10%</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Selection Process</h2>
          <p>Our selection process consists of the following steps:</p>
          <ol>
            <li>
              <strong>Initial Screening:</strong> Applications are reviewed to ensure they meet basic eligibility
              requirements.
            </li>
            <li>
              <strong>Technical Review:</strong> Projects that pass the initial screening are evaluated by our technical
              committee based on the criteria above.
            </li>
            <li>
              <strong>Final Selection:</strong> The highest-scoring projects are selected for funding, subject to
              available resources.
            </li>
            <li>
              <strong>Notification:</strong> All applicants are notified of the decision, with feedback provided to
              unsuccessful applicants.
            </li>
          </ol>

          <h2>Funding Disbursement</h2>
          <p>Successful applicants will receive funding as follows:</p>
          <ul>
            <li>Funds are typically disbursed within 2-3 weeks of approval</li>
            <li>Payment is made via bank transfer or mobile money services</li>
            <li>Recipients must provide a brief report on how the funds were used within 3 months</li>
          </ul>

          <h2>Reapplication</h2>
          <p>
            If your application is not successful, you are welcome to reapply after addressing any feedback provided.
            Unsuccessful applicants can reapply after a 3-month waiting period, while successful applicants can apply
            for additional funding for the same project after 6 months, subject to demonstrating progress and continued
            need.
          </p>
        </div>
      </div>
    </div>
  )
}

