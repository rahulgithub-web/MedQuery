"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-orange-600">MediQuery</div>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#about" className="text-gray-700">About Us</a>
          <a href="#features" className="text-gray-700">Features</a>
          <a href="#solutions" className="text-gray-700">Solutions</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
        </nav>
        <Button onClick={() => router.push("/contact")} variant="default">
          Contact Us
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20">
        <motion.img
          src="/background.svg"
          alt="AI Assistant"
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-5xl font-bold mt-8 text-gray-800">
          AI-Powered Assistant
        </h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl">
          Welcome to MediQuery - Your intelligent medical assistant that helps you manage, analyze, and make informed decisions with ease.
        </p>
        <Button onClick={handleGetStartedClick} className="mt-8" variant="default">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Trusted by Thousands, Delivering Excellence in Healthcare</h2>
          <p className="text-lg text-gray-600 mb-12">
            MediQuery is dedicated to transforming the medical landscape with cutting-edge AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Innovative AI Solutions" description="Our innovative AI solutions help you enhance productivity." icon="/icon-path-1.png" />
            <FeatureCard title="Health Insight" description="Get personalized insights and recommendations." icon="/icon-path-2.png" />
            <FeatureCard title="Connect with Everyone" description="Easily connect with medical professionals and services." icon="/icon-path-3.png" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose the Plan That Perfectly Matches Yours</h2>
          <div className="flex justify-center mb-6 space-x-4">
            <Button variant="outline">Monthly Billing</Button>
            <Button variant="default">Annual Billing</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard title="Basic Plan" price="$12/month" features={["Feature 1", "Feature 2", "Feature 3"]} />
            <PricingCard title="Essential Plan" price="$20/month" features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]} />
            <PricingCard title="Ultimate Plan" price="$49/month" features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Experience the Future of Healthcare</h2>
          <p className="mt-4">Join thousands of users who trust MediQuery for intelligent healthcare solutions.</p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300"
            />
            <Button variant="default" className="rounded-r-md">
              Start Now
            </Button>
          </div>
          <p className="mt-8">&copy; 2024 MediQuery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string; // URL or path to the icon image
  }
  
  function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  interface PricingCardProps {
    title: string;
    price: string; // e.g., "$12/month"
    features: string[]; // List of features for the plan
  }
  
  function PricingCard({ title, price, features }: PricingCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-2xl font-bold mb-4">{price}</p>
        <ul className="text-gray-600 space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button variant="default">Choose Plan</Button>
      </div>
    );
  }
  
