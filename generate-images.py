#!/usr/bin/env python3
"""Generate professional niche images using PIL with gradients, depth, and texture."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import os, math, random

PALETTES = {
    "wedding": {"bg": (26,11,18), "surface": (45,19,30), "accent": (199,141,110),
                "text": (245,239,231), "textMuted": (220,200,185), "border": (61,31,43),
                "glow": (199,141,110), "warm": (180,100,80)},
    "mehndi":  {"bg": (245,240,230), "surface": (235,228,212), "accent": (193,120,23),
                "text": (26,46,26), "textMuted": (130,115,90), "border": (212,201,176),
                "glow": (193,120,23), "warm": (200,150,50)},
    "food":    {"bg": (26,20,18), "surface": (55,40,35), "accent": (210,130,50),
                "text": (245,239,231), "textMuted": (200,180,160), "border": (80,55,45),
                "glow": (210,100,50), "warm": (180,90,40)},
    "tattoo":  {"bg": (10,10,12), "surface": (25,25,28), "accent": (180,170,160),
                "text": (245,245,250), "textMuted": (140,140,145), "border": (40,40,45),
                "glow": (100,100,110), "warm": (80,80,90)},
}

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)

def blend_c(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def gradient_rect(draw, x1, y1, x2, y2, c1, c2, vertical=True):
    steps = max(abs(x2-x1), abs(y2-y1), 1)
    for i in range(steps):
        t = i / max(steps-1, 1)
        if vertical:
            y = y1 + int((y2-y1) * t)
            draw.line([(x1, y), (x2, y)], fill=blend_c(c1,c2,t))
        else:
            x = x1 + int((x2-x1) * t)
            draw.line([(x, y1), (x, y2)], fill=blend_c(c1,c2,t))

def add_noise_to_img(img, draw, w, h, amount=6):
    pixels = img.load()
    for _ in range(w*h//25):
        x, y = random.randint(0,w-1), random.randint(0,h-1)
        n = random.randint(-amount, amount)
        p = pixels[x, y]
        if isinstance(p, int):
            pixels[x, y] = max(0,min(255, p+n))
        else:
            pixels[x, y] = tuple(max(0,min(255, p[i]+n)) for i in range(3))

def soft_glow(draw, cx, cy, r, color, strength=60):
    for i in range(r, max(0, r-r//5), -max(1, r//10)):
        alpha = int(strength * (1 - i/r)**2)
        c = tuple(min(255, color[j] + alpha) for j in range(3))
        draw.ellipse([cx-i, cy-i, cx+i, cy+i], fill=c)

class NicheDrawer:
    def __init__(self, img, draw, w, h, palette):
        self.img = img
        self.draw = draw
        self.w = w
        self.h = h
        self.p = palette
        self.bg = palette["bg"]

    def _skin(self, delta=22):
        return (min(255, self.bg[0]+delta), min(255, self.bg[1]+delta), min(255, self.bg[2]+delta))

    def _darker(self, c, d=20):
        return tuple(max(0, c[i]-d) for i in range(3))

    def _lighter(self, c, d=25):
        return tuple(min(255, c[i]+d) for i in range(3))

    def mehndi(self, seed=0):
        """Large hand with intricate henna pattern."""
        random.seed(seed)
        bg = self.bg
        accent = self.p["accent"]
        skin = self._skin(12)
        skin_dark = self._darker(skin, 15)
        skin_light = self._lighter(skin, 10)

        # Background gradient
        for y in range(self.h):
            t = y / self.h
            c = blend_c(bg, self._lighter(bg, 8), t*0.5)
            self.draw.rectangle([0, y, self.w, y+1], c)

        # Soft ambient glow
        cx, cy = self.w//2, self.h//2 + 20
        soft_glow(self.draw, cx, cy, self.h//3, accent, 40)

        palm_h = int(self.h * 0.80)
        palm_w = int(palm_h * 0.80)
        palm_left = (self.w - palm_w) // 2
        palm_top = (self.h - palm_h) // 2

        # Hand shadow
        shadow_off = 12
        for s in range(8, 0, -1):
            sc = tuple(max(0, c-15) for c in skin)
            self.draw.rounded_rectangle(
                [palm_left+shadow_off+s, palm_top+shadow_off+s, palm_left+palm_w+shadow_off+s, palm_top+palm_h+shadow_off+s],
                radius=palm_w//5, fill=sc
            )

        # Palm gradient
        for y in range(palm_top, palm_top+palm_h):
            t = (y - palm_top) / palm_h
            c = blend_c(skin_dark, skin_light, 0.3 + t*0.4)
            self.draw.line([(palm_left, y), (palm_left+palm_w, y)], c)
        self.draw.rounded_rectangle(
            [palm_left, palm_top, palm_left+palm_w, palm_top+palm_h],
            radius=palm_w//5, outline=skin_dark, width=2
        )

        # Fingers
        finger_count = 5
        finger_gap = palm_w // (finger_count + 1)
        finger_w = int(finger_gap * 0.72)
        finger_h = int(self.h * 0.30)
        for i in range(finger_count):
            fx = palm_left + (i+1)*finger_gap - finger_w//2
            fy = palm_top - finger_h + palm_w//10
            self.draw.rounded_rectangle([fx+3, fy+3, fx+finger_w+3, palm_top+palm_h//6+3], radius=finger_w//2, fill=skin_dark)
            self.draw.rounded_rectangle([fx, fy, fx+finger_w, palm_top+palm_h//6], radius=finger_w//2, fill=skin)
            self.draw.rounded_rectangle([fx+finger_w//4, fy+2, fx+finger_w//2, fy+finger_h//3], radius=finger_w//4, fill=skin_light)
            self.draw.ellipse([fx+finger_w//2-5, fy+6, fx+finger_w//2+5, fy+16], fill=self._lighter(skin,20))

        # Thumb
        thumb_w = finger_w * 12//10
        thumb_base_y = palm_top + palm_h*4//10
        pts = [
            (palm_left+4, thumb_base_y),
            (palm_left - thumb_w + 10, thumb_base_y - palm_h*0.06),
            (palm_left - thumb_w + 6, thumb_base_y + palm_h*0.08),
            (palm_left+4, thumb_base_y + palm_h*0.05),
        ]
        self.draw.polygon(pts, fill=skin)
        self.draw.polygon([(palm_left+4+i, thumb_base_y-i//2) for i in range(4)], fill=skin_light)

        # Wrist band
        band_y = palm_top + palm_h - int(palm_h*0.05)
        self.draw.rounded_rectangle([palm_left+6, band_y, palm_left+palm_w-6, band_y+12], radius=6, fill=accent)
        for dx in range(palm_left+20, palm_left+palm_w-20, 14):
            self.draw.ellipse([dx-2, band_y+3, dx+2, band_y+7], fill=bg)

        # Mandala center
        mc_x, mc_y = palm_left + palm_w//2, palm_top + palm_h*35//100
        for ring_r in [palm_w//5, palm_w//7, palm_w//12]:
            self.draw.ellipse([mc_x-ring_r, mc_y-ring_r, mc_x+ring_r, mc_y+ring_r], outline=accent, width=2)
            n_dots = max(6, int(2*math.pi*ring_r / 12))
            for d in range(n_dots):
                angle = d * 2*math.pi / n_dots
                dx = mc_x + int(ring_r * math.cos(angle))
                dy = mc_y + int(ring_r * math.sin(angle))
                self.draw.ellipse([dx-2, dy-2, dx+2, dy+2], fill=accent)
        self.draw.ellipse([mc_x-5, mc_y-5, mc_x+5, mc_y+5], fill=accent)

        # Vines
        for vine_idx in range(8):
            start_x = mc_x + (vine_idx - 4) * (palm_w//10)
            start_y = band_y - 5
            pts = [(start_x, start_y)]
            for step in range(10):
                pts.append((pts[-1][0] + random.randint(-18,18), pts[-1][1] - random.randint(18,35)))
            for j in range(len(pts)-1):
                self.draw.line([pts[j], pts[j+1]], fill=accent, width=2)
            for px, py in pts[1::2]:
                if palm_top < py < band_y:
                    for angle in [0.3, -0.3]:
                        lx = px + int(8 * math.cos(angle))
                        ly = py + int(6 * math.sin(angle))
                        self.draw.ellipse([lx-3, ly-2, lx+3, ly+2], fill=accent)

    def wedding(self, seed=0):
        """Elegant couple silhouette with cinematic lighting."""
        random.seed(seed)
        bg = self.bg
        surface = self.p["surface"]
        accent = self.p["accent"]
        glow = self.p["glow"]
        warm = self.p["warm"]

        self.draw.rectangle([0,0,self.w,self.h], bg)

        # Warm center glow
        for r in range(min(self.w,self.h)//2, 0, -30):
            alpha = int(12 * (1 - r/(min(self.w,self.h)//2)))
            c = blend_c(glow, bg, 1 - alpha/20)
            self.draw.pieslice([self.w//2-r, -r//3, self.w//2+r, r+self.h//6], start=0, end=180, fill=c)

        # Floor
        for y in range(int(self.h*0.78), self.h):
            t = (y - int(self.h*0.78)) / (self.h - int(self.h*0.78))
            c = blend_c(surface, self._darker(surface, 15), t)
            self.draw.line([(0,y),(self.w,y)], c)

        base_y = int(self.h * 0.82)
        scale = min(self.w, self.h) * 40 // 100
        cx = self.w // 2

        # Pillars
        pillar_color = self._darker(surface, 20)
        for px, pw in [(int(self.w*0.10), int(self.w*0.06)), (int(self.w*0.84), int(self.w*0.06))]:
            for y in range(base_y - int(scale*0.25), base_y):
                t = (y - (base_y - int(scale*0.25))) / int(scale*0.25)
                c = blend_c(pillar_color, surface, t*0.3)
                self.draw.line([(px, y), (px+pw, y)], c)
            self.draw.rectangle([px, base_y - int(scale*0.25), px+pw, base_y], fill=pillar_color)

        # Groom
        gw = int(scale * 0.40)
        gh = int(scale * 1.08)
        gl = cx - gw - int(scale * 0.04)
        body_pts = [(gl + gw//2, base_y - gh), (gl + gw, base_y - int(gh*0.18)), (gl + gw + 18, base_y), (gl - 18, base_y)]
        self.draw.polygon([(p+8, y+8) for p,y in body_pts], fill=self._darker(surface, 25))
        self.draw.polygon(body_pts, fill=surface)
        self.draw.polygon([(gl+gw//3, base_y-gh+20), (gl+gw-10, base_y-gh//2), (gl+gw//2+5, base_y-gh//3)], fill=self._lighter(surface, 15))

        head_r = gw // 4
        head_cx = gl + gw//2
        head_cy = base_y - gh - head_r
        self.draw.ellipse([head_cx-head_r+4, head_cy-head_r+4, head_cx+head_r+4, head_cy+head_r+4], fill=self._darker(surface, 20))
        self.draw.ellipse([head_cx-head_r, head_cy-head_r, head_cx+head_r, head_cy+head_r], fill=surface)
        turban_r = int(head_r * 1.35)
        self.draw.pieslice([head_cx-turban_r, head_cy-int(head_r*0.9), head_cx+turban_r, head_cy+int(head_r*0.5)], start=0, end=180, fill=self._darker(surface, 10))
        self.draw.arc([head_cx-turban_r+4, head_cy-int(head_r*0.8), head_cx+turban_r-4, head_cy+int(head_r*0.3)], start=10, end=170, fill=surface, width=3)

        stole_pts = [(head_cx + head_r - 5, head_cy + 8), (gl + gw + 25, base_y - gh + 22), (gl + gw + 30, base_y - gh + 55), (head_cx + head_r + 3, head_cy + 30)]
        self.draw.polygon(stole_pts, fill=accent)
        self.draw.line([(head_cx+head_r, head_cy+12), (gl+gw+22, base_y-gh+25)], fill=self._lighter(accent,20), width=2)

        # Bride
        bw = int(scale * 0.44)
        bh = int(scale * 1.02)
        bl = cx + int(scale * 0.04)
        lehenga_pts = [(bl + bw//2, base_y - bh), (bl + bw, base_y - int(bh*0.14)), (bl + bw + 26, base_y), (bl - 26, base_y)]
        self.draw.polygon([(p[0]+6, p[1]+6) for p in lehenga_pts], fill=self._darker(surface, 20))
        self.draw.polygon(lehenga_pts, fill=surface)
        self.draw.polygon([(bl+bw//2, base_y-bh+15), (bl+bw-12, base_y-bh//2), (bl+bw//2+8, base_y-bh//3)], fill=self._lighter(surface, 12))

        b_head_r = bw // 4
        b_cx = bl + bw//2
        b_cy = base_y - bh - b_head_r
        self.draw.ellipse([b_cx-b_head_r+4, b_cy-b_head_r+4, b_cx+b_head_r+4, b_cy+b_head_r+4], fill=self._darker(surface, 18))
        self.draw.ellipse([b_cx-b_head_r, b_cy-b_head_r, b_cx+b_head_r, b_cy+b_head_r], fill=surface)

        veil_color = self._lighter(surface, 18)
        veil_pts = [(b_cx - int(b_head_r*1.5), b_cy - int(b_head_r*0.3)), (b_cx + int(b_head_r*1.5), b_cy - int(b_head_r*0.3)), (b_cx + int(b_head_r*1.2), b_cy + int(b_head_r*1.2)), (b_cx - int(b_head_r*1.2), b_cy + int(b_head_r*1.2))]
        self.draw.polygon(veil_pts, fill=veil_color)
        for i in range(-2, 3):
            fold_x = b_cx + i*(b_head_r//2)
            self.draw.line([(fold_x, b_cy - b_head_r//2), (fold_x + i*3, b_cy + b_head_r)], fill=self._darker(veil_color, 10), width=1)

        for i in range(5):
            nx = b_cx + (i-2)*12
            ny = b_cy + b_head_r + 5 + abs(i-2)*2
            self.draw.ellipse([nx-3, ny-3, nx+3, ny+3], fill=accent)
            if i > 0 and i < 4:
                self.draw.line([(nx-12, ny-abs(i-2)*2+1), (nx-3, ny-3)], fill=accent, width=2)

        garland_y = base_y - int(scale * 0.32)
        self.draw.arc([head_cx-15, garland_y-22, b_cx+15, garland_y+32], start=0, end=180, fill=accent, width=3)
        for gx in range(head_cx, b_cx, 10):
            gy = garland_y + int(12 * abs(math.sin((gx - cx) / 20)))
            self.draw.ellipse([gx-4, gy-4, gx+4, gy+4], fill=warm)

        soft_glow(self.draw, (head_cx+b_cx)//2, (head_cy+b_cy)//2 - 20, scale//3, warm, 30)

    def food(self, seed=0):
        """Gourmet plate with professional food styling."""
        random.seed(seed)
        bg = self.bg
        surface = self.p["surface"]
        accent = self.p["accent"]
        glow = self.p["glow"]

        self.draw.rectangle([0,0,self.w,self.h], bg)

        for r in range(min(self.w,self.h)//3, 0, -20):
            alpha = int(8 * (1 - r/(min(self.w,self.h)//3)))
            c = blend_c(glow, bg, 1 - alpha/15)
            self.draw.pieslice([self.w//2-r, -r, self.w//2+r, r*2], start=0, end=180, fill=c)

        table_top = int(self.h * 0.60)
        for y in range(table_top, self.h):
            t = (y - table_top) / (self.h - table_top)
            c = blend_c(self._darker(bg, 5), self._darker(bg, 15), t)
            self.draw.line([(0,y),(self.w,y)], c)

        plate_r = min(self.w, self.h) * 34 // 100
        cx, cy = self.w // 2, int(self.h * 0.44)

        self.draw.ellipse([cx-plate_r-8+15, cy-plate_r+4+15, cx+plate_r+8+15, cy+plate_r+4+15], fill=(5,3,2))
        self.draw.ellipse([cx-plate_r-8, cy-plate_r+2, cx+plate_r+8, cy+plate_r+8], fill=(12,10,8))
        for r in range(plate_r, 0, -max(1, plate_r//10)):
            t = r / plate_r
            c = blend_c(surface, self._lighter(surface, 8), t*0.5)
            self.draw.ellipse([cx-r, cy-r, cx+r, cy+r], c)
        self.draw.ellipse([cx-plate_r, cy-plate_r, cx+plate_r, cy+plate_r], outline=self._darker(surface, 30), width=2)
        food_r = int(plate_r * 0.82)
        self.draw.ellipse([cx-food_r, cy-food_r, cx+food_r, cy+food_r], outline=self._darker(surface, 20), width=1)

        dish_type = seed % 5
        if dish_type == 0:
            rice_pts = [cx, cy-plate_r//2, cx+plate_r//2+20, cy+5, cx+plate_r//3, cy+plate_r//2-10, cx-plate_r//3, cy+plate_r//2-10, cx-plate_r//2-20, cy+5]
            self.draw.polygon(rice_pts, fill=(200, 140, 50))
            for _ in range(40):
                rx = cx + random.randint(-plate_r//2, plate_r//2)
                ry = cy + random.randint(-plate_r//2, plate_r//3)
                if math.sqrt((rx-cx)**2 + (ry-cy)**2) < plate_r//2:
                    c = random.choice([(220,160,60), (200,130,45), (180,120,40)])
                    self.draw.ellipse([rx-2, ry-1, rx+2, ry+1], c)
            for i in range(-3, 4):
                sx = cx + i*15
                self.draw.line([(sx, cy-plate_r//3), (sx+5, cy+plate_r//4)], fill=(230, 180, 60), width=2)
            self.draw.ellipse([cx-plate_r//3-10, cy+plate_r//3, cx-plate_r//6, cy+plate_r//2+5], fill=(240, 240, 235))
            self.draw.ellipse([cx+plate_r//4, cy+plate_r//3, cx+plate_r//2, cy+plate_r//2+8], fill=(34, 139, 34))
        elif dish_type == 1:
            center_r = plate_r//3
            self.draw.ellipse([cx-center_r, cy-center_r//2, cx+center_r, cy+center_r//2], fill=(200, 150, 60))
            for angle in [30, 90, 150, 210, 270, 330]:
                rad = math.radians(angle)
                bx = cx + int((plate_r - 40) * math.cos(rad))
                by = cy + int((plate_r//2 - 20) * math.sin(rad))
                self.draw.ellipse([bx-16+3, by-12+3, bx+16+3, by+12+3], fill=(0,0,0))
                self.draw.ellipse([bx-16, by-12, bx+16, by+12], fill=(200, 190, 175))
                self.draw.ellipse([bx-16, by-12, bx+16, by-6], fill=(180, 170, 155))
                colors = [(200, 80, 40), (50, 130, 50), (220, 170, 50), (180, 60, 30), (200, 160, 60), (40, 120, 40)]
                self.draw.ellipse([bx-10, by-6, bx+10, by+6], fill=random.choice(colors))
        elif dish_type == 2:
            bhaji_r = plate_r//2
            self.draw.ellipse([cx-bhaji_r+5, cy-bhaji_r+10+5, cx+bhaji_r+5, cy+bhaji_r+5], fill=(0,0,0))
            self.draw.ellipse([cx-bhaji_r, cy-bhaji_r+10, cx+bhaji_r, cy+bhaji_r], fill=(180, 50, 25))
            self.draw.ellipse([cx-10, cy-bhaji_r+20, cx+10, cy-bhaji_r+38], fill=(255, 230, 80))
            for angle in [260, 300, 340]:
                rad = math.radians(angle)
                px = cx + int((plate_r - 35) * math.cos(rad))
                py = cy + int((plate_r//2 - 10) * math.sin(rad))
                self.draw.ellipse([px-18+3, py-10+3, px+18+3, py+10+3], fill=(0,0,0))
                self.draw.rounded_rectangle([px-18, py-10, px+18, py+10], radius=8, fill=(230, 200, 160))
                self.draw.rounded_rectangle([px-18, py-10, px+18, py-6], radius=4, fill=(240, 215, 175))
        elif dish_type == 3:
            self.draw.pieslice([cx-plate_r+30, cy-plate_r//2+10, cx+plate_r-30, cy+plate_r//2+5], start=15, end=165, fill=(230, 200, 160), width=20)
            self.draw.ellipse([cx-plate_r//3, cy-12, cx+plate_r//3, cy+25], fill=(180, 80, 30))
            self.draw.ellipse([cx+plate_r//3, cy-plate_r//3, cx+plate_r//2+5, cy-5], fill=(200, 160, 50))
            self.draw.ellipse([cx+plate_r//3+2, cy-plate_r//3+5, cx+plate_r//2+10, cy], fill=(40, 130, 50))
            self.draw.ellipse([cx-plate_r//3-10, cy-plate_r//3+5, cx-plate_r//3+8, cy], fill=(245, 245, 240))
        else:
            self.draw.ellipse([cx-plate_r//2+5, cy-plate_r//2+10+5, cx+plate_r//2+5, cy+plate_r//2+5], fill=(0,0,0))
            self.draw.ellipse([cx-plate_r//2, cy-plate_r//2+10, cx+plate_r//2, cy+plate_r//2], fill=(160, 45, 20))
            for _ in range(30):
                sx = cx + random.randint(-plate_r//3, plate_r//3)
                sy = cy + random.randint(-plate_r//3, plate_r//3)
                if math.sqrt((sx-cx)**2 + (sy-cy)**2) < plate_r//2.5:
                    self.draw.arc([sx-6, sy-4, sx+6, sy+4], start=0, end=180, fill=(200, 150, 40), width=2)
            for _ in range(8):
                gx = cx + random.randint(-plate_r//4, plate_r//4)
                gy = cy + random.randint(-plate_r//4, plate_r//4)
                c = random.choice([(50, 150, 50), (200, 200, 50)])
                self.draw.ellipse([gx-3, gy-3, gx+3, gy+3], c)

    def tattoo(self, seed=0):
        """Detailed forearm with tattoo art."""
        random.seed(seed)
        bg = self.bg
        surface = self.p["surface"]
        accent = self.p["accent"]
        glow = self.p["glow"]

        self.draw.rectangle([0,0,self.w,self.h], bg)

        for _ in range(100):
            x, y = random.randint(0,self.w-1), random.randint(0,self.h-1)
            n = random.randint(0, 15)
            c = tuple(min(255, bg[i]+n) for i in range(3))
            self.draw.point((x,y), c)

        arm_w = min(self.w, self.h) * 32 // 100
        arm_h = int(self.h * 0.80)
        arm_top = int(self.h * 0.08)
        cx = self.w // 2
        offset = 8

        skin_base = (22, 20, 18)
        skin_light = (35, 32, 30)
        skin_dark = (12, 10, 8)

        for s in range(10, 0, -1):
            sc = tuple(max(0, c-20+s) for c in skin_base)
            self.draw.rounded_rectangle(
                [cx - arm_w//2 + offset + s + 5, arm_top + offset + s + 5,
                 cx + arm_w//2 + offset + s + 5, arm_top + arm_h + offset + s + 5],
                radius=arm_w//2 + 5, fill=sc
            )

        self.draw.rounded_rectangle(
            [cx - arm_w//2 + offset, arm_top + offset,
             cx + arm_w//2 + offset, arm_top + arm_h],
            radius=arm_w//2, fill=skin_base
        )

        for y in range(arm_top, arm_top+arm_h):
            t = (y - arm_top) / arm_h
            cx_line = cx + offset + int(3 * math.sin(y / 30))
            c = blend_c(skin_light, skin_base, t + 0.1)
            self.draw.line([(cx - arm_w//2 + offset + 2, y), (cx + arm_w//2 + offset - 2, y)], c)

        muscle_pts = []
        for y in range(arm_top + arm_h//4, arm_top + arm_h*2//3):
            x = cx + offset + int(arm_w//6 * math.sin((y - arm_top) / 25))
            muscle_pts.append((x, y))
        if len(muscle_pts) > 1:
            self.draw.line(muscle_pts, fill=skin_dark, width=2)

        style = seed % 5
        if style == 0:
            face_cy = arm_top + arm_h//3
            face_r = arm_w//3
            self.draw.ellipse([cx-face_r-3+offset, face_cy-face_r-3, cx+face_r+3+offset, face_cy+face_r+3], fill=skin_dark)
            self.draw.ellipse([cx-face_r+offset, face_cy-face_r, cx+face_r+offset, face_cy+face_r], fill=skin_light)
            for r in [face_r, face_r-14, face_r-26, face_r-36]:
                if r > 5:
                    self.draw.ellipse([cx-r+offset, face_cy-r, cx+r+offset, face_cy+r], outline=accent, width=2)
            n_dots = 12
            for d in range(n_dots):
                angle = d * 2*math.pi / n_dots
                for r in [face_r-8, face_r-20, face_r-32]:
                    dx = cx + offset + int(r * math.cos(angle))
                    dy = face_cy + int(r * math.sin(angle))
                    self.draw.ellipse([dx-2, dy-2, dx+2, dy+2], fill=accent)
            self.draw.ellipse([cx-8+offset, face_cy-5, cx+offset+8, face_cy+5], outline=accent, width=2)
            self.draw.ellipse([cx-3+offset, face_cy-3, cx+offset+3, face_cy+3], fill=accent)
        elif style == 1:
            band_y = arm_top + arm_h//4
            for r in [30, 20, 12]:
                self.draw.ellipse([cx-r+offset, band_y-r, cx+r+offset, band_y+r], outline=accent, width=2)
            tri_pts = [(cx+offset, band_y-28), (cx-26+offset, band_y+22), (cx+26+offset, band_y+22)]
            self.draw.polygon(tri_pts, outline=accent, width=2)
            self.draw.ellipse([cx-6+offset, band_y-4, cx+offset+6, band_y+4], outline=accent, width=2)
            self.draw.ellipse([cx-2+offset, band_y-2, cx+offset+2, band_y+2], fill=accent)
            hex_r = 40
            hex_pts = [(cx + offset + int(hex_r*math.cos(math.radians(a))), band_y + int(hex_r*math.sin(math.radians(a)))) for a in range(0, 360, 60)]
            self.draw.polygon(hex_pts, outline=accent, width=1)
        elif style == 2:
            base_y = arm_top + arm_h*22//100
            for step in range(15):
                y = base_y + step*18
                x = cx + offset + int(8*math.sin(step/1.8))
                self.draw.ellipse([x-3, y-3, x+3, y+3], fill=accent)
            for fy in [base_y+25, base_y+130]:
                fx = cx + offset + int(6*math.sin(fy/20))
                for r in [16, 10, 5]:
                    self.draw.ellipse([fx-r+offset, fy-r, fx+r+offset, fy+r], outline=accent, width=2)
                self.draw.ellipse([fx-3+offset, fy-3, fx+offset+3, fy+3], fill=accent)
            for ly in [base_y+70, base_y+150]:
                lx = cx + offset + int(12*math.sin(ly/18))
                self.draw.pieslice([lx-20+offset, ly-10, lx+offset, ly+12], start=0, end=180, fill=accent)
                self.draw.pieslice([lx+offset, ly-10, lx+20+offset, ly+12], start=0, end=180, fill=accent)
        elif style == 3:
            band_y = arm_top + arm_h//3
            self.draw.rounded_rectangle([cx-arm_w//2+14+offset, band_y-10, cx+arm_w//2-14+offset, band_y+10], radius=8, outline=accent, width=2)
            for ix in range(cx-arm_w//2+20+offset, cx+arm_w//2-20+offset, 6):
                self.draw.arc([ix, band_y-5, ix+7, band_y+5], start=0, end=180, fill=accent, width=1)
            for sx in [cx-40+offset, cx+40+offset, cx+offset]:
                sy = band_y - 30 if sx != cx else band_y - 40
                self.draw.polygon([(sx, sy-8), (sx+2, sy-2), (sx+8, sy-2), (sx+3, sy+2), (sx+5, sy+8), (sx, sy+4), (sx-5, sy+8), (sx-3, sy+2), (sx-8, sy-2), (sx-2, sy-2)], fill=accent)
        else:
            wing_y = arm_top + arm_h*28//100
            for side in [-1, 1]:
                for feather in range(8):
                    fx = cx + offset + side * (20 + feather*12)
                    fy = wing_y + feather*15
                    feather_h = 35 - feather*3
                    pts = [(cx+offset, wing_y), (fx, fy-feather_h), (fx+side*8, fy), (fx, fy+feather_h//2)]
                    self.draw.polygon(pts, outline=accent, width=1)
                    self.draw.line([(cx+offset, wing_y), (fx, fy)], fill=accent, width=1)


def generate_for_niche(niche, out_dir, variant_prefix=""):
    ensure_dir(out_dir)
    p = PALETTES[niche]
    w, h = 1920, 1080

    # Hero
    img = Image.new('RGB', (w, h), p["bg"])
    draw = ImageDraw.Draw(img)
    nd = NicheDrawer(img, draw, w, h, p)
    getattr(nd, niche)(seed=0)
    add_noise_to_img(img, draw, w, h, 5)
    img.save(f"{out_dir}/{variant_prefix}hero-main.png", quality=95)

    # Work images
    for i in range(6):
        img = Image.new('RGB', (w, h), p["bg"])
        draw = ImageDraw.Draw(img)
        nd = NicheDrawer(img, draw, w, h, p)
        getattr(nd, niche)(seed=i+10)
        add_noise_to_img(img, draw, w, h, 5)
        img.save(f"{out_dir}/{variant_prefix}work-{i+1:02d}.png", quality=95)

    # Baraat (wedding only)
    if niche == "wedding":
        for i in range(5):
            img = Image.new('RGB', (w, h), p["bg"])
            draw = ImageDraw.Draw(img)
            nd = NicheDrawer(img, draw, w, h, p)
            getattr(nd, niche)(seed=i+100)
            add_noise_to_img(img, draw, w, h, 5)
            img.save(f"{out_dir}/{variant_prefix}baraat-{i+1:02d}.png", quality=95)

def main():
    base = "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/public/assets/generated"
    mappings = [
        ("wedding", "wedding-photographer"),
        ("mehndi", "mehndi-artist"),
        ("food", "food-photographer"),
        ("tattoo", "tattoo-artist"),
    ]
    for niche, template_name in mappings:
        for variant in ["growth", "pro"]:
            out_dir = f"{base}/{template_name}/{variant}"
            ensure_dir(out_dir)
            generate_for_niche(niche, out_dir, "")
            print(f"Generated: {out_dir}")

if __name__ == "__main__":
    main()