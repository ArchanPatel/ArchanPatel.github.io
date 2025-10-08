import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { useResumeHighlights } from '../components/headless/useResumeHighlights';
import ResumeHighlightsView from '../components/ui/ResumeHighlightsView';

export default function ResumeScreen() {
  const highlights = useResumeHighlights();

  const openPdf = async () => {
    // Opens the bundled resume pdf in the system viewer (works in Expo Go if supported)
    // const uri = FileSystem.documentDirectory + 'resume.pdf';
    try {
      // copy from bundle to documentDirectory would be done in a fuller implementation
      // For now open a GitHub link or your hosted resume:
      Linking.openURL('https://github.com/ArchanPatel');
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <ScrollView>
      <ResumeHighlightsView highlights={highlights} />
      <View style={{ padding: 16 }}>
        <Text style={{ marginBottom: 8 }}>Full resume is included in the app assets.</Text>
        <Text style={{ color: '#0a84ff' }} onPress={openPdf}>Open resume (external link)</Text>
      </View>
    </ScrollView>
  );
}
