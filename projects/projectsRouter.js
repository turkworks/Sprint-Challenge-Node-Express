const express = require('express');
const router = express.Router();

//middleware
router.use(express.json());

//endpoints
router.get('/', (req, res) => {
    res.send(`GET /projects endpoint`);
})

router.get('/:id', (req, res) => {
    res.send(`GET /projects/${req.params.id}`);
})
// /:id is same as /projects/:id

module.exports = router;