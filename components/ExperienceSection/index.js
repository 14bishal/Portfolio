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

function ExperienceSection({
    title = '',
    section = '',
    startDate = '',
    endDate = '',
    position = '',
    data = [],
    score = '',
    showMore = false,
}) {
    const numColumn = Math.ceil((data || []).length / 2);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.about_section}>
                    <Text style={styles.section_title}>{section}</Text>
                    <View
                        style={[
                            styles.card,
                            showMore ? styles.details : styles.hide,
                        ]}>
                        <Text style={styles.company_name}>{title}</Text>
                        <Text
                            style={
                                styles.duration
                            }>{`(${startDate} - ${endDate})`}</Text>
                        <Text style={styles.position}>{position}</Text>
                        {score ? (
                            <View>
                                <Text style={styles.label}>
                                    {`${score}`} CGPA{' '}
                                </Text>
                            </View>
                        ) : (
                            <FlatList
                                keyExtractor={item => item.name}
                                data={data}
                                numColumns={numColumn}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => {
                                    return (
                                        <View
                                            style={styles.wrapper}
                                            key={item?.name}>
                                            <Text
                                                style={
                                                    styles.label
                                                }>{`\u29BF ${item.label}`}</Text>
                                        </View>
                                    );
                                }}
                            />
                        )}
                        {showMore ? (
                            <View style={styles.view_section}>
                                <TouchableOpacity
                                    activeOpacity={0.4}
                                    onPress={() => console.log('hello')}>
                                    <View>
                                        <Text style={styles.button_name}>
                                            Details
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ExperienceSection;
