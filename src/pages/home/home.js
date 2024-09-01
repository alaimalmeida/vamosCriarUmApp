import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Meeting</Text>
            
            <Text
            style={styles.button}
            onPress={()=> navigation.navigate('CadastroFornecedores')}                
            >Cadastro </Text>              
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle:{
        color: "#ff0043",
        fontSize: 70,
        fontWeight: "bold",
        textAlign: 'center',
    },
    button:{
        textAlign: 'center',
        backgroundColor: 'green',
        width: 100,
        borderRadius: 5,
        padding: 10,
        color: '#ffffff',
        justifyContent: 'center',
        fontSize: 16
    },
    container:{
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    }
  });

