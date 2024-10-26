import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-blue-500 to-blue-300 text-white">
      <h1 className="text-4xl font-bold mb-4">Analyze Medical Reports with AI-Powered Insights</h1>
      <p className="mb-8 text-lg">
        Upload PDFs or Images and get personalized insights using cutting-edge AI.
      </p>
      <div>
        <Button className="mr-4" variant="default">
          Upload Your Report
        </Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  );
}

export default Hero;