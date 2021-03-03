package com.nik.assignment;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import util.SessionUtil;

public class Manager1 {
	public static void main(String[] args) {
		Session session = SessionUtil.getSession();
		Transaction tx = session.beginTransaction();
		int ch;
		Scanner scanner = new Scanner(System.in);
		do {
			System.out.println("enter your choice");
			System.out.println("1. enter an employee \n2.update a field in all employee\n3.delete employee\n"
					+ "4.get all employee\n5. get employee by id \n6.update employee by id \n7.exit");
			ch = scanner.nextInt();
			switch (ch) {
			case 1: {
				SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
				Employee e1 = new Employee();
				System.out.println("Enter id of employee");
				e1.setId(scanner.nextInt());
				System.out.println("enter first name");
				e1.setFname(scanner.next());
				System.out.println("enter last name");
				e1.setLname(scanner.next());
				System.out.println("enter age");
				e1.setAge(scanner.nextInt());
				System.out.println("enter salary");
				e1.setSalary(scanner.nextInt());
				System.out.println("enter DOB (dd-mm-yyyy)");
				String date = scanner.next();
				Date date2 = null;
				try {
					date2 = dateFormat.parse(date);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				e1.setDOB(date2);
				System.out.println("enter designation");
				e1.setDesignation(scanner.next());
				session.save(e1);

			}
				break;
			case 2: {
				System.out.println("enter new value of salary");
				int newVal = scanner.nextInt();
				String updateQuery = "update Employee set salary =: newSalary";
				int update = session.createQuery(updateQuery).setParameter("newSalary", newVal).executeUpdate();
			}
				break;
			case 3: {
				System.out.println("enter id of employee to be deleted");
				int delId = scanner.nextInt();
				String cont;
				System.out.println("This cannot be recovered once deleted (continue/cancel)");
				cont = scanner.next();
				Employee e1 = session.load(Employee.class, delId);
				if (e1 != null && "continue".equalsIgnoreCase(cont)) {
					session.delete(e1);
				}
			}
				break;
			case 4: {
				Query query = session.createQuery("from Employee");
				List<Employee> employees = query.getResultList();
				for (Employee e2 : employees) {
					System.out.println("id:" + e2.getId());
					System.out.println("first name:" + e2.getFname());
					System.out.println("last name:" + e2.getLname());
					System.out.println("age:" + e2.getAge());
					System.out.println("DOB:" + e2.getDOB());
					System.out.println("salary: " + e2.getSalary());
					System.out.println("designation:" + e2.getDesignation());
					System.out.println("----------------");
				}
			}
				break;
			case 5: {
				System.out.println("enter id of employee");
				int id = scanner.nextInt();
				Query query = session.createQuery("from Employee where id =: id");
				query.setParameter("id", id);
				List<Employee> employees = query.getResultList();
				for (Employee e2 : employees) {
					System.out.println("id:" + e2.getId());
					System.out.println("first name:" + e2.getFname());
					System.out.println("last name:" + e2.getLname());
					System.out.println("age:" + e2.getAge());
					System.out.println("DOB:" + e2.getDOB());
					System.out.println("salary: " + e2.getSalary());
					System.out.println("designation:" + e2.getDesignation());
					System.out.println("----------------");
				}
			}
				break;
			case 7:
				System.out.println("exit....");
				break;
			case 6: {
				System.out.println("enter id of employee to be updated");
				int updateId = scanner.nextInt();
				Employee e1 = session.load(Employee.class, updateId);
				SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
				System.out.println("enter first name");
				e1.setFname(scanner.next());
				System.out.println("enter last name");
				e1.setLname(scanner.next());
				System.out.println("enter age");
				e1.setAge(scanner.nextInt());
				System.out.println("enter salary");
				e1.setSalary(scanner.nextInt());
				System.out.println("enter DOB (dd-mm-yyyy)");
				String date = scanner.next();
				Date date2 = null;
				try {
					date2 = dateFormat.parse(date);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				e1.setDOB(date2);
				System.out.println("enter designation");
				e1.setDesignation(scanner.next());
				session.save(e1);
			}
			}
		} while (ch != 7);

		tx.commit();
		scanner.close();
		session.close();
		System.out.println("successfull transactions");

	}

}
