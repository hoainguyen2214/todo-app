import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyle';

interface Props {
    children: React.ReactNode;
}

const SectionComponents = (props: Props) => {
    const {children} = props;
  
  return (
    <View style={[globalStyles.section]}>{children}</View>
  )
}

export default SectionComponents