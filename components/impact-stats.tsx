type Props = {
  totalImpact: {
    loansSupported: number
    mealsShared: number
    treesPlanted: number
    peopleHelped: number
  }
}

const ImpactStats = ({ totalImpact }: Props) => {
  const stats = [
    {
      value: totalImpact.loansSupported,
      label: 'Loans Supported',
      icon: '💰',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      value: totalImpact.mealsShared,
      label: 'Meals Shared',
      icon: '🍽️',
      color: 'bg-green-100 text-green-800',
    },
    {
      value: totalImpact.treesPlanted,
      label: 'Trees Planted',
      icon: '🌳',
      color: 'bg-emerald-100 text-emerald-800',
    },
    {
      value: totalImpact.peopleHelped,
      label: 'People Helped',
      icon: '💧',
      color: 'bg-cyan-100 text-cyan-800',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.color} rounded-lg p-6 text-center shadow-md transform transition duration-200 hover:scale-105`}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold mb-1">{stat.value.toLocaleString()}</div>
          <div className="text-sm font-semibold uppercase tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImpactStats
