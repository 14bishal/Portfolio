import {SafeAreaView, View} from 'react-native';
import React from 'react';

import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import {COGOPORT_SKILLS} from '../constants/cogoport-skills';

function MyProfile() {
  return (
    <SafeAreaView>
      <View>
        <AboutSection />
        <ExperienceSection
          title="COGOPORT"
          section="Experience"
          startDate="2022"
          endDate="Present"
          position="Associate Software Engineer - (Frontend)"
          data={COGOPORT_SKILLS}
          showMore={true}
        />
        <ExperienceSection
          title="NIT SIKKIM"
          section="Education"
          startDate="2018"
          endDate="2022"
          position="Electronic & Communication Engineering (B. Tech)"
          score="7.53"
          showMore={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default MyProfile;
