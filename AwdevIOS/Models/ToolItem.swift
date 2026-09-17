import Foundation

struct ToolItem: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let path: String
    let description: String
    let iconName: String
}
