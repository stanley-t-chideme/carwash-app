import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <PagerView style={{ flex: 1 }} initialPage={0}>
        <View key="1" className="flex-1 justify-center items-center px-6">
          <Image source={require('@/assets/onboarding1.png')} className="w-64 h-64 mb-8" resizeMode="contain" />
          <Text className="text-2xl font-bold mb-4">Welcome to the App!</Text>
          <Text className="text-gray-600 text-center">Find and book car washes easily.</Text>
        </View>
        <View key="2" className="flex-1 justify-center items-center px-6">
          <Image source={require('@/assets/onboarding2.png')} className="w-64 h-64 mb-8" resizeMode="contain" />
          <Text className="text-2xl font-bold mb-4">Book in Advance</Text>
          <Text className="text-gray-600 text-center">Schedule your car wash at your convenience.</Text>
        </View>
        <View key="3" className="flex-1 justify-center items-center px-6">
          <Image source={require('@/assets/onboarding3.png')} className="w-64 h-64 mb-8" resizeMode="contain" />
          <Text className="text-2xl font-bold mb-4">Exclusive Options</Text>
          <Text className="text-gray-600 text-center">Get premium car wash services anytime, anywhere.</Text>
        </View>
      </PagerView>
      <View className="px-6 pb-8">
        <TouchableOpacity
          className="w-full bg-blue-600 p-4 rounded-md items-center"
          onPress={() => router.push('/login')}
        >
          <Text className="text-white text-lg font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}