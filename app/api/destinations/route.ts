import { getUserByClerkId } from '@/utils/auth'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/utils/db' // Update path as needed
import { z } from 'zod' // Optional: Use Zod for data validation

// Define schema for destination validation
const destinationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.union([z.string(), z.object({})]), // Allow string or rich content
  location: z.string().min(1, 'Location is required'),
  headCountL: z.number().int().positive('Headcount limit must be positive'),
  durationLimit: z.number().int().positive('Duration limit must be positive'),
  amountPerHead: z.number().positive('Amount per head must be positive'),
  returnFlightOption: z.boolean(),
  imageUrl: z.string().url('Invalid image URL'),
})

// Handle POST request for creating a new destination
export async function POST(req: NextRequest) {
  try {
    // Parse and validate the incoming request body
    const body = await req.json()
    const destinationData = destinationSchema.parse(body)

    // Create a new destination in the database
    const newDestination = await prisma.destination.create({
      data: destinationData,
    })

    // Respond with the created destination
    return NextResponse.json(
      { data: newDestination, message: 'Destination created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating destination:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e) => e.message).join(', ') },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'An error occurred while creating the destination' },
      { status: 500 }
    )
  }
}
