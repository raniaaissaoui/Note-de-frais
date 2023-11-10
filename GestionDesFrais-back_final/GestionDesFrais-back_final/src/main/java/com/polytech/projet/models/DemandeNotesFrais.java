package com.polytech.projet.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class DemandeNotesFrais {
	
	private String intitule;
	private double montant; 
	private String intituleNoteFrais;
	private String accorde; //en attente , accordée , refusée
	@EmbeddedId
	private ProjetCollaborateur_PK code;
	

	
}
