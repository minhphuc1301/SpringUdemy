package com.fptudemy.mycoolapp.mycoolapp.models;

public class Welcome {
    String message;

    public Welcome(String message) {
        super();
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
