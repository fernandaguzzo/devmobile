import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EstoqueIndustrialScreen from '../screens/EstoqueIndustrial';
import TelaCadastroItem from '../screens/TelaCadastroItem';
import TelaAjusteQuantidade from '../screens/TelaAjusteQuantidade';
import Login from '../screens/Login'; // Remover o ponto e vírgula extra aqui

const Stack = createNativeStackNavigator();

const NavegacaoPrincipal = () => {
  return (
    <Stack.Navigator initialRouteName="Estoque">
      <Stack.Screen 
        name="Estoque" 
        component={EstoqueIndustrialScreen}
        options={{ title: 'Controle de Estoque' }}
      />
      <Stack.Screen 
        name="CadastroItem" 
        component={TelaCadastroItem}
        options={{ title: 'Cadastrar Nova Peça' }}
      />
      <Stack.Screen 
        name="AjusteQuantidade" 
        component={TelaAjusteQuantidade}
        options={{ title: 'Editar Quantidade' }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  );
};

export default NavegacaoPrincipal;
