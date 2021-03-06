import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../../components/SongsCard';
import UploadSong from '../../components/UploadSong';
import { getMeSongs } from '../../redux/userSongs/userSongs-actions';

function MyMusic() {
    const dispatch = useDispatch();

    const currentUser = useSelector(store => store.auth.currentUser);

    // MYsongsIds❗❗❗❗❗
    const { meSongsIds } = useSelector(({ songs }) => songs);

    const { byID } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getMeSongs(currentUser._id));
    }, [dispatch, currentUser._id]);

    return (
        <>
            <p>my music</p>
            <UploadSong />
            {meSongsIds &&
                meSongsIds.map(song => {
                    return <SongsCard newsong={byID[song]} key={song} />;
                })}
        </>
    );
}

export default MyMusic;
