
import java.util.Arrays;
import java.util.Comparator;


class Product{
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category){
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    @Override
    public String toString(){
        return "Product{" + "ID=" + productId + ", Name='" + productName + '\'' + '}';
    }
}

public class SearchOptimization{
    public static Product linearSearch(Product[] catalog, int targetId){
        for(Product p : catalog){
            if(p.productId == targetId){
                return p;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] catalog, int targetId){
        int left = 0, right = catalog.length-1;

        while(left<=right){
            int mid = left + (right - left)/2;

            if(catalog[mid].productId == targetId){
                return catalog[mid];
            }else if(catalog[mid].productId < targetId){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        // Mock Database of Products
        Product[] catalog = {
            new Product(105, "Wireless Headphones", "Electronics"),
            new Product(101, "Running Shoes", "Apparel"),
            new Product(108, "Mechanical Keyboard", "Electronics"),
            new Product(103, "Coffee Maker", "Home Goods"),
            new Product(110, "Smart Watch", "Electronics")
        };

        // Linear Search (Works on unsorted data)
        System.out.println("Linear Search Result: " + linearSearch(catalog, 103));

        Arrays.sort(catalog, Comparator.comparingInt(p->p.productId));

        System.out.println("Binary Search Result: " + binarySearch(catalog, 108));
    }
}