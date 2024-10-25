# React Native Training

Split in multiple projects, each in a different folder.

## Running the projects

To run a project:

- open the terminal

> cd "replace_with_your_path_to_the_project_folder"/react-native-training/"one_of_the_project_folders"
> npm start

After running the project, if you want to open the application on your computer:

- for Android:
    - make sure you have 'Android Studio' installed
    - open Android Studio, go to More Actions -> Virtual Device Manager, and make a virtual device that has the Play Store icon near it - needed for Expo Go
    - while in the same terminal where you ran the 'npm start' command, press the "a" key to run the app on the Android Virtual Device
- for iOS *(only available on Mac)*:
    - make sure you have 'Xcode' installed (or install it from the App Store)
    - open Xcode, go to the app Settings -> Locations -> Command Line Tools, and make sure the latest version is selected there
    - in Xcode, go to the app Settings -> Components, and make sure the iOS component is installed in the Platform Support section
    - in the 'Finder' app, go to Applications, search for Xcode, right click on Xcode, press 'Show Package Contents', go to Contents -> Developer -> Applications, and run the 'Simulator' app that is shown there
    - right click on the Simulator app in the dock, go to the 'Device' section, and select which device you want to test the project on, out of the available devices
    - while in the same terminal where you ran the 'npm start' command, press the "i" key to run the app on the iOS simulator

If you want to run the project on your mobile phone:

- make sure you have the 'Expo Go' app installed
- make sure you have an Expo Go account and are logged in
- using the Expo Go app (on iOS it works with the normal camera too), scan the QR Code that is shown higher up in the terminal

If it does not work, and you made sure that your phone and computer are on the same network, you might need to run the project using the following command in the terminal, instead of the 'npm start' command:

> npx expo start --tunnel

! Remember to press 'control' + 'c' before running the previous command, to kill the previous running process, if any.