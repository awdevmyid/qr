package id.my.awdev.service;

import id.my.awdev.model.QrCodeRequest;
import id.my.awdev.model.ToolItem;
import java.util.ArrayList;
import java.util.List;

public class QrGeneratorService {

    public String processQrGeneration(QrCodeRequest request) {
        // Simulasi logika backend generator QR Code
        String targetContent = request.getContent() != null ? request.getContent() : "https://awdev.my.id/";
        return "Successfully generated QR Code for type [" + request.getType() + 
               "] with content: " + targetContent + 
               " [Colors - FG: " + request.getForegroundColor() + ", BG: " + request.getBackgroundColor() + "]";
    }

    public List<ToolItem> getAllAwdevTools() {
        List<ToolItem> tools = new ArrayList<>();
        tools.add(new ToolItem("Aplikasi", "https://awdev.my.id/aplikasi/", "Aplikasi utilities list"));
        tools.add(new ToolItem("Calligraphy", "https://awdev.my.id/calligraphy/", "Calligraphy font generator"));
        tools.add(new ToolItem("Code", "https://awdev.my.id/code/", "Code formatter and editors"));
        tools.add(new ToolItem("Collor", "https://awdev.my.id/collor/", "Rainbow color palettes & pickers"));
        tools.add(new ToolItem("Converter", "https://awdev.my.id/converter/", "File and data format converter"));
        tools.add(new ToolItem("PDF", "https://awdev.my.id/pdf/", "PDF tools and openers"));
        tools.add(new ToolItem("QR", "https://awdev.my.id/qr/", "Free Dynamic QR Code generator"));
        tools.add(new ToolItem("Safelink", "https://awdev.my.id/safelink/", "Secure link redirection utility"));
        tools.add(new ToolItem("Tools", "https://awdev.my.id/tools/", "Main master tools directory"));
        return tools;
    }
}
