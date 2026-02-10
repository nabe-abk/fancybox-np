# Fancybox-np

This is gallery software using JavaScript, forked from [Fancybox v3.5.7](https://github.com/fancyapps/fancybox).

- [Demo](https://nabe-abk.github.io/fancybox-np/)
- [Download](https://github.com/nabe-abk/fancybox-np/archive/refs/heads/main.zip)

# Install

```html
<link href="/path/to/fancybox-np.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="/path/to/fancybox-np.min.js"></script>
```

# Patch lists

- When the image is smaller than the display area, it can be enlarged.
- When viewing an image, press "SHIFT + click" to display it at full size.
- When viewing an image, press "CTRL + zoom" to enlarge it to fill the screen.
- Changed mouse wheel operation to zoom in and out of images.
- Enables gestures to enlarge images to a size smaller than the screen size.
- Change default mobile options. Disable "dblclickSlide" and change "clickSlide" to "close".

# パッチリスト

- 表示領域より画像が小さいときでも、画像を拡大可能に。
- 画像表示時、"SHIFT + click"で原寸大表示。
- 画像表示時、"CTRL  + click"で画面いっぱいに拡大表示。
- マウスホイール操作を画像拡大・縮小機能に変更。
- 画面サイズ未満の画像サイズへの拡大ジェスチャー動作を可能に。
- モバイルの標準オプションを変更。画像外ダブルクリック（dblclickSlide）による拡大を無効化し、画像外クリック（clickSlide）の動作を閉じる（close）に変更。

# Expansion options

```js
    // Zoom scale
    oneZoomScale: 2,
    maxZoomScale: 8,	// Gesture zoom ignores this value

    // Mousewheel zoom scale
    wheelScale: 1.25,
```

# 追加のオプション

```js
    // ズーム設定
    oneZoomScale: 2,
    maxZoomScale: 8,	// ジェスチャーによる拡大は最大値を無視する

    // マウスホイール操作時の基本倍率
    wheelScale: 1.25,
```
# Basic options

See [Fancybox v3.5.7 original document](https://nabe-abk.github.io/fancybox-np/fancybox3.5.7-doc.html).
