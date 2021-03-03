package ecommerce;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import util.SessionUtil;

public class manager3 {

	public static void main(String[] args) {
		Session session = SessionUtil.getSession();
		Transaction tx = session.beginTransaction();

		Category cat1 = new Category();
		cat1.setCategoryName("electronics");

		Category cat2 = new Category();
		cat2.setCategoryName("fruits");

		Category cat3 = new Category();
		cat3.setCategoryName("T-shirts");

		List<Category> c1 = new ArrayList<Category>();
		c1.add(cat1);
		c1.add(cat2);

		List<Category> c2 = new ArrayList<Category>();
		c2.add(cat3);

		Supplier s1 = new Supplier();
		s1.setSupplierName("abc");
		s1.setCategories(c1);

		Supplier s2 = new Supplier();
		s2.setSupplierName("xyz");
		s2.setCategories(c2);

		Product p1 = new Product();
		p1.setProductName("Apple");
		p1.setCategory(c1);

		Product p2 = new Product();
		p2.setProductName("Mango");
		p2.setCategory(c2);

		session.save(p1);
		session.save(p2);

		session.save(s1);
		session.save(s2);

		tx.commit();
		session.close();

		System.out.println("successfull");
	}

}
