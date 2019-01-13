const express = require('express');
const router = express.Router();

//middleware

//endpoints
router.get('/', (req, res) => {
    res.send(`GET /actions endpoint`);
})

router.get('/:id', (req, res) => {
    res.send(`GET /actions/${req.params.id}`);
})
// /:id is same as /actions/:id

module.exports = router;