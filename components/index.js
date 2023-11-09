import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';

import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import {COGOPORT_SKILLS} from '../constants/cogoport-skills';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';

function MyProfile() {
    return (
        <SafeAreaView>
            <ScrollView>
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
                    <ProjectSection />
                    <ExperienceSection
                        title="NIT SIKKIM"
                        section="Education"
                        startDate="2018"
                        endDate="2022"
                        position="Electronic & Communication Engineering (B. Tech)"
                        score="7.53"
                        showMore={false}
                    />
                    <SkillSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyProfile;
