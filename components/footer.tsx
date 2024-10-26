const Footer = () => {
    return (
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 MediQuery. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;
  