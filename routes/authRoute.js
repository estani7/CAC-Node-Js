const express = require('expresss');
const authController=require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/protected', authMiddleware, (req,res) =>{
    res.status(200).send('hello user ${req.userId}')
});

module.exports = router;