import React, { Component } from 'react';
import PessoaService from '../services/PessoaService';
import { Navigate } from "react-router-dom"

class ListPessoaComponent extends Component {
    
    state = {enviado: null};

    constructor(props){
        super(props)
        this.state = {
            pessoas: []
        }
        // this.criarPessoa = this.criarPessoa.bind(this);
        this.editPessoa = this.editPessoa.bind(this);
        this.deletePessoa = this.deletePessoa.bind(this);
    }

    deletePessoa(){
        //PessoaService.deletePessoa(id);
    }

    editPessoa(id){
        this.props.history.push(`/update-pessoa/${id}`);
        
    }

    componentDidMount(){
        PessoaService.getPessoas().then((res) => {
            this.setState({ pessoas: res.data});
        });
    }

    /*criarPessoa(){        
        let navigate = useNavigate();    
        navigate('/criar-pessoa');
        //this.props.history.push('/criar-pessoa');
    }*/

    render() {      
        return (
            <div>
                <h2 className='text-center'>Lista de Pessoas</h2>
                <div className='column'>
                    <tr>
                        <th><a href='http://localhost:3000/criar-pessoa' className='btn btn-info'>Create Pessoa</a></th>
                        <th><a href='http://localhost:3000/update-pessoa' className='btn btn-info'>Update Pessoa</a></th>
                        <th><a href='http://localhost:3000/delete-pessoa' className='btn btn-info'>Delete Pessoa</a></th>
                    </tr>
                    
                </div>
                <div class='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pessoas.map(
                                    pessoa =>
                                    <tr key = {pessoa.id}>
                                        <td>{pessoa.id}</td>
                                        <td> {pessoa.nome} </td>
                                        <td> {pessoa.email} </td>                          
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPessoaComponent;