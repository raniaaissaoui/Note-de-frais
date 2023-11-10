package com.polytech.projet.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.polytech.projet.models.Projet;

public interface ProjetRepository  extends JpaRepository<Projet, Long>{
	@Query("Select p.codeProjet from Projet p ORDER BY p.codeProjet desc")
	public Object[] getLastCode();
}
