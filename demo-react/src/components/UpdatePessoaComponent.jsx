import React, { Component } from 'react';
import PessoaService from "../services/PessoaService.js"

class UpdatePessoaComponent extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            id: "",
            nome: "",
            email: ""
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);

        this.updatePessoa = this.updatePessoa.bind(this);

    }

    updatePessoa = (e) => {
        e.preventDefault();
        let pessoa = {id: this.state.id, nome: this.state.nome, email: this.state.email};
        //console.log('pessoa => ' + JSON.stringify(pessoa));
        PessoaService.updatePessoa(pessoa);
        alert('Registro modificado com sucesso');
        this.setState({id: ""});
        this.setState({nome: ""});
        this.setState({email: ""});
    }


    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
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
                        <h3 className='text-center'>Modificar informações da pessoa</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Id:</label>
                                    <input placeholder='Informe o id da pessoa para modificação' name='id' className='form-control'
                                        value={this.state.id} onChange={this.changeIdHandler}/>
                                </div>
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
                                <a href="#" className='btn btn-success' onClick={this.updatePessoa}>Salvar</a>                        
                                <a href="http://localhost:3000/pessoas" className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatePessoaComponent;