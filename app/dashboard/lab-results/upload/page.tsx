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
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";

export default function UploadLabResultPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    patientId: "",
    patientName: "",
    testType: "",
    orderedBy: "",
    collectionDate: "",
    resultDate: "",
    result: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lab result data:", formData);
    router.push("/dashboard/lab-results");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/lab-results">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Upload Lab Results
            </h1>
            <p className="text-muted-foreground">
              Upload and record laboratory test results
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          {/* Patient Information */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>
                Select the patient for these lab results
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

          {/* Test Information */}
          <Card>
            <CardHeader>
              <CardTitle>Test Information</CardTitle>
              <CardDescription>
                Specify the laboratory test details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="testType">Test Type *</Label>
                <Select
                  value={formData.testType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, testType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select test type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cbc">
                      Complete Blood Count (CBC)
                    </SelectItem>
                    <SelectItem value="lipid">Lipid Panel</SelectItem>
                    <SelectItem value="thyroid">
                      Thyroid Function Test
                    </SelectItem>
                    <SelectItem value="a1c">Hemoglobin A1C</SelectItem>
                    <SelectItem value="urinalysis">Urinalysis</SelectItem>
                    <SelectItem value="metabolic">
                      Comprehensive Metabolic Panel
                    </SelectItem>
                    <SelectItem value="liver">Liver Function Test</SelectItem>
                    <SelectItem value="kidney">Kidney Function Test</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="orderedBy">Ordered By *</Label>
                <Input
                  id="orderedBy"
                  placeholder="Dr. Sarah Johnson"
                  required
                  value={formData.orderedBy}
                  onChange={(e) =>
                    setFormData({ ...formData, orderedBy: e.target.value })
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="collectionDate">Collection Date *</Label>
                  <Input
                    id="collectionDate"
                    type="date"
                    required
                    value={formData.collectionDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        collectionDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resultDate">Result Date *</Label>
                  <Input
                    id="resultDate"
                    type="date"
                    required
                    value={formData.resultDate}
                    onChange={(e) =>
                      setFormData({ ...formData, resultDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="result">Overall Result *</Label>
                <Select
                  value={formData.result}
                  onValueChange={(value) =>
                    setFormData({ ...formData, result: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="abnormal">Abnormal</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Clinical Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional findings, interpretations, or recommendations"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Report</CardTitle>
              <CardDescription>
                Upload the lab report PDF or image file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, PNG, JPG up to 10MB
                </p>
                <Input
                  type="file"
                  className="hidden"
                  accept=".pdf,.png,.jpg,.jpeg"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg">
              Upload Lab Results
            </Button>
            <Link href="/dashboard/lab-results">
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
