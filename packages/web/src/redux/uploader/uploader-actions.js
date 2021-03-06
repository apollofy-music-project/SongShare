import * as UploaderTypes from './uploader-types';
import { getFileUrl, fileTypes } from '../../services/cloudinary';
import api from '../../api';
import { getCurrentUserToken } from '../../services/auth';
import { updateUserInfoSucces } from '../user/user-actions';

export const uploadSongRequest = () => ({
    type: UploaderTypes.UPLOAD_SONG_REQUEST,
});

export const uploadSongError = message => ({
    type: UploaderTypes.UPLOAD_SONG_ERROR,
    payload: message,
});

export const uploadSongSuccess = songUrl => ({
    type: UploaderTypes.UPLOAD_SONG_SUCCESS,
    payload: songUrl,
});

export const uploadImageRequest = () => ({
    type: UploaderTypes.UPLOAD_IMAGE_REQUEST,
});

export const uploadImageError = message => ({
    type: UploaderTypes.UPLOAD_IMAGE_ERROR,
    payload: message,
});

export const uploadImageSuccess = imageUrl => ({
    type: UploaderTypes.UPLOAD_IMAGE_SUCCESS,
    payload: imageUrl,
});

export function uploadSong({ file, title, artist, genre, songPic }) {
    return async function uploadThunk(dispatch) {
        dispatch(uploadSongRequest());
        try {
            const userToken = await getCurrentUserToken();

            if (!userToken) {
                return dispatch(uploadSongError('User token null!'));
            }

            const urlRes = await getFileUrl({
                file,
                fileType: fileTypes.AUDIO,
            });

            const { url, duration, bytes, format, asset_id } = urlRes.data;

            let songPicUrl = null;
            if (songPic) {
                const urlImgRes = await getFileUrl({
                    file: songPic,
                    fileType: fileTypes.IMAGE,
                });
                songPicUrl = urlImgRes.data.url;
            }

            if (urlRes.status >= 400) {
                return dispatch(uploadSongError(urlRes.statusText));
            }

            const res = await api.createTrack({
                body: {
                    _id: asset_id,
                    name: title,
                    url,
                    duration,
                    bytes,
                    format,
                    artist,
                    genre,
                    songPicUrl,
                },
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            if (res.data.song.errorMessage) {
                return dispatch(uploadSongError(res.data.song.errorMessage));
            }

            dispatch(updateUserInfoSucces(res.data.userResponse.data));
            return dispatch(uploadSongSuccess(url));
        } catch (err) {
            return dispatch(uploadSongError(err.message));
        }
    };
}

export function uploadImage({
    file,
    name = '',
    genre = '',
    onUploadProgress = _ => {},
}) {
    return async function uploadImageThunk(dispatch) {
        dispatch(uploadImageRequest());

        try {
            const urlRes = await getFileUrl({
                file: file,
                fileType: fileTypes.IMAGE,
                onUploadProgress: onUploadProgress,
            });

            const imageUrl = urlRes.data.url;

            if (!imageUrl) {
                return dispatch(uploadImageError('error while uploading'));
            }
            return dispatch(uploadImageSuccess(imageUrl));
        } catch (err) {
            return dispatch(uploadImageError(err));
        }
    };
}
