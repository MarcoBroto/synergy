/**
 * 
 */

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootNavigationProps } from '../../models/NavigationTypes';
import PickerOptions from '../../models/PickerOptions';


interface PassedProps {

}

type Props = PassedProps & RootNavigationProps<'Login'>


export default function LoginScreen(props: Props) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [selectedPickerOption, setSelectedPickerOption] = useState()

	const onLoginPressed = (event: NativeSyntheticEvent<NativeTouchEvent>) => props.navigation.navigate('Home') // TODO: Add auth check

	return (
		<View style={styles.container}>
			{/* Title Label */}
			<Text style={styles.mainLabel}>App Login Page</Text>

			{/* Username Field */}
			<TextInput
				onChangeText={txt => setUsername(txt)}
				placeholder="Username"
				textContentType="username"
				keyboardType="default"
			>
				{username}
			</TextInput>

			{/* Password Field */}
			<TextInput
				onChangeText={txt => setPassword(txt)}
				placeholder="Password" 
				textContentType="password"
				autoCompleteType="password"
				keyboardType="visible-password"
				secureTextEntry
				style={styles.password}
			>
				{password}
			</TextInput>

			{/* Option Picker */}
			<Picker selectedValue={selectedPickerOption} onValueChange={val => setSelectedPickerOption(val)}>
				{Object.values(PickerOptions).map(v => <Picker.Item label={v} value={v} key={v} />)}
			</Picker>

			{/* Login Button */}
			<Button title="Login" onPress={onLoginPressed} />
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
