public class BuilderPatternExample {
    public static void main(String[] args) {
        Computer officeComputer = new Computer.Builder()
                .setCpu("Intel Core i5")
                .setRam("8 GB")
                .setStorage("512 GB SSD")
                .setOperatingSystem("Windows 11")
                .build();

        Computer gamingComputer = new Computer.Builder()
                .setCpu("AMD Ryzen 7")
                .setRam("32 GB")
                .setStorage("1 TB SSD")
                .setGraphicsCard("NVIDIA RTX 4070")
                .setOperatingSystem("Windows 11")
                .build();

        officeComputer.displayConfiguration();
        gamingComputer.displayConfiguration();
    }
}
