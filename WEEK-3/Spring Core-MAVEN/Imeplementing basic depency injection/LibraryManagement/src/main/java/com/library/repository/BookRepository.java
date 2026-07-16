package com.library.repository;

public class BookRepository {

    public String findBookById(String bookId) {
        return "Book found through BookRepository: " + bookId;
    }
}
