package com.tender.app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Account {
    // Cannot name a table "user" in postgresql
    @Id
    @SequenceGenerator(name = "account_sequence", sequenceName = "account_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_sequence")
    private Long Id;
    private String Username;
    private String Password;
    private String Name;

    public Account(Long id, String username, String password, String name) {
        setId(id);
        setUsername(username);
        setPassword(password);
        setName(name);
    }

    public Account() {

    }

    public Account(String username, String password, String name) {
        setUsername(username);
        setPassword(password);
        setName(name);
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        this.Username = username;
    }

    @Override
    public String toString() {
        return "Account{" +
               "Id=" + Id + "\n" +
               "Username=" + Username + "\n" +
               "Password=" + Password + "\n" +
               "Name=" + Name + "\n" +
               "}";
    }

}
