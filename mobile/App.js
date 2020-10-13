import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Button from 'react-native';

import Menu from './src/components/Menu';

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
import Learn from './src/pages/Learn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          initialParams={{
            title: 'Bem-Vinda, Ana! Seu cadastro foi realizado com sucesso.',
            firstImg: "'../../assets/welcomeimg/oi.png'",
            subtitle:
              'No Compraki você vai poder criar pacotes de serviços e produtos.',
            button: 'Próximo',
          }}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              shadowColor: '#FFFFFF',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#17298B',
          }}></Stack.Screen>
        <Stack.Screen
          name="WelcomeTwo"
          component={WelcomeTwo}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              shadowColor: '#FFFFFF',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#17298B',
          }}
        />
        <Stack.Screen
          name="WelcomeThree"
          component={WelcomeThree}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              shadowColor: '#FFFFFF',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#17298B',
          }}
        />
        <Stack.Screen
          name="WelcomeFour"
          component={WelcomeFour}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              shadowColor: '#FFFFFF',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#17298B',
          }}
        />
        <Stack.Screen
          name="WelcomeFive"
          component={WelcomeFive}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#17298B',
          }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerTitle: props => MenuFunction(),
            headerStyle: {
              backgroundColor: '#17298B',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{
            headerTitle: props => MenuFunction(),
            headerStyle: {
              backgroundColor: '#17298B',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{
            headerTitle: props => MenuFunction(),
            headerStyle: {
              backgroundColor: '#17298B',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
function MenuFunction() {
  return <Menu />;
}
function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'CreateVoucher':
              iconName = focused ? 'plus-circle' : 'plus-circle-outline';

              break;
            case 'MyVouchers':
              iconName = focused ? 'tag' : 'tag-outline';

              break;
            case 'Partners':
              iconName = focused ? 'handshake-o' : 'handshake-o';

              break;
          }
          if (route.name == 'Partners')
            return <FontAwesomeIcon name={iconName} size={26} color={color} />;

          return <MaterialIcon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F2F2F2',
        inactiveTintColor: '#F2F2F2',
        style: {
          backgroundColor: '#17298B',
          height: 55,
        },
      }}>
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
