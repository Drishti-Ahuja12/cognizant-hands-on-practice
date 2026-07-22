# REST - Country Web Service

Run `mvn spring-boot:run` and send `GET http://localhost:8083/country`.

The controller loads the `countryIndia` bean from `src/main/resources/country.xml` and returns it. Spring MVC uses Jackson (included by Spring Web) to serialize the `Country` object getters into this JSON response:

```json
{
  "code": "IN",
  "name": "India"
}
```

In Chrome, use DevTools > Network > `/country` > **Headers**. In Postman, send the GET request and open the response **Headers** tab.
