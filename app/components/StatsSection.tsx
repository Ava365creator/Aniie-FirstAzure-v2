import { FaUsers, FaBuilding, FaHandshake, FaGlobeAmericas } from 'react-icons/fa'

export default function StatsSection() {
  const stats = [
    { icon: <FaUsers className="w-8 h-8" />, value: '50,000+', label: 'Active Candidates' },
    { icon: <FaBuilding className="w-8 h-8" />, value: '2,500+', label: 'Companies' },
    { icon: <FaHandshake className="w-8 h-8" />, value: '15,000+', label: 'Successful Placements' },
    { icon: <FaGlobeAmericas className="w-8 h-8" />, value: '25+', label: 'Countries' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
