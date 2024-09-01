import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import styles from "./style";
import * as ImagePicker from 'expo-image-picker';

export default function Fornecedores(){
    const [imagem, setImagem] = useState(null)
    const [nome, setNome] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [contato, setContato] = useState(null)
    const [catProduto, setCatProduto] = useState(null)
    const [imageUri, setImageUri] = useState(null);
    const [fornecedor, setfornecedor] = useState([]);

    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 100,
        height: 100,
    }; 

    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert('Permission to access gallery is required!');
          return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });
    
        if (!pickerResult.canceled) {
          setImageUri(pickerResult.assets[0].uri);
        }
    };

    const addFornecedor = () => {
        if (nome && endereco && contato && catProduto) {
            const newfornecedor = {
                id: Math.random().toString(),
                nome: nome,
                endereco,
                contato,
                catProduto,
                imageUri,
            };
    
            setfornecedor([...fornecedor, newfornecedor]);
    
            // Limpar os campos após adicionar
            setNome('');
            setEndereco('');
            setContato('');
            setCatProduto('');
            setImageUri(null);
        }else {
            alert('Por favor, preencha todos os campos!');
        }
      };

    function fornecedoresCadastrados(){
        return setListforn (nome + "\n" + endereco + "\n" + contato + "\n" + catProduto)
    }

    function validationFornecedores(){
        if (nome != null && endereco != null && contato != null && catProduto != null){
            fornecedoresCadastrados()
            return
        }                
    }

    return(
        <ScrollView style={styles.boxTitle}>
            <Text style={styles.textTitle}>Meeting</Text>
            <View style={styles.boxConteudo}>
                <View style={styles.boxCadastro}>
                    <Text style={styles.tituloCadastro}>Nome:</Text>
                    <TextInput 
                        onChangeText={setNome}
                        value={nome}
                        style={styles.input}
                        placeholder="Ex: Amazon"
                    />

                    <Text style={styles.tituloCadastro}>Endereço:</Text>
                    <TextInput 
                        onChangeText={setEndereco}
                        value={endereco}
                        style={styles.input}
                        placeholder="Ex: Rua das araras"
                    />

                    <Text style={styles.tituloCadastro}>Contato:</Text>
                    <TextInput 
                        onChangeText={setContato}
                        value={contato}
                        style={styles.input}
                        placeholder="Ex: (71) 998735858"
                        keyboardType="numeric"
                    />

                    <Text style={styles.tituloCadastro}>Categoria de produtos:</Text>
                    <TextInput 
                        value={catProduto}
                        onChangeText={setCatProduto}
                        style={styles.input}
                        placeholder="Ex: Carro"
                    />
                    
                    <View style={styles.botoes}>
                        <TouchableOpacity 
                        style={styles.buttonImg}
                        onPress={selectImage} 
                        >
                            <Text style={styles.TextButtonCadastro}>Add imagem </Text>
                        </TouchableOpacity>         

                        <TouchableOpacity 
                        style={styles.buttonCadastro}
                        onPress={addFornecedor} 
                        >
                            <Text style={styles.TextButtonCadastro}>Cadastrar</Text>
                        </TouchableOpacity>                            
                    </View>                                 
                </View>

                <FlatList
                    style={styles.list}
                    data={[...fornecedor].reverse()}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View style={styles.listFornecedor}>                        
                        <View style={styles.imgFornecedor}>
                            {item.imageUri && (
                                <Image source={{ uri: item.imageUri }} style={styles.supplierImage} />
                            )}
                        </View> 
                        <View>
                            <Text style={styles.titleText}>Nome: {item.nome}</Text>
                            <Text style={styles.titleText}>Endereço: {item.endereco}</Text>
                            <Text style={styles.titleText}>Contato: {item.contato}</Text>
                            <Text style={styles.titleText}>Categoria: {item.catProduto}</Text>                            
                        </View>
                    </View>
                    )}
                    scrollEnabled={false} 
                />                
            </View>
        </ScrollView>
    );
}