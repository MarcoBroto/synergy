/**
 * 
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from './src/views/screens/HomeScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import SettingsScreen from './src/views/screens/SettingsScreen';
import ListScreen from './src/views/screens/ListScreen';


export default class App extends React.Component {
	render() {
		const RootStack = createNativeStackNavigator()

		return (
			<>
				<NavigationContainer>
					<RootStack.Navigator initialRouteName="Login">
						<RootStack.Screen name="Login" component={LoginScreen} />
						<RootStack.Screen name="Home" component={HomeScreen} />
						<RootStack.Screen name="Settings" component={SettingsScreen} />
						<RootStack.Screen name="List" component={ListScreen} />
					</RootStack.Navigator>
				</NavigationContainer>
				<View><StatusBar /></View>
			</>
		)
	}
}
