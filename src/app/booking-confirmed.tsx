import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function BookingConfirmedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold mb-4 text-green-600">Booking Confirmed!</Text>
        <Text className="text-lg text-gray-700 text-center mb-8">
          Your car wash booking has been successfully confirmed.
        </Text>
        {/* You might want to display some booking details here */}

        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center mb-4"
          onPress={() => router.push('/my-bookings')}
        >
          <Text className="text-white text-lg font-bold">View My Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full border border-gray-300 p-4 rounded-md items-center"
          onPress={() => router.push('/home')}
        >
          <Text className="text-gray-700 text-lg font-bold">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}