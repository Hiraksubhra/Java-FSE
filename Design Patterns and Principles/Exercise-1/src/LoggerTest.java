public class LoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        boolean isSame = (logger1 == logger2);
        System.out.println("Are logger1 and logger 2 same? " + isSame);

        System.out.println("Logger 1 Hashcode: " + logger1.hashCode());
        System.out.println("Logger 2 Hashcode: " + logger2.hashCode());
        
        logger1.log("Application started successfully.");
        logger2.log("User authentication passed.");
        logger1.log("Database connection established.");
    }
}
