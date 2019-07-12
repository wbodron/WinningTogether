# WinningTogether
an AWC React-Native Project to run on windows, ios, and android devices

# General Notes

The setup to get three platforms winning together in a single project was quite extensive.
the full requirements to run all three types:
  
  A windows computer with windows build 10.0.18630^
  A macBook with Xcode
  ios or android device (optional)

  Visual Studio 2019
  Android Studio
  
  be able to navigate unix and cmd terminals

  much more. I'll provide links to more resources, but those are the starting points

iOS development has to be run on a mac, and windows dev needs to be on windows. sharing code between the two dev devices seems ot work fine, but you do need to run an extra command because each device creates a different and incompatible transform cache. run '''npm start -- --reset-cache''' to clean it out. I think technically this cache could be added to gitignore, but im not actually sure where its stored

development on windows is the most difficult/restrictive, so maybe start there and hope for the best

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

