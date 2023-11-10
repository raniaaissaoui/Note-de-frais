package com.polytech.projet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.polytech.projet.models.ResponsableRH;
import com.polytech.projet.services.CollaborateurService;

@SpringBootApplication
public class GestionFraisApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionFraisApplication.class, args);
	}

	@Bean 
	CommandLineRunner run(CollaborateurService userService) {
		return args->{
			ResponsableRH c =new ResponsableRH(); 
			c.setLogin("rh");
			c.setMdp("123");
			c.setNom("kouidi");
			c.setPrenom("ismail");
			
			userService.AddRH(c); 
		};
	}
	@Bean
	PasswordEncoder passwordEncoder() { 
		return new BCryptPasswordEncoder(); 
	} 
	
	
}