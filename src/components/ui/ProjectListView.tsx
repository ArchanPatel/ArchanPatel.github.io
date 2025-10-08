import React from 'react';
import { FlatList, View } from 'react-native';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[];
  onOpen: (project: Project) => void;
};

export default function ProjectListView({ projects, onOpen }: Props) {
  return (
    <FlatList
      data={projects}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 12 }}>
          <ProjectCard project={item} onPress={() => onOpen(item)} />
        </View>
      )}
    />
  );
}
