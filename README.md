# mmedium-OAuth
https://mmedium-oauth.herokuapp.com/

## Installation Instructions
- Clone this repository
- Run `npm install`
- Create a `config.env` file
- Add a DATABASE_URL variable with a link to a local PSQL database on your computer.
- Add a COOKIE_PASSWORD variable of at least 32 random characters (this is used to encrypt cookies from the server).

## User Stories

**As a member of Founders and Coders, who wants to learn from my fellow devs**

I want to log in with my Github account
So that I can use my Github organisation's info to see posts from my fellow students.

### Acceptance Criteria

- [ ] I can click on a button, which allows me to log in via my Github account
- [ ] The look of the button should make it obvious that it is this form of login
- [ ] Once I'm logged in, I should see a list of blog posts
- [ ] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.

**As any user who is logged in**

I want to see my username & Github profile picture on the homepage
So that I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.

### Acceptance Criteria

- [ ] I can see my username & profile picture on each page that I visit

## Stretch Goals

- [ ] Display organisations that I'm a part of in a drop down menu which links to articles posted by members of that organisation.
- [ ] Display a loading indicator when the user comes back from Github authentication page

## Learnings

### TLS issues

We had a few issues setting up TLS with Heroku and Travis. Heroku needed access to our keys and certs, however there is no way to do this without paying $20/month. However, Heroku is already HTTPS, so the server was only HTTP when running from our local server. There are several work arounds to this, however in the interest of time we decided to remove tls from our local server and rely on Heroku's HTTPS.

### Storing info in the cookie

We ran into issues when we tried to store the access token/username/avatar url in the cookie, namely they weren't storing. We found that this was because auth was set to false in our home route, which meant there was no attempt to store our info in the cookie. This was changed when we set auth to `{ strategy: 'base', mode: 'try' }`
