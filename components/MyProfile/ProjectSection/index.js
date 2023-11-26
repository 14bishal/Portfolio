import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {styles} from './styles';
import POPULAR_PROJECTS from '../../../constants/projects';
import {ARROW_ICON} from '../../../constants/social-icons';

function ProjectSection({handleDetailspage = () => {}}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Popular Projects</Text>
                    <View style={styles.wrapper}>
                        {(POPULAR_PROJECTS || []).map(itm => {
                            const {
                                label = '',
                                name = '',
                                imageUrl = '',
                            } = itm || {};

                            return (
                                <View style={styles.box_container} key={name}>
                                    <Image
                                        source={{uri: imageUrl}}
                                        style={styles.project_image}
                                        alt="project"
                                    />
                                    <View style={styles.content}>
                                        <Text style={styles.project_title}>
                                            {label}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles.view_more}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => handleDetailspage()}>
                            <View style={styles.wrap}>
                                <Text style={styles.button_name}>See All</Text>
                                <Image
                                    style={styles.arrow_icon}
                                    source={{uri: ARROW_ICON}}
                                    alt="long-arrow-right"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProjectSection;
