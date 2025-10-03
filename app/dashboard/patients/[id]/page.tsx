import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Edit,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Activity,
} from "lucide-react";
import Link from "next/link";

// Mock patient data
const patientData = {
  id: "P001",
  firstName: "John",
  lastName: "Smith",
  dateOfBirth: "1980-05-15",
  age: 45,
  gender: "Male",
  bloodType: "A+",
  phone: "(555) 123-4567",
  email: "john.smith@example.com",
  address: "123 Main St, Springfield, IL 62701",
  emergencyContact: "Jane Smith",
  emergencyPhone: "(555) 987-6543",
  allergies: "Penicillin, Peanuts",
  medicalHistory: "Hypertension (2015), Appendectomy (2010)",
  insurance: "Blue Cross Blue Shield",
  insuranceId: "BCBS123456789",
  status: "Active",
  registeredDate: "2020-03-15",
};

const recentVisits = [
  {
    date: "2025-01-15",
    type: "Check-up",
    doctor: "Dr. Sarah Johnson",
    notes: "Routine physical examination",
  },
  {
    date: "2024-12-10",
    type: "Follow-up",
    doctor: "Dr. Michael Lee",
    notes: "Blood pressure monitoring",
  },
  {
    date: "2024-11-05",
    type: "Consultation",
    doctor: "Dr. Sarah Johnson",
    notes: "Discussed medication adjustment",
  },
];

const prescriptions = [
  {
    medication: "Lisinopril 10mg",
    dosage: "Once daily",
    prescribed: "2024-12-10",
    doctor: "Dr. Michael Lee",
  },
  {
    medication: "Aspirin 81mg",
    dosage: "Once daily",
    prescribed: "2024-11-05",
    doctor: "Dr. Sarah Johnson",
  },
];

export default function PatientProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/patients">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {patientData.firstName} {patientData.lastName}
              </h1>
              <p className="text-muted-foreground">
                Patient ID: {patientData.id}
              </p>
            </div>
          </div>
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Patient Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="text-2xl font-bold">{patientData.age}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Blood Type</p>
                  <p className="text-2xl font-bold">{patientData.bloodType}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {patientData.gender[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gender</p>
                  <p className="text-2xl font-bold">{patientData.gender}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Status</p>
                <Badge variant="default" className="text-base px-3 py-1">
                  {patientData.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="visits">Visit History</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="lab">Lab Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{patientData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{patientData.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <span>{patientData.address}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">
                      {patientData.emergencyContact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{patientData.emergencyPhone}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Allergies</p>
                    <p className="font-medium text-destructive">
                      {patientData.allergies}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Medical History
                    </p>
                    <p className="font-medium">{patientData.medicalHistory}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insurance Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Provider</p>
                    <p className="font-medium">{patientData.insurance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Policy ID</p>
                    <p className="font-medium">{patientData.insuranceId}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visits">
            <Card>
              <CardHeader>
                <CardTitle>Visit History</CardTitle>
                <CardDescription>
                  Recent appointments and consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVisits.map((visit, i) => (
                    <div
                      key={i}
                      className="border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-foreground">
                            {visit.type}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {visit.doctor}
                          </p>
                        </div>
                        <Badge variant="outline">{visit.date}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {visit.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card>
              <CardHeader>
                <CardTitle>Active Prescriptions</CardTitle>
                <CardDescription>Current medications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescriptions.map((rx, i) => (
                    <div
                      key={i}
                      className="border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-foreground">
                            {rx.medication}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Dosage: {rx.dosage}
                          </p>
                        </div>
                        <Badge variant="outline">{rx.prescribed}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Prescribed by {rx.doctor}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lab">
            <Card>
              <CardHeader>
                <CardTitle>Lab Results</CardTitle>
                <CardDescription>
                  Recent laboratory tests and reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No lab results available yet.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
