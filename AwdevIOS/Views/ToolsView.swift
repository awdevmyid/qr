import SwiftUI

struct ToolsView: View {
    @StateObject private var viewModel = ToolsViewModel()

    var body: some View {
        NavigationView {
            List(viewModel.tools) { tool in
                Link(destination: URL(string: tool.path)!) {
                    HStack(spacing: 16) {
                        Image(systemName: tool.iconName)
                            .font(.title2)
                            .foregroundColor(.blue)
                            .frame(width: 32, height: 32)
                        
                        VStack(alignment: .leading, spacing: 4) {
                            Text(tool.name)
                                .font(.headline)
                                .foregroundColor(.primary)
                            Text(tool.description)
                                .font(.subheadline)
                                .foregroundColor(.secondary)
                        }
                        Spacer()
                        Image(systemName: "safari")
                            .foregroundColor(.gray)
                    }
                    .padding(.vertical, 4)
                }
            }
            .navigationTitle("Awdev Tools")
        }
    }
}
