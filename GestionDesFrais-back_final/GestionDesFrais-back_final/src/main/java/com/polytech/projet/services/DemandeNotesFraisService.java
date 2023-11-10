package com.polytech.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.polytech.projet.models.DemandeNotesFrais;
import com.polytech.projet.models.ProjetCollaborateur_PK;
import com.polytech.projet.repositories.DemandeNotesFraisRepository;


@Service
public class DemandeNotesFraisService {

	@Autowired
	private DemandeNotesFraisRepository dnfr;
	
	/**
	 * 
	 * @return la liste des DemandeNotesFraiss 
	 */
	public List<DemandeNotesFrais> findAllDdeNoteFrais(){
		return dnfr.findAll();
	}
	
	/**
	 * 
	 * @param id prend l'id de DemandeNotesFrais à supprimer
	 */
	public void deleteDdeNoteFrais(Long collab , Long projet){
		 ProjetCollaborateur_PK pkk = new ProjetCollaborateur_PK(collab,projet);
		 dnfr.deleteById(pkk);
	}
	
	/**
	 * 
	 * @param d Demande frais à rajouter
	 */
	public void addDemandeNotesFrais(DemandeNotesFrais d) {
		dnfr.save(d);
	}
	
	
	/**
	 * 
	 * @param c le DemandeNotesFrais à rajouter
	 * @return le DdeNoteFrais ajouté
	 */
	public DemandeNotesFrais AddDdeNoteFrais(DemandeNotesFrais c){
		return dnfr.save(c);
	}
	
	/***
	 * 
	 * @param pk primary key composeé du model DemandeNotesFrais
	 * @param accorde est ce que la demande est accordé ou pas
	 * @return la demande mise a jour
	 */
	public DemandeNotesFrais UpdateNoteFrais(Long pk1 , Long pk2, DemandeNotesFrais demandeExistante) {
		ProjetCollaborateur_PK pk = new ProjetCollaborateur_PK(pk1, pk2);
		DemandeNotesFrais d = dnfr.findById(pk).orElse(null);
		if (d!=null) {
			d.setAccorde(demandeExistante.getAccorde());
		}
		return dnfr.save(d);		
	}

	public DemandeNotesFrais accorder(Long projet , Long collab) {
		ProjetCollaborateur_PK pk = new ProjetCollaborateur_PK(collab, projet);
		DemandeNotesFrais d = dnfr.findById(pk).orElse(null);
		if (d!=null) {
			d.setAccorde("accordée");
			return dnfr.save(d);
		}
		return null;		
	}
	
	public DemandeNotesFrais refuserDemande(Long projet , Long collab) {
		ProjetCollaborateur_PK pk = new ProjetCollaborateur_PK(collab, projet);
		DemandeNotesFrais d = dnfr.findById(pk).orElse(null);
		System.out.println(d+"----"+projet);
		if (d!=null) {
			d.setAccorde("refusée");
			return dnfr.save(d);
		}
		return null;		
	}
	public List<DemandeNotesFrais> getCollaborateurDemandes(String login) {
		System.out.println(login);
		return dnfr.getDemandeByCollaborateur(login);
	}
	
	public Object[] demandeDetails(Long projet,Long collab){
		return dnfr.getDemandeInfos(projet, collab);
	}
	
	public List<Object[]> nombreDemandeAccordee(){
		return dnfr.getAccordeCount();
	}
}
