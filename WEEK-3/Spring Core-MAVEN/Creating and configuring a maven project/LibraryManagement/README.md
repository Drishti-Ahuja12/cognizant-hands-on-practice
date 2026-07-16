# Exercise 4 - Creating and Configuring a Maven Project

The `LibraryManagement` Maven project includes Spring Context, Spring AOP, and Spring WebMVC dependencies. The Maven Compiler Plugin is configured for Java 1.8.

## Prerequisites

- Java Development Kit (JDK)
- Apache Maven 3.9.16 or later

## Validate and Compile (Windows CMD)

1. Open Command Prompt in this project folder.
2. Make Maven available in the current terminal session if `mvn` is not recognized:

   ```cmd
   set "PATH=C:\Users\Asus\Tools\apache-maven-3.9.16\bin;%PATH%"
   ```

3. Confirm Maven is installed:

   ```cmd
   mvn --version
   ```

4. Validate the `pom.xml`:

   ```cmd
   mvn clean validate
   ```

5. Download dependencies and compile source files:

   ```cmd
   mvn clean compile
   ```

## Note

This exercise configures Maven only and does not contain a Java `main` class, so there is no application run command.
