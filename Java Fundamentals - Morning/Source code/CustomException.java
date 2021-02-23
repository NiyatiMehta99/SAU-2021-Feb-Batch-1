package com.au.spring.java;


class CustomException extends Exception { 
    public CustomException(String errorMessage) {
        super(errorMessage);
    }
}

public class Java{
	
	static boolean check_prime(int n)
	{
		for(int i=2;i*i<=n;i++)
		{
			if(n%i==0)
				return false;
		}
		return true;
	}
	public static void main(String[] args) throws CustomException
	{
		try {
			for(int i=1;i<=100;i++) {
				if(i==1)
					continue;
				if(check_prime(i))
					{System.out.println("the prime number encountered is "+i);
					throw new CustomException("This is a prime number");}}
		}
		catch(CustomException e)
		{
			System.out.println(e);
		}
		
	}
}
