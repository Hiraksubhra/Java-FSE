import java.util.*;

public class OptimizedForecaster {
    private static Map<Integer, Double> memo = new HashMap<>();

    public static double predictRevenue(int month){
        if(month == 0) return 10000.00;
        if(month == 1) return 10500.00;

        if(memo.containsKey(month)){
            return memo.get(month);
        }
        double result = (1.05 * predictRevenue(month-1) + 0.02 * predictRevenue(month-2));

        memo.put(month, result);

        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of months: ");
        int n = sc.nextInt();

        System.out.printf("Predicted Revenue: %.2f", predictRevenue(n));
    }
}
