import React from 'react'
import {StyleSheet} from "react-native";
import Photo from './Photo';
import Paginator from "./common/Paginator/Paginator";
import {View, ScrollView, Text, Platform, StatusBar, SafeAreaView} from "react-native";

const PhotosList = (props) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.headerWrap}>
                    <Text style={styles.header}>Photo Gallery</Text>
                </View>
                <View style={styles.wrapper}>

                    {
                        props.photos.map(photo => <View key={photo.id} style={styles.item}><Photo photo={photo}
                                                                                                  key={photo.id}
                                                                                                  goToPhoto={props.goToPhoto}/></View>)
                    }

                </View>
                <View style={styles.paginator}>
                    <Paginator photosAmount={props.photosAmount} pageSize={props.pageSize}
                               currentPage={props.currentPage}
                               onSetCurrentPage={props.onSetCurrentPage} portionSize={7}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    wrapper: {
        justifyContent: 'center',
        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'center',
    },
    paginator: {
        alignItems: 'center',
        marginBottom: 50
    },
    item: {
        padding: 20
    },
    header: {
        fontSize: 30,
    },
    headerWrap: {
        alignItems: 'center',
    }
});

export default PhotosList;