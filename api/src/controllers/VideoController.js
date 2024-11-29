const Video = require('../models/Video');
const mongoose = require('mongoose');
const { v4:uuid } = require('uuid');

module.exports = {
    // Controller Buscar vídeos
    async index(req, res) {
        try {
            const videos = await Video.find();
            return res.status(200).json({ videos: videos});
        } catch (error) {
            return res.status(500).json({ erro: error.message});
        }
    },
    // Controller Criar vídeos
    async store(req, res) {
        try {
            const { title, link } = req.body;
            if(!title || !link) {
                return res.status(400).json({ error: 'Title and link are required' });
            }
            const video = new Video({
                _id: uuid(),
                title: title,
                link: link,
                liked: false,
            });
            await video.save();
            return res.status(201).json({ message: "Video criado com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    },
    // Controller atualizar video
    async update(req, res) {
        const { title, link } = req.body;
        if(!title && !link) {
            return res.status(400).json({ error: 'Title and link are required' });
        }
        if(title) res.video.title = title;
        if(link) res.video.link = link;
        try {
            await res.video.save();
            return res.status(200).json({ message: "Video atualizado com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    },
    // Controller Deletar video
    async delete(req, res) {
        try {
            await res.video.deleteOne()
            return res.status(200).json({ message: "Video deletado com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    },
    // controller de Like
    async updateLike(req, res) {
        try {
            res.video.liked = !res.video.liked;
            await res.video.save();
            return res.status(200).json({ message: `Video: ${res.video.liked ? "Liked" : "Unliked" } successfully!` });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
}