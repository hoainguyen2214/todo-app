import {Platform, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 42 : 35,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    section: {
        marginBottom: 16,
    },
    
    text: {
        fontSize: 16,
        fontFamily: fontFamilies.regular,
        color: colors.text,
    },

    inputContainer: {
        backgroundColor: colors.grey,
        borderRadius: 12,
        paddingHorizontal: Platform.OS === 'ios' ? 12 : 8,
        paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    },

    tag: {
        paddingHorizontal: 20,
        paddingVertical: Platform.OS === 'ios' ? 6 : 4,
        backgroundColor: colors.blue,
        borderRadius: 100,
    }
})