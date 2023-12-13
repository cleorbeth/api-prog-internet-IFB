import axios from 'axios';

const PESSOA_API_BASE_URL = "http://localhost:8080/demo/pessoas";

class PessoaService{

    getPessoas(){
        return axios.get(PESSOA_API_BASE_URL);
    }

    createPessoa(pessoa){
        return axios.post(PESSOA_API_BASE_URL, pessoa);
    }

    updatePessoa(pessoa){
        return axios.post(PESSOA_API_BASE_URL, pessoa);
    }

    getPessoaById(pessoaId){
        return axios.get(PESSOA_API_BASE_URL + '/' + pessoaId);
    }

    deletePessoa(pessoaId) {
        axios.delete(PESSOA_API_BASE_URL + '/' + pessoaId);
        /*.then(() => {
            // Atualiza a lista de registros após a deleção
            this.getPessoas();
          })*/
    }

}

export default new PessoaService()