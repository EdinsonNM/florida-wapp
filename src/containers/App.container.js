import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configTheme from '../constants/themes/theme';
import store from '../store/store';
import App from './App';
const theme = createMuiTheme(configTheme);
function AppContainer() {

	return (
		<MuiThemeProvider theme={theme}>
			<StoreProvider store={store}>
				<App/>
			</StoreProvider>
		</MuiThemeProvider>
	);
}

export default AppContainer;
