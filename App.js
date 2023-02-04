import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Restaurant from './src/screens/Restaurant';
import {store} from './store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

// 2h:14min  video timelapse
