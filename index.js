require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
    "login": "Avinash174",
    "id": 42104652,
    "node_id": "MDQ6VXNlcjQyMTA0NjUy",
    "avatar_url": "https://avatars.githubusercontent.com/u/42104652?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Avinash174",
    "html_url": "https://github.com/Avinash174",
    "followers_url": "https://api.github.com/users/Avinash174/followers",
    "following_url": "https://api.github.com/users/Avinash174/following{/other_user}",
    "gists_url": "https://api.github.com/users/Avinash174/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Avinash174/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Avinash174/subscriptions",
    "organizations_url": "https://api.github.com/users/Avinash174/orgs",
    "repos_url": "https://api.github.com/users/Avinash174/repos",
    "events_url": "https://api.github.com/users/Avinash174/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Avinash174/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Avinash Magar",
    "company": "IT Student",
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": "avinash_magar18",
    "public_repos": 50,
    "public_gists": 0,
    "followers": 11,
    "following": 16,
    "created_at": "2018-08-05T02:53:17Z",
    "updated_at": "2023-09-24T12:25:50Z"
  }

app.get('/facebook', (req, res) => {
  res.send('Hello World!')
})
app.get('/google', (req, res) => {
    res.send('Hello All!')
  })

app.get('/login',(req,res)=>{
    res.send('<h1>Welcome In back End</h1>')
})

app.get('/github',(req,res)=>{
    res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})