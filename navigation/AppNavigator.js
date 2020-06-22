import {createStackNavigator} from "@react-navigation/stack";
import PhotosScreen from "../screens/PhotosScreen";
import PhotoScreen from "../screens/PhotoScreen";
import React from 'react';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Photos" component={PhotosScreen}/>
            <Stack.Screen name="Photo" component={PhotoScreen}/>
        </Stack.Navigator>
    )
};

export default MyStack;