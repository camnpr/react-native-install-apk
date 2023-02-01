# react-native-install-apk(android only)

[![npm](https://img.shields.io/npm/v/@isudaji/react-native-install-apk.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/@isudaji/react-native-install-apk?_blank)
[![NPM downloads](https://img.shields.io/npm/dm/@isudaji/react-native-install-apk.svg?style=flat-square)](https://npmjs.org/package/@isudaji/react-native-install-apk)

## init

`your-app-name`

## install
`npm i @isudaji/react-native-install-apk --save`

OR

`yarn add @isudaji/react-native-install-apk`

AND

`react-native link @isudaji/react-native-install-apk` **react-native <= 0.60.4**

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.apk.install.RNSdkInstallPackage;` to the imports at the top of the file
  - Add `new RNSdkInstallPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
    ```
    include ':react-native-install-apk'
    project(':react-native-install-apk').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-install-apk/android')
    ```
3. Insert the following lines inside the **dependencies** block in `android/app/build.gradle`:
    ```
      implementation project(':react-native-install-apk')
    ```

## usage  
    import { NativeModules } from 'react-native';  
    NativeModules.InstallApk.install(path);  

## example code  
you can use [react-native-fs](https://github.com/johanneslumpe/react-native-fs) to download the apk file:  

    var filePath = RNFS.DocumentDirectoryPath + '/com.domain.example.apk';
    var download = RNFS.downloadFile({
        fromUrl: 'apk file download url',
        toFile: filePath,
        progress: res => {
            console.log((res.bytesWritten / res.contentLength).toFixed(2));
        },
        progressDivider: 1
    });
    download.promise.then(result => {
        if(result.statusCode == 200){
            NativeModules.InstallApk.install(filePath);
        }
    });

## publish

`npm publish --access public`

## Report Bug

- `Invariant Violation: requireNativeComponent: "RNSScreen" was not found in the UIManager.`

- `Could not find method compile() for arguments [project ':@isudaji/react-native-install-apk'] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.`

- `The project name '@isudaji/react-native-install-apk' must not contain any of the following characters: [/, \, :, <, >, ", ?, *, |]`

- `Could not find method compile() for arguments [project ':react-native-install-apk'] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.`

- `Could not find method compile() for arguments [com.facebook.react:react-native:+] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.` **gradle 3.x**