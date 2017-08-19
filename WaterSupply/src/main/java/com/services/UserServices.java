package com.services;

import java.util.List;

import com.entity.User;

public interface UserServices {

	public boolean saveOrUpdate(User user);
	public List<User> list();
	public boolean delete(User user);
	public  List<User> getByName(String colName, String colValue);
	public User  getObject(long id);
}
