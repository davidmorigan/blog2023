export type ImpactOrganizationData = {
  name: string
  description: string
  profileUrl: string
  memberSince?: string
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
    memberSince: 'November 2011',
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
    memberSince: 'January 2020',
    stats: {
      mealsShared: 531,
      goalsAchieved: 22,
      countriesReached: 14,
    },
    icon: '🍽️',
  },
  treeNation: {
    name: 'Tree-Nation',
    description: 'Planting trees to combat climate change',
    profileUrl: 'https://tree-nation.com/es/perfil/david-mora',
    memberSince: 'June 2023',
    stats: {
      treesPlanted: 100,
      co2Offset: 25000, // kg
    },
    icon: '🌳',
  },
  charityWater: {
    name: 'charity: water',
    description: 'Bringing clean water to people in need',
    profileUrl: 'https://www.charitywater.org/davidmorigan',
    memberSince: '2025',
    stats: {
      donations: 5,
      peopleServed: 250,
    },
    icon: '💧',
  },
}
