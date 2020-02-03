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


router.post('/users/:id/favorites', (req, res) => { 
     const id = req.params.id;
    Users.addFav(req.body, id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/favorites err:', err)
        .then(fav => { 
            res.status(500).json({errorMessage:'could not get favorites', error: err})
        })
    })
})
router.get('/users/favorites', (req, res) => { 
    // const id = req.params.id;
    Users.findUserFav()
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/favorites err:', err)
        .then(fav => { 
            res.status(500).json({errorMessage:'could not get favorites', error: err})
        })
    })
})
module.exports = router;