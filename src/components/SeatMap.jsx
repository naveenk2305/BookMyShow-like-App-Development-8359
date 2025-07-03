import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMonitor } = FiIcons;

const SeatMap = ({ onSeatSelect, selectedSeats = [], maxSeats = 10 }) => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Generate seat layout
    const seatLayout = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seatsPerRow = 12;

    rows.forEach(row => {
      const rowSeats = [];
      for (let i = 1; i <= seatsPerRow; i++) {
        const seatId = `${row}${i}`;
        const isOccupied = Math.random() < 0.3; // 30% chance of being occupied
        rowSeats.push({
          id: seatId,
          row,
          number: i,
          isOccupied,
          isSelected: selectedSeats.includes(seatId),
          price: row <= 'C' ? 350 : row <= 'F' ? 300 : 250
        });
      }
      seatLayout.push(rowSeats);
    });

    setSeats(seatLayout);
  }, [selectedSeats]);

  const handleSeatClick = (seatId, isOccupied) => {
    if (isOccupied) return;

    if (selectedSeats.includes(seatId)) {
      onSeatSelect(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < maxSeats) {
      onSeatSelect([...selectedSeats, seatId]);
    }
  };

  const getSeatClass = (seat) => {
    if (seat.isOccupied) {
      return 'bg-gray-400 cursor-not-allowed';
    } else if (seat.isSelected) {
      return 'bg-primary-600 text-white cursor-pointer';
    } else {
      return 'bg-green-500 hover:bg-green-600 cursor-pointer text-white';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gray-800 text-white px-8 py-2 rounded-t-lg flex items-center space-x-2">
            <SafeIcon icon={FiMonitor} className="w-5 h-5" />
            <span className="font-medium">SCREEN</span>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-800 to-gray-300 rounded-full"></div>
      </div>

      <div className="space-y-2 mb-6">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-center space-x-1">
            <div className="w-8 text-center font-medium text-gray-600">
              {row[0]?.row}
            </div>
            <div className="flex space-x-1">
              {row.map((seat, seatIndex) => (
                <motion.button
                  key={seat.id}
                  whileHover={{ scale: seat.isOccupied ? 1 : 1.1 }}
                  whileTap={{ scale: seat.isOccupied ? 1 : 0.9 }}
                  onClick={() => handleSeatClick(seat.id, seat.isOccupied)}
                  className={`w-8 h-8 rounded-t-lg text-xs font-medium transition-all ${getSeatClass(seat)}`}
                  disabled={seat.isOccupied}
                >
                  {seat.number}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-t"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary-600 rounded-t"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-400 rounded-t"></div>
          <span>Occupied</span>
        </div>
      </div>

      {selectedSeats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-primary-50 rounded-lg"
        >
          <h4 className="font-medium text-primary-800 mb-2">Selected Seats:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map(seatId => (
              <span
                key={seatId}
                className="bg-primary-600 text-white px-2 py-1 rounded text-sm"
              >
                {seatId}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SeatMap;