package manytonone;

import org.hibernate.Session;
import org.hibernate.Transaction;

import util.SessionUtil;

public class Manager {
	public static void main(String[] args) {

		Session session = SessionUtil.getSession();
		Transaction tx = session.beginTransaction();

		User user = new User();
		user.setUsername("abc");
		User user1 = new User();
		user1.setUsername("xyz");

		Car car = new Car();
		car.setVehicleName("toyota");
		car.setUser(user);

		Car car1 = new Car();
		car1.setVehicleName("hyundai");
		car1.setUser(user);

		session.save(car);
		session.save(car1);
		session.save(user1);
		tx.commit();
		session.close();
		System.out.println("sucessfull");

	}

}
