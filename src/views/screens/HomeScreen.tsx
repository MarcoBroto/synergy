/**
 * 
 */

import React from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, View } from 'react-native';


interface PassedProps {

}

type Props = PassedProps & NavigationProps


export default function HomeScreen(props: Props) {

	const onButtonPressed = (event: NativeSyntheticEvent<NativeTouchEvent>, route: string) => {
		console.log({event, route})
	}

	return (
		<View style={styles.container}>
			{/* Button Group View*/}
			<View style={styles.btnGroupsContainer}>
				{/* Button Group 1 */}
				<View style={styles.btnGroup}>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 1"
							onPress={e => onButtonPressed(e, '')}
							color="red"
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 2"
							onPress={e => onButtonPressed(e, '')}
							color="red"
						/>
					</View>
				</View>

				{/* Button Group 2 */}
				<View style={styles.btnGroup}>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 3"
							onPress={e => onButtonPressed(e, '')}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button
							title="Go To Screen 4"
							onPress={e => onButtonPressed(e, '')}
							color="red"
						/>
					</View>
				</View>
			</View>
		</View>
	);
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
