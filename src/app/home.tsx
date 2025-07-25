import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">Find Your Car Wash</Text>

        {/* Search Bar */}
        <View className="mb-6">
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Search for car washes or location"
          />
        </View>

        {/* Recommended Car Washes (Placeholder) */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-4">Recommended for You</Text>
          {/* Add a horizontal scroll view or flat list for recommended car washes */}
          <View className="h-32 bg-gray-200 rounded-md justify-center items-center">
            <Text>Recommended Car Washes Placeholder</Text>
          </View>
        </View>

        {/* List of Car Washes (Placeholder) */}
        <View>
          <Text className="text-xl font-bold mb-4">Nearby Car Washes</Text>
          {/* Add a flat list for nearby car washes */}
          <View className="h-48 bg-gray-200 rounded-md justify-center items-center">
            <Text>Nearby Car Washes Placeholder</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}