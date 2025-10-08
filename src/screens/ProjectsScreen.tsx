import React from 'react';
import { View, Text } from 'react-native';
import { useProjects } from '../components/headless/useProjects';
import ProjectListView from '../components/ui/ProjectListView';

export default function ProjectsScreen({ navigation }: any) {
  const { projects, loading } = useProjects();

  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Loading...</Text></View>;

  return (
    <ProjectListView
      projects={projects}
      onOpen={(p) => { /* placeholder - implement detail later */ }}
    />
  );
}
