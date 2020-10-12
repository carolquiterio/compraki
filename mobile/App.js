import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/pages/Home';
import MyVouchers from './src/pages/MyVouchers';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                color = focused ? '#B83B5E' : '#8a8a8a';
                break;

              case 'MyVouchers':
                iconName = focused ? 'account' : 'account-outline';
                color = focused ? '#B83B5E' : '#8a8a8a';
                break;

              default:
                iconName = 'circle';
                color = focused ? '#B83B5E' : '#8a8a8a';
                break;
            }

            return <MaterialIcon name={iconName} size={28} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#B83B5E',
          inactiveTintColor: '#8a8a8a',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Inìcio',
          }}
        />
        <Tab.Screen
          name="MyVouchers"
          component={MyVouchers}
          options={{
            tabBarLabel: 'Vouchers',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
