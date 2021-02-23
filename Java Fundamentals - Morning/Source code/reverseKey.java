package com.au.spring.java;
import java.util.*;

public class reverseKey {
	public static void main(String[] args)
	{
		TreeMap<String,Integer> map=new TreeMap<>();
		map.put("dog", 1);
		map.put("cat", 2);
		map.put("lion",3);
		map.put("horse",4);
		map.put("tiger",5);
		System.out.println("the original tree map containes "+map.toString());
		System.out.println("Reverse order of keys are "+map.descendingKeySet());
	}
}
