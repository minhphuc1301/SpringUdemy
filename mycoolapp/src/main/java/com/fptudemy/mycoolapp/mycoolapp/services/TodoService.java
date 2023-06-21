package com.fptudemy.mycoolapp.mycoolapp.services;

import com.fptudemy.mycoolapp.mycoolapp.models.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    public static List<Todo> todos = new ArrayList();
    public static long idCounter = 0;

    static {
        todos.add(new Todo(idCounter++, "PhucNM5", "Learn Spring Boot", new Date(), false));
        todos.add(new Todo(idCounter++, "PhucNM6", "Learn new thing", new Date(), true));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public boolean deleteById(long id) {
        Todo todo = findById(id);
        if (todo != null) {
            boolean check = todos.remove(todo);
            return check;
        }
        return false;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId().equals(id)) {
                return todo;
            }
        }
        return null;
    }

}
