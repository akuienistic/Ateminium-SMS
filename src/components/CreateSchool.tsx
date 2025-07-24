import "./CreateSchool.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateSchool = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    adminFullName: "",
    adminEmail: "",
    adminPhone: "",
    password: "",
    confirmPassword: "",
    schoolEmail: "",
    schoolPhone: "",
    schoolAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    expectedTeachers: "",
    expectedStudents: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
  const [showPasswordLengthError, setShowPasswordLengthError] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // School Information Validation
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School name is required";
    }

    if (!formData.schoolEmail) {
      newErrors.schoolEmail = "School email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.schoolEmail)) {
      newErrors.schoolEmail = "Please enter a valid school email address";
    }

    if (!formData.schoolPhone) {
      newErrors.schoolPhone = "School phone number is required";
    } else if (!/^(\+\d{1,3})?\d{10}$/.test(formData.schoolPhone)) {
      newErrors.schoolPhone = "Phone must be 10 digits or 13 with country code";
    }

    // Admin Information Validation
    if (!formData.adminFullName.trim()) {
      newErrors.adminFullName = "Admin full name is required";
    } else if (formData.adminFullName.trim().split(/\s+/).length < 3) {
      newErrors.adminFullName = "Please enter at least 3 names";
    }

    if (!formData.adminEmail) {
      newErrors.adminEmail = "Admin email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.adminEmail)) {
      newErrors.adminEmail = "Please enter a valid admin email address";
    }

    if (!formData.adminPhone) {
      newErrors.adminPhone = "Admin phone number is required";
    } else if (!/^(\+\d{1,3})?\d{10}$/.test(formData.adminPhone)) {
      newErrors.adminPhone = "Phone must be 10 digits or 13 with country code";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Location Information Validation
    if (!formData.schoolAddress.trim()) {
      newErrors.schoolAddress = "School address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>School Registration Successful!</span>
          </div>
        ),
        duration: 5000,
        description:
          "Thank you for registering. Your school will be approved soon.",
      });

      setFormData({
        schoolName: "",
        adminFullName: "",
        adminEmail: "",
        adminPhone: "",
        password: "",
        confirmPassword: "",
        schoolEmail: "",
        schoolPhone: "",
        schoolAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        expectedTeachers: "",
        expectedStudents: "",
        description: "",
      });
      // Handle school registration logic here
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="create-school-hero min-h-screen bg-gradient-to-br to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="shadow-elegant bg-card-gradient border-0">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Create School Account
            </CardTitle>
            <CardDescription>
              Register your educational institution and join the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* School Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  School Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="schoolName">
                    School Name <span className="asterisks">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      placeholder="Enter school name"
                      className="pl-10"
                    />
                  </div>
                  {errors.schoolName && (
                    <p className="text-sm text-destructive">
                      {errors.schoolName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schoolEmail">
                      School Email <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="schoolEmail"
                        name="schoolEmail"
                        type="email"
                        value={formData.schoolEmail}
                        onChange={handleInputChange}
                        placeholder="school@example.com"
                        className="pl-10"
                      />
                    </div>
                    {errors.schoolEmail && (
                      <p className="text-sm text-destructive">
                        {errors.schoolEmail}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolPhone">
                      School Phone <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="schoolPhone"
                        name="schoolPhone"
                        type="tel"
                        value={formData.schoolPhone}
                        onChange={handleInputChange}
                        placeholder="+211 9xxxxxxxxx"
                        className="pl-10"
                      />
                    </div>
                    {errors.schoolPhone && (
                      <p className="text-sm text-destructive">
                        {errors.schoolPhone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    School Description <span className="asterisks">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your school in a few words..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Administrator Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Administrator Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="adminFullName">
                    Full Name <span className="asterisks">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="adminFullName"
                      name="adminFullName"
                      value={formData.adminFullName}
                      onChange={handleInputChange}
                      placeholder="John Michael Smith"
                      className="pl-10"
                    />
                  </div>
                  {errors.adminFullName && (
                    <p className="text-sm text-destructive">
                      {errors.adminFullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adminEmail">
                      Email Address <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="adminEmail"
                        name="adminEmail"
                        type="email"
                        value={formData.adminEmail}
                        onChange={handleInputChange}
                        placeholder="admin@example.com"
                        className="pl-10"
                      />
                    </div>
                    {errors.adminEmail && (
                      <p className="text-sm text-destructive">
                        {errors.adminEmail}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adminPhone">
                      Phone Number <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="adminPhone"
                        name="adminPhone"
                        type="tel"
                        value={formData.adminPhone}
                        onChange={handleInputChange}
                        placeholder="+211 9xxxxxxxxx"
                        className="pl-10"
                      />
                    </div>
                    {errors.adminPhone && (
                      <p className="text-sm text-destructive">
                        {errors.adminPhone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Password <span className="asterisks">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Confirm Password <span className="asterisks">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Location Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="schoolAddress">
                    School Address <span className="asterisks">*</span>
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="schoolAddress"
                      name="schoolAddress"
                      value={formData.schoolAddress}
                      onChange={handleInputChange}
                      placeholder="123 Wherever Street"
                      className="pl-10"
                    />
                  </div>
                  {errors.schoolAddress && (
                    <p className="text-sm text-destructive">
                      {errors.schoolAddress}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive">{errors.city}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">
                      State/Province <span className="asterisks">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="NY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">
                      ZIP/Postal Code <span className="asterisks">*</span>
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="1000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">
                      Country <span className="asterisks">*</span>
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United States"
                    />
                    {errors.country && (
                      <p className="text-sm text-destructive">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Additional Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expectedTeachers">
                      Expected Number of Teachers{" "}
                      <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="expectedTeachers"
                        name="expectedTeachers"
                        type="number"
                        value={formData.expectedTeachers}
                        onChange={handleInputChange}
                        placeholder="50"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedStudents">
                      Expected Number of Students{" "}
                      <span className="asterisks">*</span>
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="expectedStudents"
                        name="expectedStudents"
                        type="number"
                        value={formData.expectedStudents}
                        onChange={handleInputChange}
                        placeholder="500"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-soft"
              >
                Create School Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateSchool;
