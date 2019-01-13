const express = require('express');
const router = express.Router();

//middleware
router.use(express.json());

//endpoints
router.get('/', (req, res) => {
    res.send(`GET /products endpoint`);
})

router.get('/:id', (req, res) => {
    res.send(`GET /products/${req.params.id}`);
})
// /:id is same as /products/:id

module.exports = router;