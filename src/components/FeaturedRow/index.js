import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from '../RestaurantCard';

const FeaturedRow = ({title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#74b9ff" />
      </View>
      <Text className="text-xs text-slate-500 px-4 ">{description}</Text>

      <ScrollView
        className="px-4 pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}>
        {/* RestaurantCards */}
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos Papa"
          rating="4.5"
          genre="Japanese"
          address="123 Main Street"
          short_description="The best snacks"
          dishes={['Dish 1', 'Dish 2', 'Dish 3']}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos Papa"
          rating="4.5"
          genre="Japanese"
          address="123 Main Street"
          short_description="The best snacks"
          dishes={['Dish 1', 'Dish 2', 'Dish 3']}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos Papa"
          rating="4.5"
          genre="Japanese"
          address="123 Main Street"
          short_description="The best snacks"
          dishes={['Dish 1', 'Dish 2', 'Dish 3']}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
