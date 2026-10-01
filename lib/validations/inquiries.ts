import { z } from "zod";

export const contactFormSchema = z.object({
  category: z.enum(["tender", "subcontractor", "procurement", "consultation"], {
    error: "Please select an inquiry category",
  }),
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required (at least 2 characters)"),
  organization: z
    .string()
    .trim()
    .min(2, "Organization or company name is required"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid corporate or professional email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Scope summary / message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const projectBriefFormSchema = z.object({
  projectType: z
    .string()
    .min(1, "Please select a primary project classification"),
  disciplines: z
    .array(z.string())
    .min(1, "Please select at least one engineering or trade discipline"),
  scale: z
    .string()
    .min(1, "Please select an approximate project gross floor scale"),
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required"),
  organization: z
    .string()
    .trim()
    .min(2, "Organization is required"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  timeline: z
    .string()
    .optional()
    .default("Immediate mobilization (≤ 30 days)"),
  description: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
});

export type ProjectBriefFormData = z.infer<typeof projectBriefFormSchema>;

export const quickInquirySchema = z.object({
  principalName: z
    .string()
    .trim()
    .min(2, "Principal name is required"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact phone number"),
  sector: z
    .string()
    .min(1, "Sector is required"),
  location: z
    .string()
    .trim()
    .min(2, "Site location is required"),
  description: z
    .string()
    .trim()
    .min(8, "Please provide scope parameters or timeline details"),
});

export type QuickInquiryData = z.infer<typeof quickInquirySchema>;
