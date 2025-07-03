import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { movies } from '../data/mockData';

const { FiStar, FiClock, FiCalendar, FiUser, FiMapPin, FiPlay, FiHeart } = FiIcons;

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Movie not found</h2>
          <Link to="/movies" className="text-primary-600 hover:text-primary-700">
            Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                src={movie.poster}
                alt={movie.title}
                className="w-48 h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="flex-1 text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {movie.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-4 mb-4"
                >
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="w-5 h-5" />
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                    <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
                  </div>
                  <span className="bg-primary-600 text-white px-2 py-1 rounded text-sm">
                    {movie.language}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {movie.genre.map((g, index) => (
                    <span
                      key={index}
                      className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center space-x-4"
                >
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-full transition-colors ${
                      isFavorite ? 'bg-red-600 text-white' : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                    }`}
                  >
                    <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  </button>
                  <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors flex items-center space-x-2">
                    <SafeIcon icon={FiPlay} className="w-5 h-5" />
                    <span>Watch Trailer</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Movie</h2>
              <p className="text-gray-600 leading-relaxed">{movie.description}</p>
            </motion.div>

            {/* Cast & Crew */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cast & Crew</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Director</h3>
                  <p className="text-gray-600">{movie.director}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Section */}
          <div className="space-y-6">
            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Date</h3>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                    className={`p-2 text-center rounded-lg transition-colors ${
                      selectedDate === date.toISOString().split('T')[0]
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-xs font-medium">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-sm font-bold">
                      {date.getDate()}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Showtimes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Showtimes</h3>
              <div className="space-y-4">
                {movie.theaters.map((theater, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center space-x-2 mb-3">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-400" />
                      <h4 className="font-semibold text-gray-900">{theater}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {movie.shows
                        .filter(show => show.theater === theater)
                        .map((show, showIndex) => (
                          <Link
                            key={showIndex}
                            to={`/booking/${movie.id}?theater=${encodeURIComponent(theater)}&time=${encodeURIComponent(show.time)}&date=${selectedDate}`}
                            className="block"
                          >
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-lg p-3 transition-colors cursor-pointer"
                            >
                              <div className="font-medium text-gray-900">{show.time}</div>
                              <div className="text-sm text-gray-600">₹{show.price}</div>
                              <div className="text-xs text-green-600">{show.available} seats</div>
                            </motion.div>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetail;