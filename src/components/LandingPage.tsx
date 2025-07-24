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
  Lock,
  Users,
  DollarSign,
  ArrowRight,
  BookOpen,
  LogIn,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br to-secondary hero">
      {/* Hero Section */}
      <div className="container mx-auto px-2 pt-5">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-3"></div>
          <h1 className="text-5xl md:text-6xl max-w-2l font-bold bg-hero-gradient bg-clip-text text-transparent mb-2 firstH1">
            Ateminium School Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-0 mb-6 text-white">
            "Your reliable stewards of delicate data"
          </p>
          <p className="hero-desc text-xl text-muted-foreground opacity-90 max-w-2xl mx-auto mb-12">
            Management made easy. Your gateway to simplified and secure
            Teachers-Students digital management, starts here!!
          </p>
          <div className="teacher-portalBtn-container flex justify-center">
            <Link to="/teacher-login">
              <Button className="teacher-portal-button items-center gap-2 hover:shadow-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Teachers' Portal <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <Card
            className="action-cards p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Students' Portal</h3>
            <p className="text-muted-foreground mb-6">
              Access your profile, view your results, edit and update everything
              about yourself and visualise your academic analytics.
            </p>
            <Link to="/student-portal">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Enter Student Portal <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card
            className="action-cards p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Admin Portal</h3>
            <p className="text-muted-foreground mb-6">
              Manage your teachers, students, and oversee platform operations.
              Add or remove teachers. All within your control.
            </p>
            <Link to="/admin-login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Admin Access <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card
            className="action-cards p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Create School Account
            </h3>
            <p className="text-muted-foreground mb-6">
              Register your institution, become an admin and manage your
              teachers & students digitally.
            </p>
            <Link to="/create-school">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft">
                Register School <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 text-white">
          <h2
            className="text-3xl font-bold text-5xl text-center mb-12"
            data-aos="fade-up"
          >
            Why Choose Ateminium - SMS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full">
                  <Shield className="h-20 w-20 text-primary" />
                </div>
              </div>
              <h4 className="font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
                HIGH END SECURITY
              </h4>
              <p className="why-us-desc text-md mb-10">
                Your data is stored in secure servers in a controlled
                environment, ensuring privacy.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full">
                  <Users className="h-20 w-20 text-primary" />
                </div>
              </div>
              <h4 className="font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
                TRUSTED BY MANY
              </h4>
              <p className="why-us-desc text-md mb-10">
                Over 30+ schools in South Sudan trust Ateminium-SMS with their
                data. We've a track record of success.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full">
                  <DollarSign className="h-20 w-20 text-primary" />
                </div>
              </div>
              <h4 className="font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
                AFFORDABLE
              </h4>
              <p className="why-us-desc text-md mb-10">
                Ateminium-SMS is a cost-effective solution for schools and
                institutions. Our charges are friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t mt-3">
        <div className="container mx-auto px-4 py-8">
          <div className="grid">
            <div className="text-center mb-6">
              <p className="landing-footer text-black text-md">
                &copy; 2025 Ateminium School Management System. All rights
                reserved. Powered by{" "}
                <a
                  href="https://web.facebook.com/profile.php?id=61572703111798"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary font-semibold hover:underline">
                    SIMON STAR TECH
                  </span>
                </a>
              </p>
            </div>
            <div className="flex justify-center align-center gap-4 mb-2">
              <a
                href="https://web.facebook.com/profile.php?id=61572703111798"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black rounded-full"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black rounded-full"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
