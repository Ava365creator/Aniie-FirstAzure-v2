import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaBuilding } from 'react-icons/fa'

interface JobCardProps {
  job: {
    title: string
    company: string
    location: string
    salary: string
    type: string
    posted: string
  }
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <FaBuilding className="w-4 h-4 mr-2" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
        <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaMoneyBillWave className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaClock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Posted {job.posted}</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="btn-primary flex-1 text-center">
          Apply Now
        </button>
        <button className="btn-secondary flex-1 text-center">
          Save Job
        </button>
      </div>
    </div>
  )
}
