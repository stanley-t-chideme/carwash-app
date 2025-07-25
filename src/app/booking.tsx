import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

export default function BookingScreen() {
  const { carWashId } = useLocalSearchParams();

  // In a real app, you would fetch car wash details and available slots based on carWashId
  const carWashDetails = {
    id: carWashId,
    name: 'Example Car Wash',
    // ... other car wash details ...
  };

  // Placeholder for selected date and time
  const selectedDate = '2023-12-18'; // Replace with actual selected date
  const selectedTime = '10:00 AM'; // Replace with actual selected time
  const selectedService = 'Standard Wash'; // Replace with actual selected service
  const totalPrice = 20; // Calculate based on selected service and other factors


  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">Booking Summary</Text>

        {/* Car Wash Details */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">{carWashDetails.name}</Text>
          {/* Display other relevant car wash details */}
        </View>

        {/* Selected Slot and Service */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">Booking Details</Text>
          <Text className="text-gray-700 mb-2">Date: {selectedDate}</Text>
          <Text className="text-gray-700 mb-2">Time: {selectedTime}</Text>
          <Text className="text-gray-700">Service: {selectedService}</Text>
        </View>

        {/* Payment Method (Placeholder) */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-4">Payment Method</Text>
          {/* Add options for online payment and pay by cash */}
          <View className="h-20 bg-gray-200 rounded-md justify-center items-center">
            <Text>Payment Method Selection Placeholder</Text>
          </View>
        </View>

        {/* Total Price */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">Total:</Text>
          <Text className="text-2xl font-bold text-blue-600">${totalPrice}</Text>
        </View>

        {/* Confirm Booking Button */}
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center"
          onPress={() => {/* Handle booking confirmation */ router.push('/booking-confirmed')}}
        >
          <Text className="text-white text-lg font-bold">Confirm Booking</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}