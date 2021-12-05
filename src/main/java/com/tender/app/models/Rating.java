package com.tender.app.models;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table
public class Rating {
    private Long accountId;
    private Long restaurantId;
    private int ratingValue;
    private String review;
    private Date dateCreated;

    public Rating(Long accountid, Long restaurantid, int ratingvalue, String reviewstring, Date datecreated){
        this.setAccountId(accountid);
        this.setRestaurantId(restaurantid);
        this.setRatingValue(ratingvalue);
        this.setReview(reviewstring);
        this.setDateCreated(datecreated);
    }

   

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
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

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long userId) {
        this.accountId = userId;
    }

    public Rating(){

    }
    


    @Override
    public String toString() {
        return "Review{" +
               "accountId=" + accountId + "\n" +
               "restarauntId=" + restaurantId + "\n" +
               "ratingValue=" + ratingValue + "\n" +
               "review=" + review + "\n" +
               "dateCreated=" + dateCreated + "\n" +
               "}";
    }
}
