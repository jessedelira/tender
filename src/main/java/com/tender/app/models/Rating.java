package com.tender.app.models;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
/**
 * Need an Id for every table
 */
@Entity
@Table
public class Rating {
    @Id
    @SequenceGenerator(name = "rating_sequence", sequenceName = "rating_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rating_sequence")
    private Long ratingId;
    private int accountId;
    private int restaurantId;
    private int ratingValue;
    private String review;

    public Rating () {

    }

    public Rating(Long ratingid, int accountid, int restaurantid, int ratingvalue, String reviewstring){
        setRatingId(ratingid);
        setAccountId(accountid);
        setRestaurantId(restaurantid);
        setRatingValue(ratingvalue);
        setReview(reviewstring);
   
    }

    public Rating(int accountid, int restaurantid, int ratingvalue, String reviewstring, LocalDate datecreated){
        
        setAccountId(accountid);
        setRestaurantId(restaurantid);
        setRatingValue(ratingvalue);
        setReview(reviewstring);
   
    }

    

    public Long getRatingId() {
        return ratingId;
    }
   
    public void setRatingId(Long ratingId){
        this.ratingId = ratingId;
    }

   



    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRatingValue() {
        return ratingValue;
    }

    public void setRatingValue(int ratingValue) {
        this.ratingValue = ratingValue;
    }

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int userId) {
        this.accountId = userId;
    }

    

    @Override
    public String toString() {
        return "Review{" +
               "ratingId=" + ratingId + "\n" +
               "accountId=" + accountId + "\n" +
               "restaurantId=" + restaurantId + "\n" +
               "ratingValue=" + ratingValue + "\n" +
               "review=" + review + "\n" +
               "dateCreated=" + dateCreated + "\n" +
               "}";
    }
}
