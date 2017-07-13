
# react-native-react-native-document-viewer

## Getting started

`$ npm install react-native-react-native-document-viewer --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-document-viewer`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-document-viewer` and add `RNReactNativeDocumentViewer.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeDocumentViewer.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeDocumentViewerPackage;` to the imports at the top of the file
  - Add `new RNReactNativeDocumentViewerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-document-viewer'
  	project(':react-native-react-native-document-viewer').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-document-viewer/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-document-viewer')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativeDocumentViewer.sln` in `node_modules/react-native-react-native-document-viewer/windows/RNReactNativeDocumentViewer.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNReactNativeDocumentViewer;` to the usings at the top of the file
  - Add `new RNReactNativeDocumentViewerPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNReactNativeDocumentViewer from 'react-native-react-native-document-viewer';

// TODO: What to do with the module?
RNReactNativeDocumentViewer;
```
  