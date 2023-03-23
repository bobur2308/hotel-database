const express = require('express');

const {loginPage, adminLogin, addVisitors, addVisitorsPost,deleteGuest,logOut} = require('../Controllers/Controller');



const router = express.Router();


router.get('/', loginPage);
router.post('/', adminLogin);
router.get('/add', addVisitors);
router.post('/add', addVisitorsPost);
router.post('/:id/delete',deleteGuest)
router.get('/logout',logOut)
module.exports = router;
