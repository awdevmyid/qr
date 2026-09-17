import SwiftUI

struct MainTabView: View {
    var body: some View {
        TabView {
            ToolsView()
                .tabItem {
                    Label("Tools", systemImage: "square.grid.2x2.fill")
                }

            QrGeneratorView()
                .tabItem {
                    Label("QR Generator", systemImage: "qrcode")
                }
        }
        .accentColor(.blue)
    }
}
