"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewPrescriptionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    patientId: "",
    patientName: "",
    medication: "",
    dosage: "",
    frequency: "",
    quantity: "",
    refills: "",
    instructions: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prescription data:", formData);
    router.push("/dashboard/prescriptions");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/prescriptions">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              New Prescription
            </h1>
            <p className="text-muted-foreground">
              Create a new prescription for a patient
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          {/* Patient Information */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>
                Select the patient for this prescription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientId">Patient ID *</Label>
                  <Input
                    id="patientId"
                    placeholder="P001"
                    required
                    value={formData.patientId}
                    onChange={(e) =>
                      setFormData({ ...formData, patientId: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input
                    id="patientName"
                    placeholder="John Smith"
                    required
                    value={formData.patientName}
                    onChange={(e) =>
                      setFormData({ ...formData, patientName: e.target.value })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medication Details */}
          <Card>
            <CardHeader>
              <CardTitle>Medication Details</CardTitle>
              <CardDescription>
                Specify the medication and dosage information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="medication">Medication Name *</Label>
                <Input
                  id="medication"
                  placeholder="e.g., Lisinopril 10mg"
                  required
                  value={formData.medication}
                  onChange={(e) =>
                    setFormData({ ...formData, medication: e.target.value })
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage *</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g., 10mg"
                    required
                    value={formData.dosage}
                    onChange={(e) =>
                      setFormData({ ...formData, dosage: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency *</Label>
                  <Select
                    value={formData.frequency}
                    onValueChange={(value) =>
                      setFormData({ ...formData, frequency: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once-daily">Once daily</SelectItem>
                      <SelectItem value="twice-daily">Twice daily</SelectItem>
                      <SelectItem value="three-times-daily">
                        Three times daily
                      </SelectItem>
                      <SelectItem value="four-times-daily">
                        Four times daily
                      </SelectItem>
                      <SelectItem value="as-needed">As needed</SelectItem>
                      <SelectItem value="every-other-day">
                        Every other day
                      </SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 30 tablets"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refills">Number of Refills *</Label>
                  <Select
                    value={formData.refills}
                    onValueChange={(value) =>
                      setFormData({ ...formData, refills: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select refills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No refills</SelectItem>
                      <SelectItem value="1">1 refill</SelectItem>
                      <SelectItem value="2">2 refills</SelectItem>
                      <SelectItem value="3">3 refills</SelectItem>
                      <SelectItem value="5">5 refills</SelectItem>
                      <SelectItem value="11">11 refills (1 year)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions for Patient *</Label>
                <Textarea
                  id="instructions"
                  placeholder="e.g., Take one tablet by mouth once daily in the morning with food"
                  required
                  value={formData.instructions}
                  onChange={(e) =>
                    setFormData({ ...formData, instructions: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Internal notes, warnings, or special considerations"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg">
              Create Prescription
            </Button>
            <Link href="/dashboard/prescriptions">
              <Button type="button" variant="outline" size="lg">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
