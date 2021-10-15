/**
 * 
 */

import { NavigationScreenProp } from "react-navigation"


type RootNavigationRouteParameters = {
	Home?: undefined,
	Login?: undefined,
	List?: undefined,
	Settings?: undefined,
}

export type RootNavigationRouteName = keyof RootNavigationRouteParameters

export type RootNavigationProps<RootNavigationRouteName> = NavigationScreenProp<RootNavigationRouteParameters, RootNavigationRouteName>
