package com.polytech.projet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.polytech.projet.models.DemandeNotesFrais;
import com.polytech.projet.models.ProjetCollaborateur_PK;

public interface DemandeNotesFraisRepository extends JpaRepository<DemandeNotesFrais, ProjetCollaborateur_PK> {

	@Query("SELECT d FROM DemandeNotesFrais d JOIN Collaborateur c ON d.code.codeCollab = c.codeCollab WHERE c.login = :login")
	public List<DemandeNotesFrais> getDemandeByCollaborateur(String login);
	
	@Query("SELECT c.nom,c.prenom,p.intitule,p.budget from DemandeNotesFrais d JOIN Collaborateur c "
			+ "ON d.code.codeCollab = c.codeCollab"
			+ " JOIN Projet p ON d.code.codeProjet = p.codeProjet WHERE d.code.codeProjet=:projet"
			+ " AND d.code.codeCollab=:collab")
	public Object[] getDemandeInfos(Long projet,Long collab);
	
	@Query("SELECT accorde , count(*) from DemandeNotesFrais group by accorde ")
	public List<Object[]> getAccordeCount();
}
