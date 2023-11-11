import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 18,
        width: width,
        backgroundColor: '#DAFCFF',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        lineHeight: 24,
        marginBottom: 14,
        paddingHorizontal: 30,
    },

    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 14,
    },
    box_container: {
        width: '44%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 4,
        marginBottom: 14,
    },
    project_image: {
        width: '100%',
        height: 90,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    content: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
    },
    project_title: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        width: '100%',
    },
    view_more: {
        width: '100%',
        paddingRight: 30,
    },
    button_name: {
        display: 'flex',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    arrow_icon: {
        width: 14,
        height: 14,
        marginLeft: 6,
    },
    wrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
