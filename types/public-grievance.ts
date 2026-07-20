import { z } from "zod";

// data is sent to backend from public grievance form

export const createGrievanceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, " 2 characters"),
  
  email: z
    .string()
    .trim()
    .email("Valid email address "),
 
  phone: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Valid 10-digit mobile number enter"
    ),

  complaint_category: z
    .string()
    .trim()
    .min(2, "Required complaint category"
    ),

  ward: z
    .coerce
    .number()
    .int()
    .min(1, "Must 1 ward number"),
  
  incident_address: z
    .string()
    .trim()
    .min(3, " Required incident address"),
  description: z
    .string()
    .trim()
    .min(10, "complaint description"),
});

// complete grievance record from backend
export const grievanceSchema = createGrievanceSchema.extend({
  id: z.coerce.number().int().positive(),
});

// data type of grievance form
export type CreateGrievanceData = z.infer<typeof grievanceSchema>;

// Admin table ke complete record ka type
export type Grievance = z.infer<
  typeof grievanceSchema
>;
