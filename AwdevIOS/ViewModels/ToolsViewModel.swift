import Foundation

class ToolsViewModel: ObservableObject {
    @Published var tools: [ToolItem] = []

    init() {
        loadTools()
    }

    func loadTools() {
        tools = [
            ToolItem(name: "Aplikasi", path: "https://awdev.my.id/aplikasi/", description: "Aplikasi utilities list", iconName: "square.grid.2x2"),
            ToolItem(name: "Calligraphy", path: "https://awdev.my.id/calligraphy/", description: "Calligraphy font generator", iconName: "textformat"),
            ToolItem(name: "Code", path: "https://awdev.my.id/code/", description: "Code formatter and editors", iconName: "chevron.left.forwardslash.chevron.right"),
            ToolItem(name: "Collor", path: "https://awdev.my.id/collor/", description: "Rainbow color palettes & pickers", iconName: "paintpalette"),
            ToolItem(name: "Converter", path: "https://awdev.my.id/converter/", description: "File and data format converter", iconName: "arrow.triangle.2.circlepath"),
            ToolItem(name: "PDF", path: "https://awdev.my.id/pdf/", description: "PDF tools and openers", iconName: "doc.fill"),
            ToolItem(name: "QR Code", path: "https://awdev.my.id/qr/", description: "Free Dynamic QR Code generator", iconName: "qrcode"),
            ToolItem(name: "Safelink", path: "https://awdev.my.id/safelink/", description: "Secure link redirection utility", iconName: "link"),
            ToolItem(name: "Tools", path: "https://awdev.my.id/tools/", description: "Main master tools directory", iconName: "wrench.and.screwdriver")
        ]
    }
}
