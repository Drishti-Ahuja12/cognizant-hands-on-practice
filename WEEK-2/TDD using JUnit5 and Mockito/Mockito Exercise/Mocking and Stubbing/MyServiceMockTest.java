javac -cp "lib\junit-4.13.2.jar;lib\hamcrest-core-1.3.jar;lib\mockito-core-4.0.0.jar;lib\byte-buddy-1.12.23.jar;lib\objenesis-3.2.jar" -d bin ExternalApi.java MyService.java "Mocking and Stubbing\MyServiceMockTest.java" "Verifying Interations\MyServiceVerifyTest.java"import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceMockTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
