import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'
import StackScreen from './Screens/StackScreen'
import Materialcommunityicons from 'react-native-vector-icons/materialcommunityicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen
            name="Principal"
            component={HomeScreen}
            />
            <HomeStackNavigator.Screen
            name="Stack"
            component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
        
    )
}
function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#1E7FF5'
        }}>
            <Tab.Screen name='Home' component={MyStack}
            options={{
                tabBarLabel:'Inicio',
                tabBarIcon: ({color,size}) => (
                    <Materialcommunityicons name='home' color={color} size={size} />
                ),
                tabBarBadge:1,
                headerShown: false
                
            }}/>
            <Tab.Screen name='Settings' component={SettingsScreen}
            options={{
                tabBarLabel:"Opciones",
                tabBarIcon: ({color, size}) => (
                    <Materialcommunityicons name='account-settings' color={color} size={size} />

                ),
            }}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}