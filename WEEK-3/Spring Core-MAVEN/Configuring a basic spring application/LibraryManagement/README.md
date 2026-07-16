# Exercise 1 - Configuring a Basic Spring Boot Application

This Spring Boot Maven project imports `applicationContext.xml`, which defines the `BookRepository` and `BookService` beans. Dependency injection is implemented separately in Exercise 2.

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
BookService bean initialized successfully.
Book found: BK-101
```
