import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

import {styles} from './styles';
import {COGOPORT_SKILLS} from '../../constants/cogoport-skills';

function ExperienceSection() {
  const numColumn = Math.ceil(COGOPORT_SKILLS.length / 2);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.about_section}>
          <Text style={styles.section_title}>Experience</Text>
          <View style={styles.card}>
            <Text style={styles.company_name}>Cogoport</Text>
            <Text style={styles.duration}>(2022 - Present)</Text>
            <Text style={styles.position}>
              Associate Software Engineer - (Frontend)
            </Text>
            <FlatList
              keyExtractor={item => item.name}
              data={COGOPORT_SKILLS}
              numColumns={numColumn}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.wrapper} key={item?.name}>
                    <Text style={styles.label}>{`\u29BF ${item.label}`}</Text>
                  </View>
                );
              }}
            />
            <View style={styles.view_section}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => console.log('hello')}>
                <View>
                  <Text style={styles.button_name}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExperienceSection;
