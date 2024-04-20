Issue
------

* the higher-order component `withAuthenticator` works as expected on web
* does not work on mobile (iOS or Android)
    - there are no logs to indicate what the issue is

* Here are images of the issue: [images for all three
  platforms](https://imgur.com/a/FtJzuoo)

To Reproduce
--------------
* `git clone` this repository
* install the `npm` packages with `npm install`
* run with `npx expo start`
    - test on web by pressing `w` in the terminal or visiting `localhost:8081`
    - run the iOS simulator by pressing `i` (if on a Mac)
    - test with android by pressing `a`
