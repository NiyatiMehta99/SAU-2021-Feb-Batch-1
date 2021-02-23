package com.au.spring.java;

import java.io.*;

class Employee implements java.io.Serializable {
	
	   @SuppressWarnings("unused")
	private static final long SerialVersionUID = 10l;
	   public String name;
	   public String address;
	   public transient int SSN;
	   public int number;
	   public transient String dept;
	   
	   public void mailCheck() {
	      System.out.println("Mailing a check to " + name + " " + address);
	   }
	}

public class Serializing {

   public static void main(String [] args) {
      Employee e = new Employee();
      e.name = "Niyati Mehta";
      e.address = "Bangalore";
      e.SSN = 101;
      e.number =101 ;
      e.dept = "Dev Ops";
      try {
         FileOutputStream fileOut =
         new FileOutputStream("C://Users//niyati//Desktop/employee.ser");
         ObjectOutputStream out = new ObjectOutputStream(fileOut);
         out.writeObject(e);
         out.close();
         fileOut.close();
         System.out.printf("Serialized data is saved in C://Users//niyati//Desktop/employee.ser");
      } catch (IOException i) {
         i.printStackTrace();
      }
      
      
   }
}