package com.polytech.projet.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.polytech.projet.filter.JwtAuthorizationFilter;
import com.polytech.projet.repositories.CollaborateurRepository;

@Configuration @EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private CollaborateurRepository repo;
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		// TODO Auto-generated method stub
		super.configure(web);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//JwtAuthenticationFilter filter = new JwtAuthenticationFilter(authenticationManagerBean(),repo);
		//filter.setFilterProcessesUrl("/api/login");
		http.csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		//http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/login/*").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/login","/api/collaborateur/add").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/projet/all","/api/collaborateur/all",
				"/api/collaborateur/lastCode").permitAll();

		
		//http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/collaborateur").hasAuthority("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/collaborateur").hasAuthority("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/demande/").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/demande/").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/demande/all").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/demande/all").permitAll();
		
		
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/projet").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/projet").permitAll();
		
		
		//http.authorizeRequests().anyRequest().authenticated();
		
		//http.addFilter(filter);
		http.addFilterBefore(new JwtAuthorizationFilter(),UsernamePasswordAuthenticationFilter.class);
	
	}
	
	
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception{
		return super.authenticationManagerBean();
	}
	
}
