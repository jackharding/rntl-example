import React, { Component } from 'react';
import { View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

class App extends Component {
    render() {
        return (
            <View>
                <AppNavigator/>
            </View>
        );
    }
}

export default App;