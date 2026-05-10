import { useState } from 'react'
import { useForm } from 'react-hook-form'
import WorkoutCard from '../components/WorkoutCard'
import { Search } from 'lucide-react'

const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT']

const workouts = [
  { id: 1, title: 'Full Body Strength', category: 'Strength', exercises: 8, duration: 45, intensity: 'High', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400' },
  { id: 2, title: 'Morning Yoga Flow', category: 'Yoga', exercises: 12, duration: 30, intensity: 'Low', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400' },
  { id: 3, title: 'HIIT Blast', category: 'HIIT', exercises: 10, duration: 25, intensity: 'High', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400' },
  { id: 4, title: 'Cardio Endurance', category: 'Cardio', exercises: 6, duration: 40, intensity: 'Medium', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
]

export default function Workouts() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { register, handleSubmit, reset } = useForm()
  const [showForm, setShowForm] = useState(false)

  const filtered = activeCategory === 'All' ? workouts : workouts.filter(w => w.category === activeCategory)

  const onSubmit = (data) => {
    console.log('New workout:', data)
    reset()
    setShowForm(false)
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Workouts</h1>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(c => (
          <button key={c} onClick={() => setActiveCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === c ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{c}</button>
        ))}
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Search workouts..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <button onClick={() => setShowForm(!showForm)} className="w-full py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition">
        {showForm ? 'Cancel' : 'Create Workout'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl p-4 shadow-sm space-y-3">
          <input {...register('title', { required: true })} placeholder="Workout title" className="w-full px-3 py-2 border rounded-lg" />
          <select {...register('category')} className="w-full px-3 py-2 border rounded-lg">
            <option value="Strength">Strength</option>
            <option value="Cardio">Cardio</option>
            <option value="Yoga">Yoga</option>
            <option value="HIIT">HIIT</option>
          </select>
          <input {...register('duration')} type="number" placeholder="Duration (min)" className="w-full px-3 py-2 border rounded-lg" />
          <button type="submit" className="w-full py-2 bg-primary-500 text-white rounded-lg font-medium">Save Workout</button>
        </form>
      )}
      <div className="grid gap-4">
        {filtered.map(w => <WorkoutCard key={w.id} workout={w} />)}
      </div>
    </div>
  )
}
