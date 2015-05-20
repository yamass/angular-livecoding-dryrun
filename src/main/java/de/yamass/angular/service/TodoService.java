package de.yamass.angular.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.yamass.angular.model.Todo;
import de.yamass.angular.validation.MyValidationException;

@RestController
@RequestMapping(value = "data/todo")
public class TodoService {

   private final Map<Integer, Todo> todos = Collections.synchronizedMap(new LinkedHashMap<>());
   private static AtomicInteger idCounter = new AtomicInteger(1);

   @RequestMapping(method = RequestMethod.GET)
   public List<Todo> getTodos() {
      return new ArrayList<>(todos.values());
   }

   @RequestMapping(method = RequestMethod.POST)
   public Todo addTodo(@RequestBody Todo todo) {

      if ("hallo".equals(todo.getTitle())) {
         throw new MyValidationException("Titel darf nicht hallo sein!!");
      }

      int id = idCounter.getAndIncrement();
      todo.setId(id);
      todos.put(id, todo);
      return todo;
   }
}
