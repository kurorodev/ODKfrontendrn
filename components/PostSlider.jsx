import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const PostItem = ({ title, image }) => (
  <View style={styles.postItem}>
    <Image
      source={{ uri: image }}
      style={styles.postImage}
      accessible={true}
      accessibilityLabel={`Image for ${title}`}
    />
    <Text style={styles.postTitle}>{title}</Text>
  </View>
);

const PostSlider = () => {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const fetchPosts = async () => {
    try {
        const response = await fetch('http://10.0.2.2:8010/communities/news', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await AsyncStorage.getItem('jwtToken')}`,
            },
        });

        const textData = await response.text(); // Read response as text for debugging
        console.log("Raw response:", textData); // Log raw response

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, body: ${textData}`);
        }

        const data = JSON.parse(textData); // Parse JSON only if OK
        setPosts(data); // Update state with fetched posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message); // Set error message
    } finally {
        setLoading(false); // Set loading to false after fetching
    }
};

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  if (loading) {
    return <Text>Loading...</Text>; // Loading state
  }

  if (error) {
    return <Text>Error: {error}</Text>; // Error state
  }

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>Последние посты</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem title={item.Data.title} image={item.Files[0]?.url} /> // Adjust based on your data structure
        )}
        keyExtractor={item => item.Data.id.toString()} // Ensure key is a string
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderContent}
        snapToInterval={windowWidth - 32}
        decelerationRate="fast"
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
    paddingLeft: 16,
  },
  sliderContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  postItem: {
    width: windowWidth - 32,
    marginRight: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  postTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default PostSlider;