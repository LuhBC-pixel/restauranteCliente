import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Results } from '../screens/Results';

const { Navigator, Screen } = createNativeStackNavigator();

export const LoggedRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={Home} />
        <Screen name='Results' component={Results} />
      </Navigator>
    </NavigationContainer>
  );
};
