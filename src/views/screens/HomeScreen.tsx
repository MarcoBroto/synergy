/**
 * 
 */

import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { RootNavigationProps, RootNavigationRouteName } from '../../models/NavigationTypes';


interface PassedProps {

}

type Props = PassedProps & RootNavigationProps<'Home'>


export default function HomeScreen(props: Props) {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerRight: () => <Button title="Settings" onPress={() => props.navigation.navigate('Settings')} />
		})
	})

	// const handleButtonPress = (event: NativeSyntheticEvent<NativeTouchEvent>) => { }

	const navigateToScreen = (screenName: RootNavigationRouteName) => props.navigation.navigate(screenName)

	return (
		<View style={styles.container}>
			{/* Button Group View*/}
			<View style={styles.btnGroupsContainer}>
				{/* Button Group 1 */}
				<View style={styles.btnGroup}>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 1"
							onPress={() => navigateToScreen('List')}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 2"
							onPress={() => navigateToScreen('List')}
						/>
					</View>
				</View>

				{/* Button Group 2 */}
				<View style={styles.btnGroup}>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 3"
							onPress={() => navigateToScreen('List')}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 4"
							onPress={() => navigateToScreen('List')}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnGroupsContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	btnGroup: {
		flex: 1,
		flexDirection: 'row',
	},
	btnContainer: {
		margin: 20,
	},
});
