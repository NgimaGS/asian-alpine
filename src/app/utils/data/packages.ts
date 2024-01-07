export interface PackageData {
  name: string;
  destination: string;
  maxAltitude: number;
  activities: string[];
  groupSize: number;
  tripGrade: string;
  bestSeasons: string[];
  departureFrom: string;
  package: string;
  arrivalOn: string;
  description: string;
  imgUrl: string;
  itinerary: string[];
}

export const packageData: PackageData[] = [
  {
    name: "Upper Mustang Trek",
    destination: "Nepal",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "Mid",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/upper-mustang.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  {
    name: "Island Peak Trek",
    destination: "Tibet",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "Mid",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/island-peak.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  {
    name: "Everest Three Pass Trek / High Pass Everest",
    destination: "Nepal",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "Low",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/everest-three-pass.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  {
    name: "Annapurna Circuit Trek",
    destination: "Nepal",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "Mid",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/annapurna-circuit.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  {
    name: "Jomsom Muktinath Trek",
    destination: "Nepal",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "Low",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/jomsom-muktinath.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  {
    name: "Everest Base Camp Trek",
    destination: "Nepal",
    maxAltitude: 5000,
    activities: ["Hiking", "Camping"],
    groupSize: 10,
    tripGrade: "High",
    bestSeasons: ["Spring", "Fall"],
    departureFrom: "City A",
    package: "Adventure Explorer",
    arrivalOn: "2024-05-15",
    description: "An exciting adventure to explore the mountain peak.",
    imgUrl: "/assets/landing_page/packages/everest-base-camp.jpg",
    itinerary: [
      "Day 1: Departure",
      "Day 2: Hiking",
      "Day 3: Camping",
      "Day 4: Return",
    ],
  },
  // Add more package data objects as needed
];
