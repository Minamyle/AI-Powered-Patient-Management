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
import { Search, Plus, Download, Activity } from "lucide-react";

const labResults = [
  {
    id: "LAB001",
    patient: "John Smith",
    patientId: "P001",
    testType: "Complete Blood Count (CBC)",
    orderedBy: "Dr. Sarah Johnson",
    collectionDate: "2025-01-25",
    resultDate: "2025-01-26",
    status: "completed",
    result: "Normal",
  },
  {
    id: "LAB002",
    patient: "Emma Wilson",
    patientId: "P002",
    testType: "Lipid Panel",
    orderedBy: "Dr. Michael Lee",
    collectionDate: "2025-01-24",
    resultDate: "2025-01-25",
    status: "completed",
    result: "Abnormal",
  },
  {
    id: "LAB003",
    patient: "Michael Brown",
    patientId: "P003",
    testType: "Thyroid Function Test",
    orderedBy: "Dr. Sarah Johnson",
    collectionDate: "2025-01-26",
    resultDate: null,
    status: "pending",
    result: null,
  },
  {
    id: "LAB004",
    patient: "Sarah Davis",
    patientId: "P004",
    testType: "Hemoglobin A1C",
    orderedBy: "Dr. Michael Lee",
    collectionDate: "2025-01-23",
    resultDate: "2025-01-24",
    status: "completed",
    result: "Normal",
  },
  {
    id: "LAB005",
    patient: "James Miller",
    patientId: "P005",
    testType: "Urinalysis",
    orderedBy: "Dr. Sarah Johnson",
    collectionDate: "2025-01-27",
    resultDate: null,
    status: "in-progress",
    result: null,
  },
];

export default function LabResultsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = labResults.filter(
    (lab) =>
      lab.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.testType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "in-progress":
        return "outline";
      default:
        return "outline";
    }
  };

  const getResultColor = (result: string | null) => {
    if (!result) return "";
    switch (result) {
      case "Normal":
        return "text-chart-4";
      case "Abnormal":
        return "text-destructive";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Lab Results</h1>
            <p className="text-muted-foreground">
              Manage laboratory test results and reports
            </p>
          </div>
          <Link href="/dashboard/lab-results/upload">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Results
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Tests</p>
                  <p className="text-2xl font-bold">{labResults.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {
                      labResults.filter((lab) => lab.status === "pending")
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
                <Activity className="h-8 w-8 text-chart-4" />
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">
                    {
                      labResults.filter((lab) => lab.status === "completed")
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
                <Activity className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">18</p>
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
                  placeholder="Search by patient, test type, or lab ID..."
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
                  <TableHead>Lab ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Test Type</TableHead>
                  <TableHead>Ordered By</TableHead>
                  <TableHead>Collection Date</TableHead>
                  <TableHead>Result Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.map((lab) => (
                  <TableRow key={lab.id}>
                    <TableCell className="font-medium">{lab.id}</TableCell>
                    <TableCell>{lab.patient}</TableCell>
                    <TableCell>{lab.testType}</TableCell>
                    <TableCell>{lab.orderedBy}</TableCell>
                    <TableCell>{lab.collectionDate}</TableCell>
                    <TableCell>{lab.resultDate || "-"}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(lab.status)}>
                        {lab.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={getResultColor(lab.result)}>
                        {lab.result || "-"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/lab-results/${lab.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                        {lab.status === "completed" && (
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
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
