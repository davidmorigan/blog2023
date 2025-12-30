import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import ImpactStats from '../components/impact-stats'
import ImpactOrganization from '../components/impact-organization'

export default function Impact() {
  // Charitable impact data - can be fetched from APIs or static
  const impactData = {
    kiva: {
      name: 'Kiva',
      description: 'Empowering entrepreneurs through microloans',
      profileUrl: 'https://www.kiva.org/lender/davidmorigan',
      stats: {
        loansSupported: 150,
        totalLoaned: 3750,
        countriesReached: 45,
      },
      icon: '💰',
    },
    shareTheMeal: {
      name: 'ShareTheMeal',
      description: 'Fighting global hunger one meal at a time',
      profileUrl: 'https://sharethemeal.org/',
      stats: {
        mealsShared: 500,
        childrenHelped: 250,
      },
      icon: '🍽️',
    },
    treeNation: {
      name: 'Tree-Nation',
      description: 'Planting trees to combat climate change',
      profileUrl: 'https://tree-nation.com/profile/davidmorigan',
      stats: {
        treesPlanted: 100,
        co2Offset: 25000, // kg
      },
      icon: '🌳',
    },
    charityWater: {
      name: 'charity: water',
      description: 'Bringing clean water to people in need',
      profileUrl: 'https://www.charitywater.org/',
      stats: {
        donations: 5,
        peopleServed: 250,
      },
      icon: '💧',
    },
  }

  const totalImpact = {
    loansSupported: impactData.kiva.stats.loansSupported,
    mealsShared: impactData.shareTheMeal.stats.mealsShared,
    treesPlanted: impactData.treeNation.stats.treesPlanted,
    peopleHelped: impactData.charityWater.stats.peopleServed,
  }

  return (
    <Layout>
      <Head>
        <title>Impact - David Morigan</title>
        <meta
          name="description"
          content="Charitable impact and donations by David Morigan"
        />
      </Head>
      <Container>
        <Header />
        <article className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
              Making an Impact
            </h1>
            
            <p className="text-lg leading-relaxed mb-12 text-center text-gray-600">
              Through charitable giving and active participation, I strive to contribute
              to causes that make a meaningful difference in the world.
            </p>

            <ImpactStats totalImpact={totalImpact} />

            <div className="mt-16 space-y-12">
              <ImpactOrganization
                name={impactData.kiva.name}
                description={impactData.kiva.description}
                icon={impactData.kiva.icon}
                profileUrl={impactData.kiva.profileUrl}
                stats={[
                  { label: 'Loans Supported', value: impactData.kiva.stats.loansSupported },
                  { label: 'Total Loaned', value: `$${impactData.kiva.stats.totalLoaned}` },
                  { label: 'Countries Reached', value: impactData.kiva.stats.countriesReached },
                ]}
              />

              <ImpactOrganization
                name={impactData.shareTheMeal.name}
                description={impactData.shareTheMeal.description}
                icon={impactData.shareTheMeal.icon}
                profileUrl={impactData.shareTheMeal.profileUrl}
                stats={[
                  { label: 'Meals Shared', value: impactData.shareTheMeal.stats.mealsShared },
                  { label: 'Children Helped', value: impactData.shareTheMeal.stats.childrenHelped },
                ]}
              />

              <ImpactOrganization
                name={impactData.treeNation.name}
                description={impactData.treeNation.description}
                icon={impactData.treeNation.icon}
                profileUrl={impactData.treeNation.profileUrl}
                stats={[
                  { label: 'Trees Planted', value: impactData.treeNation.stats.treesPlanted },
                  { label: 'CO₂ Offset', value: `${impactData.treeNation.stats.co2Offset} kg` },
                ]}
              />

              <ImpactOrganization
                name={impactData.charityWater.name}
                description={impactData.charityWater.description}
                icon={impactData.charityWater.icon}
                profileUrl={impactData.charityWater.profileUrl}
                stats={[
                  { label: 'Donations', value: impactData.charityWater.stats.donations },
                  { label: 'People Served', value: impactData.charityWater.stats.peopleServed },
                ]}
              />
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">About This Impact</h2>
              <p className="text-gray-700 leading-relaxed">
                These numbers represent my ongoing commitment to making a positive impact
                in the world. From supporting entrepreneurs with microloans through Kiva,
                to feeding children via ShareTheMeal, planting trees with Tree-Nation,
                and providing clean water through charity: water, each contribution helps
                create meaningful change.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This page is updated periodically to reflect new donations and activities.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  )
}
