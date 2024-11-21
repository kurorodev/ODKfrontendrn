import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;

const PostItem = ({ title, image }) => {
  const imageSource = image ? `data:image/jpeg;base64,${image}` : null;

  return (
    <View style={styles.postItem}>
      {imageSource && (
        <Image
          source={{ uri: imageSource }} // Use the data URI as the source
          style={styles.postImage}
          accessible={true}
          accessibilityLabel={`Image for ${title}`}
        />
      )}
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  );
};

const PostSlider = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  });

  if (!fontsLoaded) {
    return null; // Или индикатор загрузки
  }

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://192.168.1.3:8010/communities/news`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${await AsyncStorage.getItem('jwtToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON directly
      console.log("Parsed data:", data);

      // Process each post to extract files
      const enrichedPosts = data.map(post => {
        const files = post.files; // Access files array
        return {
          id: post.data.id,
          text: post.data.text,
          image: files.length > 0 ? files[0].body : null, // Get Base64 string from body of the first file
        };
      });

      setPosts(enrichedPosts); // Update state with enriched posts
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
          <PostItem 
            title={item.text || "No Title"} 
            image={item.image} 
          />
        )}
        keyExtractor={(item) => item.id.toString()} 
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
    fontFamily: 'Montserrat', // Используем загруженный шрифт здесь
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
    fontFamily: 'Montserrat', // Используем загруженный шрифт здесь
  },
});

export default PostSlider;