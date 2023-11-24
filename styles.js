import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9079DA',
  },
  content: {
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 30,
    textAlign: 'center',
    color: '#ffff',
  },
  viewInput: {
    borderWidth: 1,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '60%',
    alignSelf: 'center',
  },
  botaobaixo:{
    borderWidth: 1,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '60%',
    alignSelf: 'center',
  },

  input: {
    color: '#000000',
    fontSize: 18,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    width: '60%',
    alignSelf: 'center',
  },

  botaocalcular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00097A',
    marginTop: 10,
    height: 60,
    width: '60%',
    alignSelf: 'center',
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
  botaoResultado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#00097A',
    marginTop: 10,
    height: 60,
    width: '60%',
    alignSelf: 'center',
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#000',
    marginLeft: '30%',
    marginTop: 35,
    height: 60,
    width: 150,
    width: '60%',
    alignSelf: 'center',
  },

  picker:{
    backgroundColor: '#fff',
    width: '60%',
    alignSelf: 'center',
  }
});
