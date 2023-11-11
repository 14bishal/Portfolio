import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingVertical: 18,
        marginBottom: 14,
    },

    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        lineHeight: 24,
        paddingHorizontal: 30,
    },

    social_icon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        width: '100%',
    },

    map_location: {
        flex: 1,
        width: '100%',
        height: 300,
    },

    zoom_section: {
        position: 'absolute',
        bottom: 8,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
