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
      bgColor: '#34735f',
      textColor: '#FFFFFF',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
    replies: [
      {
        id: '2',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
          bgColor: '#FBE9D7',
          textColor: '#E86C51',
        },
        content: 'missing few players',
        timestamp: '14 min',
      },
      {
        id: '3',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
          bgColor: '#FBE9D7',
          textColor: '#E86C51',
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
      bgColor: '#34735f',
      textColor: '#FFFFFF',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
  },
  {
    id: '5',
    author: {
      name: 'Alex Mercer',
      initials: 'AM',
      bgColor: '#34735f',
      textColor: '#FFFFFF',
    },
    content: "Looking forward to the game! What's the final player count?",
    timestamp: '14 min',
    replies: [
      {
        id: '6',
        author: {
          name: 'Rifat Khan',
          initials: 'RK',
          bgColor: '#FBE9D7',
          textColor: '#E86C51',
        },
        content: 'got any friends?',
        timestamp: '14 min',
      },
    ],
  },
];
