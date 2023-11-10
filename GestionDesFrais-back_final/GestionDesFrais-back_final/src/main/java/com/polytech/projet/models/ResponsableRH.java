package com.polytech.projet.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("ResponsableRH")
public class ResponsableRH extends Collaborateur {
	

}
