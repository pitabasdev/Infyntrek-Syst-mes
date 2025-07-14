import { Badge } from "@/components/ui/badge";

const Admin = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-finance-navy/10 text-finance-navy border-finance-navy/20">
            Admin Panel
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-finance-navy">
            Administrative Dashboard
          </h1>
          <p className="text-xl text-finance-gray max-w-3xl mx-auto">
            Secure admin panel for managing job listings, training programs, and
            applications.
          </p>
        </div>

        <div className="bg-finance-light rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-finance-navy mb-4">
            Coming Soon
          </h2>
          <p className="text-finance-gray">
            Admin authentication, job management, application tracking, and
            analytics dashboard will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
