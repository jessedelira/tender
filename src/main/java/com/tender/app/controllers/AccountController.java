package com.tender.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tender.app.models.Account;
import com.tender.app.services.AccountService;

@RestController
@CrossOrigin // This annotation will let CORS (Cross Origin Resource Sharing)
@RequestMapping(path = "api/v1/account")
public class AccountController {
    
    private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping
    public List<Account> getAccounts() {
        return accountService.getAccounts();
    }

    /**
     * When POST a new student to the system the client will get a 200 status code,
     * on the condition of a succesful create of a student.
     * 
     * @param account
     * @return HttpStatus
     */
    @PostMapping
    public HttpStatus registerNewAccount(@RequestBody Account account) {
        accountService.addNewAccount(account);
        return HttpStatus.OK;
    }

    //     /**
//      * Search by a email given in the params of a URL HTTP GET Request
//      * 
//      * @param email
//      * @return Optional<Student>
//      */
    @RequestMapping("/getByUsername")
    @GetMapping
    public Optional<Account> getAccountByUsername(@RequestParam("username") String username) {
        return accountService.getAccountByUsername(username);
    }

}

















// }