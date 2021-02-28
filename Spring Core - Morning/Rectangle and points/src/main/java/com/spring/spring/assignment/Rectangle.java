package com.spring.spring.assignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Rectangle {

	private int height;
	private int width;

	@Autowired
	@Qualifier("point1")
	private Point Point1;

	@Autowired
	@Qualifier("point2")
	private Point Point2;

	@Autowired
	@Qualifier("point3")
	private Point Point3;

	@Autowired
	@Qualifier("point4")
	private Point Point4;

	@Autowired
	@Qualifier("list1")
	private List<String> newList;

	public void getNewList() {
		System.out.println("List: " + newList);
	}

	public void setNewList(List<String> newList) {
		this.newList = newList;
	}

	public Rectangle(int height, int width) {
		this.height = height;
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public Point getPoint1() {
		return Point1;
	}

	public void setPoint1(Point point1) {
		this.Point1 = point1;
	}

	public Point getPoint2() {
		return Point2;
	}

	public void setPoint2(Point point) {

		this.Point2 = point;
	}

	public Point getPoint3() {
		return Point3;
	}

	public void setPoint3(Point point) {

		this.Point3 = point;
	}

	public Point getPoint4() {
		return Point4;
	}

	public void setPoint4(Point point4) {
		this.Point4 = point4;
	}

	public void draw() {
		System.out.println("The given rectangle as a height of: " + getHeight() + " a width of " + getWidth());
		System.out.println("The fours Points making the rectangle are :");
		System.out.println("Point 1: " + Point1.getX() + " , " + Point1.getY());
		System.out.println("Point 2: " + Point2.getX() + " , " + Point2.getY());
		System.out.println("Point 3: " + Point3.getX() + " , " + Point3.getY());
		System.out.println("Point 4: " + Point4.getX() + " , " + Point4.getY());
	}

}
