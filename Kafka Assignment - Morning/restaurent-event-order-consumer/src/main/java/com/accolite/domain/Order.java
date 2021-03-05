package com.accolite.domain;

import java.util.ArrayList;

public class Order {

	private int orderId;
	private ArrayList<String> orders;
	private String name;

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public ArrayList<String> getOrders() {
		return orders;
	}

	public void setOrders(ArrayList<String> orders) {
		this.orders = orders;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Order(int orderId, ArrayList<String> orders, String name) {
		this.orderId = orderId;
		this.orders = orders;
		this.name = name;
	}

	public Order() {
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", orders =" + orders.toString() + ", user name=" + name + "]";
	}

}
