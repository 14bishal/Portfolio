import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';

function ProjectDetails({
    title = '',
    skills = [],
    description = [],
    imageUrl = '',
}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.info_section}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.image_section}
                        />
                        <View style={styles.info}>
                            <View style={styles.skill_container}>
                                {skills?.map(itm => (
                                    <Text style={styles.label} key={itm}>
                                        {`\u29BF ${itm}`}
                                    </Text>
                                ))}
                            </View>
                            {description?.map(it => {
                                const {label = '', key = ''} = it || {};

                                return (
                                    <Text style={styles.description} key={key}>
                                        {`\u25CF ${label}`}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProjectDetails;
