import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {urlFor} from '../../../sanity';
import {ArrowLeftCircleIcon, StarIcon} from 'react-native-heroicons/solid';
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import DishRow from '../../components/DishRow';
import BasketPopup from '../../components/Basketpopup';

const Restaurant = ({route, navigation}) => {
  const item = route.params;

  return (
    <>
      <BasketPopup />
      <ScrollView>
        <View className="relative">
          <Image
            source={{uri: urlFor(item.imgUrl).url()}}
            className="w-full h-56 bg-slate-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute mt-12 ml-6">
            <ArrowLeftCircleIcon color="white" size={42} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{item.title}</Text>
          </View>
          <View>
            <View className="flex-row items-center gap-1 ml-4 mt-2 pb-2">
              <StarIcon color="gray" opacity={0.5} />
              <Text className="text-slate-500">{item.rating}</Text>
              <Text className="text-slate-500">Offers</Text>
              <MapPinIcon color="gray" />
              <Text className="text-slate-500">Nearby • {item.address}</Text>
            </View>
            <Text className="ml-4 text-xs text-slate-500 pb-2 text-justify mx-4">
              {item.short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-y border-slate-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} />
            <Text className="pl-2 flex-1  font-bold">Have a food allergy?</Text>
            <ChevronRightIcon size={20} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* dishRow */}
          {item.dishes.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={urlFor(dish.image).url()}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
