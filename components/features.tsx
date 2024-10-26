import { Card } from '@/components/ui/card';

type Props = {};

const features = [
  {
    title: 'Upload Medical Reports',
    description: 'Easily upload PDFs or images of medical reports and extract key data using AI.',
  },
  {
    title: 'Ask Questions About Your Report',
    description: 'Get insights and recommendations by querying a powerful knowledge base.',
  },
  {
    title: 'Advanced AI Technology',
    description: 'Powered by Google Gemini, Pinecone, and Vercel AI SDK.',
  },
];

const Features = (props: Props) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose MediQuery?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Features;
