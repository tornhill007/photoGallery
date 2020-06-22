import {Image, StyleSheet, SafeAreaView} from "react-native";
import React from "react";


const PhotoScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain'}}
                   source={{uri: `${props.route.params.photoUrl}`}}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PhotoScreen;