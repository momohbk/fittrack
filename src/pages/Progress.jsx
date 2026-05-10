import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const weightData = [
  { date: 'Week 1', weight: 82 },
  { date: 'Week 2', weight: 81.2 },
  { date: 'Week 3', weight: 80.5 },
  { date: 'Week 4', weight: 79.8 },
  { date: 'Week 5', weight: 79.1 },
  { date: 'Week 6', weight: 78.4 },
  { date: 'Week 7', weight: 77.9 },
  { date: 'Week 8', weight: 77.2 },
]

const measurements = [
  { label: 'Chest', current: '102 cm', change: '-3 cm' },
  { label: 'Waist', current: '84 cm', change: '-5 cm' },
  { label: 'Arms', current: '38 cm', change: '+2 cm' },
  { label: 'Thighs', current: '56 cm', change: '+1 cm' },
]

export default function Progress() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weight Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {measurements.map((m) => (
          <div key={m.label} className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className="text-xl font-bold text-gray-900">{m.current}</p>
            <p className={`text-sm font-medium ${m.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'}`}>{m.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
