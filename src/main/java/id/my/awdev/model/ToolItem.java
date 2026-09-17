package id.my.awdev.model;

public class ToolItem {
    private String name;
    private String path;
    private String description;

    public ToolItem(String name, String path, String description) {
        this.name = name;
        this.path = path;
        this.description = description;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPath() { return path; }
    public void setPath(String path) { this.path = path; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
