import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView>
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="w-8 h-8 bg-gray-300 p-4 rounded-full"
        />

        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
