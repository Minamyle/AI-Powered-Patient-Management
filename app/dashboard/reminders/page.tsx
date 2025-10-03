"use client";

import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, MessageSquare, Phone, Settings } from "lucide-react";

const reminderHistory = [
  {
    id: "R001",
    patient: "John Smith",
    type: "Appointment",
    channel: "SMS",
    message: "Reminder: You have an appointment tomorrow at 9:00 AM",
    sentAt: "2025-01-29 10:00 AM",
    status: "delivered",
  },
  {
    id: "R002",
    patient: "Emma Wilson",
    type: "Prescription",
    channel: "Email",
    message: "Your prescription is ready for pickup",
    sentAt: "2025-01-29 02:30 PM",
    status: "delivered",
  },
  {
    id: "R003",
    patient: "Michael Brown",
    type: "Follow-up",
    channel: "WhatsApp",
    message: "Time to schedule your follow-up appointment",
    sentAt: "2025-01-28 11:15 AM",
    status: "delivered",
  },
  {
    id: "R004",
    patient: "Sarah Davis",
    type: "Appointment",
    channel: "SMS",
    message: "Reminder: You have an appointment today at 2:00 PM",
    sentAt: "2025-01-30 08:00 AM",
    status: "delivered",
  },
];

const upcomingReminders = [
  {
    id: "UR001",
    patient: "James Miller",
    type: "Appointment",
    channel: "SMS",
    scheduledFor: "2025-01-31 08:00 AM",
  },
  {
    id: "UR002",
    patient: "Alice Johnson",
    type: "Lab Results",
    channel: "Email",
    scheduledFor: "2025-01-31 10:00 AM",
  },
  {
    id: "UR003",
    patient: "Robert Lee",
    type: "Prescription Refill",
    channel: "WhatsApp",
    scheduledFor: "2025-02-01 09:00 AM",
  },
];

export default function RemindersPage() {
  const [autoReminders, setAutoReminders] = useState({
    appointments: true,
    prescriptions: true,
    followUps: true,
    labResults: false,
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Automated Reminders
            </h1>
            <p className="text-muted-foreground">
              Manage patient notifications and reminder settings
            </p>
          </div>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Sent Today</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Rate</p>
                  <p className="text-2xl font-bold">98.5%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-chart-4" />
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="history" className="space-y-4">
          <TabsList>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Reminder History</CardTitle>
                <CardDescription>Recently sent notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reminderHistory.map((reminder) => (
                    <div
                      key={reminder.id}
                      className="flex items-start justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-muted">
                          {reminder.channel === "SMS" && (
                            <MessageSquare className="h-5 w-5 text-primary" />
                          )}
                          {reminder.channel === "Email" && (
                            <Mail className="h-5 w-5 text-secondary" />
                          )}
                          {reminder.channel === "WhatsApp" && (
                            <Phone className="h-5 w-5 text-accent" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-foreground">
                              {reminder.patient}
                            </p>
                            <Badge variant="outline">{reminder.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {reminder.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Sent via {reminder.channel} • {reminder.sentAt}
                          </p>
                        </div>
                      </div>
                      <Badge variant="default">{reminder.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reminders</CardTitle>
                <CardDescription>
                  Upcoming automated notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingReminders.map((reminder) => (
                    <div
                      key={reminder.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-muted">
                          {reminder.channel === "SMS" && (
                            <MessageSquare className="h-5 w-5 text-primary" />
                          )}
                          {reminder.channel === "Email" && (
                            <Mail className="h-5 w-5 text-secondary" />
                          )}
                          {reminder.channel === "WhatsApp" && (
                            <Phone className="h-5 w-5 text-accent" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-foreground">
                              {reminder.patient}
                            </p>
                            <Badge variant="outline">{reminder.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Scheduled for {reminder.scheduledFor} via{" "}
                            {reminder.channel}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Automatic Reminders</CardTitle>
                <CardDescription>
                  Configure which reminders are sent automatically
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="appointments" className="text-base">
                      Appointment Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send reminders 24 hours before scheduled appointments
                    </p>
                  </div>
                  <Switch
                    id="appointments"
                    checked={autoReminders.appointments}
                    onCheckedChange={(checked) =>
                      setAutoReminders({
                        ...autoReminders,
                        appointments: checked,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="prescriptions" className="text-base">
                      Prescription Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Notify patients when prescriptions are ready
                    </p>
                  </div>
                  <Switch
                    id="prescriptions"
                    checked={autoReminders.prescriptions}
                    onCheckedChange={(checked) =>
                      setAutoReminders({
                        ...autoReminders,
                        prescriptions: checked,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="followUps" className="text-base">
                      Follow-up Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Remind patients to schedule follow-up appointments
                    </p>
                  </div>
                  <Switch
                    id="followUps"
                    checked={autoReminders.followUps}
                    onCheckedChange={(checked) =>
                      setAutoReminders({ ...autoReminders, followUps: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="labResults" className="text-base">
                      Lab Results Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Alert patients when lab results are available
                    </p>
                  </div>
                  <Switch
                    id="labResults"
                    checked={autoReminders.labResults}
                    onCheckedChange={(checked) =>
                      setAutoReminders({
                        ...autoReminders,
                        labResults: checked,
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Channels</CardTitle>
                <CardDescription>
                  Configure notification delivery methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">SMS</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Text message notifications via Twilio
                    </p>
                    <Badge variant="default">Active</Badge>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      <h3 className="font-medium">Email</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Email notifications for detailed info
                    </p>
                    <Badge variant="default">Active</Badge>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <h3 className="font-medium">WhatsApp</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      WhatsApp Business API integration
                    </p>
                    <Badge variant="secondary">Configure</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reminder Templates</CardTitle>
                <CardDescription>
                  Customize notification message templates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Appointment Reminder",
                      template:
                        "Hi {patient_name}, this is a reminder about your appointment on {date} at {time}.",
                    },
                    {
                      name: "Prescription Ready",
                      template:
                        "Hello {patient_name}, your prescription is ready for pickup at our pharmacy.",
                    },
                    {
                      name: "Follow-up Needed",
                      template:
                        "Hi {patient_name}, it's time to schedule your follow-up appointment. Please call us.",
                    },
                  ].map((template, i) => (
                    <div
                      key={i}
                      className="p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">
                          {template.name}
                        </h4>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {template.template}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
