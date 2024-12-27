# Quiz 1: Mengubah Informasi Diri di index.html

## Daftar Isi

- [Quiz 1: Mengubah Informasi Diri di index.html](#quiz-1-mengubah-informasi-diri-di-indexhtml)
  - [Daftar Isi](#daftar-isi)
  - [Tujuan](#tujuan)
  - [Instruksi](#instruksi)
  - [Contoh Informasi yang Dirubah](#contoh-informasi-yang-dirubah)
  - [Menambahkan Icon Social Media](#menambahkan-icon-social-media)
  - [Memasukan Titik Lokasi Maps pada Web Anda](#memasukan-titik-lokasi-maps-pada-web-anda)
  - [Penilaian](#penilaian)

## Tujuan

- **Mengasah Kemampuan HTML**: Melalui quiz ini, Anda akan belajar bagaimana mengedit file HTML dengan benar.
- **Memahami Struktur Web**: Anda akan memahami pentingnya menjaga struktur dan tata letak saat mengubah konten.
- **Praktik Penggunaan Google Maps**: Anda akan belajar cara menambahkan peta dari Google Maps ke dalam halaman web.

## Instruksi

1. Buka file `index.html` yang terdapat di folder proyek Anda.
2. Temukan bagian yang berisi informasi pribadi seperti nama, alamat, email, dan lain-lain.
3. Gunakan foto pribadi di bagian hero, dan sesuaikan ukuran foto nya.
4. Gantilah informasi tersebut dengan informasi diri Anda sendiri tanpa mengubah tata letak atau struktur konten yang ada.
5. Pastikan Anda hanya mengubah teks informasi pribadi dan tidak mengubah elemen HTML lainnya.

## Contoh Informasi yang Dirubah

Sebelum:

```html
<div class="subheadline">
  <h1>Thalal Atha Nabil</h1>
  <div class="subtitle">
    <span>You can call me</span>
    <span>atha</span>
  </div>
</div>
```

Sesudah:

```html
<div class="subheadline">
  <h1>[MASUKAN NAMA ANDA]</h1>
  <div class="subtitle">
    <span>kamu bisa panggil</span>
    <span>[NAMA PANGGILAN]</span>
  </div>
</div>
```

## Menambahkan Icon Social Media

Untuk menambahkan icon social media dari [Nucleo](https://nucleoapp.com/social-media-icons), ikuti langkah-langkah berikut:

1. **Kunjungi Nucleo**: Buka situs [Nucleo](https://nucleoapp.com/social-media-icons) dan pilih icon social media yang ingin Anda gunakan.
2. **Salin Kode SVG**: Setelah memilih icon, klik icon tersebut lalu akan tersalin kode SVG yang diberikan oleh Nucleo.
3. **Tambahkan Icon ke index.html**:
   - Buka file `index.html` Anda.
   - Temukan tempat di mana Anda ingin menambahkan icon social media.
   - Tempelkan kode SVG yang telah Anda salin ke dalam elemen `<a>`.

Contoh:

```html
<a href="https://www.facebook.com/yourprofile" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32">
    <path
      d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
  </svg>
</a>
```

Dengan mengikuti langkah-langkah di atas, Anda dapat menambahkan icon social media ke dalam web Anda dengan mudah.

## Memasukan Titik Lokasi Maps pada Web Anda

Untuk memasukkan titik lokasi maps pada web Anda, ikuti langkah-langkah berikut:

1. **Buka Google Maps**: Kunjungi situs [Google Maps](https://maps.google.com) dan cari lokasi yang ingin Anda tampilkan di web Anda.
2. **Dapatkan Kode Embed**:
   - Klik tombol "Bagikan" di panel kiri.
   - Pilih tab "Sematkan peta".
   - Salin kode HTML yang diberikan.
3. **Tambahkan Kode Embed ke index.html**:
   - Buka file `index.html` Anda.
   - Temukan tempat di mana Anda ingin menampilkan peta.
   - Tempelkan kode embed yang telah Anda salin dari Google Maps.

Contoh:

```html
<iframe
  class="maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284507048!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9b1b1b1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611811234567!5m2!1sen!2sau"
  allowfullscreen=""
  loading="lazy"></iframe>
```

4. **Tambahkan sebuah attribut Class**: Tambahkan sebuah class maps pada element iframe, agar ukuran nya bisa menyesuaikan, dan hapus atribut `width` dan `height` pada element iframe.

Dengan mengikuti langkah-langkah di atas, Anda dapat menambahkan titik lokasi maps ke dalam web Anda dengan mudah.

## Penilaian

- **Kesesuaian Informasi**: Pastikan informasi yang Anda masukkan adalah benar dan sesuai dengan diri Anda.
- **Konsistensi Tata Letak**: Tata letak dan struktur HTML harus tetap sama seperti semula.
- **Kebersihan Kode**: Pastikan kode tetap rapi dan mudah dibaca.

Selamat mengerjakan!
