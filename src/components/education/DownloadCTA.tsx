
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Learning Portfolio</h2>
          <p className="text-gray-600 mb-8">
            Download a comprehensive package containing all my certificates, academic 
            achievements, and learning milestones in one convenient file.
          </p>
          <Button className="bg-portfolio-blue hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download All Certificates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
