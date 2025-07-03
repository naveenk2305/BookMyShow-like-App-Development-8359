export const movies = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    genre: ['Action', 'Adventure', 'Drama'],
    duration: '181 min',
    rating: 8.4,
    language: 'English',
    releaseDate: '2024-04-26',
    poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=600&fit=crop',
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
    director: 'Anthony Russo, Joe Russo',
    trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    status: 'now-playing',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis', 'Miraj Cinemas'],
    shows: [
      { time: '10:00 AM', theater: 'PVR Cinemas', price: 250, available: 45 },
      { time: '1:30 PM', theater: 'PVR Cinemas', price: 300, available: 32 },
      { time: '5:00 PM', theater: 'INOX', price: 280, available: 28 },
      { time: '8:30 PM', theater: 'INOX', price: 350, available: 15 },
    ]
  },
  {
    id: '2',
    title: 'The Dark Knight',
    genre: ['Action', 'Crime', 'Drama'],
    duration: '152 min',
    rating: 9.0,
    language: 'English',
    releaseDate: '2024-07-18',
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=600&fit=crop',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    director: 'Christopher Nolan',
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    status: 'now-playing',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis'],
    shows: [
      { time: '11:00 AM', theater: 'PVR Cinemas', price: 200, available: 38 },
      { time: '2:30 PM', theater: 'Cinepolis', price: 250, available: 42 },
      { time: '6:00 PM', theater: 'INOX', price: 300, available: 25 },
      { time: '9:30 PM', theater: 'PVR Cinemas', price: 320, available: 18 },
    ]
  },
  {
    id: '3',
    title: 'Inception',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    duration: '148 min',
    rating: 8.8,
    language: 'English',
    releaseDate: '2024-07-16',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=600&fit=crop',
    description: 'A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy', 'Ellen Page'],
    director: 'Christopher Nolan',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    status: 'coming-soon',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis', 'Miraj Cinemas'],
    shows: [
      { time: '10:30 AM', theater: 'INOX', price: 280, available: 40 },
      { time: '2:00 PM', theater: 'PVR Cinemas', price: 320, available: 35 },
      { time: '5:30 PM', theater: 'Cinepolis', price: 300, available: 30 },
      { time: '9:00 PM', theater: 'Miraj Cinemas', price: 350, available: 20 },
    ]
  },
  {
    id: '4',
    title: 'Interstellar',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    duration: '169 min',
    rating: 8.6,
    language: 'English',
    releaseDate: '2024-11-07',
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    director: 'Christopher Nolan',
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    status: 'now-playing',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis'],
    shows: [
      { time: '9:30 AM', theater: 'PVR Cinemas', price: 240, available: 50 },
      { time: '1:00 PM', theater: 'INOX', price: 280, available: 45 },
      { time: '4:30 PM', theater: 'Cinepolis', price: 300, available: 38 },
      { time: '8:00 PM', theater: 'PVR Cinemas', price: 340, available: 22 },
    ]
  },
  {
    id: '5',
    title: 'Spider-Man: No Way Home',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: '148 min',
    rating: 8.2,
    language: 'English',
    releaseDate: '2024-12-17',
    poster: 'https://images.unsplash.com/photo-1635863138275-d9864d32b2d4?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1635863138275-d9864d32b2d4?w=1200&h=600&fit=crop',
    description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Jacob Batalon'],
    director: 'Jon Watts',
    trailer: 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
    status: 'coming-soon',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis', 'Miraj Cinemas'],
    shows: [
      { time: '10:00 AM', theater: 'Cinepolis', price: 260, available: 48 },
      { time: '1:30 PM', theater: 'PVR Cinemas', price: 300, available: 35 },
      { time: '5:00 PM', theater: 'INOX', price: 320, available: 28 },
      { time: '8:30 PM', theater: 'Miraj Cinemas', price: 380, available: 12 },
    ]
  },
  {
    id: '6',
    title: 'Dune',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    duration: '155 min',
    rating: 8.0,
    language: 'English',
    releaseDate: '2024-10-22',
    poster: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=600&fit=crop',
    description: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac', 'Josh Brolin'],
    director: 'Denis Villeneuve',
    trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4',
    status: 'now-playing',
    theaters: ['PVR Cinemas', 'INOX', 'Cinepolis'],
    shows: [
      { time: '11:30 AM', theater: 'INOX', price: 270, available: 42 },
      { time: '3:00 PM', theater: 'PVR Cinemas', price: 310, available: 36 },
      { time: '6:30 PM', theater: 'Cinepolis', price: 330, available: 24 },
      { time: '10:00 PM', theater: 'INOX', price: 360, available: 18 },
    ]
  }
];

export const theaters = [
  {
    id: '1',
    name: 'PVR Cinemas',
    location: 'City Mall, Downtown',
    distance: '2.5 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Access', 'IMAX'],
    rating: 4.2,
    screens: 8,
    image: 'https://images.unsplash.com/photo-1489599843788-8b4d3c9e34b7?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'INOX',
    location: 'Phoenix Mall, Sector 14',
    distance: '3.1 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Access', 'Dolby Atmos'],
    rating: 4.3,
    screens: 6,
    image: 'https://images.unsplash.com/photo-1489599843788-8b4d3c9e34b7?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Cinepolis',
    location: 'DLF Mall, Gurgaon',
    distance: '4.2 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Access', '4DX'],
    rating: 4.1,
    screens: 7,
    image: 'https://images.unsplash.com/photo-1489599843788-8b4d3c9e34b7?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Miraj Cinemas',
    location: 'Select Mall, Sector 18',
    distance: '5.0 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Access'],
    rating: 4.0,
    screens: 5,
    image: 'https://images.unsplash.com/photo-1489599843788-8b4d3c9e34b7?w=400&h=300&fit=crop'
  }
];

export const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'
];

export const genres = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Animation', 'Crime'
];

export const languages = [
  'English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Bengali', 'Marathi'
];