import { Text, View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import {Button} from '../../components/Button'

export const Home = () => {
  const { logout } = useAuth()
  return (
    <View>
      <Text>Home</Text>
      <Button title='Sair' onPress={logout} />
    </View>
  )
}