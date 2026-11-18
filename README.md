# V-1 Flying Bomb — Proyek Remotion

1920x1080, 30 FPS, MP4 H.264, sekitar 4 menit 15 detik. Tanpa voice-over, subtitle, dan musik.
Komposisi: `V1FlyingBomb`.

## Render di GitHub
1. Push semua isi folder ini ke repo GitHub.
2. Tab Actions → "Render video" → Run workflow.
3. Setelah selesai, unduh artifact `v1-flying-bomb` (isinya mp4).

## Ubah durasi
Edit angka `dur` (frame, 30 = 1 detik) di `src/Video.tsx`.

## Pratinjau satu frame
`npx remotion still V1FlyingBomb out/frame.png --frame=300`
