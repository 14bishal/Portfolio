import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ExperienceDetails from './components/ExperienceDetails';
import MyProfile from './components/MyProfile';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        title: 'My Profile',
                    }}
                />
                <Stack.Screen
                    name="ExperienceDetails"
                    component={ExperienceDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
