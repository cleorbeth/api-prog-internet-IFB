import React, { Component } from 'react';
import PessoaService from "../services/PessoaService.js"

class CreatePessoaComponent extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            nome: "",
            email: ""
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);

        this.savePessoa = this.savePessoa.bind(this);

    }

    savePessoa = (e) => {
        e.preventDefault();
        let pessoa = {nome: this.state.nome, email: this.state.email};
        //console.log('pessoa => ' + JSON.stringify(pessoa));
        PessoaService.createPessoa(pessoa);
        alert('Pessoa cadastrada com sucesso');
        this.setState({nome: ""});
        this.setState({email: ""});
    }

    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }    

    cancel(){

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 off'>
                        <h3 className='text-center'>Cadastrar Pessoa</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Nome:</label>
                                    <input placeholder='Nome' name='nome' className='form-control'
                                        value={this.state.nome} onChange={this.changeNomeHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label>E-mail:</label>
                                    <input placeholder='E-mail' name='email' className='form-control'
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>
                                <a href="#" className='btn btn-success' onClick={this.savePessoa}>Salvar</a>                        
                                <a href="http://localhost:3000/pessoas" className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePessoaComponent;