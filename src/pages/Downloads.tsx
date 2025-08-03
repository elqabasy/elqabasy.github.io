
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import DownloadCard, { DownloadResource } from "@/components/downloads/DownloadCard";
import { downloadResources } from "@/data/downloads";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] = useState<DownloadResource[]>(downloadResources);
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories for filtering
  const categories = [
    { id: "all", label: "All" },
    { id: "resume", label: "resume / CV" },
    { id: "cheatsheet", label: "Cheat Sheets" },
    { id: "templates", label: "Templates" },
    { id: "api", label: "API Resources" },
  ];

  // Filter resources based on search term and active category
  useEffect(() => {
    let result = downloadResources;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(item =>
        item.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(lowerSearchTerm) ||
        item.description.toLowerCase().includes(lowerSearchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }

    setFilteredResources(result);
  }, [searchTerm, activeCategory]);

  return (
    <>
      <Header />
      <div className="container py-10 animate-fade-in">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Downloads</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access Mahros AL-Qabasy's latest resume, curated cheat sheets, and public
            API/JSON resources — all in one place for your learning and professional needs.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                  ? "bg-portfolio-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <DownloadCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-gray-500">No resources found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Downloads;
