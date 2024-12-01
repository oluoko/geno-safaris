import { authMiddleware, clerkClient } from '@clerk/nextjs/server'

const publicRoutes = ['/']

export default authMiddleware({
  publicRoutes,
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
