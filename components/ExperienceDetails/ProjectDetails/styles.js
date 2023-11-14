import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 24,
    },

    content: {
        width: width - 48,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 14,
        color: '#000',
    },

    info_section: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#005b96',
        borderRadius: 20,
        backgroundColor: '#fff',
    },

    image_section: {
        width: '100%',
        height: 150,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    skill_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    info: {
        padding: 8,
    },

    label: {
        marginRight: 6,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },

    description: {
        color: '#000',
        lineHeight: 22,
        marginBottom: 8,
    },
});
