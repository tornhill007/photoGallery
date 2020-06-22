import React from 'react'
import PhotosList from './PhotosList';
import Preloader from "./common/Preloader/Preloader";
import {getPhotos} from "../redux/reducers/galleryReducer";
import {connect} from "react-redux";
import {
    getAllPhotos,
    getCurrentPage,
    getIsFetching,
    getPageSize, getPhotosAmount
} from "../redux/selectors/photosSelectors";
import {View} from "react-native";

class PhotosListContainer extends React.Component {

    componentDidMount() {
        this.props.getPhotos(this.props.pageSize, this.props.currentPage);
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.getPhotos(this.props.pageSize, pageNumber);
    };

    render() {
        return (
            <View>
                {this.props.isFetching && <Preloader/>}
                <PhotosList photosAmount={this.props.photosAmount}
                            pageSize={this.props.pageSize}
                            onSetCurrentPage={this.onSetCurrentPage}
                            photos={this.props.photos}
                            currentPage={this.props.currentPage}
                            goToPhoto={this.props.goToPhoto}

                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: getAllPhotos(state),
        currentPage: getCurrentPage(state),
        photosAmount: getPhotosAmount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, {getPhotos})(PhotosListContainer)