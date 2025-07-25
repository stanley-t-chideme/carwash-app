import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

export default function ProfileScreen() {
  // Placeholder user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // ... other user profile data ...
  };

  const handleEditProfile = () => {
    // Implement logic to navigate to the edit profile screen
    console.log('Navigate to edit profile');
    router.push('/edit-profile');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">Profile</Text>

        {/* User Information */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-2">Personal Information</Text>
          <View className="mb-2">
            <Text className="text-gray-700">Name:</Text>
            <Text className="text-gray-900 text-lg">{user.name}</Text>
          </View>
          <View className="mb-2">
            <Text className="text-gray-700">Email:</Text>
            <Text className="text-gray-900 text-lg">{user.email}</Text>
          </View>
          {/* Display other user profile fields */}
        </View>

        {/* Settings Options (Placeholders) */}
        <View>
          <Text className="text-xl font-bold mb-4">Settings</Text>
          <TouchableOpacity className="p-4 border border-gray-300 rounded-md mb-2">
            <Text className="text-gray-700">Payment Methods</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border border-gray-300 rounded-md mb-2">
            <Text className="text-gray-700">Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border border-gray-300 rounded-md mb-2">
            <Text className="text-gray-700">My Vehicles</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border border-gray-300 rounded-md mb-2">
            <Text className="text-gray-700">Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border border-gray-300 rounded-md mb-2">
            <Text className="text-red-600">Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center mt-6"
          onPress={handleEditProfile}
        >
          <Text className="text-white text-lg font-bold">Edit Profile</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}