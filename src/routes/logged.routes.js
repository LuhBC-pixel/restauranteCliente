import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export const LoggedRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={Home} />
        <Screen name='SignUp' component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};
