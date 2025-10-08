import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-paper';

export default function ResumeHighlightsView({ highlights }: any) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '800' }}>{highlights.name}</Text>
      <Text style={{ marginTop: 4, color: '#666' }}>{highlights.title}</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: '700' }}>Top Skills</Text>
        {highlights.topSkills.map((s: string) => <Text key={s}>• {s}</Text>)}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: '700' }}>Selected Experience</Text>
        {highlights.topExperienceBullets.map((b: string, i:number) => <Text key={i}>• {b}</Text>)}
      </View>

      <View style={{ marginTop: 12 }}>
        <Button mode="contained" onPress={() => Linking.openURL(highlights.contact.github)}>View GitHub</Button>
        <Button style={{ marginTop: 8 }} onPress={() => Linking.openURL(highlights.contact.linkedin)}>LinkedIn</Button>
      </View>
    </View>
  );
}
