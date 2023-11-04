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
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

// const isDarkMode = useColorScheme() === 'dark';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <AboutSection />
          <ExperienceSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
