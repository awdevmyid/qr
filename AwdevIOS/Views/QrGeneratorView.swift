import SwiftUI

struct QrGeneratorView: View {
    @StateObject private var viewModel = QrGeneratorViewModel()

    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Konfigurasi QR Code")) {
                    Picker("Tipe QR", selection: $viewModel.request.type) {
                        Text("URL / Website").tag("url")
                        Text("Teks Bebas").tag("text")
                        Text("WhatsApp").tag("whatsapp")
                        Text("Email").tag("email")
                    }

                    TextField("Masukkan Konten / Teks", text: $viewModel.request.content)
                        .autocapitalization(.none)

                    TextField("Teks Tambahan (Opsional)", text: $viewModel.request.additionalText)
                }

                Section(header: Text("Kustomisasi Tampilan")) {
                    TextField("Warna Foreground (Hex)", text: $viewModel.request.foregroundColor)
                    TextField("Warna Background (Hex)", text: $viewModel.request.backgroundColor)
                }

                Section {
                    Button(action: {
                        viewModel.generateQrCode()
                    }) {
                        Text("Generate QR Code")
                            .frame(maxWidth: .infinity, alignment: .center)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                    }
                    .listRowBackground(Color.blue)
                }

                if viewModel.isGenerated {
                    Section(header: Text("Hasil")) {
                        VStack(alignment: .center, spacing: 10) {
                            Image(systemName: "qrcode.viewfinder")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 120, height: 120)
                                .foregroundColor(.blue)
                            
                            Text(viewModel.generatedStatus)
                                .font(.footnote)
                                .foregroundColor(.secondary)
                                .multilineTextAlignment(.center)
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                    }
                }
            }
            .navigationTitle("QR Generator")
        }
    }
}
