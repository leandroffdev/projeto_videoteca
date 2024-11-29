const express = require('express');
const routes = express.Router();
const VideoController = require('./controllers/VideoController');
const VideoMiddleware = require('./middlewares/VideoMiddleware');

// Rota Buscar videos
routes.get('/videos', VideoController.index);
// Rota Criar videos
routes.post('/videos', VideoController.store);
// Rota Atualizar video
routes.put('/videos/:id', VideoMiddleware.validateId, VideoController.update);
// Rota Deletar video
routes.delete('/videos/:id', VideoMiddleware.validateId, VideoController.delete);
// Rota Atualizar Like
routes.patch('/videos/:id', VideoMiddleware.validateId, VideoController.updateLike);

module.exports = routes;