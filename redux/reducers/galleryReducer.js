import {photosAPI} from "../../api/api";

const SET_PHOTOS = 'SET_PHOTOS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_AMOUNT = 'SET_USERS_AMOUNT';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {
    photos: [],
    currentPage: 1,
    photosAmount: 20000,
    pageSize: 20,
    isFetching: false
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_USERS_AMOUNT:
            return {
                ...state,
                photosAmount: action.photosAmount
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    photos
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber
});

export const setPhotosAmount = (photosAmount) => ({
    type: SET_USERS_AMOUNT,
    photosAmount
});

export const setIsFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching
});

export const getPhotos = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await photosAPI.getPhotos(pageSize, currentPage);
    dispatch(setIsFetching(false));
    dispatch(setPhotos(response.data));
    //dispatch(setPhotosAmount(response.totalCount));
};

export default galleryReducer;