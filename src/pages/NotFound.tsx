
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-6">
            <div className="inline-block p-6 rounded-full border-2 border-dashed border-blue-300 bg-blue-50 mb-4">
              <h1 className="text-6xl font-bold text-portfolio-blue">404</h1>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-portfolio-blue hover:bg-blue-700">
              <Link to="/">Go Back Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="mt-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the portfolio (coming soon)"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-400"
                readOnly
                disabled
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default NotFound;
