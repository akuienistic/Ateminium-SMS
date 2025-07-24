import "./ForgotPassword.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitted(true);

    toast({
      title: "Reset Link Sent!",
      description: "Check your email for password reset instructions",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  if (isSubmitted) {
    return (
      <div className="forgot-password-hero min-h-screen bg-gradient-to-br to-secondary flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <Card className="shadow-elegant bg-card-gradient border-0">
            <CardContent className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Send className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent password reset instructions to:
              </p>
              <p className="font-medium text-primary mb-8">{email}</p>
              <p className="text-sm text-muted-foreground mb-8">
                Didn't receive the email? Check your spam folder or try again .
              </p>
              <div className="space-y-3">
                <Link to="/student-login">
                  <Button className="w-full">Back to Login</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/student-login">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Button>
          </Link>
        </div>

        <Card className="shadow-elegant bg-card-gradient border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Reset Your Password
            </CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your registered email"
                    className="pl-10"
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft"
              >
                Send Reset Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
