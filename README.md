# Panel-Manajer-GAS

## Sekilas Pandang
Panel-Manajer-GAS adalah aplikasi web yang dibangun menggunakan Google Apps Script (GAS) untuk mengelola data Panel dengan mudah dan aman. Aplikasi ini menyediakan antarmuka yang user-friendly untuk mengakses dan mengelola informasi server, dilengkapi dengan fitur keamanan yang kuat.

## Fitur Utama
🔐 **Keamanan Tinggi**: Akses dilindungi password
🔍 **Pencarian Cepat**: Temukan informasi domain dengan mudah
📊 **Manajemen Data Efisien**: Kelola informasi server PleskPanel
📱 **Desain Responsif**: Akses dari perangkat apa saja
🔔 **Notifikasi Real-time**: Integrasi dengan Telegram untuk pemantauan akses
📝 **Log Akses Lengkap**: Catat semua aktivitas pengguna

## Teknologi
- Google Apps Script
- HTML5 & CSS3
- JavaScript
- Google Sheets
- Telegram Bot API

## Cara Penggunaan
1. Buka link aplikasi web
2. Masukkan password untuk login
3. Gunakan kolom pencarian untuk menemukan domain
4. Klik 'Detail' untuk melihat informasi lengkap server
5. Salin password server jika diperlukan

## Instalasi
1. Buat proyek Google Apps Script baru
2. Salin kode dari repository ini ke file yang sesuai
3. Sesuaikan konfigurasi di `Code.gs`:
   - `spreadsheetId`: ID Google Sheet Anda
   - `password`: Password untuk akses aplikasi
   - `telegramBotToken`: Token Bot Telegram Anda
   - `telegramChatId`: ID Chat Telegram Anda
4. Deploy aplikasi sebagai web app
5. Atur izin akses yang diperlukan

## Keamanan
- Ganti password akses secara berkala
- Pantau log akses dan notifikasi Telegram
- Batasi akses ke Google Sheet dan proyek script

## Kontribusi
Kami sangat menghargai kontribusi Anda! Silakan fork repository ini, buat perubahan, dan ajukan pull request.

## Lisensi
Proyek ini dilisensikan di bawah MIT License. Lihat file [LICENSE](LICENSE) untuk detailnya.

## Kontak
Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk membuka issue di repository ini.

Terima kasih telah menggunakan PleskPanel-Manajer-GAS!
