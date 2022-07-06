// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstscreen from '../Screens/Firstscreen';
import Selectionscreen from '../Screens/Selectionscreen';
import Homescreen from '../Screens/Homescreen';

const Stack = createNativeStackNavigator();

function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Firstscreen" component={Firstscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Selectionscreen" component={Selectionscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;