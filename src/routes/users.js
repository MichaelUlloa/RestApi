const router = require('express-promise-router')();

const {
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser,
    getCarsFromUser,
    addCarsToUser
} = require('../controllers/user');


//=========Users=========\\
//GET
router.get('/', index);
//POST
router.post('/', newUser);
//GET BY ID
router.get('/:userId', getUser);
//PUT
router.put('/:userId', replaceUser);
//DELETE
router.delete('/:userId', deleteUser);

//=========Car=========\\
//GET BY ID
router.get('/:userId/cars', getCarsFromUser);

router.post('/:userId/cars',addCarsToUser)

module.exports = router;
