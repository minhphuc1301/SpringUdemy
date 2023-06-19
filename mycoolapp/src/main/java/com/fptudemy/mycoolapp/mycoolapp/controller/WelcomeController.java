package com.fptudemy.mycoolapp.mycoolapp.controller;

import com.fptudemy.mycoolapp.mycoolapp.models.Welcome;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin()
@RestController
public class WelcomeController {

    @RequestMapping(path = "welcome")
    public Welcome GetWelcome() {

        throw new RuntimeException("Something wrong !");
    }

    @RequestMapping(path = "welcome/{name}")
    public Welcome GetWelcomeWithName(@PathVariable String name) {
        return new Welcome(String.format("Hello world , %s", name));
    }
}
