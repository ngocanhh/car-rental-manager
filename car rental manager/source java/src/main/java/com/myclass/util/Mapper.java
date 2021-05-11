package com.myclass.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

public class Mapper {

	public static <T> T mapObjects(Object source, Class<T> destination) {
		Field[] desFields = destination.getDeclaredFields(); // có thể check thêm supper class
		Field[] souFields = source.getClass().getDeclaredFields();
		T result = null;
		try {
			result = destination.getDeclaredConstructor().newInstance();
			for (Field desField : desFields) {
				for (Field souField : souFields) {
					if (desField.getName().equals(souField.getName())) {
						desField.setAccessible(true); // cho phép truy cập field private
						souField.setAccessible(true);
						desField.set(result, souField.get(source));
						break;
					}
				}
			}
		} catch (InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException
				| NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return result;
	}
}