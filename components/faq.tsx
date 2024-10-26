import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of reports can I upload?',
    answer: 'You can upload PDF files and images (JPG, PNG) of medical reports.',
  },
  {
    question: 'How does MediQuery ensure the privacy of my data?',
    answer: 'We use advanced encryption to ensure your data is secure, and your reports are never stored permanently.',
  },
  {
    question: 'What is Retrieval Augmented Generation (RAG)?',
    answer: 'RAG combines knowledge retrieval with generative AI to provide precise answers based on your reports.',
  },
  {
    question: 'How long does it take to analyze a report?',
    answer: 'Typically, it takes less than a minute to process and provide insights.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
