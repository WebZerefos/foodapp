import {ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from '../CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      className="px-4 pt-3"
      showsHorizontalScrollIndicator={false}
      horizontal>
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 4"
      />
    </ScrollView>
  );
};

export default Categories;
