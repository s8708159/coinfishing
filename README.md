# Coinfishing

歡迎來到 Coinfishing - 加密貨幣資訊平台

## 網站訪問

本網站已部署到 GitHub Pages，可透過以下網址訪問：

**https://s8708159.github.io/coinfishing/**

## 專案結構

```
coinfishing/
├── index.html          # 主頁面 HTML
├── style.css           # 樣式表
├── script.js           # JavaScript 功能
├── images/             # 圖片資源
│   ├── logo.svg
│   ├── icon-secure.svg
│   ├── icon-fast.svg
│   └── icon-support.svg
└── README.md           # 說明文件
```

## 功能特色

- 響應式設計，支援各種裝置
- 平滑滾動導航
- 互動式表單
- 現代化 UI/UX 設計
- SVG 圖示

## 如何啟用 GitHub Pages

1. 進入 GitHub 儲存庫的 Settings
2. 點選左側選單的 "Pages"
3. 在 "Source" 部分選擇 "Deploy from a branch"
4. 在 "Branch" 選擇 `main` 分支和 `/` (root) 目錄
5. 點擊 "Save"
6. 等待幾分鐘，網站就會發布到 `https://s8708159.github.io/coinfishing/`

## 本地開發

要在本地查看網站，只需在瀏覽器中直接打開 `index.html` 檔案，或使用簡單的 HTTP 伺服器：

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Node.js (需要先安裝 http-server)
npx http-server

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器訪問 `http://localhost:8000`

## 技術棧

- HTML5
- CSS3 (含 Flexbox 和 Grid)
- 原生 JavaScript (ES6+)
- SVG 圖形

## 授權

© 2025 Coinfishing. All rights reserved.