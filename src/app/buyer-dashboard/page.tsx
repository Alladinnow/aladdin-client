'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUser, logout } from '@/lib/auth'

export default function BuyerDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const currentUser = getUser()
    if (!currentUser) {
      router.push('/signin')
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
            <h1 className="h2">Buyer Dashboard</h1>
            <p className="text-muted mt-2">Welcome back, {user.email}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-4 mt-6">
            <div className="stat-card">
              <div className="stat-value">12</div>
              <div className="stat-label">Active Orders</div>
              <div className="stat-trend up">+3 new</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">8</div>
              <div className="stat-label">Pending Quotes</div>
              <div className="stat-trend">2 responses</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$18.2K</div>
              <div className="stat-label">Total Spent</div>
              <div className="stat-trend up">+15%</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24</div>
              <div className="stat-label">Saved Suppliers</div>
              <div className="stat-trend">-</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="h4">Quick Actions</h3>
            </div>
            <div className="card-body">
              <div className="grid grid-4">
                <Link href="/" className="btn btn-primary">Browse Products</Link>
                <button className="btn btn-outline">Request Quote</button>
                <button className="btn btn-outline">Track Orders</button>
                <button className="btn btn-outline">Saved Items</button>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="h4">Recent Orders</h3>
            </div>
            <div className="card-body">
              <div className="empty-state">
                <div className="empty-state-icon">🛒</div>
                <h4 className="h5">No orders yet</h4>
                <p className="text-muted">Start shopping to see your orders here</p>
                <Link href="/" className="btn btn-primary mt-4">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>

          {/* Recommended Suppliers */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="h4">Recommended Suppliers</h3>
            </div>
            <div className="card-body">
              <div className="grid grid-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="card" style={{ cursor: 'pointer' }}>
                    <div style={{ 
                      aspectRatio: '16/9', 
                      background: 'var(--color-bg-alt)', 
                      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-4xl)',
                    }}>
                      🏭
                    </div>
                    <div className="card-body">
                      <h4 className="h5">ABC Manufacturing Co.</h4>
                      <p className="text-sm text-muted mt-2">Electronics & Components</p>
                      <div className="cluster mt-3" style={{ justifyContent: 'space-between' }}>
                        <div className="badge badge-success">Verified</div>
                        <div className="text-sm">⭐ 4.8 (120 reviews)</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
