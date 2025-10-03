import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  Calendar,
  User,
  FileText,
  Activity,
} from "lucide-react";
import Link from "next/link";

const labResultData = {
  id: "LAB001",
  patient: "John Smith",
  patientId: "P001",
  testType: "Complete Blood Count (CBC)",
  orderedBy: "Dr. Sarah Johnson",
  collectionDate: "2025-01-25",
  resultDate: "2025-01-26",
  status: "completed",
  result: "Normal",
  notes: "All values within normal range. No immediate concerns.",
  laboratory: "City Medical Laboratory",
  technician: "Lab Tech #4521",
  values: [
    {
      parameter: "White Blood Cells",
      value: "7.2",
      unit: "K/uL",
      range: "4.5-11.0",
      status: "normal",
    },
    {
      parameter: "Red Blood Cells",
      value: "4.8",
      unit: "M/uL",
      range: "4.5-5.9",
      status: "normal",
    },
    {
      parameter: "Hemoglobin",
      value: "14.5",
      unit: "g/dL",
      range: "13.5-17.5",
      status: "normal",
    },
    {
      parameter: "Hematocrit",
      value: "42.3",
      unit: "%",
      range: "38.8-50.0",
      status: "normal",
    },
    {
      parameter: "Platelets",
      value: "245",
      unit: "K/uL",
      range: "150-400",
      status: "normal",
    },
  ],
};

export default function LabResultDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/lab-results">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Lab Result Details
              </h1>
              <p className="text-muted-foreground">ID: {labResultData.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Test Information</CardTitle>
                  <Badge variant="default">{labResultData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Test Type</p>
                      <p className="font-medium text-foreground">
                        {labResultData.testType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Overall Result
                      </p>
                      <p className="font-medium text-chart-4">
                        {labResultData.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Collection Date
                      </p>
                      <p className="font-medium text-foreground">
                        {labResultData.collectionDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Result Date
                      </p>
                      <p className="font-medium text-foreground">
                        {labResultData.resultDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Laboratory
                      </p>
                      <p className="font-medium text-foreground">
                        {labResultData.laboratory}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Technician
                      </p>
                      <p className="font-medium text-foreground">
                        {labResultData.technician}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {labResultData.values.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-foreground">
                          {item.parameter}
                        </p>
                        <Badge
                          variant={
                            item.status === "normal" ? "outline" : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Value</p>
                          <p className="font-medium">
                            {item.value} {item.unit}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Reference Range
                          </p>
                          <p className="font-medium">
                            {item.range} {item.unit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {labResultData.notes && (
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{labResultData.notes}</p>
                </CardContent>
              </Card>
            )}
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
                      {labResultData.patient}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Patient ID</p>
                  <p className="font-medium text-foreground">
                    {labResultData.patientId}
                  </p>
                </div>
                <Link href={`/dashboard/patients/${labResultData.patientId}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Patient Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ordering Physician</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm text-muted-foreground">Ordered By</p>
                  <p className="font-medium text-foreground">
                    {labResultData.orderedBy}
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
                  Share with Patient
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Add to Medical Record
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Request Follow-up Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
