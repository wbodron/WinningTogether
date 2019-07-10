# WinningTogether
This is the repository for an AWC React-Native Project to run on windows, ios, and android devices

# Installation

git clone https://github.com/wbodron/WinningTogether.git

# Requirements --- Android

android developer studio, python2?, nodejs + more. see the React-native official website

# Getting Started --- Android

```
npm install -g react-native-cli
git clone https://github.com/wbodron/WinningTogether.git
cd WinningTogether
react-native run-android

```

# Preparing A Build --- Android

```
cd android
gradlew assembleRelease
```

the build is then found at ~/android/app/build/outputs/release/app-release.apk

# Requirements --- iOS
xcode and node.js

# Getting Started --- iOS

```
npm install -g react-native-cli
git clone https://github.com/wbodron/WinningTogether.git
npm install
cd WinningTogether
react-native run-ios
```

# Requirements --- Windows

just follow these instructions
https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/GettingStarted.md

# Getting Started --- Windows

```
npm i -g react-native-cli
git clone https://github.com/wbodron/WinningTogether.git
npm i
cd WinningTogether
react-native run-windows 
```

