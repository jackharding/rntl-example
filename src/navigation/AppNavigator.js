import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';

const AppNavigator = createSwitchNavigator({
    Search: SearchScreen,
}, {
    initialRouteName: 'Search'
});

const App = ({ removeAlerts }) => (
    <AppNavigator />
);

export default App;