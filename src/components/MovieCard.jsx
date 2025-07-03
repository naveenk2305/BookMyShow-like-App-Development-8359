import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiClock, FiCalendar, FiMapPin } = FiIcons;

const MovieCard = ({ movie, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm font-medium">
            <SafeIcon icon={FiStar} className="w-4 h-4 inline mr-1" />
            {movie.rating}
          </div>
          {movie.status === 'coming-soon' && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-medium">
              Coming Soon
            </div>
          )}
          {/* Language Badge */}
          <div className="absolute bottom-2 left-2 bg-secondary-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            {movie.language}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900 truncate">
            {movie.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
              <span>{movie.duration}</span>
            </div>
            
            <div className="flex items-center">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
              <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
            </div>

            {/* Available Cities */}
            {movie.cities && movie.cities.length > 0 && (
              <div className="flex items-center">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2" />
                <span className="truncate">
                  {movie.cities.slice(0, 2).join(', ')}
                  {movie.cities.length > 2 && ` +${movie.cities.length - 2} more`}
                </span>
              </div>
            )}
            
            <div className="flex flex-wrap gap-1">
              {movie.genre.slice(0, 2).map((g, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;