import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function MyBookingsScreen() {
  // Placeholder data for user's bookings
  const myBookings = [
    {
      id: 1,
      carWashName: 'Example Car Wash A',
      date: '2023-12-20',
      time: '11:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      carWashName: 'Example Car Wash B',
      date: '2023-12-22',
      time: '02:00 PM',
      status: 'Pending',
    },
    {
      id: 3,
      carWashName: 'Example Car Wash C',
      date: '2023-12-15',
      time: '10:00 AM',
      status: 'Completed',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">My Bookings</Text>

        {myBookings.length > 0 ? (
          myBookings.map((booking) => (
            <TouchableOpacity
              key={booking.id}
              className="p-4 border border-gray-300 rounded-md mb-4"
              onPress={() => router.push({ pathname: '/booking-details', params: { bookingId: booking.id } })}
            >
              <Text className="text-lg font-bold mb-1">{booking.carWashName}</Text>
              <Text className="text-gray-700 mb-1">Date: {booking.date}</Text>
              <Text className="text-gray-700 mb-1">Time: {booking.time}</Text>
              <Text className={`text-gray-700 ${booking.status === 'Confirmed' ? 'text-green-600' : booking.status === 'Pending' ? 'text-yellow-600' : 'text-gray-600'}`}>Status: {booking.status}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-gray-600 text-center">No bookings found.</Text>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}