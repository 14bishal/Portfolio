import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import SVG_MAPPING from '../../../constants/svg-mapping';

import {styles} from './styles';

function SkillSection() {
    const flatListRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next index
            const nextIndex = (currentIndex + 1) % SVG_MAPPING?.length;
            // Scroll to the next index
            flatListRef.current.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            // Update the current index
            setCurrentIndex(nextIndex);
        }, 2000); // Change the interval duration as needed

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.section_title}>Skills</Text>
                <FlatList
                    ref={flatListRef}
                    data={SVG_MAPPING}
                    horizontal={true}
                    keyExtractor={itm => itm?.key}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <Image
                                source={{uri: item?.image}}
                                style={{
                                    width: item?.width,
                                    height: item?.height,
                                }}
                            />
                        </View>
                    )}
                    pagingEnabled
                />
            </View>
        </SafeAreaView>
    );
}

export default SkillSection;
