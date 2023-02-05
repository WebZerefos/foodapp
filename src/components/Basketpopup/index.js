import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../../slices/basketSlice';
import {useNavigation} from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketPopup = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="bg-[#00b894] mx-5 flex-row p-4 rounded-lg items-center space-x-1">
        <View className="bg-teal-400 w-10 h-10 rounded-full items-center justify-center">
          <Text className="text-white font-extrabold text-lg py-1 px-2 ">
            {items.length}
          </Text>
        </View>
        <Text className="flex-1 text-center text-white font-extrabold text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="BRL" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopup;
