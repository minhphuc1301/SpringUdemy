package com.fptudemy.mycoolapp.mycoolapp.controller;

import com.fptudemy.mycoolapp.mycoolapp.models.Todo;
import com.fptudemy.mycoolapp.mycoolapp.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/TodoController")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("")
    public List<Todo> getAllList() {
        return todoService.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id) {
        boolean check = todoService.deleteById(id);
        if (check) return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable long id) {
        Todo todo = todoService.findById(id);
        return todo;
    }
}
