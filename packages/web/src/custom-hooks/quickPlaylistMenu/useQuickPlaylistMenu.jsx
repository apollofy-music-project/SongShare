import { useDispatch, useSelector } from 'react-redux';
import {
    changeXandYPlaylist,
    openPlaylistModal,
} from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';

function UseQuickPlaylistMenu() {
    const dispatch = useDispatch();
    const { positionX, positionY, open } = useSelector(
        store => store.quickMenu,
    );
    const auxposition = parseInt(positionX.replace('px', ''), 10);

    const { openPL } = useSelector(
        ({ quickPlaylistMenu }) => quickPlaylistMenu,
    );

    const openPlaylistMenu = () => {
        const xPL =
            window.innerWidth - auxposition > 230
                ? `${auxposition + 110}px`
                : `${auxposition - 150}px`;
        const yPL = positionY;
        dispatch(changeXandYPlaylist({ xPL, yPL }));

        if (open) {
            !openPL
                ? dispatch(openPlaylistModal(true))
                : dispatch(openPlaylistModal(false));
        } else {
            dispatch(openPlaylistModal(false));
        }
    };

    return [openPlaylistMenu];
}

export default UseQuickPlaylistMenu;
