import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';

// import { getPlaylist } from '../../redux/Playlists/playlists-actions';

import PlaylistViewHeader from '../../components/PlaylistViewHeader';
import { useQuickMenuListener } from '../../custom-hooks/quickMenu';

import SongsListTable from '../../components/SongsListTable/SongsListTable';

function Playlist() {
    const { id } = useParams();
    const playlist = useSelector(state => state.playlists.byID[id]);
    const currentUser = useSelector(state => state.user);

    useQuickMenuListener();

    if (!playlist) {
        return <Redirect to={`/${currentUser.username}/`} />;
    }
    return (
        <>
            <PlaylistViewHeader playlist={playlist} from="mainView" />
            <SongsListTable
                songsToList={playlist.songs}
                playlistID={playlist._id}
                sortable={currentUser._id === playlist.author._id}
            />
        </>
    );
}

export default Playlist;
