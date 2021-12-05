package com.tender.app.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;


@Entity
@Table
public class Restaurant {
    @Id
    @SequenceGenerator(name = "restaurant_sequence", sequenceName = "restaurant_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "restaurant_sequence")
    private Long Id;
    private String Name;
    private String Type;
    private String imagePath;
    private String Description;
    private String phoneNumber;
    private String Address;
    private String safteyInfo;

    public Restaurant(){

    }

    public String getSafteyInfo() {
        return safteyInfo;
    }

    public void setSafteyInfo(String safteyInfo) {
        this.safteyInfo = safteyInfo;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        this.Description = description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        this.Type = type;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id){
        this.Id = id;
    }

    public Restaurant(Long id, String name, String type, String imagepath, String description, String phonenumber, String address, String safteyinfo){
        setId(id);
        setName(name);
        setType(type);
        setImagePath(imagepath);
        setDescription(description);
        setPhoneNumber(phonenumber);
        setAddress(address);
        setSafteyInfo(safteyinfo);
    }

    public Restaurant(String name, String type, String imagepath, String description, String phonenumber, String address, String safteyinfo){
        setName(name);
        setType(type);
        setImagePath(imagepath);
        setDescription(description);
        setPhoneNumber(phonenumber);
        setAddress(address);
        setSafteyInfo(safteyinfo);
    }
}
