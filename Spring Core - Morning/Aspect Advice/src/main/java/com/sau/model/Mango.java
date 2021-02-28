package com.sau.model;

public class Mango {

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
		throw (new RuntimeException());
	}
}
