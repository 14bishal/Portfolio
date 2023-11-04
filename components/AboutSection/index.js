import {SafeAreaView, View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';

function AboutSection() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view_section}>
          <View style={styles.image_section}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.title}>Bishal Kumar Saha</Text>
          <Text style={styles.designation}>Associate Software Engineer</Text>
        </View>
        <View style={styles.about_section}>
          <Text style={styles.section_title}>About</Text>
          <Text style={styles.about}>
            Hi, I'm Bishal Kumar Saha, and I am a graduate of the{' '}
            <Text style={styles.bold_text}>
              National Institute of Technology Sikkim (NIT Sikkim)
            </Text>
            , where I completed my studies in Electronic & Communication
            Engineering in the year 2022. I have gained valuable experience over
            the past year and have been working at{' '}
            <Text style={styles.bold_text}>Cogoport</Text> as a Frontend
            Developer.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutSection;
