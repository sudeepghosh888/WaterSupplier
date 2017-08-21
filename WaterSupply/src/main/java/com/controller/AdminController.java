package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller									
@RequestMapping(value="/admin")
public class AdminController {
	
	@RequestMapping(value="", method = RequestMethod.GET)
	public ModelAndView getPage(HttpServletRequest request,
			HttpServletResponse response){
		System.out.println("Admin contoller");
 		return new ModelAndView("/AdminDashboard/AdminView/index");
 	 
	}
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public ModelAndView login(HttpServletRequest request,
			HttpServletResponse response){
		System.out.println("Admin contoller");
 		return new ModelAndView("/AdminDashboard/AdminView/index");
 	 
	}

}
