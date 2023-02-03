import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';
import sanityClient from '../../../sanity';

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured']
    {
        ...,
    restaurants[]->
      {
        ...,
        dishes[]->,
      }
    }`,
      )
      .then(data => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <>
      <View className="bg-white pt-14">
        {/* Header  */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className="w-8 h-8 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-grow">
            <Text className="font-bold text-slate-400 text-xs">
              Deliver Now
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#74b9ff" />
            </Text>
          </View>
          <UserIcon size={35} color="#74b9ff" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 mx-3 pb-2 ">
          <View className="flex-row flex-grow space-x-2 bg-slate-100 p-3 rounded-full ">
            <MagnifyingGlassIcon color="#74b9ff" />
            <TextInput
              placeholder="Restaurant and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#74b9ff" />
        </View>
      </View>
      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}

        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Home;
