package com.spring.spring.assignment;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		ApplicationContext context = new AnnotationConfigApplicationContext(RectangleConfig.class);

		Rectangle rectangle = context.getBean(Rectangle.class);
		rectangle.draw();
		rectangle.getNewList();

	}
}
