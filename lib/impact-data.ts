export type ImpactOrganizationData = {
  name: string
  description: string
  profileUrl: string
  stats: {
    [key: string]: number
  }
  icon: string
}

export type ImpactData = {
  kiva: ImpactOrganizationData
  shareTheMeal: ImpactOrganizationData
  treeNation: ImpactOrganizationData
  charityWater: ImpactOrganizationData
}

export const impactData: ImpactData = {
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
