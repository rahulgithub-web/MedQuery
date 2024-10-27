"use client"

// pages/index.tsx
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LandingPage = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="bg-white text-gray-800 p-5 shadow-md flex justify-between items-center">
        <h1 className="font-semibold text-xl cursor-pointer text-accent" onClick={() => router.push('/')}>
          MediQuery
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-4"
        >
          <h2 className="text-4xl text-gray-800 font-bold mb-5">Empower Your Health Decisions</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover insights and manage your medical history with cutting-edge AI technology.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            onClick={navigateToDashboard}
          >
            Try Now
          </button>
        </motion.div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>Join thousands of users who trust MediQuery for their healthcare management.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
