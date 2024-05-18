import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyle';

interface Props {
    children: ReactNode;
    justify?: 'space-between' | 'space-around' | 'space-evenly' | 'center' | 'flex-start' | 'flex-end';
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>;
}

const RowContainer = (props: Props) => {
    const { children, justify, onPress, styles } = props;
    const localStyles = [
        globalStyles.row,
        {justifyContent: justify ?? 'center'},
        styles
    ]

  return onPress 
    ? (<TouchableOpacity 
          style={localStyles} 
          onPress={onPress ? () => onPress() : undefined}>
        {children}
    </TouchableOpacity>) 
    : (
    <View style={localStyles}>
      {children}
    </View>
  )
}

export default RowContainer