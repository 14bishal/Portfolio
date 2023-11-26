import React, {useState} from 'react';
import {
    Image,
    Linking,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {
    MINUS_ICON,
    PLUS_ICON,
    SOCIAL_ICONS,
    SOCIAL_NAVIGATE_MAPPING,
} from '../../../constants/social-icons';

function ContactSection() {
    const [initialRegion, setInitialRegion] = useState({
        latitude: 19.117047,
        longitude: 72.869386,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
    });

    const handleChangeRegion = newRegion => {
        setInitialRegion(newRegion);
    };

    const handleNavigate = val => {
        Linking.openURL(SOCIAL_NAVIGATE_MAPPING?.[val]);
    };

    const handleZoomIn = () => {
        setInitialRegion(prev => ({
            ...prev,
            latitudeDelta: prev.latitudeDelta / 2,
            longitudeDelta: prev.longitudeDelta / 2,
        }));
    };

    const handleZoomOut = () => {
        setInitialRegion(prev => ({
            ...prev,
            latitudeDelta: prev.latitudeDelta * 2,
            longitudeDelta: prev.longitudeDelta * 2,
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Contact Me</Text>
                <View style={styles.social_icon}>
                    {SOCIAL_ICONS?.map((itm, indx) => {
                        const {
                            imageUrl = '',
                            name = '',
                            width,
                            height,
                        } = itm || {};

                        return (
                            <TouchableOpacity
                                key={`${name}_${indx}`}
                                onPress={() => handleNavigate(name)}>
                                <Image
                                    source={{uri: imageUrl}}
                                    width={width}
                                    height={height}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <MapView
                    style={styles.map_location}
                    region={initialRegion}
                    onRegionChange={handleChangeRegion}>
                    <Marker
                        coordinate={{
                            latitude: initialRegion?.latitude,
                            longitude: initialRegion?.longitude,
                        }}
                    />
                </MapView>
                <View style={styles.zoom_section}>
                    <TouchableOpacity onPress={handleZoomIn}>
                        <Image
                            source={{uri: PLUS_ICON}}
                            width={35}
                            height={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleZoomOut}>
                        <Image
                            source={{uri: MINUS_ICON}}
                            width={35}
                            height={35}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ContactSection;
