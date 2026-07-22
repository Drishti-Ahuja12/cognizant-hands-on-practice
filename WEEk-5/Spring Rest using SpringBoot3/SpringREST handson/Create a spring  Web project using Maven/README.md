# Create a Spring Web Project Using Maven

This project is the Week 5 Spring REST hands-on exercise created with Spring Initializr-style settings.

## Project settings

- Group: `com.cognizant`
- Artifact: `spring-learn`
- Java: 17
- Dependencies: Spring Boot DevTools and Spring Web

## Build

From this project directory, run:

```text
mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
```

The proxy options are only needed when building through the Cognizant proxy. Maven produces the packaged application under `target`.

## Import into Eclipse

Use **File > Import > Maven > Existing Maven Projects**, browse to this extracted project folder, and select **Finish**.

## Run

Run `SpringLearnApplication.java` as a Java application. The `main()` method logs before and after `SpringApplication.run(...)`, and Spring Boot starts the embedded web server.

## Project structure

- `src/main/java`: application code, including `SpringLearnApplication.java`
- `src/main/resources`: application configuration, including `application.properties`
- `src/test/java`: application tests
- `pom.xml`: Maven project metadata, Spring Boot parent, dependencies, Java version, and build plugin

## `@SpringBootApplication`

`@SpringBootApplication` combines configuration, component scanning, and auto-configuration. It lets Spring Boot discover application components in the `com.cognizant.springlearn` package and configure the web application from the dependencies on the classpath.
