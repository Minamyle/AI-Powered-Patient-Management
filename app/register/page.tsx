import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity } from "lucide-react";

function handleSubmit() {
  // Placeholder for form submission logic
  alert("Workspace created successfully!");
}
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Activity className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">MediCare PMS</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Workspace</CardTitle>
            <CardDescription>
              Start your 14-day free trial. No credit card required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clinic-name">Clinic/Hospital Name</Label>
                <Input
                  id="clinic-name"
                  type="text"
                  placeholder="City Medical Center"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="full-name">Your Full Name</Label>
                <Input
                  id="full-name"
                  type="text"
                  placeholder="Dr. Sarah Johnson"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@clinic.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create Workspace
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
