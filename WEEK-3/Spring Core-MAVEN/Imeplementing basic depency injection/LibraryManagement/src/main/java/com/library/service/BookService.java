package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook(String bookId) {
        if (bookRepository == null) {
            throw new IllegalStateException("Dependency injection failed: BookRepository is null");
        }
        System.out.println(bookRepository.findBookById(bookId));
    }
}
