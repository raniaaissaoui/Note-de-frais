package com.polytech.projet.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import lombok.Data;


@Entity
@Inheritance (strategy=InheritanceType.JOINED)
@DiscriminatorColumn(name="profil")
public class Collaborateur {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long codeCollab;
	//@Column(unique = true)
	private String login;
	private String mdp;
	private String nom ; 
	private String prenom; 
	
	@ManyToMany(mappedBy = "collaborateurs")
	private Set<Projet> projets = new HashSet<Projet>();

	public Long getCodeCollab() {
		return codeCollab;
	}

	public void setCodeCollab(Long codeCollab) {
		this.codeCollab = codeCollab;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	
	

}
