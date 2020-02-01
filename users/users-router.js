const router = require('express').Router(); 
const Users = require('./users-model'); 



router.get('/users', (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', error: err})
    })
})

module.exports = router;