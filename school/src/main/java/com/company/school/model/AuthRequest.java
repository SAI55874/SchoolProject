package com.company.school.model;

public class AuthRequest {
	private String username ;
    private String password;
		
		public AuthRequest() {
			super();
			// TODO Auto-generated constructor stub
		}

		public String getUserName() {
			return username;
		}

		public void setUserName(String userName) {
			this.username = userName;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public AuthRequest(String userName, String password) {
			super();
			this.username = userName;
			this.password = password;
		}
}
