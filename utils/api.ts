import { Destination, Booking, User, Payment } from './types'

const createURL = (path: string) => {
  return window.location.origin + path
}

export const createNewDestination = async (destination: Destination) => {
  try {
    const res = await fetch(
      new Request(createURL('/api/destinations'), {
        method: 'POST',
        body: JSON.stringify(destination),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while creating the destination'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in createNewDestination in @utils/api:: createNewDestination: ',
      error
    )
    throw error
  }
}

export const createNewBooking = async (booking: Booking) => {
  try {
    const res = await fetch(
      new Request(createURL('/api/bookings'), {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while creating the booking'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in createNewBooking in @utils/api:: createNewBooking: ',
      error
    )
    throw error
  }
}

export const updateDestination = async (destination: Destination) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/destinations/${destination.id}`), {
        method: 'PUT',
        body: JSON.stringify(destination),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while updating the destination'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in updateDestination in @utils/api:: updateDestination: ',
      error
    )
    throw error
  }
}

export const updateBooking = async (booking: Booking) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/bookings/${booking.id}`), {
        method: 'PUT',
        body: JSON.stringify(booking),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while updating the booking'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in updateBooking in @utils/api:: updateBooking: ',
      error
    )
    throw error
  }
}

export const deleteDestination = async (destinationId: string) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/destinations/${destinationId}`), {
        method: 'DELETE',
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while deleting the destination'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in deleteDestination in @utils/api:: deleteDestination: ',
      error
    )
    throw error
  }
}

export const deleteBooking = async (bookingId: string) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/bookings/${bookingId}`), {
        method: 'DELETE',
      })
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(
        errorData.error || 'An error occurred while deleting the booking'
      )
    }

    const result = await res.json()
    return result.data
  } catch (error) {
    console.error(
      'Error in deleteBooking in @utils/api:: deleteBooking: ',
      error
    )
    throw error
  }
}
