import React, { useState } from 'react'

export function PricingMaster({ role }) {
  const [prices, setPrices] = useState([
    { id: '1', product_name: 'Tusker Lager', counter: 'Main Bar', price: 250 },
    { id: '2', product_name: 'Tusker Lager', counter: 'VIP Lounge', price: 300 },
    { id: '3', product_name: 'White Cap', counter: 'Main Bar', price: 250 },
    { id: '4', product_name: 'Smirnoff Ice', counter: 'Garden Bar', price: 350 },
  ])
  const [selectedCounter, setSelectedCounter] = useState('All')

  const filteredPrices = selectedCounter === 'All' 
    ? prices 
    : prices.filter(p => p.counter === selectedCounter)

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Counter Pricing Master</h2>
          <p className="subtitle">Override standard prices per counter station</p>
        </div>
      </div>

      <div className="filter-bar">
        <label>Filter by Counter: </label>
        <select value={selectedCounter} onChange={(e) => setSelectedCounter(e.target.value)}>
          <option value="All">All Counters</option>
          <option value="Main Bar">Main Bar</option>
          <option value="VIP Lounge">VIP Lounge</option>
          <option value="Garden Bar">Garden Bar</option>
          <option value="Bottle Store">Bottle Store</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Counter / Station</th>
              <th>Selling Price (KES)</th>
              {role === 'owner' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredPrices.map((item) => (
              <tr key={item.id}>
                <td className="font-weight-bold">{item.product_name}</td>
                <td><span className="badge-counter">{item.counter}</span></td>
                <td className="text-gold">KES {item.price.toLocaleString()}</td>
                {role === 'owner' && (
                  <td>
                    <button className="btn-text">Edit Price</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
