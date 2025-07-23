import './StudentPortal.css';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LogIn, UserPlus, ArrowLeft, BookOpen, Users } from "lucide-react";

const StudentPortal = () => {
  return (
    <div className="student-portal-hero min-h-screen bg-gradient-to-br to-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-hero-gradient rounded-full shadow-elegant animate-float">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
            Student Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to the Student Portal. Please login to access your management dashboard or create a new account to get started.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Student Login</h3>
            <p className="text-muted-foreground mb-6">
              Already have an account? Sign in to access your management dashboard, and view your results.
            </p>
            <Link to="/student-login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Login to Account
              </Button>
            </Link>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Create Account</h3>
            <p className="text-muted-foreground mb-6">
              New to Ateminium - SMS? Register now and join thousands of students with secure data.
            </p>
            <Link to="/student-register">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Create New Account
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;