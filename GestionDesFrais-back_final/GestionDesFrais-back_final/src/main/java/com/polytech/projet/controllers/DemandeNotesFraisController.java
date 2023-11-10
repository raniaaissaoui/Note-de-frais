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

import com.polytech.projet.models.DemandeNotesFrais;
import com.polytech.projet.services.DemandeNotesFraisService;

@RestController
@RequestMapping("/api/demande")
public class DemandeNotesFraisController {

	@Autowired 
	private DemandeNotesFraisService dnfs; 
	
	@CrossOrigin("*")
	@GetMapping("/all")
	public List<DemandeNotesFrais> getDemande(){
		return dnfs.findAllDdeNoteFrais();
	}
	
	@CrossOrigin("*")
	@DeleteMapping("/delete/{projet}/{collab}")
	public void deleteDemande(@PathVariable Long projet, @PathVariable Long collab) {
		dnfs.deleteDdeNoteFrais(collab,projet);
	}
	
	@PutMapping("/update/{pk1}/{pk2}")
	public void updateDemande(@PathVariable Long pk1, @PathVariable Long pk2, @RequestBody DemandeNotesFrais d) {
		dnfs.UpdateNoteFrais(pk1, pk2,d);
	}
	
	@CrossOrigin("*")
	@PutMapping("/accorder/{projet}/{collaborateur}")
	public void accorderDemande(@PathVariable Long projet, @PathVariable Long collaborateur) {
		dnfs.accorder(projet, collaborateur);
	}
	
	@CrossOrigin("*")
	@PostMapping("/add")
	public void addDemande(@RequestBody DemandeNotesFrais d) {
		dnfs.AddDdeNoteFrais(d);
	}
	
	@CrossOrigin("*")
	@GetMapping("/mesdemandes/{login}")
	public List<DemandeNotesFrais> demandesCollaborateur(@PathVariable String login) {
		return dnfs.getCollaborateurDemandes(login);
	}
	
	@CrossOrigin("*")
	@GetMapping("/details/{projet}/{collab}")
	public Object[] demandeDetails(@PathVariable Long projet,@PathVariable Long collab) {
		return dnfs.demandeDetails(projet, collab);
	}
	
	@CrossOrigin("*")
	@GetMapping("/accorde")
	public List<Object[]> accorde() {
		return dnfs.nombreDemandeAccordee();
	}
	
	@CrossOrigin("*")
	@PutMapping("/refuser/{projet}/{collaborateur}")
	public void refuser(@PathVariable Long projet,@PathVariable Long collaborateur) {
		dnfs.refuserDemande(projet, collaborateur);
	}
	
}
