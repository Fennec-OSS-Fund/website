import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="text-gray-500 dark:text-gray-400">Common questions about the Fennec OSS Fund</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who can apply for funding?</AccordionTrigger>
            <AccordionContent>
              Any developer or team based in Algeria working on an open-source software project can apply for funding.
              The project must be open-source with a recognized license (MIT, GPL, Apache, etc.) and demonstrate
              potential value to the community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much funding can I receive?</AccordionTrigger>
            <AccordionContent>
              The Fennec OSS Fund provides microgrants ranging from €100 to €500 per project. The exact amount depends
              on the project's scope, potential impact, and specific needs as outlined in your application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What can the funding be used for?</AccordionTrigger>
            <AccordionContent>
              The funding can be used for various project-related expenses, including but not limited to: server costs
              and infrastructure, development tools and software, learning resources, or compensating for your time
              spent on the project. We ask that you outline your intended use of funds in your application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How often can I apply?</AccordionTrigger>
            <AccordionContent>
              You can apply once per project every six months. If your application is rejected, you can apply again
              after three months with an improved proposal. We encourage iterative improvements to projects and
              applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What is the selection process?</AccordionTrigger>
            <AccordionContent>
              Applications are reviewed by our committee on a monthly basis. We evaluate projects based on technical
              merit, potential impact, innovation, and alignment with our mission to support the Algerian open-source
              ecosystem. Successful applicants will be notified via email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Are there any reporting requirements?</AccordionTrigger>
            <AccordionContent>
              Yes, we ask funded projects to provide a brief update three months after receiving funding. This should
              outline progress made, how the funds were used, and any challenges encountered. This helps us measure
              impact and improve our program.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Can I apply if my project is just starting?</AccordionTrigger>
            <AccordionContent>
              We welcome applications from projects at all stages of development, including early-stage ideas. For new
              projects, we'll be looking at the concept's potential, your technical plan, and your ability to execute on
              the idea.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How do I receive the funds if approved?</AccordionTrigger>
            <AccordionContent>
              We typically disburse funds via bank transfer or mobile money services available in Algeria. In some
              cases, we can also provide funding through digital payment platforms. The specific method will be
              discussed with successful applicants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can I apply for funding for multiple projects?</AccordionTrigger>
            <AccordionContent>
              Yes, you can apply for funding for different projects, but each project will be evaluated separately. We
              generally prefer to fund different developers to maximize our impact, but exceptional projects from the
              same developer may receive funding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>How can I support the Fennec OSS Fund?</AccordionTrigger>
            <AccordionContent>
              There are several ways to support our mission: you can donate to increase our funding capacity, volunteer
              to review applications, mentor funded projects, or help spread the word about our initiative. Contact us
              for more information on how to get involved.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

