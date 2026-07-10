import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAPatternTest {
    private int value;

    @Before
    public void setUp() {
        value = 5; // Arrange
    }

    @Test
    public void testAddValue() {
        // Act
        int result = value + 3;

        // Assert
        assertEquals(8, result);
    }

    @After
    public void tearDown() {
        value = 0;
    }
}
