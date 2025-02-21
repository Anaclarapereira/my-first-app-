import { Text, View, Button, TextInput, } from 'react-native';

export default function Formulario(){
    return (
       <View>
          <Text>
            Formulario
          </Text>
       </View>
    )
}

export function Campo({label:label} : {}){
   return (
    <View>
        <Text>label</Text>
        <TextInput style={{backgroundColor:"lightgray", padding:5}} />
    </View>

   )
}