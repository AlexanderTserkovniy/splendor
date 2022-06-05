# Splendor board game

![Splendor](https://boardgame.top/uploads/posts/2017-07/1501086956_splendor.jpg)

This repo contains playable Splendor game, written in React+Redux+Redux-Observables

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `serve -s build`

After `yarn build` we could see the project running.
To use `serve` add it to global `yarn global add serve`
To use it from command line go to `~/.zprofile` e.g. `sudo nano ~/.zprofile` and put the following
`export PATH="$PATH:$(yarn global bin)"` prior to it, better to evaluate the `yarn global bin` so that the string looks
like this `export PATH="$PATH:/Users/oleksandrtserkovnyi/.yarn/bin"`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Test close GH