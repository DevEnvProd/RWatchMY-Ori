export type Sector = 'Hospitality' | 'Retail' | 'Industrial' | 'Office' | 'Diversified';

export interface REITData {
  id: string;
  name: string;
  ticker: string;
  sector: Sector;
  price: number;
  yieldPercent: number;
  nav: number;
  priceToNav: number; // calculated as price / nav
  gearingPercent: number;
  marketCapBillion: number;
  occupancyPercent: number;
  waleYears?: number;
  description: string;
  highlights: string[];
  casinoProximity?: string;
  majorTenants: string[];
  historicalYields: { year: string; yield: number }[];
  priceTrend: number[]; // Sparkline data (mock 7 day or 30 day)
}

export const reitsData: REITData[] = [
  {
    id: 'sunway',
    name: 'Sunway REIT',
    ticker: '5176.KL',
    sector: 'Diversified',
    price: 1.54,
    yieldPercent: 6.2,
    nav: 1.48,
    priceToNav: 1.04,
    gearingPercent: 37.5,
    marketCapBillion: 5.28,
    occupancyPercent: 96.5,
    waleYears: 2.1,
    description: 'A diversified REIT with strong retail dominance and significant hospitality assets, positioned uniquely near major tourist hubs.',
    highlights: ['Strong retail recovery', 'Resilient hotel occupancy', 'Asset enhancement initiatives underway'],
    casinoProximity: 'High integration with Sunway Resort/Theme Park drawing regional tourists, parallel to casino-adjacent models. Proxy for Genting traffic spillover.',
    majorTenants: ['Sunway Pyramid', 'Sunway Medical', 'Sunway University'],
    historicalYields: [
      { year: '2020', yield: 4.8 },
      { year: '2021', yield: 5.1 },
      { year: '2022', yield: 6.0 },
      { year: '2023', yield: 6.4 },
      { year: '2024', yield: 6.2 },
    ],
    priceTrend: [1.45, 1.48, 1.46, 1.50, 1.52, 1.51, 1.54],
  },
  {
    id: 'klcc',
    name: 'KLCC REIT',
    ticker: '5235.KL',
    sector: 'Office', // Often considered diversified or office-heavy
    price: 7.20,
    yieldPercent: 5.4,
    nav: 7.05,
    priceToNav: 1.02,
    gearingPercent: 18.2,
    marketCapBillion: 12.9,
    occupancyPercent: 100,
    waleYears: 7.5,
    description: 'Premium asset portfolio anchored by the Petronas Twin Towers, Suria KLCC, and Mandarin Oriental Hotel.',
    highlights: ['Triple-net leases for offices', 'Flagship retail mall', 'Premium hospitality asset'],
    casinoProximity: 'Central KL location captures premium tourist demographic often intersecting with high-roller casino visitors looking for luxury retail/stays.',
    majorTenants: ['Petronas', 'Mandarin Oriental', 'Suria KLCC Retailers'],
    historicalYields: [
      { year: '2020', yield: 4.5 },
      { year: '2021', yield: 4.7 },
      { year: '2022', yield: 5.2 },
      { year: '2023', yield: 5.5 },
      { year: '2024', yield: 5.4 },
    ],
    priceTrend: [7.00, 7.05, 7.10, 7.08, 7.15, 7.18, 7.20],
  },
  {
    id: 'pavilion',
    name: 'Pavilion REIT',
    ticker: '5212.KL',
    sector: 'Retail',
    price: 1.35,
    yieldPercent: 6.8,
    nav: 1.15,
    priceToNav: 1.17,
    gearingPercent: 35.8,
    marketCapBillion: 4.1,
    occupancyPercent: 92.4,
    description: 'Premier retail REIT focused on high-end malls in prime locations, heavily reliant on tourist footfall.',
    highlights: ['High tourist footfall', 'Luxury brand anchors', 'Recent Pavilion Bukit Jalil injection'],
    casinoProximity: 'Core beneficiary of international tourists who frequent integrated resorts (like Genting) and shop in luxury capital hubs.',
    majorTenants: ['Luxury Boutiques', 'Department Stores', 'F&B Chains'],
    historicalYields: [
      { year: '2020', yield: 5.0 },
      { year: '2021', yield: 5.8 },
      { year: '2022', yield: 6.5 },
      { year: '2023', yield: 6.9 },
      { year: '2024', yield: 6.8 },
    ],
    priceTrend: [1.25, 1.28, 1.30, 1.33, 1.32, 1.34, 1.35],
  },
  {
    id: 'igb',
    name: 'IGB REIT',
    ticker: '5227.KL',
    sector: 'Retail',
    price: 1.76,
    yieldPercent: 5.9,
    nav: 1.08,
    priceToNav: 1.62,
    gearingPercent: 22.4,
    marketCapBillion: 6.3,
    occupancyPercent: 99.8,
    description: 'Owner of Mid Valley Megamall and The Gardens Mall, two of Malaysia most successful retail assets.',
    highlights: ['Near 100% occupancy', 'Strong domestic consumption proxy', 'High tenant retention'],
    majorTenants: ['Metrojaya', 'Aeon', 'Golden Screen Cinemas'],
    historicalYields: [
      { year: '2020', yield: 4.2 },
      { year: '2021', yield: 5.0 },
      { year: '2022', yield: 5.6 },
      { year: '2023', yield: 6.1 },
      { year: '2024', yield: 5.9 },
    ],
    priceTrend: [1.70, 1.72, 1.71, 1.74, 1.75, 1.73, 1.76],
  },
  {
    id: 'axis',
    name: 'Axis REIT',
    ticker: '5106.KL',
    sector: 'Industrial',
    price: 1.82,
    yieldPercent: 5.1,
    nav: 1.55,
    priceToNav: 1.17,
    gearingPercent: 33.1,
    marketCapBillion: 3.1,
    occupancyPercent: 94.2,
    description: 'Pioneer industrial property REIT with a focus on logistics, warehousing, and manufacturing facilities.',
    highlights: ['E-commerce boom beneficiary', 'Stable long-term leases', 'Consistent portfolio expansion'],
    majorTenants: ['Nestle', 'DHL', 'Shopee Express'],
    historicalYields: [
      { year: '2020', yield: 4.9 },
      { year: '2021', yield: 4.8 },
      { year: '2022', yield: 5.0 },
      { year: '2023', yield: 5.2 },
      { year: '2024', yield: 5.1 },
    ],
    priceTrend: [1.85, 1.83, 1.80, 1.81, 1.84, 1.81, 1.82],
  },
  {
    id: 'capitaland',
    name: 'CapitaLand ML Trust',
    ticker: '5180.KL',
    sector: 'Retail',
    price: 0.62,
    yieldPercent: 7.2,
    nav: 1.12,
    priceToNav: 0.55,
    gearingPercent: 44.5,
    marketCapBillion: 1.7,
    occupancyPercent: 88.5,
    description: 'Shopping mall focused REIT with assets across major Malaysian states.',
    highlights: ['Deep NAV discount', 'High yield play', 'Geographic diversification'],
    majorTenants: ['Parkson', 'Giant', 'GSC'],
    historicalYields: [
      { year: '2020', yield: 6.5 },
      { year: '2021', yield: 6.0 },
      { year: '2022', yield: 6.8 },
      { year: '2023', yield: 7.5 },
      { year: '2024', yield: 7.2 },
    ],
    priceTrend: [0.55, 0.56, 0.58, 0.60, 0.61, 0.63, 0.62],
  }
];
