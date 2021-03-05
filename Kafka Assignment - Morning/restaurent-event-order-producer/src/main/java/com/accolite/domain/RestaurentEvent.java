package com.accolite.domain;

public class RestaurentEvent {

	private Integer restuarentEventId;
	private Order order;

	public Integer getRestuarentEventId() {
		return restuarentEventId;
	}

	public void setRestuarentEventId(Integer restuarentEventId) {
		this.restuarentEventId = restuarentEventId;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
}
