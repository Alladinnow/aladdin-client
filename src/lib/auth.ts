// Authentication utilities for client-side

export interface User {
  user_id: string
  email: string
  role: string
  is_verified: boolean
  status: string
}

export const getUser = (): User | null => {
  if (typeof window === 'undefined') return null
  
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export const setUser = (user: User) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUser = () => {
  if (typeof window === 'undefined') return
  localStorage.removeItem('user')
  localStorage.removeItem('rememberMe')
}

export const isAuthenticated = (): boolean => {
  return getUser() !== null
}

export const isAdmin = (): boolean => {
  const user = getUser()
  return user?.role === 'admin'
}

export const isBuyer = (): boolean => {
  const user = getUser()
  return user?.role === 'user'
}

export const logout = () => {
  removeUser()
  window.location.href = '/signin'
}
