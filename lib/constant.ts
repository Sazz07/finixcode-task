export const eventData = {
  title: 'Road to the Football Finals',
  venue: 'Bashundhara Sports Complex',
  date: 'Mar 14 from 7:30 PM - 9:30 PM',
  description:
    "Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow's high-rise buildings.",
  location: {
    name: 'NDE Field',
    address: 'Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois',
  },
  host: {
    name: 'Alex Mercer',
    activities: 23,
    rating: 4.5,
  },
  spots: {
    left: 6,
    price: '320k',
  },
};

// Player data for the Player tab
export const players = [
  {
    id: '1',
    name: 'Alex Mercer',
    initials: 'AM',
    role: 'Host',
  },
  {
    id: '2',
    name: 'Jamir Uddin',
    initials: 'JU',
  },
  {
    id: '3',
    name: 'Biplu Ahmed',
    initials: 'BA',
  },
  {
    id: '4',
    name: 'Topu Barman',
    initials: 'TB',
  },
  {
    id: '5',
    name: 'Rakib Hossain',
    initials: 'RH',
  },
];

// Comments data for the Comments tab
export const comments = [
  {
    id: '1',
    author: {
      name: 'Alex Mercer',
      initials: 'AM',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
    replies: [
      {
        id: '2',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
        },
        content: 'missing few players',
        timestamp: '14 min',
      },
      {
        id: '3',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
        },
        content: 'got any friends?',
        timestamp: '14 min',
      },
    ],
  },
  {
    id: '4',
    author: {
      name: 'Alex Mercer',
      initials: 'AM',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
  },
  {
    id: '5',
    author: {
      name: 'Alex Mercer',
      initials: 'AM',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
    replies: [
      {
        id: '6',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
        },
        content: 'got any friends?',
        timestamp: '14 min',
      },
    ],
  },
];

// Similar Events data
export const similarEvents = [
  {
    id: '1',
    title: 'Legends Rise on the Field',
    date: 'Thu, Dec 5 • 12:30AM - 3:30PM',
    location: 'Bashundhara Sports Complex',
    categories: ['Football', 'Below 25y'],
    difficulty: 'Advanced',
    attending: '6/8',
    spotsLeft: 2,
    price: 320,
    images: [
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
    ],
  },
  {
    id: '2',
    title: 'Chasing Glory: Football Showdown',
    date: 'Thu, Dec 5 • 12:30AM - 3:30PM',
    location: 'Bashundhara Sports Complex',
    categories: ['Football', 'Below 25y'],
    difficulty: 'Advanced',
    attending: '5/8',
    spotsLeft: 3,
    price: 320,
    images: [
      '/images/event2.jpg',
      '/images/event2.jpg',
      '/images/event2.jpg',
      '/images/event2.jpg',
    ],
  },
  {
    id: '3',
    title: 'United We Play, United Win',
    date: 'Thu, Dec 5 • 12:30AM - 3:30PM',
    location: 'Bashundhara Sports Complex',
    categories: ['Football', 'Below 25y'],
    difficulty: 'Advanced',
    attending: '4/8',
    spotsLeft: 4,
    price: 320,
    images: [
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
    ],
  },
  {
    id: '4',
    title: 'Football Fever Championship',
    date: 'Thu, Dec 5 • 12:30AM - 3:30PM',
    location: 'Bashundhara Sports Complex',
    categories: ['Football', 'Below 25y'],
    difficulty: 'Advanced',
    attending: '7/8',
    spotsLeft: 1,
    price: 320,
    images: [
      '/images/event2.jpg',
      '/images/event2.jpg',
      '/images/event2.jpg',
      '/images/event2.jpg',
    ],
  },
  {
    id: '5',
    title: 'Victory Road Tournament',
    date: 'Thu, Dec 5 • 12:30AM - 3:30PM',
    location: 'Bashundhara Sports Complex',
    categories: ['Football', 'Below 25y'],
    difficulty: 'Advanced',
    attending: '3/8',
    spotsLeft: 5,
    price: 320,
    images: [
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
      '/images/event1.png',
    ],
  },
];
