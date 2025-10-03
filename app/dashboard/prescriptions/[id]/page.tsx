import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  Edit,
  Printer,
  User,
  Calendar,
  FileText,
} from "lucide-react";
import Link from "next/link";

const prescriptionData = {
  id: "RX001",
  patient: "John Smith",
  patientId: "P001",
  medication: "Lisinopril 10mg",
  dosage: "10mg",
  frequency: "Once daily",
  quantity: "30 tablets",
  refills: 2,
  refillsUsed: 0,
  prescribedBy: "Dr. Sarah Johnson",
  prescribedDate: "2025-01-20",
  expiryDate: "2026-01-20",
  status: "active",
  instructions:
    "Take one tablet by mouth once daily in the morning with food. Monitor blood pressure regularly.",
  notes: "Patient has history of hypertension. Regular follow-up recommended.",
  pharmacy: "City Pharmacy",
  ndc: "12345-678-90",
};

export default function PrescriptionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/prescriptions">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Prescription Details
              </h1>
              <p className="text-muted-foreground">ID: {prescriptionData.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Medication Information</CardTitle>
                  <Badge variant="default">{prescriptionData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Medication</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.medication}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dosage</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.dosage}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Frequency</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.frequency}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Quantity</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.quantity}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Refills</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.refillsUsed} of{" "}
                      {prescriptionData.refills} used
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">NDC Code</p>
                    <p className="text-lg font-semibold text-foreground">
                      {prescriptionData.ndc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Instructions for Patient
                  </p>
                  <p className="text-foreground">
                    {prescriptionData.instructions}
                  </p>
                </div>

                {prescriptionData.notes && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      Clinical Notes
                    </p>
                    <p className="text-foreground">{prescriptionData.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prescription Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Prescribed Date
                    </p>
                    <p className="font-medium text-foreground">
                      {prescriptionData.prescribedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Expiry Date</p>
                    <p className="font-medium text-foreground">
                      {prescriptionData.expiryDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pharmacy</p>
                    <p className="font-medium text-foreground">
                      {prescriptionData.pharmacy}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Patient Name
                    </p>
                    <p className="font-medium text-foreground">
                      {prescriptionData.patient}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Patient ID</p>
                  <p className="font-medium text-foreground">
                    {prescriptionData.patientId}
                  </p>
                </div>
                <Link
                  href={`/dashboard/patients/${prescriptionData.patientId}`}
                >
                  <Button variant="outline" className="w-full bg-transparent">
                    View Patient Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prescriber Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm text-muted-foreground">Prescribed By</p>
                  <p className="font-medium text-foreground">
                    {prescriptionData.prescribedBy}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Request Refill
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Send to Pharmacy
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Mark as Discontinued
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
