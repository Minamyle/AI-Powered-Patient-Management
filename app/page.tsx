import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Calendar,
  FileText,
  Users,
  BarChart3,
  Bell,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">MediCare PMS</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            AI-Powered Patient Management for Modern Healthcare
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Streamline patient records, appointments, prescriptions, and lab
            results with secure, compliant workflows designed for clinics and
            hospitals.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Patient Management</CardTitle>
              <CardDescription>
                Centralized patient profiles with medical history, allergies,
                and insurance information
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Smart Scheduling</CardTitle>
              <CardDescription>
                Intelligent appointment booking with automated reminders to
                reduce no-shows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Digital Prescriptions</CardTitle>
              <CardDescription>
                Generate, manage, and track prescriptions with downloadable PDFs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Activity className="h-10 w-10 text-chart-4 mb-2" />
              <CardTitle>Lab Integration</CardTitle>
              <CardDescription>
                Seamless lab result uploads tied directly to patient profiles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-chart-5 mb-2" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Real-time insights on appointments, patient retention, and
                operational efficiency
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Automated Reminders</CardTitle>
              <CardDescription>
                SMS, WhatsApp, and email notifications for appointments and
                follow-ups
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">
                Reduction in admin work
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">25%</div>
              <div className="text-muted-foreground">Fewer no-shows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <div className="text-muted-foreground">Client retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to transform your practice?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of clinics using MediCare PMS to deliver better
              patient care
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Today
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MediCare PMS. HIPAA-compliant patient management system.</p>
        </div>
      </footer>
    </div>
  );
}
