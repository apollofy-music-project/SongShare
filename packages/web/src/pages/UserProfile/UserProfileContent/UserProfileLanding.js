import React from 'react';
import { Link } from 'react-router-dom';
import uniq from 'uniqid';

import { NEW_PLAYLIST } from '../../../routes';
import Carousel from '../../../components/Carousel/index';
import '../styles.scss';

function UserProfileLanding({ user }) {
    const { playlists, songs } = user;
    const playlistsLength = playlists ? playlists.length : 0;
    const songsLength = songs ? songs.length : 0;
    return (
        <>
            <div className="landing-page user__main__content">
                <div className="user__main__content__playlist">
                    <div className="user__main__content__playlist__stats">
                        <br />
                    </div>
                </div>
                <div className="user__main__content__playlist">
                    <h2>
                        My playlists <span>{playlistsLength} collections</span>
                    </h2>
                    <Link key="new-playlists" to={NEW_PLAYLIST}>
                        Create new playlist
                    </Link>
                    <div className="user__main__content__playlist__carousel">
                        {playlistsLength > 0 && (
                            <Carousel
                                type="playlists"
                                ids={playlists}
                                key={uniq()}
                            />
                        )}
                    </div>
                </div>

                <div className="user__main__content__music">
                    <h2>
                        My Music <span>{songsLength} tracks</span>
                    </h2>
                    <div className="user__main__content__music__carousel">
                        {songsLength > 0 && (
                            <Carousel type="songs" ids={songs} key={uniq()} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
