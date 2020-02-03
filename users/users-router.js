const router = require('express').Router(); 
const Users = require('./users-model'); 
const restricted = require('../auth/restricted-middleware.js')


router.get('/users', restricted, (req, res) => { 
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