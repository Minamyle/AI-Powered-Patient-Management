"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Calendar, Plus, Clock, User } from "lucide-react";

const appointments = [
  {
    id: "A001",
    time: "09:00 AM",
    patient: "John Smith",
    patientId: "P001",
    type: "Check-up",
    doctor: "Dr. Sarah Johnson",
    status: "confirmed",
    date: "2025-01-30",
  },
  {
    id: "A002",
    time: "10:30 AM",
    patient: "Emma Wilson",
    patientId: "P002",
    type: "Follow-up",
    doctor: "Dr. Michael Lee",
    status: "confirmed",
    date: "2025-01-30",
  },
  {
    id: "A003",
    time: "11:00 AM",
    patient: "Michael Brown",
    patientId: "P003",
    type: "Consultation",
    doctor: "Dr. Sarah Johnson",
    status: "pending",
    date: "2025-01-30",
  },
  {
    id: "A004",
    time: "02:00 PM",
    patient: "Sarah Davis",
    patientId: "P004",
    type: "Lab Review",
    doctor: "Dr. Michael Lee",
    status: "confirmed",
    date: "2025-01-30",
  },
  {
    id: "A005",
    time: "03:30 PM",
    patient: "James Miller",
    patientId: "P005",
    type: "Check-up",
    doctor: "Dr. Sarah Johnson",
    status: "confirmed",
    date: "2025-01-30",
  },
];

const upcomingAppointments = [
  {
    id: "A006",
    time: "09:30 AM",
    patient: "Alice Johnson",
    type: "Consultation",
    doctor: "Dr. Sarah Johnson",
    status: "confirmed",
    date: "2025-01-31",
  },
  {
    id: "A007",
    time: "11:00 AM",
    patient: "Robert Lee",
    type: "Follow-up",
    doctor: "Dr. Michael Lee",
    status: "pending",
    date: "2025-01-31",
  },
];

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState("2025-01-30");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
            <p className="text-muted-foreground">
              Manage patient appointments and schedules
            </p>
          </div>
          <Link href="/dashboard/appointments/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Today</p>
                  <p className="text-2xl font-bold">{appointments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {appointments.filter((a) => a.status === "pending").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <User className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Confirmed</p>
                  <p className="text-2xl font-bold">
                    {
                      appointments.filter((a) => a.status === "confirmed")
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
                <Calendar className="h-8 w-8 text-chart-4" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments Tabs */}
        <Tabs defaultValue="today" className="space-y-4">
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>January 30, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-center min-w-[80px]">
                          <p className="text-lg font-bold text-foreground">
                            {apt.time}
                          </p>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <div>
                          <p className="font-medium text-foreground">
                            {apt.patient}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {apt.type} • {apt.doctor}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={getStatusColor(apt.status)}>
                          {apt.status}
                        </Badge>
                        <Link href={`/dashboard/appointments/${apt.id}`}>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      January 31, 2025
                    </h3>
                    <div className="space-y-3">
                      {upcomingAppointments.map((apt) => (
                        <div
                          key={apt.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[80px]">
                              <p className="text-lg font-bold text-foreground">
                                {apt.time}
                              </p>
                            </div>
                            <div className="h-12 w-px bg-border" />
                            <div>
                              <p className="font-medium text-foreground">
                                {apt.patient}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {apt.type} • {apt.doctor}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={getStatusColor(apt.status)}>
                              {apt.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>Monthly appointment overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <p>Calendar view coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
