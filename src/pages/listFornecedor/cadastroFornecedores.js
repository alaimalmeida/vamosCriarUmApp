import React from "react";
import {View, StyleSheet} from 'react-native'
import Fornecedores from "../../components/fornecedor";

export default function CadastroFornecedores(){
    return(
        <View style={styles.container}>
            <Fornecedores/>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

