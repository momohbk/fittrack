import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Footprints, Flame, Clock } from 'lucide-react'

const weeklyData = [
  { day: 'Mon', steps: 8500, calories: 2100, minutes: 45 },
  { day: 'Tue', steps: 10200, calories: 2350, minutes: 55 },
  { day: 'Wed', steps: 7600, calories: 1900, minutes: 30 },
  { day: 'Thu', steps: 11800, calories: 2600, minutes: 60 },
  { day: 'Fri', steps: 9500, calories: 2200, minutes: 40 },
  { day: 'Sat', steps: 14000, calories: 2900, minutes: 75 },
  { day: 'Sun', steps: 6200, calories: 1800, minutes: 25 },
]

const stats = [
  { label: 'Steps', value: '9,800', icon: Footprints, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Calories', value: '2,250', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-100' },
  { label: 'Active Min', value: '47', icon: Clock, color: 'text-green-600', bg: 'bg-green-100' },
]

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm">
            <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center mb-2`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="steps" stroke="#22c55e" strokeWidth={2} />
            <Line type="monotone" dataKey="calories" stroke="#f97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
