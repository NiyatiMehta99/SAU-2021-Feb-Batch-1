package com.sau.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LoggingAspect {

	@After("allGetters() && allApple()")
	public void AfterAdvice() {
		System.out.println("Advice after get methods only in Apple objects ");
	}

	@AfterReturning("args(name)")
	public void stringArgument(String name) {
		System.out.println("Advice after returning and new value is " + name);
	}

	@AfterThrowing(pointcut = "args(name)", throwing = "ex")
	public void throwingException(String name, Exception ex) {
		System.out.println("Advice after throwing new exception and exception thrown is " + ex.toString());
	}

	@Around("args(String)")
	public Object aroundAdvice(ProceedingJoinPoint proceedingJoinPoint) {
		Object returnvalue = null;
		try {
			System.out.println("Before Proceeding");
			returnvalue = proceedingJoinPoint.proceed();
			System.out.println("After returning");
		} catch (Throwable e) {
			System.out.println("After throwing");
		}
		System.out.println("After finally");
		return returnvalue;
	}

	@Pointcut("execution(* get*())")
	public void allGetters() {
	}

	@Pointcut("within(com.sau.model.Apple)")
	public void allApple() {
	}
}
