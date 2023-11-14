import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ProjectDetails from './ProjectDetails';
import EXPERIENCE_PROJECT from '../../constants/experience-project';

function ExperienceDetails() {
    return (
        <SafeAreaView>
            <ScrollView>
                {(EXPERIENCE_PROJECT || []).map(item => {
                    const {
                        label = '',
                        name = '',
                        skills = [],
                        description = [],
                        imageUrl,
                    } = item || {};

                    return (
                        <ProjectDetails
                            key={name}
                            title={label}
                            skills={skills}
                            description={description}
                            imageUrl={imageUrl}
                        />
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default ExperienceDetails;
