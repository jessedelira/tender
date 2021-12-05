package com.tender.app.services;

import java.util.List;
import java.util.Optional;

import com.tender.app.models.Account;
import com.tender.app.repositories.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountService {
    
    private final AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    public List<Account> getAccounts(){
        return accountRepository.findAll();
    }

    public void addNewAccount(Account account){
        Optional<Account> foundAccount = accountRepository.findByUsername(account.getUsername());
        
        if(foundAccount.isPresent()){
        throw new IllegalStateException("That username is already taken");
        }

        accountRepository.save(account);
        System.out.println("Account Created.");
    }



    // Add a method that gets a user by thier user name
    public Optional<Account> getAccountByUsername(String username){
        Optional<Account> accountFoundByUsername = accountRepository.findByUsername(username);

        if(accountFoundByUsername.isEmpty()){
            throw new IllegalStateException("An account with that username was not found");
        }

        return accountFoundByUsername;
    }

    // Get account by the username and password (logging in)
    public Optional<Account> getAccountByUsernameAndPassword(String username, String password){
       return accountRepository.findByUsernameAndPassword(username, password);
    }
}
