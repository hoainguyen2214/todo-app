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
import { Category, Notification, SearchNormal } from 'iconsax-react-native'
import TagComponent from '../components/TagComponent'
import SpaceComponent from '../components/SpaceComponent'

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponents>
        <RowComponents justify="space-between">
          <Category size={24} color={colors.desc}/>
          <Notification size={24} color={colors.desc}/>
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <TextComponent text='Hi, Hoài Nguyễn'/>
        <TitleComponent text='Be Productive Today'/>
      </SectionComponents>
      <SectionComponents>
        <RowComponents 
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('sos')}>
          <TextComponent text='Search Task' color='#696B6F' />
          <SearchNormal size={20} color={colors.desc}/>
        </RowComponents>
      </SectionComponents>
      <SectionComponents>
        <CardComponent>
          <RowComponents>
            <View style={{flex: 1}}>
              <TitleComponent text='Tasks progress'/>
              <TextComponent text='30/40 tasks done'/>
              <SpaceComponent height={12} />
              <RowComponents justify='flex-start'>
                <TagComponent text='March 19'/>
              </RowComponents>
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