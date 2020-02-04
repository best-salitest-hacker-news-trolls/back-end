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


// router.post('/users/:id/favorites', (req, res) => { 
//      const theid = req.params.id;
//     Users.findUserById(theid)
//     .then(user => { 
//         if(user.length < 1) {
//             res.status(404).json({message: "The post with specific id does not exist"})
//         }else if(req.body.favorite_comments == undefined){
//             res.status(400).json({errorMessage: "Please provide text for comment"})
//         }else{
//             Users.insertFavorite(req.body)
//             .then(users => { 
//                 res.status(201).json(users);
//             })
//             .catch(err => { 
//                 console.log('Post by id to favorites error:', err)
//                 res.status(500).json({
//                     errorMessage: "There was an error while saving the comment to the database"
//                 })
//             })
//         }
//     })
//     .catch(err => { 
//         console.log('/favorites err:', err)
//         .then(fav => { 
//             res.status(500).json({errorMessage:'could not get favorites', error: err})
//         })
//     })
// })
router.get('/users/favorites',restricted, (req, res) => { 
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
router.get('/users/:id/favorites',restricted, (req, res) => { 
    // const id = req.params.id;
    Users.getFav(req.params.id)
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
router.post('/users/:id/favorites/',restricted, (req, res) => { 
    // const id = req.params.id;
    Users.addFav(req.body, req.params.id)
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
router.delete('/users/:id/favorites/:comment_id',restricted, (req, res) => { 
    // const id = req.params.id;
    Users.deleteFav(req.params.id, req.params.comment_id)
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