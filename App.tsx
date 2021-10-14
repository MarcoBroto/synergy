/**
 * 
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from './src/views/screens/HomeScreen';
import LoginScreen from './src/views/screens/LoginScreen';


export default class App extends React.Component {
	render() {
		const Stack = createNativeStackNavigator()

		return (
			<>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
					</Stack.Navigator>
				</NavigationContainer>
				<View><StatusBar /></View>
			</>
		)
	}
}
