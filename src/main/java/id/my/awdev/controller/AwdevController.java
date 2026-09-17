package id.my.awdev.controller;

import id.my.awdev.model.QrCodeRequest;
import id.my.awdev.model.ToolItem;
import id.my.awdev.service.QrGeneratorService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AwdevController {
    
    private final QrGeneratorService qrService;

    public AwdevController() {
        this.qrService = new QrGeneratorService();
    }

    public Map<String, Object> handleGenerateQr(QrCodeRequest request) {
        Map<String, Object> response = new HashMap<>();
        String resultMessage = qrService.processQrGeneration(request);
        
        response.put("status", "success");
        response.put("platform", "awdev.my.id");
        response.put("message", resultMessage);
        return response;
    }

    public List<ToolItem> handleGetToolsList() {
        return qrService.getAllAwdevTools();
    }
}
