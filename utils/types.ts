export interface User {
  id: string
  clerkUserId: string
  email: string
  firstName?: string | null
  lastName?: string | null
  imageUrl?: string | null
  createdAt: Date
  updatedAt: Date
  bookings?: Booking[] // Optional list of bookings related to the user
}

export interface Destination {
  id: string
  title: string
  description: RichContent | string // Can store JSON, Markdown, or HTML
  location: string
  headCountLimit: number
  durationLimit: number // Duration in days
  amountPerHead: number
  returnFlightOption: boolean
  laptopImageUrl: string
  mobileImageUrl: string
  createdAt: Date
  updatedAt: Date
  bookings?: Booking[] // Optional list of bookings related to the destination
}

// Define RichContent for JSON descriptions
export type RichContent = {
  sections: Section[]
}

export type Section = {
  type: 'heading' | 'paragraph' | 'table'
  content: string | TableContent
}

export type TableContent = {
  headers: string[]
  rows: string[][]
}

export interface Booking {
  id: string
  userId: string
  destinationId?: string | null // Nullable for custom destinations
  customDestination?: CustomDestination | null // For personalized bookings
  status: BookingStatus
  createdAt: Date
  updatedAt: Date
  user?: User // Optional user details
  destination?: Destination // Optional destination details
  payment?: Payment // Optional payment details
}

// Custom destination for personalized tours
export interface CustomDestination {
  location: string
  startDate: Date
  endDate: Date
  headCount: number
  returnFlight: boolean
}

// Booking status enum
export type BookingStatus = 'PENDING' | 'COMPLETED' | 'FAILED'

export interface Payment {
  id: string
  bookingId: string
  amount: number
  method: PaymentMethod
  status: BookingStatus
  transactionId?: string | null // Optional transaction tracking ID
  createdAt: Date
  updatedAt: Date
  booking?: Booking // Optional booking details
}

// Payment method enum
export type PaymentMethod = 'MPESA' | 'VISA'
