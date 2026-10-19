// ============================================================
// Porsche 3D Experience — Core Type Definitions
// ============================================================

// ── Vehicle Types ──────────────────────────────────────────

export type PowertrainType = 'petrol' | 'electric' | 'hybrid';
export type BodyStyle = 'coupe' | 'convertible' | 'sedan' | 'suv' | 'wagon' | 'sports-car';
export type ModelCategory = 'sports-car' | 'sedan' | 'suv' | 'electric';

export interface VehicleSpecifications {
  engine?: string;
  displacement?: string;
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  drivetrain: string;
  transmission: string;
  weight?: string;
  length: string;
  width: string;
  height: string;
  wheelbase: string;
  seatingCapacity: number;
  luggageCapacity?: string;
  fuelEconomy?: string;
  co2Emissions?: string;
  batteryCapacity?: string;
  electricRange?: string;
  chargingTime?: string;
  fastCharging?: string;
}

export interface VehicleModel {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  modelYear: number;
  category: ModelCategory;
  bodyStyle: BodyStyle;
  powertrain: PowertrainType;
  tagline: string;
  description: string;
  specifications: VehicleSpecifications;
  startingPrice?: number;
  priceDisclaimer?: string;
  currency: string;
  market: string;
  heroImage: string;
  galleryImages: string[];
  published: boolean;
}

export interface VehicleHotspot {
  id: string;
  label: string;
  category: string;
  description: string;
  details: string;
  technology?: string;
  position: [number, number, number];
  cameraTarget?: [number, number, number];
  cameraPosition?: [number, number, number];
  icon?: string;
}

// ── Configurator Types ─────────────────────────────────────

export interface ConfigOption {
  id: string;
  name: string;
  category: 'exterior-color' | 'wheels' | 'interior' | 'seats' | 'packages' | 'equipment';
  colorHex?: string;
  previewImage?: string;
  price?: number;
  priceLabel?: string;
  description?: string;
}

export interface VehicleConfiguration {
  modelId: string;
  selectedOptions: Record<string, string>;
  estimatedPrice?: number;
  currency: string;
}

// ── Booking Types ──────────────────────────────────────────

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface DealershipLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  timezone: string;
  active: boolean;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface BookingFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  modelId: string;
  locationId: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  privacyAcknowledged: boolean;
}

export interface BookingConfirmation {
  id: string;
  bookingReference: string;
  customerName: string;
  customerEmail: string;
  modelName: string;
  locationName: string;
  preferredDate: string;
  preferredTime: string;
  status: BookingStatus;
  createdAt: string;
}

// ── Engineering Section Types ──────────────────────────────

export interface EngineeringChapter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  components: EngineeringComponent[];
}

export interface EngineeringComponent {
  title: string;
  description: string;
  details?: string;
  icon?: string;
}

// ── Navigation ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}
