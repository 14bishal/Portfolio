import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        width: width,
        backgroundColor: '#DAFCFF',
    },
    section_title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        lineHeight: 24,
        marginBottom: 14,
        paddingHorizontal: 30,
    },
    card: {
        flex: 1,
        width: width - 40,
        height: 180,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        elevation: 5,
        backgroundColor: '#fff',
    },
});
