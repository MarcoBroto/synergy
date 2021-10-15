/**
 * 
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { NavigationContainerProps, NavigationScreenConfigProps } from "react-navigation"


type RootNavigationRouteParameters = {
	Home?: undefined,
	Login?: undefined,
	List?: undefined,
	Settings?: undefined,
}

export type RootNavigationRouteName = keyof RootNavigationRouteParameters

export type RootNavigationProps<RootNavigationRouteName> = NativeStackScreenProps<RootNavigationRouteParameters, RootNavigationRouteName>
