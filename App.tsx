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
		const RootStack = createNativeStackNavigator()

		return (
			<>
				<NavigationContainer>
					<RootStack.Navigator>
						<RootStack.Screen name="Login" component={LoginScreen} />
						<RootStack.Screen name="Home" component={HomeScreen} />
					</RootStack.Navigator>
				</NavigationContainer>
				<View><StatusBar /></View>
			</>
		)
	}
}
