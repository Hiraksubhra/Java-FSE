package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class); 

        LOGGER.info("Inside main");

        // Run tests
        testGetAllCountries();
        getAllCountriesTest(); // finding by code
        testAddCountry();      // adding a new country
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries");
    }

    // Find by Code
    private static void getAllCountriesTest() {
        LOGGER.info("Start getAllCountriesTest (Find By Code)");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country:{}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End getAllCountriesTest");
    }

    // Add Country
    private static void testAddCountry() { 
        LOGGER.info("Start testAddCountry");
        
        Country newCountry = new Country();
        newCountry.setCode("XY");
        newCountry.setName("New Example Country");
        
        countryService.addCountry(newCountry);
        LOGGER.debug("Country Added Successfully");
        
        try {
            Country savedCountry = countryService.findCountryByCode("XY");
            LOGGER.debug("Retrieved Newly Added Country: {}", savedCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        
        LOGGER.info("End testAddCountry");
    }
}