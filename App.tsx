/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  //   useColorScheme,
  View,
} from 'react-native';
import MyProfile from './components';

// const isDarkMode = useColorScheme() === 'dark';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <MyProfile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
