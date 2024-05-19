import { StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyle'
import { colors } from '../constants/colors'

interface Props {
    text: string,
    color?: string,
    tagStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<ViewStyle>,
    onPress?: () => void
}

const TagComponent = (props: Props) => {
  const { text, color, tagStyle, textStyle, onPress } = props

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}
      style={[globalStyles.tag ,tagStyle, {backgroundColor: color ?? colors.blue}]}>
        <TextComponent text={text} styles={textStyle}></TextComponent>
    </TouchableOpacity>
  )
}

export default TagComponent