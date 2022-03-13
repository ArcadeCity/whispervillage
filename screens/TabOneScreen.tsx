import { useEffect, useRef, useState } from 'react'
import { Button, StyleSheet } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { Text, View } from '../components/Themed'
import { DEMO_PUBKEY_1, DEMO_PUBKEY_2, logWalkthrough } from '../lib/whisper'
import { RootTabScreenProps } from '../types'
import { FeedConversation } from '../components/FeedConversation'
import { images } from '../lib/images'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  useEffect(() => {
    logWalkthrough()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Text style={{ marginBottom: 10 }}>Demo ephemeral pubkey:</Text>
      <Text style={{ marginBottom: 20 }}>{DEMO_PUBKEY_2}</Text>
      <View style={{ backgroundColor: '#333', padding: 20, borderRadius: 10 }}>
        <Text style={{ marginBottom: 30, fontSize: 20 }}>Alice</Text>
        <Text style={{ marginBottom: 5 }}>Linking key:</Text>
        <Text>{DEMO_PUBKEY_1}</Text>
        <Button title='Generate stealth address' onPress={() => console.log('ehehehe')} />
      </View>
      {conversations.map((conversation) => {
        return <FeedConversation key={conversation.id} conversation={conversation} />
      })}
    </View>
  )
}

const conversations: any[] = [
  {
    id: 'isaodjfw8h42oifh8',
    content: 'Vexillologist sartorial vaporware, gochujang fam chambray kickstarter.',
    username: 'chris',
    communityName: 'Rad Devs of Austin',
    time: '1d',
    picture: images.computer,
    userPicture: images.computer,
    communityPhoto: images.comm1,
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
