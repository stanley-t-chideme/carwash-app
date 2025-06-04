// HomeScreen.js
// Make sure you have nativewind and react-native-vector-icons (or similar for icons) installed
// For icons, you might need to install: npm install react-native-vector-icons
// and link it if you're not using Expo Go or if it's a bare React Native project.
// If using Expo, vector icons are generally available.

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
// You can use a specific icon library, e.g., MaterialIcons from react-native-vector-icons
// For simplicity, I'll use text placeholders for icons or simple characters.
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Dummy data for car washes
const dummyCarWashes = [
  {
    id: '1',
    name: 'Sparkle Clean Car Wash',
    distance: '2.5 km',
    image: 'https://placehold.co/120x80/E0E0E0/B0B0B0?text=Car+Wash+1', // Placeholder image
  },
  {
    id: '2',
    name: 'QuickShine Auto Spa',
    distance: '3.1 km',
    image: 'https://placehold.co/120x80/E0E0E0/B0B0B0?text=Car+Wash+2',
  },
  {
    id: '3',
    name: 'Gauteng Wash Pros',
    distance: '1.8 km',
    image: 'https://placehold.co/120x80/E0E0E0/B0B0B0?text=Car+Wash+3',
  },
  {
    id: '4',
    name: 'The Car Butler',
    distance: '4.0 km',
    image: 'https://placehold.co/120x80/E0E0E0/B0B0B0?text=Car+Wash+4',
  },
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Midrand, Gauteng'); // Example location

  // Placeholder function for handling search
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  // Placeholder for setting location
  const handleSetLocation = () => {
    // Implement logic to set/change location
    console.log('Set location pressed');
  };

  return (
    // Using a View that respects the status bar.
    // You might handle status bar height dynamically using `expo-constants` or `react-native-safe-area-context`
    // For this example, I'll assume StatusBar.currentHeight gives a reasonable value for Android,
    // or you'd use SafeAreaView from react-native-safe-area-context at a higher level.
    <View className="flex-1 bg-gray-100" style={{ paddingTop: StatusBar.currentHeight || 0 }}>
      {/* Header Section */}
      <View className="p-4 bg-blue-600">
        <Text className="text-2xl font-bold text-white text-center mb-3">
          WashPal
        </Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-white rounded-lg p-2 shadow">
          {/* <MaterialIcons name="search" size={24} color="gray" style={{ marginRight: 8 }} /> */}
          <Text className="text-gray-500 mr-2 text-lg">🔍</Text>
          <TextInput
            className="flex-1 h-10 text-base text-gray-800"
            placeholder="Search car wash or location..."
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Current Location */}
        <TouchableOpacity
          className="mt-3 flex-row items-center justify-center py-2"
          onPress={handleSetLocation}
        >
          {/* <MaterialIcons name="location-pin" size={20} color="white" style={{ marginRight: 6 }} /> */}
          <Text className="text-white mr-1 text-lg">📍</Text>
          <Text className="text-white text-sm underline">
            {currentLocation} (Change)
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Content ScrollView */}
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 4 }}> {/* Use contentContainerStyle for ScrollView padding */}
        {/* Map Preview Placeholder */}
        <View className="h-48 bg-gray-300 m-4 rounded-lg items-center justify-center shadow-md">
          <Text className="text-gray-600 text-lg">Map Preview Placeholder</Text>
          <Text className="text-gray-500 text-sm">(Nearby car washes would be pinned here)</Text>
        </View>

        {/* Nearby Car Washes Section */}
        <View className="px-4 mt-2">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Nearby Car Washes
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dummyCarWashes.map((wash) => (
              <TouchableOpacity
                key={wash.id}
                className="bg-white rounded-lg shadow-md p-3 mr-3 w-48"
                onPress={() => console.log('Navigate to car wash:', wash.name)}
              >
                <Image
                  source={{ uri: wash.image }}
                  className="w-full h-20 rounded-md mb-2"
                  resizeMode="cover"
                />
                <Text className="text-base font-semibold text-gray-900" numberOfLines={1}>
                  {wash.name}
                </Text>
                <Text className="text-sm text-gray-600 mt-1">
                  {wash.distance}
                </Text>
              </TouchableOpacity>
            ))}
            {/* Add a "View All" card if needed */}
            <TouchableOpacity
              className="bg-blue-100 rounded-lg shadow-md p-3 w-32 items-center justify-center"
              onPress={() => console.log('View all nearby car washes')}
            >
              <Text className="text-blue-600 font-semibold">View All</Text>
              <Text className="text-blue-500 text-2xl mt-1">→</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* You can add other sections here like "Promotions" or "Previously Booked" */}
        <View className="px-4 mt-6">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Special Offers
          </Text>
          <View className="bg-white rounded-lg shadow-md p-4 h-32 items-center justify-center">
            <Text className="text-gray-600">Promotions Placeholder</Text>
          </View>
        </View>

      </ScrollView>

      {/*
        A real navigation bar would typically be part of your app's navigation setup (e.g., React Navigation).
        For a single screen component, you might not include it or add a placeholder like below.
      */}
      {/* <View className="flex-row justify-around items-center p-3 bg-white border-t border-gray-200 shadow-top">
        <TouchableOpacity className="items-center">
          <Text className="text-blue-600 text-2xl">🏠</Text>
          <Text className="text-blue-600 text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-gray-500 text-2xl">📅</Text>
          <Text className="text-gray-500 text-xs">Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-gray-500 text-2xl">👤</Text>
          <Text className="text-gray-500 text-xs">Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;

