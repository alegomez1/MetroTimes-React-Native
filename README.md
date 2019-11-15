# Metrorail App

## Table of Contents
- [About](#about)
- [Setup](#setup)
- [Author](#author)

![](IDSearchGif.gif)
<br>

## About <a name="about"></a>

### Why Make This?

Ever since I began taking the Miami Dade Metrorail this year I immediately became frustrated by their app. 
It's very bloated and the information that I need is not presented in an easy to understand manner, as well as cumbersome to access.
Therefore I set out to make an app focused soley on the Metrorail that delivered the info I needed in a simple and easy to use manner.

### Process

1. Create a React Native application centered around a bottomTabNavigator for navigation.
2. Use Axios to make API calls to the official Miami Dade Metro API.
3. Store the data in a global state using React-Redux.
4. Save user settings and preferences using React-Persist so the data stays intact, even after the app has been forced closed.
5. Use iOS design cues to style the application.

#### For more details on the code and logic used, please refer to the comments and documentation inside of the code.*

## Setup <a name="setup"></a>

### Installation

*   Clone the [repo]('https://github.com/alegomez1/MetroTimes-React-Native/')
*   Use ```npm install``` or ```yarn install``` to install the necessary dependencies
*   Install the latest version of Xcode as well as the React Native CLI
*   Run ```react-native run-ios```
*   Xcode iPhone simulator will launch for testing

## Created using:
* [React Native](https://facebook.github.io/react-native/) - Application Design Language
* [Xcode](https://developer.apple.com/xcode/) - Simulator and Deploying to device
* [Javascript](https://www.javascript.com/) - Frontend and backend
* [React Redux](https://redux.js.org/basics/usage-with-react) - Global state manager
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Allows for persistance of data

## Created by: <a name="author"></a>
* [Alejandro Gomez](https://github.com/alegomez1)
