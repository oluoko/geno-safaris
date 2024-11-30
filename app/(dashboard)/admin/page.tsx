import { getUserByClerkId } from '@/utils/auth'

const Admin = () => {
  const user = getUserByClerkId()
  console.log('User', user)

  return <div>Welcome to the admin page.</div>
}

export default Admin
