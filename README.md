# Getting Started with Future Leap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo ⚡

![Login](/demo/future_leap_login.jpg)
![Home](/demo/future_leap_home.jpg)
![Add Application](/demo/future_leap_add.jpg)
![Scroll Page](/demo/future_leap_scroll.jpg)
![Application Details](/demo/future_leap_details.jpg)

# State manager 🏬

I adopted as by requirement Redux and Thunk, even in this case React custom reducer hooks and a context would have been more than enough.

# API

Axios is used for the basic CRUD operation. Please note that the info about some API in the readme are not correct, i.e. for the /users endpoint the shape of the user model has only username and password.

# Security

Using a cookie nowadays is a bit strange to me, I would have opted for a standard JWT or also a http-only cookie.

# UI 🎨

The UI is minimalistic, due to missing time I could not switch to SASS.

# Tests 🧪

Missing in action...

# Ship to prod 🚢

Thanks to husky each commit /push perform eslint and prettify the code.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies and husky hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
