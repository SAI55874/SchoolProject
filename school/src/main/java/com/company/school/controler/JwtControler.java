package com.company.school.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.school.model.AuthRequest;
import com.company.school.model.UserInfo;
import com.company.school.service.JwtService;
import com.company.school.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class JwtControler {
	
	@Autowired
    private JwtService jwtService;
	
	@Autowired
	private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;
	
	 @PostMapping("authenticate")
	    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
//		 System.out.println(authRequest.getUserName()+authRequest.getPassword());
	        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
	        if (authentication.isAuthenticated()) {
	            return jwtService.generateToken(authRequest.getUserName());
	        } else {
	            throw new UsernameNotFoundException("invalid user request !");
	        }
	    }
	 
	 @PostMapping("newUser")
	    public void newUserRegistration(@RequestBody UserInfo userInfo) {
		 userService.addUser(userInfo);
	    }
	 
	 
}
