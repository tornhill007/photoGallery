import React from 'react'
import {StyleSheet} from "react-native";
import PhotosList from "../components/PhotosListContainer";


const PhotosScreen = (props) => {

    const goToPhoto = (photoUrl) => {
        props.navigation.navigate('Photo', {photoUrl})
    };

    return (
        <>
            <PhotosList goToPhoto={goToPhoto}/>
        </>

    );
};


const styles = StyleSheet.create({});

export default PhotosScreen;