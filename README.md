
## Instalasi Frontend (React)
1. Clone repository di gitbash 'git clone https://github.com/jovanmorgan/frontend-sistem-penjualan.git
2. masuk cd frontend-sistem-penjualan
3. Jalankan `npm install`
4. Jalankan `npm run dev`

#Problame 
1. Jika Frontend react tidak dapat menerima api maka buka config/cors.php di folder backend laravel
 dan perikasa apakah path api sudah sesuai atau url react pada allowed_origins berbeda contoh :

return [
    'paths' => ['api/*', 'http://127.0.0.1:8000/komisi'], // Sesuaikan path yang ingin diizinkan CORS
    'allowed_methods' => ['*'], // Mengizinkan semua metode HTTP
    'allowed_origins' => ['http://localhost:5173'], // Mengizinkan semua asal permintaan (ubah sesuai u)
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];

## API
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/komisi` | Lihat komisi marketing |
| GET | `/api/pembayaran` | Lihat data pembayaran |
| POST | `/api/pembayaran` | Tambah pembayaran |

## Cara Menggunakan
1. Buka `http://localhost:3000` untuk melihat data komisi dan pembayaran.
2. Gunakan Postman untuk mengirim pembayaran.

## Postman Collection
File `Sistem-Penjualan-postman_collection.json` disertakan dalam repo. setelah mengambilnya anda bisa menghapusnya dari fokder react
