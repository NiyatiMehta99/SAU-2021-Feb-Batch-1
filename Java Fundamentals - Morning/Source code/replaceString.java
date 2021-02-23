package com.au.spring.java;

public class replaceString {
	public static void main(String[] args)
	{
		String str="I have a cat that likes to play with another cat";
		String replace_word="dog";
		
		String replaced=str.replaceAll("cat", replace_word);
		System.out.print(replaced);
	}

}
