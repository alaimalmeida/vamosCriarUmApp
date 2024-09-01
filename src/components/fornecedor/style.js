import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle:{
        paddingTop: 5,
        flex: 1,
        backgroundColor: '#dddddd',
        width: '100%',
        paddingBottom: 30,
    },
    boxConteudo:{
        backgroundColor: '#ffffff',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 0,
        paddingBottom: 0,
        height: '100%',
        marginBottom: 40,
    },
    textTitle:{
        color: "#ff0043",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'center',
    },
    boxCadastro:{
        marginTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,
    },
    tituloCadastro:{
        fontSize:18,
        alignSelf: 'left',
        alignItems: 'center',
        marginBottom: 2
    },
    input: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 15,
        alignItems: 'left',
        borderRadius: 5
      },
    img:{
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonCadastro:{
        backgroundColor: 'green',
        padding: 5,
        width: 150,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    buttonImg:{
        backgroundColor: '#2196f3',
        padding: 5,
        width: 150,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
        marginRight: 5
    },
    botoes:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    TextButtonCadastro:{
        color: '#ffffff',
        fontSize: 18,
    },
    resultadoFornecedores:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    listFornecedor: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 100
      },
      titleText: {
        fontSize: 14,
      },
      imgFornecedor:{
        marginRight: 10,
        justifyContent: 'center'
      },
      supplierImage: {
        width: 80,
        height: 80,
      },
      list:{
        marginTop: 0
      }
});

export default styles