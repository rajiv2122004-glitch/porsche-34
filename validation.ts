// ============================================================
// Validation Schemas (Zod)
// ============================================================

import { z } from 'zod';

export const bookingSchema = z.object({
  customerName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .regex(/^[\p{L}\s\-'.]+$/u, 'Name contains invalid characters'),
  customerEmail: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email too long'),
  customerPhone: z
    .string()
    .min(7, 'Phone number too short')
    .max(20, 'Phone number too long')
    .regex(/^\+?[\d\s\-().]+$/, 'Please enter a valid phone number'),
  modelId: z.string().min(1, 'Please select a model'),
  locationId: z.string().min(1, 'Please select a location'),
  preferredDate: z
    .string()
    .min(1, 'Please select a date')
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, 'Date must be in the future'),
  preferredTime: z.string().min(1, 'Please select a time slot'),
  message: z.string().max(500, 'Message must be under 500 characters').optional(),
  privacyAcknowledged: z
    .boolean()
    .refine((val) => val === true, 'You must acknowledge the privacy policy'),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
