package com.ws.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ws.dao.UserDao;
import com.ws.entity.User;
import com.ws.services.UserServices;

@Service
public class UserServicesImpl implements UserServices{
	@Autowired
	UserDao userDao;
	public boolean saveOrUpdate(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<User> list() {
		// TODO Auto-generated method stub
		return userDao.list();
	}

	public boolean delete(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<User> getByName(String colName, String colValue) {
		// TODO Auto-generated method stub
		return null;
	}

	public User getObject(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
