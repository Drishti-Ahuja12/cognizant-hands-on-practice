import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(104, "Keyboard", "Electronics"),
                new Product(101, "Running Shoes", "Footwear"),
                new Product(105, "Coffee Mug", "Kitchen"),
                new Product(102, "Smartphone", "Electronics"),
                new Product(103, "Notebook", "Stationery")
        };

        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, Comparator.comparingInt(Product::getProductId));

        int searchProductId = 102;

        System.out.println("Big O Notation:");
        System.out.println("Big O notation describes how an algorithm's running time or memory usage grows as input size increases.");
        System.out.println();

        System.out.println("Search Cases:");
        System.out.println("Best case: item is found immediately.");
        System.out.println("Average case: item is found somewhere in the middle.");
        System.out.println("Worst case: item is last or not present.");
        System.out.println();

        Product linearResult = SearchAlgorithms.linearSearch(products, searchProductId);
        System.out.println("Linear Search Result:");
        System.out.println(linearResult != null ? linearResult : "Product not found.");
        System.out.println();

        Product binaryResult = SearchAlgorithms.binarySearch(sortedProducts, searchProductId);
        System.out.println("Binary Search Result:");
        System.out.println(binaryResult != null ? binaryResult : "Product not found.");
        System.out.println();

        System.out.println("Time Complexity Analysis:");
        System.out.println("Linear Search: Best O(1), Average O(n), Worst O(n).");
        System.out.println("Binary Search: Best O(1), Average O(log n), Worst O(log n).");
        System.out.println("Binary search is better for large product catalogs when products are sorted by product ID.");
    }
}
