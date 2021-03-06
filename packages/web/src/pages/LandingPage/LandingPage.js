import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MegaCarousel from '../../components/MegaCarousel';
import { getAllSongs } from '../../redux/songs/songs-actions';
import { getAllPlaylists } from '../../redux/Playlists/playlists-actions';

import './styles.scss';
import MyLibrary from '../MyLibrary';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongsIds = useSelector(store => store.songs.ids);

    useEffect(() => {
        dispatch(getAllSongs());
        dispatch(getAllPlaylists());
        // }, [dispatch, currentUser, allSongsIds]);
    }, [dispatch]);

    if (!allSongsIds) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <div style={{ width: '90vw', margin: '0 auto' }}>
                <MegaCarousel key="topSongs" ids={allSongsIds} type="songs" />
            </div>
            <MyLibrary />
        </div>
    );
}

export default LandingPage;
