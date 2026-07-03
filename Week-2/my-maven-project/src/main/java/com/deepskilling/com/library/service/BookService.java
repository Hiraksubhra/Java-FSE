package com.deepskilling.com.library.service;
import com.deepskilling.com.library.repository.BookRepository;
public class BookService {
    private BookRepository bookRepository;
    
    public BookService() {
        System.out.println("BookService instance created by Spring IoC.");
    }

    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }
    public void registerNewBook(){
        System.out.println("BookService: Processing new book registration...");
        bookRepository.saveBook();
    }
}
