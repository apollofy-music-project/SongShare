import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/quickMenu/quickMenu-actions';
import QuickMenuStyle from './styles';

const QuickMenu = () => {
    const dispatch = useDispatch();
    const { positionX, positionY } = useSelector(({ quickMenu }) => quickMenu);

    //    closeModal(?)
    const handleClick = () => {
        dispatch(openModal(false));
    };

    return (
        <QuickMenuStyle x={positionX} y={positionY}>
            <button type="button" onClick={handleClick}>
                Close
            </button>
            <ul>
                <li>
                    <button type="button" onClick={handleClick}>
                        Add to playlist
                    </button>
                </li>
                <li>
                    <button type="button" onClick={handleClick}>
                        Add to queue
                    </button>
                </li>
                {true && (
                    <li>
                        <button type="button" onClick={handleClick}>
                            Edit
                        </button>
                    </li>
                )}
                {true && (
                    <li>
                        <button type="button" onClick={handleClick}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;