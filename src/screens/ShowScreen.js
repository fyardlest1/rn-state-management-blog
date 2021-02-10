import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ route }) => {
    const { id } = route.params
    // console.log(id)

    const {state} = useContext(Context)

    const blogPosts = state.find((blogPost) => blogPost.id === id)
    // console.log(blogPosts)

    return (
        <View>
            <Text style={styles.title}>{blogPosts.title}</Text>
            <Text style={styles.content}>{blogPosts.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15
    },
    content: {
        fontSize: 15,
        marginLeft: 15
    },
})

export default ShowScreen
