import {StyleSheet} from 'react-native';

// const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        // borderColor: '#bdbd',
        // borderWidth: 2,
        paddingBottom: 26,
        paddingHorizontal: 24,
    },

    view_section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        // paddingHorizontal: 80,
    },

    image_section: {
        flex: 1,
        marginBottom: 30,
    },

    avatar: {
        width: 150,
        height: 150,
        borderRadius: 50,
    },

    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2B2B2B',
        marginBottom: 16,
    },

    designation: {
        fontSize: 16,
        color: '#767676',
    },

    about_section: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },

    about: {
        fontSize: 16,
        color: '#2B2B2B',
        lineHeight: 24,
    },

    bold_text: {
        fontWeight: 'bold',
    },

    section_title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        lineHeight: 24,
        marginBottom: 14,
    },
});
