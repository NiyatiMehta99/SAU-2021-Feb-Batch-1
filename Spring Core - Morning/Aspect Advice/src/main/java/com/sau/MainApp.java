package com.sau;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sau.service.FruitService;

public class MainApp {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		ApplicationContext ctx = new ClassPathXmlApplicationContext("spring.xml");

		FruitService fruitService = (FruitService) ctx.getBean("fruitService");

		fruitService.getApple().setName("New Apple");
		System.out.println(fruitService.getApple().getName());

		// fruitService.getMango().setName("New Mango");

	}
}
