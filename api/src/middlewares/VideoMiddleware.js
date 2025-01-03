const { validate: isUuid } = require('uuid');
const Video = require('../models/Video');

module.exports = {
    async validateId(req, res, next) {
        const { id } = req.params;
        if(!isUuid(id)) {
            return res.status(400).json({ error: 'Invalid video ID.' });
        }
        try {
            const video = await Video.findById(id);
            res.video = video;
            if(!video) {
                return res.status(404).json({ error: 'Video not found.' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        next();
    }
};