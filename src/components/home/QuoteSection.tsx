import { LucideQuote, Quote, QuoteIcon, TextQuote, TextQuoteIcon } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-16 bg-portfolio-light-bg">
      <div className="container max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <LucideQuote size={48} className="text-portfolio-blue" />
          </div>
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic font-bold">
              "I believe that elegant code and robust security are not mutually exclusive. My mission is to build digital experiences that are both beautiful and secure."
            </p>
            <footer className="mt-4 text-portfolio-blue font-medium">
              — Mahros AL-Qabasy
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
