/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {VESDK, Configuration, TintMode} from 'react-native-videoeditorsdk';

/**
 * Uncomment the following single line of code to unlock VideoEditor SDK automatically
 * for both platforms. Every platform requires a separate license file which must be
 * named `vesdk_license.ios.json` for the iOS license and `vesdk_license.android.json`
 * for the Android license file.
 */
// VESDK.unlockWithLicense(require('./vesdk_license'));

const App: () => React$Node = () => {
  const openEditor = () => {
    // Set up sample video
    let video = require('./assets/video.mp4');
    // Set up configuration
    let configuration: Configuration = {
      // Configure sticker tool
      sticker: {
        // Enable personal stickers
        personalStickers: true,
        // Configure stickers
        categories: [
          // Create sticker category with stickers
          {
            identifier: 'example_sticker_category_logos',
            name: 'Logos',
            thumbnailURI: require('./assets/React-Logo.png'),
            items: [
              {
                identifier: 'example_sticker_logos_react',
                name: 'React',
                stickerURI: require('./assets/React-Logo.png'),
              },
              {
                identifier: 'example_sticker_logos_imgly',
                name: 'img.ly',
                stickerURI: require('./assets/imgly-Logo.png'),
                tintMode: TintMode.SOLID,
              },
            ],
          },
          // Reorder and use existing sticker categories
          {identifier: 'imgly_sticker_category_animated'},
          {identifier: 'imgly_sticker_category_emoticons'},
          // Modify existing sticker category
          {
            identifier: 'imgly_sticker_category_shapes',
            items: [
              {identifier: 'imgly_sticker_shapes_badge_01'},
              {identifier: 'imgly_sticker_shapes_arrow_02'},
              {identifier: 'imgly_sticker_shapes_spray_03'},
            ],
          },
        ],
      },
    };
    VESDK.openEditor(video, configuration).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      },
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>VideoEditor SDK</Text>
              <TouchableHighlight onPress={openEditor}>
                <Text style={styles.sectionDescription}>
                  Click here to <Text style={styles.highlight}>edit a sample video</Text>.
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
