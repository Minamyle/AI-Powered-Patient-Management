import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Users, Calendar, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your clinic overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Patients
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-4">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Appointments Today
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                6 pending, 18 confirmed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Prescriptions
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                No-Show Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-4">-2.1%</span> improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Next 5 scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", patient: "John Smith", type: "Check-up" },
                  {
                    time: "10:30 AM",
                    patient: "Emma Wilson",
                    type: "Follow-up",
                  },
                  {
                    time: "11:00 AM",
                    patient: "Michael Brown",
                    type: "Consultation",
                  },
                  {
                    time: "02:00 PM",
                    patient: "Sarah Davis",
                    type: "Lab Review",
                  },
                  {
                    time: "03:30 PM",
                    patient: "James Miller",
                    type: "Check-up",
                  },
                ].map((apt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {apt.patient}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {apt.type}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {apt.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Lab Results</CardTitle>
              <CardDescription>Latest uploaded reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    patient: "Alice Johnson",
                    test: "Blood Test",
                    status: "Normal",
                  },
                  {
                    patient: "Robert Lee",
                    test: "X-Ray",
                    status: "Review Required",
                  },
                  {
                    patient: "Maria Garcia",
                    test: "MRI Scan",
                    status: "Normal",
                  },
                  {
                    patient: "David Chen",
                    test: "Urine Test",
                    status: "Normal",
                  },
                  { patient: "Lisa Anderson", test: "ECG", status: "Normal" },
                ].map((lab, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {lab.patient}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {lab.test}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        lab.status === "Normal"
                          ? "text-chart-4"
                          : "text-destructive"
                      }`}
                    >
                      {lab.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-4">
              <Link href="/dashboard/patients/new">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Add Patient
                </Button>
              </Link>
              <Link href="/dashboard/appointments/new">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="/dashboard/prescriptions/new">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  New Prescription
                </Button>
              </Link>
              <Link href="/dashboard/analytics">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
