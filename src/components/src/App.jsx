import React, { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { AuthLogin } from './components/AuthLogin'
import { ProductsPage } from './components/ProductsPage'
import { PricingMaster } from './components/PricingMaster'
import './App.css'

export default function App() {
  const { user, role, counter, setCounter, login, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('products')

  if (!user) {
    return <AuthLogin onLogin={login} />
  }

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-brand">
          <h1>MojaStock</h1>
          <span className="badge-role">{role.toUpperCase()}</span>
          {role === 'staff' && <span className="badge-counter">{counter}</span>}
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={logout}>Sign Out</button>
        </div>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          📦 Products Master
        </button>
        <button 
          className={`nav-btn ${activeTab === 'pricing' ? 'active' : ''}`}
          onClick={() => setActiveTab('pricing')}
        >
          💰 Pricing Master
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'products' && <ProductsPage role={role} />}
        {activeTab === 'pricing' && <PricingMaster role={role} />}
      </main>
    </div>
  )
}
