package com.todo.todoapp.controller;

import com.todo.todoapp.model.Todo;
import com.todo.todoapp.service.todoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final todoService service;

    public TodoController(todoService service) {
        this.service = service;
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return service.createTodo(todo);
    }

    @GetMapping
    public List<Todo> getAll(@RequestParam(required = false) Boolean completed) {
        return service.getTodos(completed);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        return service.updateTodo(id, todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteTodo(id);
    }
}
