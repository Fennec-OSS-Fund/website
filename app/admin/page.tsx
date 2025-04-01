"use client"

import { useState } from "react"
import { Check, Clock, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This would normally be fetched from Firebase
const applications = [
  {
    id: "app-1",
    name: "Tarek Boudali",
    email: "tarek@example.com",
    projectName: "DZ Maps",
    projectUrl: "https://github.com/example/dz-maps",
    description: "An open-source mapping library with detailed data for Algerian cities and regions",
    amount: 300,
    status: "pending",
    submittedAt: "2024-03-15T10:30:00Z",
  },
  {
    id: "app-2",
    name: "Nadia Hamidi",
    email: "nadia@example.com",
    projectName: "Algerian Recipe API",
    projectUrl: "https://github.com/example/algerian-recipes",
    description: "An API providing access to traditional Algerian recipes and cooking techniques",
    amount: 200,
    status: "pending",
    submittedAt: "2024-03-14T14:45:00Z",
  },
  {
    id: "app-3",
    name: "Mehdi Kaci",
    email: "mehdi@example.com",
    projectName: "DZ Dev Community",
    projectUrl: "https://github.com/example/dz-dev-community",
    description: "A platform connecting Algerian developers and showcasing their projects",
    amount: 500,
    status: "approved",
    submittedAt: "2024-03-10T09:15:00Z",
  },
  {
    id: "app-4",
    name: "Samira Benali",
    email: "samira@example.com",
    projectName: "Tamazight Fonts",
    projectUrl: "https://github.com/example/tamazight-fonts",
    description: "A collection of open-source fonts for Tamazight script",
    amount: 250,
    status: "approved",
    submittedAt: "2024-03-08T11:20:00Z",
  },
  {
    id: "app-5",
    name: "Karim Hadj",
    email: "karim@example.com",
    projectName: "Algerian Tech Podcast",
    projectUrl: "https://github.com/example/alg-tech-podcast",
    description: "An open-source podcast platform focusing on Algerian tech news and interviews",
    amount: 400,
    status: "rejected",
    submittedAt: "2024-03-05T16:10:00Z",
  },
]

export default function AdminPage() {
  const [applicationData, setApplicationData] = useState(applications)

  const pendingApplications = applicationData.filter((app) => app.status === "pending")
  const approvedApplications = applicationData.filter((app) => app.status === "approved")
  const rejectedApplications = applicationData.filter((app) => app.status === "rejected")

  const updateStatus = (id: string, status: "approved" | "rejected") => {
    setApplicationData((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))
  }

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admin Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage grant applications and fund operations</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApplications.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Applications</CardTitle>
              <Check className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedApplications.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Funds Allocated</CardTitle>
              <div className="text-muted-foreground">€</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedApplications.reduce((sum, app) => sum + app.amount, 0)}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Applications</CardTitle>
                <CardDescription>Review and process new grant applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          <div className="font-medium">{app.name}</div>
                          <div className="text-sm text-muted-foreground">{app.email}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{app.projectName}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">{app.description}</div>
                        </TableCell>
                        <TableCell>€{app.amount}</TableCell>
                        <TableCell>{new Date(app.submittedAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-green-600"
                              onClick={() => updateStatus(app.id, "approved")}
                            >
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Approve</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-600"
                              onClick={() => updateStatus(app.id, "rejected")}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Reject</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pendingApplications.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          No pending applications
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Approved Applications</CardTitle>
                <CardDescription>Applications that have been approved for funding</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approvedApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          <div className="font-medium">{app.name}</div>
                          <div className="text-sm text-muted-foreground">{app.email}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{app.projectName}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">{app.description}</div>
                        </TableCell>
                        <TableCell>€{app.amount}</TableCell>
                        <TableCell>{new Date(app.submittedAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-600">Approved</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    {approvedApplications.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          No approved applications
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Applications</CardTitle>
                <CardDescription>Applications that were not selected for funding</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rejectedApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          <div className="font-medium">{app.name}</div>
                          <div className="text-sm text-muted-foreground">{app.email}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{app.projectName}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">{app.description}</div>
                        </TableCell>
                        <TableCell>€{app.amount}</TableCell>
                        <TableCell>{new Date(app.submittedAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-red-600 border-red-600">
                            Rejected
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    {rejectedApplications.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          No rejected applications
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

