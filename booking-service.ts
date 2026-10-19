// ============================================================
// Booking Service
// ============================================================

import { supabase, isSupabaseConfigured } from './supabase';
import { BookingFormValues } from './validation';
import { BookingConfirmation, BookingStatus, TimeSlot } from '../types';
import { generateDemoTimeSlots } from '../data/locations';

function generateBookingReference(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'PX-';
  for (let i = 0; i < 8; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return ref;
}

export async function getAvailableSlots(
  locationId: string,
  date: string,
  _modelId?: string
): Promise<TimeSlot[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('available_time_slots')
        .select('*')
        .eq('location_id', locationId)
        .eq('date', date)
        .eq('active', true);

      if (!error && data && data.length > 0) {
        return data.map((slot: Record<string, unknown>) => ({
          id: String(slot.id),
          startTime: String(slot.start_time),
          endTime: String(slot.end_time),
          available: Number(slot.capacity) > 0,
        }));
      }
    } catch {
      // Fall through to demo data
    }
  }

  return generateDemoTimeSlots(date, locationId);
}

export async function createBooking(
  data: BookingFormValues
): Promise<{ success: boolean; booking?: BookingConfirmation; error?: string }> {
  const reference = generateBookingReference();

  if (isSupabaseConfigured() && supabase) {
    try {
      // Check for conflicting bookings
      const { data: existing } = await supabase
        .from('bookings')
        .select('id')
        .eq('location_id', data.locationId)
        .eq('preferred_date', data.preferredDate)
        .eq('preferred_time', data.preferredTime)
        .in('status', ['pending', 'confirmed'])
        .limit(1);

      if (existing && existing.length > 0) {
        return {
          success: false,
          error: 'This time slot has already been booked. Please choose another.',
        };
      }

      const { data: inserted, error } = await supabase
        .from('bookings')
        .insert({
          booking_reference: reference,
          customer_name: data.customerName,
          customer_email: data.customerEmail,
          customer_phone: data.customerPhone,
          model_id: data.modelId,
          location_id: data.locationId,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          status: 'pending' as BookingStatus,
          notes: data.message || null,
          privacy_acknowledged_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('Booking insert error:', error.message);
        return { success: false, error: 'Unable to save your request. Please try again.' };
      }

      return {
        success: true,
        booking: {
          id: inserted.id,
          bookingReference: inserted.booking_reference,
          customerName: inserted.customer_name,
          customerEmail: inserted.customer_email,
          modelName: data.modelId,
          locationName: data.locationId,
          preferredDate: inserted.preferred_date,
          preferredTime: inserted.preferred_time,
          status: inserted.status,
          createdAt: inserted.created_at,
        },
      };
    } catch {
      return { success: false, error: 'Unable to connect to the booking service.' };
    }
  }

  // Demo mode — simulate a booking without a database
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    success: true,
    booking: {
      id: crypto.randomUUID(),
      bookingReference: reference,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      modelName: data.modelId,
      locationName: data.locationId,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
  };
}

export async function getBookingByReference(
  reference: string
): Promise<BookingConfirmation | null> {
  if (isSupabaseConfigured() && supabase) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('booking_reference', reference)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      bookingReference: data.booking_reference,
      customerName: data.customer_name,
      customerEmail: data.customer_email,
      modelName: data.model_id,
      locationName: data.location_id,
      preferredDate: data.preferred_date,
      preferredTime: data.preferred_time,
      status: data.status,
      createdAt: data.created_at,
    };
  }

  return null;
}
