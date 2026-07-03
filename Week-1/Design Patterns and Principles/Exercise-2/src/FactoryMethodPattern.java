public class FactoryMethodPattern {
    public static void main(String[] args) {
        System.out.println("Testing Word Document Factory");
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();
        wordDoc.save();

        System.out.println("\nTesting PDF Document Factory");
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.manageDocument(); 

        System.out.println("\nTesting Excel Document Factory");
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
        excelDoc.close();
    }
}
