// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listFavorites,
    storeFavorites,
    updateFavorites,
    deleteFavorites,
    relatorioFavorites
} = require('../controllers/favoritesController');

router.get('/favorites/:id', listFavorites)
router.get('/relatoriofavorites/:id_empresa', relatorioFavorites)
router.post('/create/favorites', storeFavorites)
router.put('put/favorites', updateFavorites)
router.delete('/delete/favorites/:id_empresa', deleteFavorites)

module.exports = router;