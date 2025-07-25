import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

export default function CarWashDetailsScreen() {
  const { carWashId } = useLocalSearchParams();

  // In a real app, you would fetch car wash details based on carWashId
  const carWashDetails = {
    id: carWashId,
    name: 'Example Car Wash',
    rating: 4.5,
    priceRange: '$20 - $50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
    // imageUrl: require('@/assets/carwash_placeholder.png'), // Replace with actual image
    imageUrl: "https://placehold.co/600x400",
    services: [
      { id: 1, name: 'Standard Wash', price: 20 },
      { id: 2, name: 'Deluxe Wash', price: 30 },
      { id: 3, name: 'Premium Detail', price: 50 },
    ],
    availableSlots: [ /* Array of available slots */ ],
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        {/* Car Wash Image */}
        <Image source={carWashDetails.imageUrl} className="w-full h-48 rounded-md mb-6" resizeMode="cover" />

        {/* Car Wash Info */}
        <Text className="text-3xl font-bold mb-2">{carWashDetails.name}</Text>
        <Text className="text-lg text-gray-700 mb-2">Rating: {carWashDetails.rating}/5</Text>
        <Text className="text-lg text-gray-700 mb-4">Price Range: {carWashDetails.priceRange}</Text>
        <Text className="text-gray-600 mb-6">{carWashDetails.description}</Text>

        {/* Services Offered */}
        <Text className="text-xl font-bold mb-4">Services Offered</Text>
        {carWashDetails.services.map((service) => (
          <View key={service.id} className="flex-row justify-between mb-2">
            <Text className="text-gray-700">{service.name}</Text>
            <Text className="text-gray-700">${service.price}</Text>
          </View>
        ))}

        {/* Available Slots (Placeholder) */}
        <Text className="text-xl font-bold mb-4 mt-6">Available Slots</Text>
        <View className="h-32 bg-gray-200 rounded-md justify-center items-center mb-6">
          <Text>Available Slots Placeholder</Text>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center"
          onPress={() => router.push({ pathname: '/booking', params: { carWashId: carWashDetails.id } })}
        >
          <Text className="text-white text-lg font-bold">Book Now</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}