package com.accolite.deserializer;

import com.accolite.domain.RestaurentEvent;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RestaurentEventDeserializer {

	public RestaurentEvent deserialize(String topic, byte[] data) {
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);

		RestaurentEvent msg = null;
		try {
			msg = objectMapper.readValue(data, RestaurentEvent.class);
		} catch (Exception e) {
			System.out.println("Exception while reading value" + e);
		}

		return msg;
	}

}
