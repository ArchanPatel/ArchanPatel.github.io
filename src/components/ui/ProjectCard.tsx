import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Card, Chip } from 'react-native-paper';
import { Project } from '../../types';

export default function ProjectCard({ project, onPress }: { project: Project; onPress?: () => void }) {
  return (
    <Card mode="elevated" onPress={onPress} accessible accessibilityLabel={`Open ${project.title}`}>
      <Card.Content>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>{project.title}</Text>
        <Text style={{ marginTop: 6 }}>{project.short}</Text>
        {project.description ? <Text style={{ marginTop: 8, color: '#666' }}>{project.description}</Text> : null}
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          {(project.tags || []).slice(0,3).map((t) => (
            <Chip key={t} style={{ marginRight: 8 }}>{t}</Chip>
          ))}
        </View>
      </Card.Content>
      <Card.Actions>
        {project.repo ? <Text onPress={() => Linking.openURL(project.repo)} style={{ color: '#0a84ff' }}>Repo</Text> : null}
        {project.demo ? <Text onPress={() => Linking.openURL(project.demo)} style={{ color: '#0a84ff', marginLeft: 12 }}>Demo</Text> : null}
      </Card.Actions>
    </Card>
  );
}
