import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

export default function BookingDetailsScreen() {
  const { bookingId } = useLocalSearchParams();

  // In a real app, you would fetch booking details based on bookingId
  const bookingDetails = {
    id: bookingId,
    carWashName: 'Example Car Wash A',
    date: '2023-12-20',
    time: '11:00 AM',
    status: 'Confirmed',
    service: 'Standard Wash',
    price: 20,
    paymentMethod: 'Online',
    // ... other relevant booking details ...
  };

  const handleModifyBooking = () => {
    // Implement logic to navigate to a booking modification screen
    console.log('Modify booking:', bookingDetails.id);
    // router.push({ pathname: '/modify-booking', params: { bookingId: bookingDetails.id } });
  };

  const handleCancelBooking = () => {
    // Implement logic to cancel the booking
    console.log('Cancel booking:', bookingDetails.id);
    // Display a confirmation dialog before cancelling
    // Call your backend API to cancel the booking
    // After successful cancellation, navigate back to My Bookings or show a success message
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">Booking Details</Text>

        {/* Booking Information */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">{bookingDetails.carWashName}</Text>
          <Text className="text-gray-700 mb-2">Date: {bookingDetails.date}</Text>
          <Text className="text-gray-700 mb-2">Time: {bookingDetails.time}</Text>
          <Text className="text-gray-700 mb-2">Service: {bookingDetails.service}</Text>
          <Text className="text-gray-700 mb-2">Payment Method: {bookingDetails.paymentMethod}</Text>
          <Text className={`text-gray-700 ${bookingDetails.status === 'Confirmed' ? 'text-green-600' : bookingDetails.status === 'Pending' ? 'text-yellow-600' : 'text-gray-600'}`}>Status: {bookingDetails.status}</Text>
        </View>

        {/* Total Price */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">Total:</Text>
          <Text className="text-2xl font-bold text-blue-600">${bookingDetails.price}</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-around">
          {bookingDetails.status === 'Confirmed' || bookingDetails.status === 'Pending' ? (
            <>
              <TouchableOpacity
                className="bg-yellow-600 p-4 rounded-md items-center w-40"
                onPress={handleModifyBooking}
              >
                <Text className="text-white text-lg font-bold">Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-red-600 p-4 rounded-md items-center w-40"
                onPress={handleCancelBooking}
              >
                <Text className="text-white text-lg font-bold">Cancel</Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}