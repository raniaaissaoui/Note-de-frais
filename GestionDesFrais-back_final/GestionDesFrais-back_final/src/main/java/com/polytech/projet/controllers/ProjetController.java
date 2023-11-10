package com.polytech.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.polytech.projet.models.Projet;
import com.polytech.projet.services.ProjetService;

@RestController
@RequestMapping("/api/projet")
@CrossOrigin(origins = "*")
public class ProjetController {
	
	@Autowired
	private ProjetService ps; 
	
	@CrossOrigin(origins = "*")
	@GetMapping("/all")
	public List<Projet> getProjet(){
		return ps.findAllProjet();
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteProjet(@PathVariable Long id) {
		ps.deleteProjet(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateCollab(@PathVariable Long id, @RequestBody Projet p) {
		ps.UpdateProjet(id, p);
	}
	
	@PostMapping("/add")
	public void addProjet(@RequestBody Projet p) {
		ps.addProjet(p);
	}
	
	@GetMapping("/lastCode")
	public Long lastCode() {
		return ps.lastCode();
	}
	

}
