# mmedium-OAuth


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
