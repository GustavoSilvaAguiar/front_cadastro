import {http} from './main'

export default{
    listarClientes:() =>{
        return http.get('ContaCliente')
    }
}