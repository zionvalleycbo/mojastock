import React, { useState } from 'react'

export function AuthLogin({ onLogin }) {
  const [role, setRole] = useState('staff')
  const [counter, setCounter] = useState('Main Bar')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const res = onLogin(role, counter, pin)
    if (!res.success) {
      setError(res.error)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>MojaStock Login</h2>
        <p className="subtitle">Inventory & Pricing Management</p>
        
        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Role</label>
            <div className="role-selector">
              <button
                type="button"
                className={`role-btn ${role === 'staff' ? 'active' : ''}`}
                onClick={() => setRole('staff')}
              >
                Staff (Counter)
              </button>
              <button
                type="button"
                className={`role-btn ${role === 'owner' ? 'active' : ''}`}
                onClick={() => setRole('owner')}
              >
                Owner / Admin
              </button>
            </div>
          </div>

          {role === 'staff' && (
            <div className="form-group">
              <label>Select Counter / Station</label>
              <select value={counter} onChange={(e) => setCounter(e.target.value)}>
                <option value="Main Bar">Main Bar</option>
                <option value="VIP Lounge">VIP Lounge</option>
                <option value="Garden Bar">Garden Bar</option>
                <option value="Bottle Store">Bottle Store</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label>Security PIN (Try: 1234)</label>
            <input
              type="password"
              maxLength="4"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Sign In to {role === 'owner' ? 'Owner Dashboard' : counter}
          </button>
        </form>
      </div>
    </div>
  )
}
