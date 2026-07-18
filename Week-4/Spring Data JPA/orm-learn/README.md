# Spring Data JPA – Quick Example

This project retrieves all records from the `country` table through Spring Data JPA. It uses an embedded H2 database by default, so it runs without MySQL setup.

## Setup

Run immediately with:

```powershell
mvn spring-boot:run
```

## Using MySQL instead

1. Create the database: `CREATE SCHEMA ormlearn;`
2. Run [`src/main/resources/schema-mysql.sql`](src/main/resources/schema-mysql.sql) in that database.
3. Set the real credentials:

   ```powershell
   $env:DB_USERNAME = 'root'
   $env:DB_PASSWORD = 'your-password'
   ```

4. Start with the MySQL profile:

   ```powershell
   mvn spring-boot:run "-Dspring-boot.run.profiles=mysql"
   ```

The application logs the countries returned by `CountryService.getAllCountries()`.

`Country` maps `code` to `co_code` and `name` to `co_name`, matching the table creation script in the exercise.
