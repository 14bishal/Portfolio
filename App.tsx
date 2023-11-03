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
  Text,
  //   useColorScheme,
  View,
} from 'react-native';

// const isDarkMode = useColorScheme() === 'dark';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>React Native</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
