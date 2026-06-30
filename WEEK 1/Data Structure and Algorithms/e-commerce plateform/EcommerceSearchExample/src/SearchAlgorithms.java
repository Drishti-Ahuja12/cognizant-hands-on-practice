public class SearchAlgorithms {
    public static Product linearSearch(Product[] products, int targetProductId) {
        for (Product product : products) {
            if (product.getProductId() == targetProductId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] sortedProducts, int targetProductId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int currentProductId = sortedProducts[mid].getProductId();

            if (currentProductId == targetProductId) {
                return sortedProducts[mid];
            }

            if (currentProductId < targetProductId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}
