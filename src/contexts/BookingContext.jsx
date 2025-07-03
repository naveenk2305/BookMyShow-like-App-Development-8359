import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const createBooking = (bookingData) => {
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
    };
    
    setBookings(prev => [...prev, newBooking]);
    setCurrentBooking(newBooking);
    return newBooking;
  };

  const getBookingById = (id) => {
    return bookings.find(booking => booking.id === id);
  };

  const getUserBookings = (userId) => {
    return bookings.filter(booking => booking.userId === userId);
  };

  const cancelBooking = (bookingId) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' }
          : booking
      )
    );
  };

  const value = {
    bookings,
    currentBooking,
    createBooking,
    getBookingById,
    getUserBookings,
    cancelBooking,
    setCurrentBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};