import {SafeAreaView, View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';

function ExperienceSection() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Experience</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExperienceSection;
