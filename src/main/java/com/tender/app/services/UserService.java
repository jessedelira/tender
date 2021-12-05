package com.tender.app.services;

import java.util.List;
import java.util.Optional;

import com.tender.app.models.User;
import com.tender.app.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void addNewUser(User user){
        Optional<User> foundUser = userRepository.findByUsername(user.getUsername());
        
        if(foundUser.isPresent()){
        throw new IllegalStateException("That username is already taken");
        }

        userRepository.save(user);
        System.out.println("User Created.");
    }



    // Add a method that gets a user by thier user name
    public Optional<User> getUserByUsername(String username){
        Optional<User> userFoundByUsername = userRepository.findByUsername(username);

        if(userFoundByUsername.isEmpty()){
            throw new IllegalStateException("A user with that username was not found");
        }

        return userFoundByUsername;
    }
}
