import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { globalStyles } from '../styles/globalStyle'
import RowComponents from '../components/RowComponents'
import SectionComponents from '../components/SectionComponents'
import TextComponent from '../components/TextComponent'
import TitleComponent from '../components/TitleComponent'
import { colors } from '../constants/colors'
import CardComponent from '../components/CardComponent'

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponents>
        <RowComponents justify="space-between">
          <TextComponent text='Icon 1'/>
          <TextComponent text='Icon 2'/>
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <TextComponent text='Tên 1'/>
        <TitleComponent text='Tên 2'/>
      </SectionComponents>
      <SectionComponents>
        <RowComponents 
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('sos')}>
          <TextComponent text='Search'/>
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <CardComponent>
          <RowComponents>
            <View style={{flex: 1}}>
              <TitleComponent text='Tasks progress'/>
              <TextComponent text='30/40 tasks done'/>
              <TextComponent text='Tag'/>
            </View>
            <View>
              <TextComponent text='View All'/>
            </View>
          </RowComponents>
        </CardComponent>
      </SectionComponents>
    </Container>
  )
}

export default HomeScreen