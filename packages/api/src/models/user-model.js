import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        lastname: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'The email is required'],
            trim: true,
            unique: true,
            validate: {
                validator: value => validator.isEmail(value),
                message: props => `The email ${props.value} is not valid`,
            },
        },
        imageUrl: {
            type: String,
        },
        coverImageUrl: {
            type: String,
        },
        songs: [
            {
                type: String,
                ref: 'song',
            },
        ],
        playlists: [
            {
                type: String,
                ref: 'playlist',
            },
        ],
        songsLikes: [
            {
                type: String,
                ref: 'song',
            },
        ],
        playlistsLikes: [
            {
                type: String,
                ref: 'playlist',
            },
        ],
        following: [
            {
                type: String,
                ref: 'playlist',
            },
        ],
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('user', UserSchema);

export default User;
