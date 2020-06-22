import {createSelector} from "reselect"

export const getAllPhotos = (state) => {
    return state.galleryPage.photos
};

export const getCurrentPage = (state) => {
    return state.galleryPage.currentPage;
};

export const getPhotosAmount = (state) => {
    return state.galleryPage.photosAmount;
};

export const getPageSize = (state) => {
    return state.galleryPage.pageSize;
};

export const getIsFetching = (state) => {
    return state.galleryPage.isFetching;
};

