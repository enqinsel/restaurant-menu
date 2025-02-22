# Vue.js Restoran Menü Uygulaması

Modern ve kullanıcı dostu bir restoran menü uygulaması. Vue 3, Tailwind CSS ve TheMealDB API kullanılarak geliştirilmiştir.

## Özellikler

- 🍽️ Yemek kategorilerine göre filtreleme
- 🔍 Yemek arama
- 📱 Responsive tasarım
- 🎨 Modern ve şık arayüz
- 📖 Detaylı yemek tarifleri
- ⚡ Hızlı yükleme ve performans

## Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm (v6 veya üzeri)

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/kullaniciadi/restaurant-menu.git
cd restaurant-menu
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda şu adresi açın:
```
http://localhost:5173
```

## Kullanılan Teknolojiler

- Vue 3 - Modern web framework
- Vue Router - Sayfa yönlendirmeleri için
- Tailwind CSS - Stil ve tasarım için
- Axios - API istekleri için
- Vite - Build tool ve development server

## API Kullanımı

TheMealDB API endpoints:

- Kategoriler: `GET /categories.php`
- Kategori Yemekleri: `GET /filter.php?c={category}`
- Yemek Detayı: `GET /lookup.php?i={meal_id}`
- Yemek Arama: `GET /search.php?s={query}`

## Proje Yapısı

```
restaurant-menu/
├── src/
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── MealDetail.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Build

Projeyi production için build etmek:

```bash
npm run build
```

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.
