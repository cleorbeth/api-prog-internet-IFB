package com.example.demo.controller.com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.example.demo.repository.com.example.demo.PessoaRepository;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;

import com.example.demo.exception.com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.com.example.demo.model.Pessoa;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/demo")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;
        

    /*@DeleteMapping("/pessoas")
    public Pessoa deletePessoa(@RequestBody Pessoa pessoa){
        return pessoaRepository.delete(pessoa);
    }*/

    //trazer todos
    @GetMapping("/pessoas")
    public List<Pessoa> getAllPessoas(){
        return pessoaRepository.findAll();
    }
    @DeleteMapping("/pessoas/{id}")
    public ResponseEntity<Void> deletePessoa(@PathVariable Long id) {
        pessoaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    //criar pessoa rest api
    @PostMapping("/pessoas")
    public Pessoa createPessoa(@RequestBody Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }

    

    //pegar pessoa pelo id rest api
    @GetMapping("/pessoas/{id}")
    public ResponseEntity<Pessoa> getPessoaById(@PathVariable Long id){
        
        Pessoa pessoa = pessoaRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("A pessoa não existe com esse id: " + id));

        return ResponseEntity.ok(pessoa);
    } 

    //update pessoa rest api
    @PutMapping("/pessoas/{id}")
    public ResponseEntity<Pessoa> updatePessoa(@PathVariable Long id, @RequestBody Pessoa pessoaDetalhes){

        Pessoa pessoa = pessoaRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("A pessoa não existe com esse id: " + id));

        pessoa.setId(pessoaDetalhes.getId());
        pessoa.setNome(pessoaDetalhes.getNome());
        pessoa.setEmail(pessoaDetalhes.getEmail());

        Pessoa updatedPessoa = pessoaRepository.save(pessoa);
        return ResponseEntity.ok(updatedPessoa);

    }

    //delete pessoa rest api
    /*@DeleteMapping("/pessoas/{id}")
    public ResponseEntity<HashMap<String, Boolean>> deletePessoa(@PathVariable Long id){
        Pessoa pessoa = pessoaRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("A pessoa não existe com esse id: " + id));

        pessoaRepository.delete(pessoa);
        HashMap<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }*/


}
