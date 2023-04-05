import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Article from './Article';

const DiscoverScreen = () => {
  const articles = [
    { title: 'New Honda Car', videoId: 'ZTLeFexTfWs' },
    { title: 'New Honda Bike', videoId: 'fehV52dFMo0' },
    { title: 'Honda Engineering', videoId: 'xgMuJIu3RnA' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} videoId={article.videoId}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default DiscoverScreen;