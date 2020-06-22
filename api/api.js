import * as axios from "axios";

const accessToken = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${accessToken}`
    }
});

export const photosAPI = {
    getPhotos(pageSize, currentPage) {
        return instance.get(`photos?per_page=${pageSize}&page=${currentPage}`).then(response => {
            console.log(response);
            return response;
        });
    }
};