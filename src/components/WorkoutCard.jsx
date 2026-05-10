import { Clock, Zap } from 'lucide-react'

export default function WorkoutCard({ workout }) {
  const intensityColor = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700',
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={workout.image} alt={workout.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">{workout.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${intensityColor[workout.intensity]}`}>{workout.intensity}</span>
        </div>
        <p className="text-sm text-gray-500 mb-1">{workout.exercises} exercises</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{workout.duration} min</span>
          <span className="flex items-center gap-1"><Zap className="w-4 h-4" />{workout.category}</span>
        </div>
      </div>
    </div>
  )
}
