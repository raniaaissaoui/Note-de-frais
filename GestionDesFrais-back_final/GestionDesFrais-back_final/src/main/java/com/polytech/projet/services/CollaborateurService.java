package com.polytech.projet.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.polytech.projet.models.Collaborateur;
import com.polytech.projet.models.ResponsableRH;
import com.polytech.projet.repositories.CollaborateurRepository;

@Service
public class CollaborateurService implements UserDetailsService{

	@Autowired
	private CollaborateurRepository cr;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	/**
	 * 
	 * @return la liste des collaborateurs 
	 */
	public List<Collaborateur> findAllCollab(){
		return cr.findAll();
	}
	
	/**
	 * 
	 * @return la liste des ResponsableRH 
	 */
	public List<ResponsableRH> findAllRespoRH(){
		return cr.findRH();
	}
	
	/**
	 * 
	 * @param c collabteur à rajouter
	 */
	public void addCollab(Collaborateur c) {
		c.setMdp(passwordEncoder.encode(c.getMdp()));
		cr.save(c);
	}
	
	/**
	 * 
	 * @param id prend l'id de collaborateur à supprimer
	 */
	public void deleteCollab(Long id){
		 cr.deleteById(id);
	}
	
	/**
	 * 
	 * @param c le RH à rajouter
	 * @return le RH ajouté
	 */
	public ResponsableRH AddRH(ResponsableRH c){
		c.setMdp(passwordEncoder.encode(c.getMdp()));
		return cr.save(c);
	}
	
	/**
	 * 
	 * @param codeCollab
	 * @param mdp
	 * @param nom
	 * @param prenom
	 * @param idProjet
	 */
	public Collaborateur UpdateCollab(Long id,Collaborateur c) {
		Collaborateur c2= cr.findById(id).orElse(null); 
		//System.out.print(c2);
		if(c2!=null) {
			c2.setMdp(c.getMdp());
			c2.setPrenom(c.getPrenom());
			c2.setNom(c.getNom());

		}
		return cr.save(c2);
	}
	
	/**
	 * 
	 * @param codeCollab
	 * @param idProjet
	 */
	public void deleteProjectCollab(Long codeCollab, Long idProjet) {
//		Optional<Collaborateur> c  = cr.findById(codeCollab); 
//		Collaborateur c2 = c.get(); 
//		Set<Projet> projet =c2.getProjets();
//		projet.remove(idProjet);
	}
	
	public Long lastCode() {
		Object[] tab = cr.getLastCode();
		if(tab.length>0) 
			return (Long)tab[0]+1;
		return new Long(1);
	}
	
	public Object getTypeOfCollaborateur(Long code) {
		return cr.getTypeOfCollaborateur(code);
	}
	
	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		Collaborateur user = cr.findByLogin(login);
		if(user==null) {
			throw new UsernameNotFoundException("user not found");
		}
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		if(user instanceof ResponsableRH) {
			authorities.add(new SimpleGrantedAuthority("admin"));
		}
		
		return new org.springframework.security.core.userdetails.User(user.getLogin(),user.getMdp(), authorities);
	}	
	
	public List<?> getCollaborateursByProfil(){
		return cr.getCollaborateursByProfil();
	}
}