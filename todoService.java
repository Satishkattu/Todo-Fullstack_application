package com.todo.todoapp.service;

import com.todo.todoapp.model.Todo;
import com.todo.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class todoService {

    private final TodoRepository repo;

    public todoService(TodoRepository repo) {
        this.repo = repo;
    }

    public Todo createTodo(Todo todo) {
        return repo.save(todo);
    }

    public List<Todo> getTodos(Boolean completed) {
        if (completed != null)
            return repo.findByCompleted(completed);
        return repo.findAll();
    }

    public Todo updateTodo(Long id, Todo t) {
        Todo todo = repo.findById(id).orElseThrow();
        todo.setTitle(t.getTitle());
        todo.setDescription(t.getDescription());
        todo.setCompleted(t.isCompleted());
        return repo.save(todo);
    }

    public void deleteTodo(Long id) {
        repo.deleteById(id);
    }
}
