import Foundation

class QrGeneratorViewModel: ObservableObject {
    @Published var request = QrCodeModel()
    @Published var generatedStatus: String = ""
    @Published var isGenerated: Bool = false

    func generateQrCode() {
        // Simulasi proses pembuatan QR Code
        isGenerated = true
        generatedStatus = "QR Code berhasil dibuat untuk konten: \(request.content) [Tipe: \(request.type)]"
    }
}
