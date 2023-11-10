package com.polytech.projet.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import lombok.Data;

@Entity
public class Projet {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long codeProjet;
	private String intitule; 
	private double budget;
	
	@ManyToMany
	@JoinTable(name = "DemandeNotesFrais", joinColumns= { @JoinColumn(name="codeProjet")} , inverseJoinColumns = { @JoinColumn(name="codeCollab") })
	private Set<Collaborateur> collaborateurs = new HashSet<Collaborateur>();

	public Long getCodeProjet() {
		return codeProjet;
	}

	public void setCodeProjet(Long codeProjet) {
		this.codeProjet = codeProjet;
	}

	public String getIntitule() {
		return intitule;
	}

	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}
	
	
	
	
}
