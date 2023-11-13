import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';
import ContactSection from './Contact';

import {COGOPORT_SKILLS} from '../../constants/cogoport-skills';

function MyProfile() {
    const navigation = useNavigation();

    const handleDetailspage = () => {
        navigation.navigate('ExperienceDetails');
    };

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
                        handleDetailspage={handleDetailspage}
                    />
                    <ProjectSection handleDetailspage={handleDetailspage} />
                    <ExperienceSection
                        title="NIT SIKKIM"
                        section="Education"
                        startDate="2018"
                        endDate="2022"
                        position="Electronic & Communication Engineering (B. Tech)"
                        score="7.53"
                        showMore={false}
                        handleDetailspage={handleDetailspage}
                    />
                    <SkillSection />
                    <ContactSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyProfile;
