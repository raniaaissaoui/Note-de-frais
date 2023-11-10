package com.polytech.projet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.polytech.projet.models.Collaborateur;
import com.polytech.projet.models.DemandeNotesFrais;
import com.polytech.projet.models.ProjetCollaborateur_PK;
import com.polytech.projet.models.ResponsableRH;

public interface CollaborateurRepository  extends JpaRepository<Collaborateur, Long>{
	@Query("SELECT r FROM ResponsableRH r")
	List<ResponsableRH> findRH();
	@Query("Select c.codeCollab from Collaborateur c ORDER BY c.codeCollab desc")
	public Object[] getLastCode();
	
	@Query("SELECT c, TYPE(c) FROM Collaborateur c")
	public List<Object[]> getAll();
	
	@Query("select type(c) from Collaborateur c where c.codeCollab=:CODE")
	public Object getTypeOfCollaborateur(@Param("CODE") Long code);
	Collaborateur findByLogin(String login);
	
	@Query("select codeCollab from Collaborateur c where c.login=:login")
	public Long getCodeCollabFromLogin(String login);
	
	@Query("select count(*) from Collaborateur group by profil")
	public List<?> getCollaborateursByProfil ();
}
