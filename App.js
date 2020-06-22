import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./redux/store";
import {NavigationContainer} from '@react-navigation/native';
import MyStack from "./navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer style={styles.wrap}>
            <Provider store={store}>
                <MyStack/>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});