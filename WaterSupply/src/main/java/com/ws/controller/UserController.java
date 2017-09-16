package com.ws.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.ws.entity.User;
import com.ws.services.EnquiryServices;
import com.ws.services.UserServices;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserServices userServices;

	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView getPage(HttpServletRequest request,
			HttpServletResponse response){
		System.out.println("home contoller");
		List<User> users = userServices.list();
 		return new ModelAndView("/user/users");
 	 
	}
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public ModelAndView getlist(){
		List<User> users = userServices.list();
		ModelAndView view =new ModelAndView("/user/users");
		return view;
	 
	}

}
