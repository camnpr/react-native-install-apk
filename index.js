import { NativeModules, Platform } from 'react-native';
const { InstallApk } = NativeModules;

const InstallUtil = {

  install: function (url) {
    if (Platform.OS === 'android') {
      InstallApk.install(url);
    }
  }
}

export default InstallUtil;
