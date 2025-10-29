'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUser, logout } from '@/lib/auth'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const currentUser = getUser()
    if (!currentUser) {
      router.push('/signin')
      return
    }
    if (currentUser.role !== 'admin') {
      router.push('/buyer-dashboard')
      return
    }
    setUser(currentUser)
  }, [router])

  if (!user) {
    return (
      <div className="center" style={{ minHeight: '100vh' }}>
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container cluster" style={{ justifyContent: 'space-between' }}>
          <Link href="/" className="h5" style={{ color: 'white' }}>
            Airavat
          </Link>
          <div className="cluster">
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{user.email}</span>
            <button onClick={logout} className="btn btn-ghost" style={{ color: 'white' }}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
        <div className="stack">
          <div>
            <h1 className="h2">Supplier Dashboard</h1>
            <p className="text-muted mt-2">Welcome back, {user.email}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-4 mt-6">
            <div className="stat-card">
              <div className="stat-value">142</div>
              <div className="stat-label">Products Listed</div>
              <div className="stat-trend up">+12% this month</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">28</div>
              <div className="stat-label">Pending Inquiries</div>
              <div className="stat-trend up">+5 new</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$24.5K</div>
              <div className="stat-label">Total Sales</div>
              <div className="stat-trend up">+8.2%</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.8</div>
              <div className="stat-label">Average Rating</div>
              <div className="stat-trend up">+0.3</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="h4">Quick Actions</h3>
            </div>
            <div className="card-body">
              <div className="grid grid-4">
                <button className="btn btn-primary">Add Product</button>
                <button className="btn btn-outline">View Inquiries</button>
                <button className="btn btn-outline">Manage Orders</button>
                <button className="btn btn-outline">View Analytics</button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="h4">Recent Activity</h3>
            </div>
            <div className="card-body">
              <div className="empty-state">
                <div className="empty-state-icon">📦</div>
                <h4 className="h5">No recent activity</h4>
                <p className="text-muted">Your recent orders and inquiries will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
