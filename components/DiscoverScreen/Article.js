import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Article = ({ title, videoId }) => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  video: {
    alignSelf: 'stretch',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Article;
