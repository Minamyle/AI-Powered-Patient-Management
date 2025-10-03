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
import { Search, Plus, Filter } from "lucide-react";

const mockPatients = [
  {
    id: "P001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    phone: "(555) 123-4567",
    lastVisit: "2025-01-15",
    status: "Active",
  },
  {
    id: "P002",
    name: "Emma Wilson",
    age: 32,
    gender: "Female",
    phone: "(555) 234-5678",
    lastVisit: "2025-01-20",
    status: "Active",
  },
  {
    id: "P003",
    name: "Michael Brown",
    age: 58,
    gender: "Male",
    phone: "(555) 345-6789",
    lastVisit: "2024-12-10",
    status: "Inactive",
  },
  {
    id: "P004",
    name: "Sarah Davis",
    age: 28,
    gender: "Female",
    phone: "(555) 456-7890",
    lastVisit: "2025-01-22",
    status: "Active",
  },
  {
    id: "P005",
    name: "James Miller",
    age: 67,
    gender: "Male",
    phone: "(555) 567-8901",
    lastVisit: "2025-01-18",
    status: "Active",
  },
];

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = mockPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Patients</h1>
            <p className="text-muted-foreground">
              Manage patient records and profiles
            </p>
          </div>
          <Link href="/dashboard/patients/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Patient
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or patient ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          patient.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Link href={`/dashboard/patients/${patient.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
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
