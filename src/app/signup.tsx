import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-10">
        <View className="items-center mb-10">
          {/* Replace with your logo */}
          <Image source={require('@/assets/logo.png')} className="w-32 h-32 mb-4" resizeMode="contain" />
          <Text className="text-3xl font-bold">Create Account</Text>
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Full Name</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
            autoCapitalize="words"
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Email Address</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Confirm Password</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center mb-4"
          onPress={() => {/* Handle signup logic */ router.push('/home')}}
        >
          <Text className="text-white text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full border border-gray-300 p-4 rounded-md items-center"
          onPress={() => router.push('/login')}
        >
          <Text className="text-gray-700 text-lg font-bold">Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}