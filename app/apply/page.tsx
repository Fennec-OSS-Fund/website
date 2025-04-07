"use client"
import Link from "next/link"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  issueUrl: z.string().min(2, {
    message: "Please enter a valid URL.",
  }),
  GitHubUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  Description: z.string().min(50, {
    message: "Description must be at least 30 characters.",
  }),
  fundingAmount: z.enum(["100", "200", "300", "400", "500"], {
    message: "Please select a funding amount.",
  }),
  fundingPurpose: z.string().min(50, {
    message: "Please describe how you'll use the funds in at least 50 characters.",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
})

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      issueUrl: "",
      GitHubUrl: "",
      Description: "",
      fundingPurpose: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would integrate with Firebase to store the application
    console.log(values)

    // For now, just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="container py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-center">Application Submitted!</CardTitle>
            <CardDescription className="text-center">Thank you for applying to the Fennec OSS Fund</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-6">
              We've received your application and will review it shortly. You'll receive an email with updates on your
              application status.
            </p>
            <div className="flex justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fennec OSS Fund</h1>
          <p className="text-gray-500 dark:text-gray-400">Submit the open-source project you would like to contribute to and information about the issue you will be working on.
          {" "}
                <Link
                  href="/main-page"
                  className="underline text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-white transition-colors"
                >
                    Application process and criteria
                </Link> 
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl>
                          <Input  {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="GitHubUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Profile URL</FormLabel>
                        <FormControl>
                          <Input  {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                                    <FormField
                    control={form.control}
                    name="issueUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue URL</FormLabel>
                        <FormControl>
                          <Input  {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the issue you want to work on, what you will be doing, how long it will take to finish and the starting date."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4 pb-10 ">
                  <FormField
                    control={form.control}
                    name="fundingAmount"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Requested Amount (€)</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-wrap gap-4"
                          >
                            {[100, 200, 300, 400, 500].map((amount) => (
                              <FormItem key={amount} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={amount.toString()} />
                                </FormControl>
                                <FormLabel className="font-normal">€{amount}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

