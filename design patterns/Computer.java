class Computer {
    private String cpu;
    private String ram;
    private String storage;
    private String graphicsCard;
    private String operatingSystem;

    private Computer(Builder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.operatingSystem = builder.operatingSystem;
    }

    public void displayConfiguration() {
        System.out.println("Computer Configuration:");
        System.out.println("CPU: " + getValue(cpu));
        System.out.println("RAM: " + getValue(ram));
        System.out.println("Storage: " + getValue(storage));
        System.out.println("Graphics Card: " + getValue(graphicsCard));
        System.out.println("Operating System: " + getValue(operatingSystem));
        System.out.println();
    }

    private String getValue(String value) {
        if (value == null) {
            return "Not included";
        }
        return value;
    }

    static class Builder {
        private String cpu;
        private String ram;
        private String storage;
        private String graphicsCard;
        private String operatingSystem;

        public Builder setCpu(String cpu) {
            this.cpu = cpu;
            return this;
        }

        public Builder setRam(String ram) {
            this.ram = ram;
            return this;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder setGraphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Builder setOperatingSystem(String operatingSystem) {
            this.operatingSystem = operatingSystem;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }
}
