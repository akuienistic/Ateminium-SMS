import "./LandingPage.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Shield,
  Building2,
  Facebook,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-2 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6"></div>
          <h1 className="text-5xl md:text-6xl max-w-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6 firstH1">
            Ateminium School Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Management made easy. Your gateway to simplified and clean
            Teachers-Students digital management commences here
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Student Portal</h3>
            <p className="text-muted-foreground mb-6">
              Access your profile, view your results, edit and update everything
              about yourself and manage your academic activities
            </p>
            <Link to="/student-portal">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Enter Student Portal
              </Button>
            </Link>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Admin Login</h3>
            <p className="text-muted-foreground mb-6">
              Manage your teachers, students, and oversee platform operations.
              Add or remove teachers. All within your control.
            </p>
            <Link to="/admin-login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Admin Access
              </Button>
            </Link>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Create School Account
            </h3>
            <p className="text-muted-foreground mb-6">
              Register your institution and start managing your academic
              activities digitally
            </p>
            <Link to="/create-school">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Register School
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid">
            <div className="text-center mb-6">
              <p>
                &copy; 2025 Ateminiun School Management System. All rights
                reserved. Powered by{" "}
                <a href="#">
                  <b>SIMON STAR TECH</b>
                </a>
              </p>
            </div>
            <div className="flex justify-center align-center gap-3 mb-3">
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
