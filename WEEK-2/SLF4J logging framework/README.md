# SLF4J Logging Framework Example

This project demonstrates logging error and warning messages using SLF4J with Logback.

## Files

- `src/main/java/LoggingExample.java` - Java class that logs an error and warning.
- `lib/` - Contains the required jar dependencies:
  - `slf4j-api-1.7.30.jar`
  - `logback-classic-1.2.3.jar`
  - `logback-core-1.2.3.jar`
- `bin/` - Output folder for compiled classes.

## How to compile and run

Open PowerShell or CMD in the project folder:

```powershell
cd "C:\Users\Asus\OneDrive\Documents\Desktop\cogni-my-solution\WEEK-2\SLF4J logging framework"
```

Then run:

```powershell
mkdir bin
javac -cp "lib\slf4j-api-1.7.30.jar;lib\logback-classic-1.2.3.jar;lib\logback-core-1.2.3.jar" -d bin src\main\java\LoggingExample.java
java -cp "bin;lib\slf4j-api-1.7.30.jar;lib\logback-classic-1.2.3.jar;lib\logback-core-1.2.3.jar" LoggingExample
```

## Expected output

```text
ERROR LoggingExample - This is an error message
WARN LoggingExample - This is a warning message
```

## Notes

- This project is configured to run without Maven by using local jar files.
- If you want to customize logging output, add a `logback.xml` file to the classpath.
