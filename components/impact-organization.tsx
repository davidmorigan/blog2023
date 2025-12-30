type Stat = {
  label: string
  value: string | number
}

type Props = {
  name: string
  description: string
  icon: string
  profileUrl: string
  stats: Stat[]
}

const ImpactOrganization = ({ name, description, icon, profileUrl, stats }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="text-5xl mr-4">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded p-4">
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white font-semibold py-2 px-6 rounded hover:bg-gray-800 transition-colors duration-200"
        >
          View Profile →
        </a>
      </div>
    </div>
  )
}

export default ImpactOrganization
