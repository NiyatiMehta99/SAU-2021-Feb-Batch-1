package com.accolite.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.accolite.domain.RestaurentEvent;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public class LibraryEventProducer {

	@Autowired
	private KafkaTemplate<String, RestaurentEvent> kafkaTemplate;

	public void sendLibraryEventAsynchronous(RestaurentEvent libraryEvent) throws JsonProcessingException {
		kafkaTemplate.send("test-topic", libraryEvent);
	}

}
