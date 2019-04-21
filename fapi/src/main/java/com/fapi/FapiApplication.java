package com.fapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class FapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(
                FapiApplication.class, args);
    }

}
