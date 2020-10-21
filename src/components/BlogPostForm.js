import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputField} 
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                value={content}
                onChangeText={(content) => setContent(content)}
                style={styles.inputField} 
            />

            <Button 
                title="Save Blog Post" 
                onPress={() => {
                    
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    inputField: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default BlogPostForm;