import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function EditProfileScreen() {
  // Placeholder for user data to be edited
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // ... other user profile data ...
  };

  // You would typically use state variables to hold the form input values
  // const [name, setName] = useState(user.name);
  // const [email, setEmail] = useState(user.email);
  // ... other state variables for editable fields ...

  const handleSaveProfile = () => {
    // Implement logic to save the updated profile data
    console.log('Save profile changes');
    // Get the values from the input fields (using state variables)
    // Validate the input data
    // Call your backend API to update the user's profile
    // After successful update, navigate back to the Profile screen or show a success message
    router.back(); // Navigate back to the previous screen (Profile)
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-10">
        <Text className="text-3xl font-bold mb-6">Edit Profile</Text>

        {/* Editable Profile Fields */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Name</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
            value={user.name} // Replace with state variable
            // onChangeText={setName} // Uncomment and use state variable
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Email Address</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={user.email} // Replace with state variable
            // onChangeText={setEmail} // Uncomment and use state variable
          />
        </View>

        {/* Add other editable profile fields here */}

        {/* Save Button */}
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center mt-6"
          onPress={handleSaveProfile}
        >
          <Text className="text-white text-lg font-bold">Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}