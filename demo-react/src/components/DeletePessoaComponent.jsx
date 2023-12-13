import React, { Component } from 'react';
import PessoaService from "../services/PessoaService.js"

class DeletePessoaComponent extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            id: "",
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        
        this.deletePessoa = this.deletePessoa.bind(this);

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

    deletePessoa = (e) => {
        //e.preventDefault();
        let pessoa = {id: this.state.id};
        //console.log('pessoa => ' + JSON.stringify(pessoa));
        PessoaService.deletePessoa(pessoa);
        //alert('Registro deletado com sucesso');
        this.setState({id: ""});
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
                        <h3 className='text-center'>Deletar pessoa</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Id:</label>
                                    <input placeholder='Informe o id da pessoa deletar' name='id' className='form-control'
                                        value={this.state.id} onChange={this.changeIdHandler}/>
                                </div>

                                {/*<button onClick={() => this.deletePessoa(this.state.id)}>Deletar</button>*/}
                                <a href="#" className='btn btn-success' onClick={this.deletePessoa(10)}>Deletar</a>                        
                                <a href="http://localhost:3000/pessoas" className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeletePessoaComponent;