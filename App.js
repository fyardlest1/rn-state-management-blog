import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import CreatePost from './src/screens/CreatePost';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';

import { AntDesign } from '@expo/vector-icons'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name='Index' 
          component={IndexScreen} 
          options={({navigation}) => ({ 
            title: 'Blogs', 
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('NewPost')}>
                <AntDesign name="plus" style={styles.iconStyle} />
              </TouchableOpacity>
            )   
        })} />
        <Stack.Screen name='ShowScreen' 
          component={ShowScreen} 
          options={({route, navigation}) => ({ 
            title: 'Post Details', 
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                <AntDesign name="edit" style={styles.iconStyle} />
              </TouchableOpacity>
            )   
        })} 
        />
        <Stack.Screen name='NewPost' component={CreatePost} options={{ title: 'Create a Post' }} />
        <Stack.Screen name='Edit' component={EditScreen} options={{ title: 'Edition' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginRight: 15,
    fontSize: 24,
    color: 'blue'
  }
})

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}