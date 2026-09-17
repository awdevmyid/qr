package id.my.awdev;

import id.my.awdev.controller.AwdevController;
import id.my.awdev.model.QrCodeRequest;
import id.my.awdev.model.ToolItem;

public class AwdevApplication {
    public static void main(String[] args) {
        System.out.println("Starting Awdev Java Backend Utilities Engine...");
        
        AwdevController controller = new AwdevController();

        // 1. Test mengambil daftar tools
        System.out.println("\n--- Fetching Awdev Platform Tools ---");
        for (ToolItem tool : controller.handleGetToolsList()) {
            System.out.println("- " + tool.getName() + " (" + tool.getPath() + ")");
        }

        // 2. Test simulasi pembuatan QR Code
        System.out.println("\n--- Testing QR Code Generation ---");
        QrCodeRequest sampleRequest = new QrCodeRequest("whatsapp", "https://wa.me/628123456789", "#ffffff", "#1a73e8");
        sampleRequest.setAdditionalText("Contact Awdev");
        
        var apiResponse = controller.handleGenerateQr(sampleRequest);
        System.out.println("API Response Status: " + apiResponse.get("status"));
        System.out.println("API Response Message: " + apiResponse.get("message"));
        
        System.out.println("\nAwdev Java Application initialized successfully.");
    }
}
