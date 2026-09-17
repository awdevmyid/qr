package id.my.awdev.model;

public class QrCodeRequest {
    private String type;
    private String content;
    private String backgroundColor;
    private String foregroundColor;
    private String additionalText;
    private String font;
    private String textColor;

    // Constructors
    public QrCodeRequest() {}

    public QrCodeRequest(String type, String content, String backgroundColor, String foregroundColor) {
        this.type = type;
        this.content = content;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
    }

    // Getters and Setters
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getBackgroundColor() { return backgroundColor; }
    public void setBackgroundColor(String backgroundColor) { this.backgroundColor = backgroundColor; }

    public String getForegroundColor() { return foregroundColor; }
    public void setForegroundColor(String foregroundColor) { this.foregroundColor = foregroundColor; }

    public String getAdditionalText() { return additionalText; }
    public void setAdditionalText(String additionalText) { this.additionalText = additionalText; }

    public String getFont() { return font; }
    public void setFont(String font) { this.font = font; }

    public String getTextColor() { return textColor; }
    public void setTextColor(String textColor) { this.textColor = textColor; }
}
