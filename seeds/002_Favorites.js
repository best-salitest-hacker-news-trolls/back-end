

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Favorites')
    .then(function () {
      // Inserts seed entries
      return knex('Favorites').insert([
        {user_id: 200,  Hacker_News_User:'stcredzero',favorite_comments: "...or the cafe, or the coworking space, or at your friend's house.  Since the call comes first, it's a fortuitous enhancement you sometimes add to an ordinary call.  Your way, you are either already sitting and working, or you had to plan ahead.  Big diffence.", fav_salty_score: 4.5},
        {user_id: 200,  Hacker_News_User:'joezydeco',favorite_comments: "I think the Google IPO was a bit unique where they kind of gave Wall Street the finger and said \"we'll do it  our way, thanks\".  They pissed off a lot of bankers but I don't think Sergey and Larry really cared. Haven't seen a situation or company like that since.", fav_salty_score: 2.456},
        {user_id: 200,  Hacker_News_User:'girvo',favorite_comments: "Hy is neat. I love Lisps that \"compile\" or are embedable within host scripting languages. My favourite one to hack on (owing to my PHP ability) is Pharen[0]. Very neat little Lisp that compiles down to PHP, which is very fun to play with. I highly suggest giving Hy a go if you're a Pythonista, as you can learn a lot about programming in general by seeing how these sorts of languages map to the host. Very fun to hack on, too! [0]: Link.", fav_salty_score: 5.095},
        {user_id: 200,  Hacker_News_User:'pyre',favorite_comments: "Blockbuster still had profitable locations, IIRC. It was the company as a whole that was collapsing. I assume that those locations are probably still profitable now, though maybe not as much as at its apex.", fav_salty_score: 2.133},
        {user_id: 200,  Hacker_News_User:'pohl',favorite_comments: "Happy 15th birthday from user #872.  Back when Rob Malda started you, it was such a thrill to read the posts of far-flung techies whose interests went beyond what the real \"tech news\" press was covering.  It's almost painful to go back now and read what has become of you.  There are only so many racist trolls one can encounter before it ruins the whole experience.", fav_salty_score: 3.739},
        {user_id: 200,  Hacker_News_User:'ahoyhere',favorite_comments: "Palm has never been as cool as Apple. Palm hardware has always been \"organization pr0n,\" which only appeals to a small subset. The iPhone is seen as cool; it is the most desirable phone. People are bending over backwards to afford one (the most iPhone growth over the past 2 quarters has been in low-middle and low class income groups). Apple paved the way with iPods. I think Palm will have a very hard time selling the Pre to people outside the geeky / careering groups where orgpr0n still appeals. Even if the user experience is better, the market hasn't been conditioned fr it.", fav_salty_score: 3.147},
        {user_id: 200,  Hacker_News_User:'GHFigs',favorite_comments: "You merely read a blog post about the study. The study itself is linked in the second paragraph.  Here:Link.", fav_salty_score: 4.5},
        {user_id: 200,  Hacker_News_User:'marknutter',favorite_comments: "The vast majority of these apps are brochureware that wouldn't function properly without an internet connection.", fav_salty_score: 0.958},
        {user_id: 200,  Hacker_News_User:'jacquesm',favorite_comments: "I'm sorry, I don't see your point. Could you elaborate?", fav_salty_score: 1.611},
        {user_id: 200,  Hacker_News_User:'melling',favorite_comments: "Can someone discuss the pros of Fedora?  I'm mainly a Mac user these days but my Fedora 9 box is still running in the corner on a very old box.  I promised myself I'd get a beefy 8-core Intel Ivy bridge system next year.  I assume all my \"build notes\" with all my yum installs still work.  All I ever hear about is Ubuntu.", fav_salty_score: 0.792},
        {user_id: 200,  Hacker_News_User:'pjc50',favorite_comments: "All sorts of parts can be surprisingly hard to find. I've been working on a radio product where the 16-way channel selector switch had to be specially ordered from China, while everything else came from Digikey.", fav_salty_score: -0.357},
        
        
      ]);
    });
};
