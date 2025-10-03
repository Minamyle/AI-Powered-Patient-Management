"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, Download, FileText } from "lucide-react";

const prescriptions = [
  {
    id: "RX001",
    patient: "John Smith",
    patientId: "P001",
    medication: "Lisinopril 10mg",
    dosage: "Once daily",
    quantity: "30 tablets",
    refills: 2,
    prescribedBy: "Dr. Sarah Johnson",
    date: "2025-01-20",
    status: "active",
  },
  {
    id: "RX002",
    patient: "Emma Wilson",
    patientId: "P002",
    medication: "Metformin 500mg",
    dosage: "Twice daily",
    quantity: "60 tablets",
    refills: 3,
    prescribedBy: "Dr. Michael Lee",
    date: "2025-01-22",
    status: "active",
  },
  {
    id: "RX003",
    patient: "Michael Brown",
    patientId: "P003",
    medication: "Amoxicillin 500mg",
    dosage: "Three times daily",
    quantity: "21 capsules",
    refills: 0,
    prescribedBy: "Dr. Sarah Johnson",
    date: "2025-01-15",
    status: "completed",
  },
  {
    id: "RX004",
    patient: "Sarah Davis",
    patientId: "P004",
    medication: "Atorvastatin 20mg",
    dosage: "Once daily at bedtime",
    quantity: "30 tablets",
    refills: 5,
    prescribedBy: "Dr. Michael Lee",
    date: "2025-01-18",
    status: "active",
  },
];

export default function PrescriptionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrescriptions = prescriptions.filter(
    (rx) =>
      rx.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rx.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rx.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Prescriptions
            </h1>
            <p className="text-muted-foreground">
              Manage patient prescriptions and medications
            </p>
          </div>
          <Link href="/dashboard/prescriptions/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Prescription
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Active</p>
                  <p className="text-2xl font-bold">
                    {
                      prescriptions.filter((rx) => rx.status === "active")
                        .length
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Refills Due</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-chart-4" />
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">89</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by patient, medication, or prescription ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prescription ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Prescribed By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPrescriptions.map((rx) => (
                  <TableRow key={rx.id}>
                    <TableCell className="font-medium">{rx.id}</TableCell>
                    <TableCell>{rx.patient}</TableCell>
                    <TableCell>{rx.medication}</TableCell>
                    <TableCell>{rx.dosage}</TableCell>
                    <TableCell>{rx.prescribedBy}</TableCell>
                    <TableCell>{rx.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          rx.status === "active" ? "default" : "secondary"
                        }
                      >
                        {rx.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/prescriptions/${rx.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
