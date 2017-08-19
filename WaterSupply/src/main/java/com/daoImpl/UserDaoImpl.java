package com.daoImpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dao.UserDao;
import com.entity.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{

	@Autowired
	SessionFactory session;
	public boolean saveOrUpdate(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<User> list() {
		// TODO Auto-generated method stub
		return session.getCurrentSession().createQuery("from User").list();
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
