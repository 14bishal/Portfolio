import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        width: width,
        paddingHorizontal: 30,
    },

    about_section: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },

    section_title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        lineHeight: 24,
        marginBottom: 14,
    },

    card: {
        width: 332,
        padding: 30,
        flex: 4,
        alignContent: 'center',
        borderRadius: 15,
        // backgroundColor: '#0077FF',
        backgroundColor: '#008BDE',
    },

    details: {
        height: 230,
    },

    hide: {
        height: 185,
    },

    company_name: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '600',
    },

    duration: {
        fontSize: 12,
        color: '#fff',
    },

    position: {
        marginVertical: 8,
        fontWeight: 'bold',
        color: '#fff',
    },

    wrapper: {
        marginRight: 4,
        marginBottom: 4,
        width: 90,
    },

    label: {
        color: '#fff',
    },

    view_section: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
    },

    button_name: {
        color: '#fff',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});
