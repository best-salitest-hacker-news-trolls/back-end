## Backend Saltiest-Hacker-News-Trolls

# Endpoints: 

- /api/users - gets all users

- post /api/register - adds user to database with username and password objects

- post /api/login - logs user in with username and password objects

- get /api/users/favorites   - for all the users and favorites
- get /api/users/:id/favorites/ - for example returns 
{
        "user_id": 3,
        "username": "haro",
        "comment_id": 16,
        "favorite_comments": "Haro to save the day",
        "fav_salty_score": 2
    }

- post /api/users/:id/favorites/ - for example for body :id and user_id must match
{
	"user_id":3,
	"favorite_comments":"Haro to save the day", 
	"fav_salty_score":2
}

- delete /api/users/:id/favorites/:comment_id  - returns a 1 as success.


