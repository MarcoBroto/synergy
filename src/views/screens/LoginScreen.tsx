/**
 * 
 */

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TextInput, View } from 'react-native';
import PickerOptions from '../../models/PickerOptions';


interface PassedProps {

}

type Props = PassedProps & NavigationProps


export default function LoginScreen(props: Props) {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [selectedDataPolicy, setSelectedPolicy] = useState()

	const onLoginPressed = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
		console.log(event)
	}

	return (
		<View style={styles.container}>
			{/* Title Label */}
			<Text style={styles.mainLabel}>App Login Page</Text>

			{/* Username Field */}
			<TextInput placeholder="Username" onChangeText={txt => setUsername(txt)}>{username}</TextInput>
			{/* Password Field */}
			<TextInput placeholder="Password" onChangeText={txt => setPassword(txt)} secureTextEntry style={styles.password}>{password}</TextInput>

			{/* Option Picker */}
			<Picker selectedValue={selectedDataPolicy} onValueChange={val => setSelectedPolicy(val)}>
				<Picker.Item label={PickerOptions.OPTION1} value={PickerOptions.OPTION1} />
				<Picker.Item label={PickerOptions.OPTION2} value={PickerOptions.OPTION2} />
				<Picker.Item label={PickerOptions.OPTION3} value={PickerOptions.OPTION3} />
			</Picker>

			{/* Login Button */}
			<Button title="Login" onPress={onLoginPressed}>Login</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mainLabel: {
		width: 300,
		fontSize: 30,
		textAlign: 'center',
		textAlignVertical: 'top',
	},
	password: {
		width: 100,
		textAlign: "center",
	}
});
