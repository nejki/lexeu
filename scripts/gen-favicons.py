#!/usr/bin/env python3
"""
Generate all favicon sizes from logo-256.png (black AK on white).
Crops tight to the monogram, adds proportional padding, outputs every required size.
"""
from PIL import Image
import os, struct, zlib

SRC = os.path.join(os.path.dirname(__file__), "..", "public", "logo-256.png")
OUT = os.path.join(os.path.dirname(__file__), "..", "public")

# Padding around the monogram as fraction of the tightly-cropped size.
# 0.10 = 10% on each side → monogram fills ~83% of the canvas (nice and zoomed).
PADDING = 0.10

def load_and_crop(src_path):
    img = Image.open(src_path).convert("RGBA")
    # Find bounding box of non-white, non-transparent pixels
    r, g, b, a = img.split()
    # Treat pixels as "ink" when they are dark (r < 200) and opaque
    mask = Image.new("L", img.size, 0)
    pixels = img.load()
    mask_pixels = mask.load()
    w, h = img.size
    x_min, y_min, x_max, y_max = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            pr, pg, pb, pa = pixels[x, y]
            if pa > 128 and pr < 200:
                mask_pixels[x, y] = 255
                x_min = min(x_min, x)
                y_min = min(y_min, y)
                x_max = max(x_max, x)
                y_max = max(y_max, y)
    if x_min >= x_max or y_min >= y_max:
        raise ValueError("Could not find logo content in image")
    cropped = img.crop((x_min, y_min, x_max + 1, y_max + 1))
    return cropped

def square_with_padding(cropped, size, bg=(255, 255, 255, 255)):
    """Place cropped image centred in a square canvas with padding."""
    cw, ch = cropped.size
    max_dim = max(cw, ch)
    pad = int(max_dim * PADDING)
    canvas_content = max_dim + 2 * pad  # content + padding
    # Scale to fit target size
    scale = size / canvas_content
    new_w = int(cw * scale)
    new_h = int(ch * scale)
    resized = cropped.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), bg)
    offset_x = (size - new_w) // 2
    offset_y = (size - new_h) // 2
    canvas.paste(resized, (offset_x, offset_y), resized)
    return canvas

def save_png(img, path, bg=(255, 255, 255)):
    """Save with white background (RGB)."""
    bg_img = Image.new("RGB", img.size, bg)
    bg_img.paste(img, mask=img.split()[3])
    bg_img.save(path, "PNG", optimize=True)
    print(f"  {os.path.basename(path)} ({img.size[0]}x{img.size[1]})")

def save_ico(images_by_size, path):
    """Build a proper multi-resolution .ico file from a list of PIL images."""
    images = []
    for size, img in images_by_size:
        sq = square_with_padding(img, size, bg=(255, 255, 255, 255))
        bg = Image.new("RGB", sq.size, (255, 255, 255))
        bg.paste(sq, mask=sq.split()[3])
        images.append(bg)

    import io
    ICONDIRENTRY_SIZE = 16
    num = len(images)
    header = struct.pack("<HHH", 0, 1, num)  # reserved, type=1 (ICO), count
    entries = b""
    data = b""
    offset = 6 + ICONDIRENTRY_SIZE * num
    for img in images:
        buf = io.BytesIO()
        img.save(buf, format="PNG")
        png_data = buf.getvalue()
        w, h = img.size
        entry = struct.pack("<BBBBHHII",
            w if w < 256 else 0,
            h if h < 256 else 0,
            0,     # color count
            0,     # reserved
            1,     # color planes
            32,    # bits per pixel
            len(png_data),
            offset)
        entries += entry
        data += png_data
        offset += len(png_data)
    with open(path, "wb") as f:
        f.write(header + entries + data)
    print(f"  favicon.ico (16, 32, 48)")

def main():
    print("Loading logo...")
    cropped = load_and_crop(SRC)
    print(f"  Cropped monogram: {cropped.size}")

    print("\nGenerating favicons...")

    # Browser tab icons
    save_png(square_with_padding(cropped, 16), os.path.join(OUT, "favicon-16x16.png"))
    save_png(square_with_padding(cropped, 32), os.path.join(OUT, "favicon-32x32.png"))

    # Multi-res .ico (16, 32, 48)
    save_ico([(16, cropped), (32, cropped), (48, cropped)], os.path.join(OUT, "favicon.ico"))

    # Apple touch icon (180x180, used for iOS home screen)
    save_png(square_with_padding(cropped, 180), os.path.join(OUT, "apple-touch-icon.png"))

    # Android / PWA icons
    save_png(square_with_padding(cropped, 192), os.path.join(OUT, "android-chrome-192x192.png"))
    save_png(square_with_padding(cropped, 512), os.path.join(OUT, "android-chrome-512x512.png"))

    # Windows tile
    save_png(square_with_padding(cropped, 150), os.path.join(OUT, "mstile-150x150.png"))

    # Logo PNGs used by the Logo component (keep same layout, just regenerate clean)
    save_png(square_with_padding(cropped, 96),  os.path.join(OUT, "logo-96.png"))
    save_png(square_with_padding(cropped, 256), os.path.join(OUT, "logo-256.png"))

    print("\nDone.")

if __name__ == "__main__":
    main()
