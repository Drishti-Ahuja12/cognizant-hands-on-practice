# Exercise 2 - Implementing Basic Dependency Injection with Spring Boot

This Spring Boot Maven project imports `applicationContext.xml`. Spring injects the `bookRepository` bean into `BookService` through its `setBookRepository` setter.

## Prerequisites

- Java 17 or later (`java --version`)
- Apache Maven 3.9.16 or later

## Compile and Run (Windows CMD)

1. Open Command Prompt in this project folder.
2. Make Maven available in the current terminal session if `mvn` is not recognized:

   ```cmd
   set "PATH=C:\Users\Asus\Tools\apache-maven-3.9.16\bin;%PATH%"
   ```

3. Confirm Maven is installed:

   ```cmd
   mvn --version
   ```

4. Compile and package the application:

   ```cmd
   mvn clean package
   ```

5. Run the Spring Boot application:

   ```cmd
   mvn spring-boot:run
   ```

## Expected Output

```text
Book found through BookRepository: BK-102
```

The successful output confirms that setter-based dependency injection is working.
