// ============================================================
// Configurator Options (Demo Data)
// ============================================================

import { ConfigOption } from '../types';

export const exteriorColors: ConfigOption[] = [
  { id: 'black', name: 'Jet Black Metallic', category: 'exterior-color', colorHex: '#0A0A0A', price: 0, description: 'Standard' },
  { id: 'white', name: 'Carrara White Metallic', category: 'exterior-color', colorHex: '#E8E6E0', price: 1150, description: 'Metallic' },
  { id: 'silver', name: 'GT Silver Metallic', category: 'exterior-color', colorHex: '#A5A9AE', price: 1150, description: 'Metallic' },
  { id: 'red', name: 'Guards Red', category: 'exterior-color', colorHex: '#CC0820', price: 0, description: 'Solid' },
  { id: 'blue', name: 'Gentian Blue Metallic', category: 'exterior-color', colorHex: '#1B2A4A', price: 1150, description: 'Metallic' },
  { id: 'green', name: 'Python Green', category: 'exterior-color', colorHex: '#4E6B35', price: 2500, description: 'Special' },
  { id: 'grey', name: 'Agate Grey Metallic', category: 'exterior-color', colorHex: '#6B6E6F', price: 1150, description: 'Metallic' },
  { id: 'racing-yellow', name: 'Racing Yellow', category: 'exterior-color', colorHex: '#F0D200', price: 0, description: 'Solid' },
];

export const wheelOptions: ConfigOption[] = [
  { id: 'wheel-standard', name: '19" Carrera Wheels', category: 'wheels', price: 0, description: 'Standard alloy wheels' },
  { id: 'wheel-sport', name: '20" Carrera S Wheels', category: 'wheels', price: 1600, description: 'Sport design wheels' },
  { id: 'wheel-turbo', name: '20/21" Turbo Design Wheels', category: 'wheels', price: 3200, description: 'Staggered performance wheels' },
  { id: 'wheel-rs', name: '20/21" RS Spyder Wheels', category: 'wheels', price: 4800, description: 'Lightweight forged wheels' },
];

export const interiorOptions: ConfigOption[] = [
  { id: 'interior-black', name: 'Black Leather', category: 'interior', colorHex: '#1A1A1A', price: 0, description: 'Standard smooth-finish leather' },
  { id: 'interior-espresso', name: 'Espresso Leather', category: 'interior', colorHex: '#3B2415', price: 0, description: 'Rich brown leather' },
  { id: 'interior-chalk', name: 'Chalk Leather', category: 'interior', colorHex: '#D4CEBF', price: 650, description: 'Light beige leather' },
  { id: 'interior-red', name: 'Bordeaux Red Leather', category: 'interior', colorHex: '#5C1A1B', price: 650, description: 'Deep red leather' },
];

export const seatOptions: ConfigOption[] = [
  { id: 'seat-standard', name: 'Sports Seats (14-way)', category: 'seats', price: 0, description: 'Standard electrically adjustable sports seats' },
  { id: 'seat-adaptive', name: 'Adaptive Sports Seats Plus (18-way)', category: 'seats', price: 3100, description: 'With memory and enhanced side bolsters' },
  { id: 'seat-bucket', name: 'Full Bucket Seats', category: 'seats', price: 5600, description: 'Carbon-fibre-reinforced bucket seats' },
];

export const packageOptions: ConfigOption[] = [
  { id: 'pkg-sport-chrono', name: 'Sport Chrono Package', category: 'packages', price: 2600, description: 'Mode switch, launch control, Sport Response button, and performance display' },
  { id: 'pkg-pasm', name: 'PASM Sport Suspension (-10 mm)', category: 'packages', price: 2950, description: 'Porsche Active Suspension Management with sport tuning' },
  { id: 'pkg-sport-exhaust', name: 'Sport Exhaust System', category: 'packages', price: 3550, description: 'Enhanced exhaust note with active valve control' },
  { id: 'pkg-pccb', name: 'Porsche Ceramic Composite Brakes (PCCB)', category: 'packages', price: 9240, description: 'Yellow-caliper ceramic brake discs for reduced fade and weight' },
];

export type ConfigCategory = 'exterior-color' | 'wheels' | 'interior' | 'seats' | 'packages';

export const configCategories: { id: ConfigCategory; label: string; options: ConfigOption[] }[] = [
  { id: 'exterior-color', label: 'Exterior Colour', options: exteriorColors },
  { id: 'wheels', label: 'Wheels', options: wheelOptions },
  { id: 'interior', label: 'Interior', options: interiorOptions },
  { id: 'seats', label: 'Seats', options: seatOptions },
  { id: 'packages', label: 'Packages & Equipment', options: packageOptions },
];

export function calculateConfigPrice(basePrice: number, selectedOptions: Record<string, string[]>): number {
  let total = basePrice;
  for (const category of configCategories) {
    const selectedIds = selectedOptions[category.id] || [];
    for (const opt of category.options) {
      if (selectedIds.includes(opt.id) && opt.price) {
        total += opt.price;
      }
    }
  }
  return total;
}
