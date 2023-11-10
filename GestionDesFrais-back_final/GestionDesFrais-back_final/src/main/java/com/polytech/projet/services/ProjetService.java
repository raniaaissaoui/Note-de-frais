package com.polytech.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.polytech.projet.models.Projet;
import com.polytech.projet.repositories.ProjetRepository;

@Service
public class ProjetService {
	
	@Autowired
	private ProjetRepository pr;
	
	/**
	 * 
	 * @return liste des projets
	 */
	public List<Projet> findAllProjet(){
		return pr.findAll();
	}
	
	/**
	 * 
	 * @param id du projet à supprimer
	 */
	public void deleteProjet(Long id){
		 pr.deleteById(id);
	}
	
	/**
	 * 
	 * @param p Projet à ajouter
	 */
	public void addProjet(Projet p) {
		pr.save(p);
	}
	
	
	/***
	 * 
	 * @param c : le projet a ajouter
	 * @return le projet ajouté ou null
	 */
	public Projet AddProjet(Projet p){
		return pr.save(p);
	}
	
	/***
	 * 
	 * @param CodeProjet à modifier
	 * @param libelle le champ à modifier
	 * @return le projet modifié
	 */
	public Projet UpdateProjet(Long CodeProjet , Projet p) {
		Projet p2 = pr.findById(CodeProjet).orElse(null); 
		 if( p2!=null) {
			 p2.setIntitule(p.getIntitule());
		 }
		return pr.save(p2);
	}
	
	public Long lastCode() {
		Object[] tab = pr.getLastCode();
		if(tab.length>0) 
			return (Long)tab[0]+1;
		return new Long(1);
	}
	
}
