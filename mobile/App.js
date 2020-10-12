import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/pages/Home';
import MyVouchers from './src/pages/MyVouchers';
import CreateVoucher from './src/pages/CreateVoucher';
import Partners from './src/pages/Partners';
import Start from './src/pages/Start';
import Welcome from './src/pages/WelcomePages/Welcome';
import WelcomeTwo from './src/pages/WelcomePages/WelcomeTwo';
import WelcomeFive from './src/pages/WelcomePages/WelcomeFive';
import WelcomeFour from './src/pages/WelcomePages/WelcomeFour';
import WelcomeThree from './src/pages/WelcomePages/WelcomeThree';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          initialParams={{
            title: 'Bem-Vinda, Ana! Seu cadastro foi realizado com sucesso.',
            firstImg: "'../../assets/welcomeimg/oi.png'",
            subtitle:
              'No Compraki você vai poder criar pacotes de serviços e produtos.',
            button: 'Próximo',
          }}></Stack.Screen>
        <Stack.Screen name="WelcomeTwo" component={WelcomeTwo} />
        <Stack.Screen
          name="WelcomeThree"
          component={WelcomeThree}></Stack.Screen>
        <Stack.Screen name="WelcomeFour" component={WelcomeFour} />
        <Stack.Screen name="WelcomeFive" component={WelcomeFive} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyVouchers"
        component={MyVouchers}
        options={{
          tabBarLabel: 'Minhas ofertas',
        }}
      />
      <Tab.Screen
        name="CreateVoucher"
        component={CreateVoucher}
        options={{
          tabBarLabel: 'Criar oferta',
        }}
      />
      <Tab.Screen
        name="Partners"
        component={Partners}
        options={{
          tabBarLabel: 'Parceiros',
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
