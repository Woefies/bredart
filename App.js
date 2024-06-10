import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import MapDetailsScreen from './screens/MapDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

function MapStackScreen() {
    return (
        <MapStack.Navigator screenOptions={{ headerShown: false }}>
            <MapStack.Screen name="MapMain" component={MapScreen} />
            <MapStack.Screen name="MapDetailsScreen" component={MapDetailsScreen} />
        </MapStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );
}

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="SettingsMain" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false, // Add this line to hide the header
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        color = focused ? '#d90d16' : 'gray';

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Map') {
                            iconName = focused ? 'map' : 'map-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Map" component={MapStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
