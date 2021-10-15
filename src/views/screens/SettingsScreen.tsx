/**
 * 
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigationProps } from '../../models/NavigationTypes';


interface PassedProps {

}

type Props = PassedProps & RootNavigationProps<'Settings'>


export default function SettingsScreen(props: Props) {
	return (
		<View style={styles.container}>
			{/* Title Label */}
			<Text>Settings Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
