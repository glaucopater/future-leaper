# Getting Started with Future Leaper

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TODO

- Remove all any, enforce types ✅
- Connect the API ✅
- Store the cookie ✅
- Fix App state ✅
- Add logout ✅
- Add Signup

- Add navigation router
- Add missing actions
- Split actions and types by context
- Add unit tests
- Divide the App in pages
- Create navigation menu
- Add breadbrumbs
- Mock the api response

---

To do:

JS/HTML Part:

create a signup form (we prefer using redux-form module) with API integration (/users)
first name (required)
last name (required)
email (required)
add a login page - using API endpoint (/users/login)
create application list page - using API endpoint
display application page - using API endpoint (/applications)
display current active navigation breadcrumb
CSS Part:

stick page header to the top - independent on scroll position
write a (scss) mixin that will calc & return font size based on rem with px fallback for older browsers
highlight the currently active navigation item in breadcrumb

---

Mocked API routes

User

Register user
[POST] https://frontend-test.getsandbox.com/users
{ "username":"fred", "password":"fred" }
Login
[POST] https://frontend-test.getsandbox.com/users/login
{ "username":"fred", "password":"fred" }=> Session ID stored in a cookie : sessionId=[uuid]
User info
[GET] https://frontend-test.getsandbox.com/users (need Auth Cookies)
Application

Add application
[POST] https://frontend-test.getsandbox.com/applications (need Auth Cookies)
{ "id": "1", "name": "App1", "secret": "secretsecretsecretsecret", "lang":"php", "version": 1 }
List application
[GET] https://frontend-test.getsandbox.com/applications (need Auth Cookies)
Param:
lang : ?lang=php
version: ?lang=version
Update application
[PUT] https://frontend-test.getsandbox.com/applications/[id] (need Auth Cookies)
{ "username":"admin" }
Delete application
[DELETE] https://frontend-test.getsandbox.com/applications/[id] (need Auth Cookies)
Sandbox

Reset sandbox
[DELETE] https://frontend-test.getsandbox.com/sandbox

## [Live Demo](TBD) ⚡

![Demo](/demo/demo.png)

# State manager 🏬

# API

# Security

# UI 🎨

# Models 📐

# Tests 🧪

# Ship to prod 🚢

Thanks to husky each commit /push perform unit tests, eslint, prettify the code.
Then deploy it on netlify (demo).

# Performance ⚡

Reduce rerendering

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies and husky hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
