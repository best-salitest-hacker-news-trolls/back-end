## Backend Saltiest-Hacker-News-Trolls

# Endpoints: 

- /api/users - gets all users

- post /api/register - adds user to database with username and password objects

- post /api/login - logs user in with username and password objects

- get /api/users/:id/favorites/

- post /api/users/:id/favorites/ takes {"favorite_comments":string, "fav_salty_score":integer}

- delete /api/users/:id/favorites/:favoriteId


- post /api/users/:id/comments  takes {"salty_comment": string, "Comment_Salty_Score":integer}

- get /api/users/:id/comments

- get /api/users/comments

