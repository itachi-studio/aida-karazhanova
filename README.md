# Aida Karazhanova — 5 design variants

Preview-сайт для Dr. Aida N. Karazhanova. Пять визуальных вариаций
(`I · Editorial`, `II · Diplomatic`, `III · Bold`, `IV · Swiss`, `V · Warm`),
переключатель в футере. Все вариации делят один data-source.

## URLs

- `/` → `/editorial` (rewrite)
- `/editorial` · `/diplomatic` · `/bold` · `/swiss` · `/warm`

## Структура

```
landings/Aida/
├── editorial/index.html        # mounts V1
├── diplomatic/index.html       # V2
├── bold/index.html             # V3
├── swiss/index.html            # V4
├── warm/index.html             # V5
├── shared/
│   ├── data.jsx                # PROFILE, MILESTONES, ACHIEVEMENTS, PhotoSlot
│   ├── photos.js               # window.PHOTOS — hero map + gallery list
│   ├── gallery.jsx             # <Moments tokens={...}/>
│   ├── footer-switcher.jsx     # 5 ссылок-переключателей
│   └── boot.jsx                # ReactDOM render
├── variants/
│   ├── v1-editorial.jsx
│   ├── v2-diplomatic.jsx
│   ├── v3-bold.jsx
│   ├── v4-swiss.jsx
│   └── v5-warm.jsx
├── photos/                     # 17 фотографий
├── vercel.json                 # rewrite / → /editorial
└── README.md
```

## Локально

```sh
cd landings/Aida
python3 -m http.server 8000
# открыть http://localhost:8000/editorial/
```

## Деплой

```sh
cd landings/Aida
vercel --prod --yes --name aida-karazhanova --scope skandar11s-projects --token "$VERCEL_TOKEN"
```

## Поменять фото

Все пути к фото — в `shared/photos.js` (`window.PHOTOS.hero` и `window.PHOTOS.gallery`).
Чтобы поменять hero-портрет конкретного варианта — поправить значение в `hero.<variant>`.
Чтобы добавить/убрать снимок в галерее — отредактировать `gallery` массив (`{src, caption}`).
Сами `.jpg` лежат в `photos/`.

## Когда выбран финальный вариант

1. Удалить остальные 4 директории и `variants/v?-*.jsx` для них.
2. В оставшемся `<variant>/index.html` убрать `<script type="text/babel" src="/shared/footer-switcher.jsx">`.
3. В `boot.jsx` — убрать `<FooterSwitcher .../>`.
4. Положить выбранный вариант в `/` (поменять `vercel.json` rewrite или просто переименовать директорию).
