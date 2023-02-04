import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Currency from 'react-currency-formatter';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../../../slices/basketSlice';

const DishRow = ({id, name, price, image, description}) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, price, description, image}));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) {
      return;
    }
    dispatch(removeFromBasket({id}));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={
          isPressed
            ? 'bg-white border-t border-slate-200 p-4'
            : 'bg-white border border-slate-200 p-4'
        }>
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-slate-500 text-justify">{description}</Text>
            <Text className="text-slate-500 mt-2">
              <Currency quantity={price} currency="BRL" />
            </Text>
          </View>
          <Image source={{uri: image}} className="w-20 h-20 rounded-md ml-3" />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-3">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon size={40} color="#00b894" />
            </TouchableOpacity>
            <Text className="text-lg font-bold">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00b894" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
