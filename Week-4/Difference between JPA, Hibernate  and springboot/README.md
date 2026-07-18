# Hands-on 4: JPA, Hibernate, Spring Data JPA and Spring Boot

## JPA (Java Persistence API)

JPA is a Java specification (JSR 338) for persisting, reading, and managing Java objects in relational databases. It provides standard annotations and APIs such as `@Entity`, `@Id`, and `EntityManager`.

JPA has no concrete implementation. Hibernate is one implementation of the JPA specification.

## Hibernate

Hibernate is an ORM (Object Relational Mapping) tool and a JPA implementation. It maps Java objects to database tables. With native Hibernate, session and transaction handling is written manually.

```java
/* Method to create an employee using Hibernate. */
public Integer addEmployee(Employee employee) {
    Transaction transaction = null;

    try (Session session = sessionFactory.openSession()) {
        transaction = session.beginTransaction();
        Integer employeeId = (Integer) session.save(employee);
        transaction.commit();
        return employeeId;
    } catch (HibernateException exception) {
        if (transaction != null) {
            transaction.rollback();
        }
        throw exception;
    }
}
```

## Spring Data JPA

Spring Data JPA is an abstraction over a JPA implementation provider such as Hibernate. It does not implement JPA. It reduces boilerplate by generating repository implementations and uses Spring transaction management.

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
```

```java
@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
```

## Spring Boot

Spring Boot is neither a JPA implementation nor an ORM tool. It makes Spring Data JPA applications easier to configure and run. `spring-boot-starter-data-jpa` auto-configures Spring Data JPA, Hibernate, data sources, entity scanning, and transaction management.

```java
@SpringBootApplication
public class EmployeeApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeApplication.class, args);
    }
}
```

## Comparison

| Aspect | JPA | Hibernate | Spring Data JPA | Spring Boot |
| --- | --- | --- | --- | --- |
| Type | Java specification | ORM framework / JPA provider | Spring abstraction over JPA | Application framework |
| Database implementation | No | Yes | Uses Hibernate or another JPA provider | Auto-configures the application |
| Main APIs | `EntityManager`, annotations | `Session`, `Transaction` | `JpaRepository`, `@Transactional` | starters, `@SpringBootApplication` |
| Boilerplate | Standard API only | Manual session and transaction code | Minimal repository/service code | Minimal application setup |

```text
Spring Boot -> Spring Data JPA -> JPA specification -> Hibernate implementation -> Database
```

In the Week 4 `orm-learn` project, Spring Boot starts the application, `CountryRepository` uses Spring Data JPA, and Hibernate performs the JPA database operations.
