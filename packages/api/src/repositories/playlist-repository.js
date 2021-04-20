import { Playlist } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const PlaylistRepository = {
    create: options => {
        return normalizeDBQuery(Playlist.create(options));
    },

    findOne: filter => {
        return normalizeDBQuery(Playlist.findOne(filter, '-__v'));
    },

    findByIdAndUpdate: (filter, body) => {
        return normalizeDBQuery(Playlist.findByIdAndUpdate(filter, body));
    },
};

export default PlaylistRepository;