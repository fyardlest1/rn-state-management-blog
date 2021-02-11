import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()
    }, [])

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', { id: item.id })}>
                            <View style={styles.blogPostContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <EvilIcons name="trash" style={styles.evilIcons} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ) 
                }}
            />
        </View>
    )
}

// update the screen header
// IndexScreen.navigationOptions = () => {
//     return {
//         headerRight: () => (
//             <AntDesign name="plus" size={24} color="black" />
//         ) 
//     }
// }

const styles = StyleSheet.create({
    blogPostContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    evilIcons: {  
        fontSize: 28,      
        color: 'black',
    },
    title: {
        fontSize: 18
    }
})

export default IndexScreen
