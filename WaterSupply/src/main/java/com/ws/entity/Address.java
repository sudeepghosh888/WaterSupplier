package com.ws.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ADDRESS")
public class Address implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ADDRESS_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long addressId;
	@Column(name = "ADDRESS_LINE1", length = 40)
	private String addressLine1;
	@Column(name = "ADDRESS_LINE2", length = 40)
	private String addressLine2;
	@Column(name = "CITY_ID", length = 20)
	@OneToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private City city;
	@Column(name = "COUNTRY_ID", length = 20)
	private Country country;
	@Column(name = "PINCODE", length = 20)
	private long pincode;
	@Column(name = "USER_ID", length = 20)
	private User userId;

	public long getAddressId() {
		return addressId;
	}

	public void setAddressId(long addressId) {
		this.addressId = addressId;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
