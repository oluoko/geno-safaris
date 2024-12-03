import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  try {
    const user = await getUserByClerkId()
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const { name, description, price, duration } = await req.json()

    if (!name || !description || !price || !duration) {
      return NextResponse.json(
        { error: 'Missing required fields to create destination' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error in POST /api/tours:: ', error)
    return NextResponse.json(
      { error: 'An error occurred while creating the tour' },
      { status: 500 }
    )
  }
}
