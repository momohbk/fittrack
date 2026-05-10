import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Barcode, Plus } from 'lucide-react'

const macroData = [
  { meal: 'Breakfast', protein: 25, carbs: 40, fat: 15 },
  { meal: 'Lunch', protein: 35, carbs: 55, fat: 20 },
  { meal: 'Dinner', protein: 30, carbs: 45, fat: 18 },
  { meal: 'Snacks', protein: 10, carbs: 25, fat: 8 },
]

const totals = { protein: 100, carbs: 165, fat: 61, calories: 1680 }

export default function Nutrition() {
  const [barcode, setBarcode] = useState('')

  const handleBarcode = (e) => {
    e.preventDefault()
    console.log('Searching barcode:', barcode)
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Nutrition</h1>
      <form onSubmit={handleBarcode} className="flex gap-2">
        <div className="relative flex-1">
          <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" value={barcode} onChange={e => setBarcode(e.target.value)} placeholder="Scan barcode..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <button type="submit" className="px-4 py-2 bg-primary-500 text-white rounded-lg"><Plus className="w-5 h-5" /></button>
      </form>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">Calories</p>
          <p className="text-2xl font-bold text-gray-900">{totals.calories}</p>
          <p className="text-xs text-gray-400">goal: 2,000</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">Protein</p>
          <p className="text-2xl font-bold text-primary-600">{totals.protein}g</p>
          <p className="text-xs text-gray-400">goal: 120g</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">Carbs</p>
          <p className="text-2xl font-bold text-orange-600">{totals.carbs}g</p>
          <p className="text-xs text-gray-400">goal: 200g</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">Fat</p>
          <p className="text-2xl font-bold text-blue-600">{totals.fat}g</p>
          <p className="text-xs text-gray-400">goal: 65g</p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Macros by Meal</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={macroData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="meal" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="protein" fill="#22c55e" name="Protein" />
            <Bar dataKey="carbs" fill="#f97316" name="Carbs" />
            <Bar dataKey="fat" fill="#3b82f6" name="Fat" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
