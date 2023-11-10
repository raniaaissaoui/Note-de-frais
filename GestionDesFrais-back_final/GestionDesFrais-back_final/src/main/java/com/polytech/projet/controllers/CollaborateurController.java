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

import com.polytech.projet.models.Collaborateur;
import com.polytech.projet.models.ResponsableRH;
import com.polytech.projet.services.CollaborateurService;

@RestController
@RequestMapping("/api/collaborateur")
@CrossOrigin("*")
public class CollaborateurController {

	@Autowired
	private CollaborateurService cs; 
	

	@CrossOrigin("*")
	@GetMapping("/all")
	public List<Collaborateur> FindAllCollab(){
		return cs.findAllCollab();
	}
	@CrossOrigin("*")
	@GetMapping("/allRH")
	public List<ResponsableRH> FindAllRH(){
		return cs.findAllRespoRH();
	}
	
	@CrossOrigin("*")
	@DeleteMapping("/delete/{id}")
	public void deleteCollab(@PathVariable Long id) {
		cs.deleteCollab( id);
	}
	
	@CrossOrigin("*")
	@PutMapping("/update")
	public void updateCollab(@RequestBody Collaborateur c) {
		cs.UpdateCollab(c.getCodeCollab(),c);
	}
	
	@CrossOrigin("*")
	@PostMapping("/delete/{codeCollab}/{idProjet}")
	public void deleteProjetCollab(@PathVariable Long codeCollab,  @PathVariable Long  idProjet) {
		cs.deleteProjectCollab(codeCollab,idProjet);
	}
	
	@CrossOrigin("*")
	@PostMapping("/add")
	public void addCollab(@RequestBody Collaborateur c) {
		cs.addCollab(c);
	}
	
	@CrossOrigin("*")
	@PostMapping("/addRH")
	public void addRH(@RequestBody ResponsableRH c) {
		cs.AddRH(c);
	}
	
	@CrossOrigin("*")
	@GetMapping("/lastCode")
	public Long lastCode() {
		return cs.lastCode();
	}
	
	@CrossOrigin("*")
	@GetMapping("/typeCollaborateur/{code}")
	public Object typeCollab(@PathVariable Long code) {
		return cs.getTypeOfCollaborateur(code);
	}
	
	@CrossOrigin("*")
	@GetMapping("/collabByProfil")
	public List<?> getCollabByProfil() {
		return cs.getCollaborateursByProfil();
	}
	
	
	
}
