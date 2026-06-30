public class FinancialForecastTest {
    public static void main(String[] args) {
        double currentValue = 10000.00;
        double annualGrowthRate = 0.08;
        int years = 5;

        System.out.println("Recursion Concept:");
        System.out.println("Recursion is a technique where a method calls itself to solve smaller versions of the same problem.");
        System.out.println("It simplifies problems that can be broken into repeated subproblems.");
        System.out.println();

        double recursiveFutureValue = FinancialForecast.calculateFutureValue(currentValue, annualGrowthRate, years);
        double optimizedFutureValue = FinancialForecast.calculateFutureValueOptimized(currentValue, annualGrowthRate, years);

        System.out.println("Current Value: " + currentValue);
        System.out.println("Annual Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Recursive Future Value: %.2f%n", recursiveFutureValue);
        System.out.printf("Optimized Future Value: %.2f%n", optimizedFutureValue);
        System.out.println();

        System.out.println("Time Complexity Analysis:");
        System.out.println("Recursive approach: O(n), because it makes one recursive call for each year.");
        System.out.println("Optimized approach: O(1), because Math.pow calculates the result directly.");
        System.out.println("For repeated forecasting, optimization avoids excessive recursive calls and is more efficient.");
    }
}
