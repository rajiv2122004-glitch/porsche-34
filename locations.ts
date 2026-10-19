// ============================================================
// Dealership Locations (Demo Data)
// ============================================================

import { DealershipLocation, TimeSlot } from '../types';

export const dealershipLocations: DealershipLocation[] = [
  {
    id: 'loc-munich',
    name: 'Porsche Experience Centre Munich',
    city: 'Munich',
    address: 'Hansastraße 40, 80686 München',
    timezone: 'Europe/Berlin',
    active: true,
  },
  {
    id: 'loc-stuttgart',
    name: 'Porsche Experience Centre Stuttgart',
    city: 'Stuttgart',
    address: 'Porscheplatz 1, 70435 Stuttgart',
    timezone: 'Europe/Berlin',
    active: true,
  },
  {
    id: 'loc-berlin',
    name: 'Porsche Centre Berlin',
    city: 'Berlin',
    address: 'Salzufer 1, 10587 Berlin',
    timezone: 'Europe/Berlin',
    active: true,
  },
  {
    id: 'loc-zurich',
    name: 'Porsche Centre Zürich',
    city: 'Zürich',
    address: 'Badenerstrasse 600, 8048 Zürich',
    timezone: 'Europe/Zurich',
    active: true,
  },
  {
    id: 'loc-london',
    name: 'Porsche Experience Centre Silverstone',
    city: 'Silverstone',
    address: 'Porsche Drive, NN12 8TN',
    timezone: 'Europe/London',
    active: true,
  },
];

/**
 * Generate demo time slots for a given date.
 * In production, these would come from the database / Supabase Edge Function.
 */
export function generateDemoTimeSlots(date: string, locationId: string): TimeSlot[] {
  const baseSlots = [
    { start: '09:00', end: '10:00' },
    { start: '10:00', end: '11:00' },
    { start: '11:00', end: '12:00' },
    { start: '13:00', end: '14:00' },
    { start: '14:00', end: '15:00' },
    { start: '15:00', end: '16:00' },
    { start: '16:00', end: '17:00' },
  ];

  // Make some slots unavailable deterministically based on date + location
  const hash = (date + locationId).split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  return baseSlots.map((slot, i) => ({
    id: `${locationId}-${date}-${i}`,
    startTime: slot.start,
    endTime: slot.end,
    available: (hash + i) % 5 !== 0, // ~20% unavailable
  }));
}

export function getActiveLocations(): DealershipLocation[] {
  return dealershipLocations.filter((l) => l.active);
}
