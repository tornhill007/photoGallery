import React from 'react'
import {FlatList, Platform, StatusBar, StyleSheet} from "react-native";
import {View, Text, Image, TouchableHighlight} from "react-native";

const Photo = ({photo, ...props}) => {

    return (
        <>
            {console.log(photo)}
            <TouchableHighlight onPress={() => props.goToPhoto(photo.urls.raw)}>
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: `${photo.urls.raw}`}}/>
            </TouchableHighlight>
            <View style={styles.textWrap}>
                <Text style={styles.itemWrap}><Text style={styles.item}>Name of
                    photo: </Text>{photo.description ? photo.description : 'No name'}</Text>
                <Text style={styles.itemWrap}><Text style={styles.item}>Author: </Text>{photo.user.name}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    textWrap: {
        width: 150
    },
    item: {
        fontWeight: 'bold',
    }
});

export default Photo;