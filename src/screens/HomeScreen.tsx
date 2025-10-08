import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding: 24 }}>
      <Text style={{ fontSize:28, fontWeight: '800', marginBottom: 8 }}>Hey — I'm Archan 👋</Text>
      <Text style={{ color: '#666', textAlign: 'center', marginBottom: 20 }}>
        Android Developer • Clean Architecture • React Native
      </Text>
      <Button mode="contained" onPress={() => navigation.navigate('Resume')}>View Resume</Button>
      <View style={{ height: 12 }} />
      <Button onPress={() => navigation.navigate('Projects')}>Projects</Button>
    </View>
  );
}
