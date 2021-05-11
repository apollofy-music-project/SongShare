import React from 'react';
import Carousel from '../../../components/Carousel/index';
import '../styles.scss';

function UserProfileLanding({ user }) {
    const { playlists, likes, songs } = user;
    return (
        <>
            <div className="landing-page user__main__content">
                <div className="user__main__content__playlist">
                    <div className="user__main__content__playlist__stats">
                        {
                            // <p>Likes: {likes.length}</p>
                        }
                        <br />
                    </div>
                </div>
                <div className="user__main__content__playlist">
                    <h2>
                        My playlists <span>{playlists.length} collections</span>
                    </h2>
                    <div className="user__main__content__playlist__carousel">
                        {playlists.length > 0 && (
                            <Carousel
                                type="playlists"
                                ids={playlists}
                                key="playlist"
                            />
                        )}
                    </div>
                </div>

                <div className="user__main__content__music">
                    <h2>
                        My Music <span>{songs.length} tracks</span>
                    </h2>
                    <div className="user__main__content__music__carousel">
                        {user.songs.length > 0 && (
                            <Carousel type="songs" ids={songs} key="songs" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
