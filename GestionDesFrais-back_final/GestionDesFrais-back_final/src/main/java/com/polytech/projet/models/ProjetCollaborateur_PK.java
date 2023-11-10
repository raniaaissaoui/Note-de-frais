package com.polytech.projet.models;

import java.io.Serializable;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class ProjetCollaborateur_PK implements Serializable{
	private Long codeCollab; 
	private  Long codeProjet;
	

}
