import React from "react";
import {Image, View, Text} from "react-native";

const Preloader = () => {
    return <View>
        {/*<Image style={{width: 150, height: 150}} source={require('../../../assets/Spinner-1s-200px.png')}/>*/}
        <Text>Loading.......</Text>
    </View>
};

export default Preloader;