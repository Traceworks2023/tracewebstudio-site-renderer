#!/usr/bin/env python3
"""Generate professional niche images for all 30 portfolio categories using PIL."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os, math, random

PALETTES = {
    "photographer": {
        "premium": {"bg": (26,66,66), "surface": (237,242,247), "accent": (232,186,209), "text": (255,255,255), "textMuted": (200,200,200), "border": (178,42,42), "glow": (178,42,42), "warm": (219,130,51)},
        "pro": {"bg": (27,49,85), "surface": (231,229,245), "accent": (229,172,164), "text": (255,255,255), "textMuted": (200,200,200), "border": (207,142,38), "glow": (207,142,38), "warm": (217,230,65)},
    },
    "videographer": {
        "premium": {"bg": (46,28,105), "surface": (237,221,243), "accent": (226,204,141), "text": (255,255,255), "textMuted": (200,200,200), "border": (184,226,44), "glow": (184,226,44), "warm": (129,240,81)},
        "pro": {"bg": (111,27,126), "surface": (241,213,231), "accent": (187,226,116), "text": (255,255,255), "textMuted": (200,200,200), "border": (47,205,19), "glow": (47,205,19), "warm": (31,244,99)},
    },
    "makeup_artist": {
        "premium": {"bg": (128,45,89), "surface": (249,236,236), "accent": (113,207,110), "text": (255,255,255), "textMuted": (200,200,200), "border": (42,207,119), "glow": (42,207,119), "warm": (73,228,218)},
        "pro": {"bg": (71,25,21), "surface": (247,239,227), "accent": (184,234,213), "text": (255,255,255), "textMuted": (200,200,200), "border": (52,209,223), "glow": (52,209,223), "warm": (89,156,238)},
    },
    "hair_stylist": {
        "premium": {"bg": (91,70,21), "surface": (240,245,219), "accent": (161,217,232), "text": (255,255,255), "textMuted": (200,200,200), "border": (23,78,207), "glow": (23,78,207), "warm": (73,39,241)},
        "pro": {"bg": (77,96,36), "surface": (216,244,210), "accent": (137,154,230), "text": (255,255,255), "textMuted": (200,200,200), "border": (98,47,208), "glow": (98,47,208), "warm": (194,81,225)},
    },
    "fashion_designer": {
        "premium": {"bg": (42,116,37), "surface": (234,250,241), "accent": (165,129,213), "text": (255,255,255), "textMuted": (200,200,200), "border": (210,60,221), "glow": (210,60,221), "warm": (235,96,180)},
        "pro": {"bg": (36,138,92), "surface": (230,244,245), "accent": (211,105,206), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,27,108), "glow": (208,27,108), "warm": (238,51,47)},
    },
    "model": {
        "premium": {"bg": (16,66,76), "surface": (222,229,242), "accent": (237,182,200), "text": (255,255,255), "textMuted": (200,200,200), "border": (235,60,25), "glow": (235,60,25), "warm": (247,180,64)},
        "pro": {"bg": (29,41,84), "surface": (221,213,240), "accent": (234,180,158), "text": (255,255,255), "textMuted": (200,200,200), "border": (218,185,66), "glow": (218,185,66), "warm": (201,233,103)},
    },
    "interior_designer": {
        "premium": {"bg": (59,29,103), "surface": (247,236,249), "accent": (219,212,148), "text": (255,255,255), "textMuted": (200,200,200), "border": (138,209,31), "glow": (138,209,31), "warm": (79,235,55)},
        "pro": {"bg": (125,28,123), "surface": (247,228,237), "accent": (169,217,125), "text": (255,255,255), "textMuted": (200,200,200), "border": (33,232,37), "glow": (33,232,37), "warm": (72,244,155)},
    },
    "architect": {
        "premium": {"bg": (127,47,76), "surface": (245,222,219), "accent": (100,216,115), "text": (255,255,255), "textMuted": (200,200,200), "border": (39,180,128), "glow": (39,180,128), "warm": (49,204,221)},
        "pro": {"bg": (70,34,22), "surface": (244,235,210), "accent": (179,239,224), "text": (255,255,255), "textMuted": (200,200,200), "border": (35,166,209), "glow": (35,166,209), "warm": (63,111,233)},
    },
    "artist_painter": {
        "premium": {"bg": (90,81,22), "surface": (244,250,234), "accent": (167,204,226), "text": (255,255,255), "textMuted": (200,200,200), "border": (42,67,229), "glow": (42,67,229), "warm": (134,80,242)},
        "pro": {"bg": (68,111,22), "surface": (230,244,230), "accent": (144,146,223), "text": (255,255,255), "textMuted": (200,200,200), "border": (109,17,208), "glow": (109,17,208), "warm": (236,29,247)},
    },
    "illustrator": {
        "premium": {"bg": (38,115,46), "surface": (222,242,234), "accent": (181,120,221), "text": (255,255,255), "textMuted": (200,200,200), "border": (210,40,193), "glow": (210,40,193), "warm": (230,71,140)},
        "pro": {"bg": (37,136,108), "surface": (214,234,240), "accent": (221,95,194), "text": (255,255,255), "textMuted": (200,200,200), "border": (226,50,100), "glow": (226,50,100), "warm": (239,115,87)},
    },
    "calligrapher": {
        "premium": {"bg": (90,45,110), "surface": (245,230,245), "accent": (242,209,232), "text": (255,255,255), "textMuted": (200,200,200), "border": (209,68,148), "glow": (209,68,148), "warm": (232,122,184)},
        "pro": {"bg": (61,34,87), "surface": (240,230,240), "accent": (228,193,232), "text": (255,255,255), "textMuted": (200,200,200), "border": (194,58,201), "glow": (194,58,201), "warm": (218,127,213)},
    },
    "craft_artist": {
        "premium": {"bg": (110,70,24), "surface": (251,243,226), "accent": (245,217,138), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,162,32), "glow": (232,162,32), "warm": (242,196,78)},
        "pro": {"bg": (90,58,20), "surface": (248,239,216), "accent": (232,200,106), "text": (255,255,255), "textMuted": (200,200,200), "border": (212,136,28), "glow": (212,136,28), "warm": (240,184,60)},
    },
    "floral_designer": {
        "premium": {"bg": (110,45,74), "surface": (252,232,239), "accent": (245,196,208), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,90,140), "glow": (232,90,140), "warm": (242,160,176)},
        "pro": {"bg": (90,37,56), "surface": (245,221,229), "accent": (232,180,196), "text": (255,255,255), "textMuted": (200,200,200), "border": (217,77,122), "glow": (217,77,122), "warm": (232,136,160)},
    },
    "wedding_planner": {
        "premium": {"bg": (110,74,24), "surface": (251,243,226), "accent": (240,216,160), "text": (255,255,255), "textMuted": (200,200,200), "border": (212,160,48), "glow": (212,160,48), "warm": (232,192,96)},
        "pro": {"bg": (90,60,20), "surface": (245,236,216), "accent": (224,200,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (196,144,40), "glow": (196,144,40), "warm": (216,176,64)},
    },
    "event_planner": {
        "premium": {"bg": (74,32,112), "surface": (243,235,248), "accent": (212,184,240), "text": (255,255,255), "textMuted": (200,200,200), "border": (155,74,222), "glow": (155,74,222), "warm": (184,122,232)},
        "pro": {"bg": (60,24,96), "surface": (237,224,240), "accent": (200,168,224), "text": (255,255,255), "textMuted": (200,200,200), "border": (138,60,200), "glow": (138,60,200), "warm": (168,112,216)},
    },
    "decor_stylist": {
        "premium": {"bg": (110,48,24), "surface": (251,240,232), "accent": (240,200,168), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,104,64), "glow": (232,104,64), "warm": (242,160,112)},
        "pro": {"bg": (90,40,20), "surface": (245,232,222), "accent": (224,176,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (216,90,56), "glow": (216,90,56), "warm": (232,144,96)},
    },
    "baker": {
        "premium": {"bg": (110,72,24), "surface": (251,243,226), "accent": (240,216,168), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,160,96), "glow": (232,160,96), "warm": (242,196,136)},
        "pro": {"bg": (90,60,20), "surface": (245,236,216), "accent": (220,176,112), "text": (255,255,255), "textMuted": (200,200,200), "border": (216,144,80), "glow": (216,144,80), "warm": (224,176,112)},
    },
    "chef": {
        "premium": {"bg": (110,24,24), "surface": (251,232,232), "accent": (240,160,160), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,64,64), "glow": (232,64,64), "warm": (242,112,112)},
        "pro": {"bg": (90,20,20), "surface": (245,216,216), "accent": (224,144,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,48,48), "glow": (208,48,48), "warm": (224,96,96)},
    },
    "fitness_trainer": {
        "premium": {"bg": (110,40,24), "surface": (251,240,232), "accent": (240,192,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,64,64), "glow": (232,64,64), "warm": (242,160,48)},
        "pro": {"bg": (90,32,20), "surface": (245,224,216), "accent": (216,160,112), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,48,48), "glow": (208,48,48), "warm": (232,144,48)},
    },
    "yoga_instructor": {
        "premium": {"bg": (24,48,96), "surface": (232,240,248), "accent": (144,192,240), "text": (255,255,255), "textMuted": (200,200,200), "border": (64,128,232), "glow": (64,128,232), "warm": (112,176,240)},
        "pro": {"bg": (20,40,80), "surface": (216,232,240), "accent": (128,176,216), "text": (255,255,255), "textMuted": (200,200,200), "border": (48,112,208), "glow": (48,112,208), "warm": (96,160,224)},
    },
    "personal_coach": {
        "premium": {"bg": (110,68,24), "surface": (251,243,232), "accent": (240,208,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,128,32), "glow": (232,128,32), "warm": (242,176,80)},
        "pro": {"bg": (90,56,20), "surface": (245,236,216), "accent": (216,184,128), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,112,24), "glow": (208,112,24), "warm": (224,160,64)},
    },
    "tutor": {
        "premium": {"bg": (74,32,112), "surface": (243,235,248), "accent": (212,184,240), "text": (255,255,255), "textMuted": (200,200,200), "border": (139,74,222), "glow": (139,74,222), "warm": (176,122,232)},
        "pro": {"bg": (60,24,96), "surface": (237,224,240), "accent": (200,168,224), "text": (255,255,255), "textMuted": (200,200,200), "border": (122,60,200), "glow": (122,60,200), "warm": (160,112,216)},
    },
    "content_creator": {
        "premium": {"bg": (110,24,8), "surface": (251,232,224), "accent": (240,160,112), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,32,32), "glow": (232,32,32), "warm": (242,96,48)},
        "pro": {"bg": (90,20,8), "surface": (245,216,208), "accent": (216,144,96), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,24,24), "glow": (208,24,24), "warm": (224,80,32)},
    },
    "influencer": {
        "premium": {"bg": (110,24,80), "surface": (251,232,240), "accent": (240,168,208), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,64,160), "glow": (232,64,160), "warm": (242,128,192)},
        "pro": {"bg": (90,20,64), "surface": (245,216,224), "accent": (216,144,176), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,48,144), "glow": (208,48,144), "warm": (224,112,168)},
    },
    "nutritionist": {
        "premium": {"bg": (24,96,24), "surface": (232,248,232), "accent": (144,232,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (64,184,64), "glow": (64,184,64), "warm": (112,216,112)},
        "pro": {"bg": (20,80,20), "surface": (216,240,216), "accent": (128,192,128), "text": (255,255,255), "textMuted": (200,200,200), "border": (48,160,48), "glow": (48,160,48), "warm": (96,192,96)},
    },
    "skincare_specialist": {
        "premium": {"bg": (110,64,80), "surface": (251,238,243), "accent": (240,216,229), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,160,192), "glow": (232,160,192), "warm": (240,200,216)},
        "pro": {"bg": (90,48,64), "surface": (245,216,224), "accent": (224,176,200), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,144,176), "glow": (208,144,176), "warm": (224,176,200)},
    },
    "mehndi_artist": {
        "premium": {"bg": (110,64,24), "surface": (251,240,224), "accent": (240,200,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,112,32), "glow": (208,112,32), "warm": (232,160,80)},
        "pro": {"bg": (90,48,20), "surface": (245,232,208), "accent": (224,176,112), "text": (255,255,255), "textMuted": (200,200,200), "border": (192,96,24), "glow": (192,96,24), "warm": (216,144,64)},
    },
    "nail_artist": {
        "premium": {"bg": (110,24,72), "surface": (251,232,240), "accent": (240,168,208), "text": (255,255,255), "textMuted": (200,200,200), "border": (232,64,152), "glow": (232,64,152), "warm": (242,128,184)},
        "pro": {"bg": (90,20,56), "surface": (245,216,224), "accent": (216,144,176), "text": (255,255,255), "textMuted": (200,200,200), "border": (208,48,136), "glow": (208,48,136), "warm": (224,112,168)},
    },
    "boutique_owner": {
        "premium": {"bg": (74,16,96), "surface": (240,232,245), "accent": (216,160,232), "text": (255,255,255), "textMuted": (200,200,200), "border": (192,48,208), "glow": (192,48,208), "warm": (216,96,224)},
        "pro": {"bg": (60,12,80), "surface": (232,216,240), "accent": (192,144,208), "text": (255,255,255), "textMuted": (200,200,200), "border": (160,40,184), "glow": (160,40,184), "warm": (192,80,208)},
    },
    "creative_consultant": {
        "premium": {"bg": (110,72,8), "surface": (251,245,229), "accent": (248,224,144), "text": (255,255,255), "textMuted": (200,200,200), "border": (240,160,32), "glow": (240,160,32), "warm": (248,200,80)},
        "pro": {"bg": (90,60,6), "surface": (245,236,216), "accent": (216,176,128), "text": (255,255,255), "textMuted": (200,200,200), "border": (216,144,24), "glow": (216,144,24), "warm": (232,176,64)},
    },
}

SECTIONS = ["hero", "featured", "brand-story", "services", "process", "testimonials", "contact"]

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

def draw_section_overlay(draw, w, h, section, palette):
    if section == "featured":
        for i in range(0, w, 60):
            for j in range(0, h, 60):
                draw.rectangle([i+2, j+2, i+58, j+58], outline=palette["border"], width=1)
    elif section == "testimonials":
        cw, ch = 80, 60
        for qx in [w//4 - cw//2, w//2 - cw//2, 3*w//4 - cw//2]:
            draw.polygon([(qx, h//2-30), (qx+cw//2, h//2-50), (qx+cw, h//2-30), (qx+cw, h//2+10), (qx, h//2+10)], fill=palette["accent"])
    elif section == "brand-story":
        gradient_rect(draw, 0, 0, w, h, blend_c(palette["bg"], palette["surface"], 0.3), palette["bg"], vertical=True)
    elif section == "services":
        for i in range(5):
            y = h//5 + i * h//6
            draw.rectangle([w//4, y, 3*w//4, y+h//8], outline=palette["accent"], width=2)
    elif section == "process":
        for i in range(4):
            x = w//5 + i * w//4
            draw.ellipse([x-20, h//2-20, x+20, h//2+20], outline=palette["accent"], width=3)
            if i < 3:
                draw.line([(x+25, h//2), (x+w//4-25, h//2)], fill=palette["accent"], width=2)
    elif section == "contact":
        draw.rectangle([w//3, h//3, 2*w//3, 2*h//3], outline=palette["accent"], width=3)
        draw.line([(w//2, h//3), (w//2, 2*h//3)], fill=palette["accent"], width=2)

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

    def _base_draw(self, seed):
        random.seed(seed)
        bg = self.bg
        self.draw.rectangle([0,0,self.w,self.h], bg)
        for y in range(self.h):
            t = y / self.h
            c = blend_c(bg, self._lighter(bg, 5), t*0.4)
            self.draw.rectangle([0, y, self.w, y+1], c)
        soft_glow(self.draw, self.w//2, self.h//2, self.h//3, self.p["glow"], 35)
        add_noise_to_img(self.img, self.draw, self.w, self.h, 5)

    def photographer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.75)
        cam_w, cam_h = int(scale * 1.2), int(scale * 0.8)
        cam_x, cam_y = cx - cam_w//2, base_y - cam_h
        for s in range(10, 0, -1):
            self.draw.rounded_rectangle([cam_x+cam_w//4+s+5, cam_y-20+s+5, cam_x+cam_w*3//4+s+5, cam_y+cam_h//3+s+5], radius=10, fill=self._darker(self.p["surface"], 15))
        self.draw.rounded_rectangle([cam_x+cam_w//4, cam_y-20, cam_x+cam_w*3//4, cam_y+cam_h//3], radius=10, fill=self.p["surface"])
        self.draw.rounded_rectangle([cam_x, cam_y, cam_x+cam_w, cam_y+cam_h], radius=8, fill=self.p["surface"], outline=self._darker(self.p["surface"], 30), width=2)
        lens_r = int(cam_h * 0.45)
        lens_cx, lens_cy = cx, cam_y + cam_h//2
        self.draw.ellipse([lens_cx-lens_r-5, lens_cy-lens_r-5, lens_cx+lens_r+5, lens_cy+lens_r+5], fill=self._darker(self.p["surface"], 20))
        self.draw.ellipse([lens_cx-lens_r, lens_cy-lens_r, lens_cx+lens_r, lens_cy+lens_r], fill=self._darker(self.p["surface"], 15))
        for r in range(lens_r, lens_r//3, -5):
            t = r / lens_r
            c = blend_c(self._darker(self.p["surface"], 25), self.p["surface"], t*0.5)
            self.draw.ellipse([lens_cx-r, lens_cy-r, lens_cx+r, lens_cy+r], c)
        self.draw.ellipse([lens_cx-lens_r//3, lens_cy-lens_r//3, lens_cx+lens_r//3, lens_cy+lens_r//3], fill=self._darker(self.p["surface"], 35))
        self.draw.ellipse([lens_cx-lens_r//6, lens_cy-lens_r//6, lens_cx+lens_r//6, lens_cy+lens_r//6], fill=self.p["accent"])
        flash_x, flash_y = cam_x + cam_w - 30, cam_y + 15
        self.draw.rounded_rectangle([flash_x-10, flash_y-5, flash_x+20, flash_y+20], radius=4, fill=self._lighter(self.p["surface"], 20))
        self.draw.rectangle([flash_x, flash_y+5, flash_x+8, flash_y+12], fill=self.p["accent"])
        btn_x = cam_x + cam_w//4 + 20
        for i in range(3):
            self.draw.ellipse([btn_x+i*12-4, cam_y+cam_h-20-4, btn_x+i*12+4, cam_y+cam_h-20+4], fill=self._darker(self.p["surface"], 20))

    def videographer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        clap_w, clap_h = int(scale * 2.2), int(scale * 1.6)
        clap_x, clap_y = cx - clap_w//2, base_y - clap_h
        self.draw.rounded_rectangle([clap_x-8+5, clap_y-8+5, clap_x+clap_w+8+5, clap_y+clap_h+8+5], radius=6, fill=(0,0,0))
        self.draw.rounded_rectangle([clap_x-8, clap_y-8, clap_x+clap_w+8, clap_y+clap_h+8], fill=self.p["surface"], outline=self._darker(self.p["surface"], 30), width=2)
        hinger_y = clap_y + clap_h//3
        self.draw.rectangle([clap_x, hinger_y, clap_x+clap_w, hinger_y+8], fill=self._darker(self.p["surface"], 15))
        for y in range(clap_y, hinger_y):
            t = (y - clap_y) / (hinger_y - clap_y)
            self.draw.line([(clap_x, y), (clap_x+clap_w, y)], fill=blend_c(self.p["surface"], self._darker(self.p["surface"], 10), t))
        for y in range(hinger_y+8, clap_y+clap_h):
            t = (y - hinger_y - 8) / (clap_y+clap_h - hinger_y - 8)
            self.draw.line([(clap_x, y), (clap_x+clap_w, y)], fill=blend_c(self._darker(self.p["surface"], 10), self.p["surface"], t))
        clapper_x, clapper_w, clapper_h = clap_x + 10, clap_w - 20, clap_h//4
        self.draw.polygon([(clapper_x, hinger_y), (clapper_x+clapper_w, hinger_y), (clapper_x+clapper_w, hinger_y-clapper_h), (clapper_x, hinger_y-clapper_h)], fill=self.p["accent"])
        for i in range(1, 4):
            x_pos = clap_x + i * clapper_w//4
            self.draw.line([(x_pos, hinger_y-clapper_h), (x_pos, hinger_y)], fill=self._darker(self.p["accent"], 30), width=2)
        text_y = clap_y + clap_h//2 + 20
        for row in range(3):
            row_w = clapper_w - 40 - row*30
            row_x = clap_x + 20 + row*15
            self.draw.rectangle([row_x, text_y+row*25, row_x+row_w, text_y+row*25+12], fill=self._darker(self.p["surface"], 20))

    def makeup_artist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.80)
        palette_w, palette_h = int(scale * 2.0), int(scale * 0.7)
        palette_x, palette_y = cx - palette_w//2, base_y - palette_h
        self.draw.rounded_rectangle([palette_x+5, palette_y+5, palette_x+palette_w+5, palette_y+palette_h+5], radius=12, fill=(0,0,0))
        self.draw.rounded_rectangle([palette_x, palette_y, palette_x+palette_w, palette_y+palette_h], radius=12, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        brush_len = int(scale * 1.8)
        brush_x, brush_y = palette_x + palette_w + 30, palette_y + palette_h//2
        for s in range(6, 0, -1):
            self.draw.line([(brush_x+s, brush_y-brush_len//2+s), (brush_x+s, brush_y+brush_len//2+s)], fill=self._darker(self.p["surface"], 15), width=10)
        handle_len = brush_len * 2//3
        self.draw.line([(brush_x, brush_y-handle_len//2), (brush_x, brush_y+handle_len//2)], fill=self._darker(self.p["surface"], 10), width=12)
        ferrule_top = brush_y - handle_len//2
        self.draw.rectangle([brush_x-8, ferrule_top-20, brush_x+8, ferrule_top+30], fill=self._darker(self.p["surface"], 25))
        bristle_len = brush_len - handle_len//2 - 20
        for i in range(bristle_len):
            bx = brush_x + int(5 * math.sin(i / 5))
            self.draw.point((bx, ferrule_top-20-i), fill=self.p["accent"])
        color_positions = [(palette_x + palette_w//6, palette_y + palette_h//4), (palette_x + palette_w//2, palette_y + palette_h//4), (palette_x + palette_w*5//6, palette_y + palette_h//4), (palette_x + palette_w//4, palette_y + palette_h*2//3), (palette_x + palette_w//2, palette_y + palette_h*2//3), (palette_x + palette_w*3//4, palette_y + palette_h*2//3)]
        for i, (px, py) in enumerate(color_positions):
            r = palette_w//12
            c = blend_c(self.p["accent"], self.p["glow"], i/len(color_positions))
            self.draw.ellipse([px-r+3, py-r+3, px+r+3, py+r+3], fill=(0,0,0))
            self.draw.ellipse([px-r, py-r, px+r, py+r], fill=c)
            self.draw.ellipse([px-r//2, py-r//2, px+r//2, py+r//2], fill=self._lighter(c, 20))

    def hair_stylist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        scissor_len = int(scale * 1.5)
        scissor_x, scissor_y = cx - scissor_len//2, base_y - scissor_len
        for s in range(6, 0, -1):
            self.draw.line([(scissor_x+s, scissor_y+s), (scissor_x+scissor_len//3+s, scissor_y+scissor_len//2+s)], fill=(0,0,0), width=8)
        handle_r = scissor_len//5
        self.draw.ellipse([scissor_x-handle_r+3, scissor_y+scissor_len//2-handle_r+3, scissor_x+handle_r+3, scissor_y+scissor_len//2+handle_r+3], fill=(0,0,0))
        self.draw.ellipse([scissor_x-handle_r, scissor_y+scissor_len//2-handle_r, scissor_x+handle_r, scissor_y+scissor_len//2+handle_r], fill=self.p["accent"])
        self.draw.ellipse([scissor_x-handle_r//2, scissor_y+scissor_len//2-handle_r//2, scissor_x+handle_r//2, scissor_y+scissor_len//2+handle_r//2], fill=self._darker(self.p["accent"], 20))
        pivot_x, pivot_y = scissor_x + scissor_len//3, scissor_y + scissor_len//2
        self.draw.ellipse([pivot_x-8, pivot_y-8, pivot_x+8, pivot_y+8], fill=self._darker(self.p["surface"], 30))
        self.draw.ellipse([pivot_x-4, pivot_y-4, pivot_x+4, pivot_y+4], fill=self.p["surface"])
        blade_len = int(scissor_len * 0.6)
        self.draw.line([(pivot_x, pivot_y-4), (pivot_x+blade_len, pivot_y-int(blade_len*0.15))], fill=self.p["surface"], width=8)
        self.draw.line([(pivot_x, pivot_y+4), (pivot_x+blade_len, pivot_y+int(blade_len*0.15))], fill=self.p["surface"], width=8)
        comb_len, comb_w = int(scale * 2.2), int(scale * 0.5)
        comb_x, comb_y = cx + scale//2 + 40, base_y - comb_w
        self.draw.rounded_rectangle([comb_x+3, comb_y+3, comb_x+comb_len+3, comb_y+comb_w+3], radius=6, fill=(0,0,0))
        self.draw.rounded_rectangle([comb_x, comb_y, comb_x+comb_len, comb_y+comb_w], radius=6, fill=self.p["surface"], outline=self._darker(self.p["surface"], 20), width=2)
        for tx in range(comb_x + 15, comb_x + comb_len - 10, 12):
            self.draw.rectangle([tx, comb_y - comb_w//2 + comb_w//2, tx + 4, comb_y + comb_w//2], fill=self.p["surface"])

    def fashion_designer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 40 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        torso_h, torso_w = int(scale * 1.4), int(scale * 0.45 * 1.4)
        torso_x, torso_y = cx - torso_w//2, base_y - torso_h
        for s in range(12, 0, -1):
            self.draw.polygon([(cx+5, torso_y-5+s), (cx+torso_w//2+5+s, base_y+5+s), (cx-torso_w//2-5+s, base_y+5+s)], fill=(0,0,0))
        pts = [(cx, torso_y-5), (cx+torso_w//2, base_y), (cx-torso_w//2, base_y)]
        self.draw.polygon(pts, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        neck_w, neck_h = torso_w//3, torso_h//5
        self.draw.polygon([(cx-neck_w//2, torso_y), (cx+neck_w//2, torso_y), (cx+neck_w//3, torso_y-neck_h), (cx-neck_w//3, torso_y-neck_h)], fill=self.p["surface"])
        waist_h = torso_h//4
        waist_y = torso_y + torso_h//2
        waist_pts = [(cx, waist_y), (cx+torso_w//2-5, waist_y+waist_h), (cx-torso_w//2+5, waist_y+waist_h)]
        self.draw.polygon(waist_pts, fill=self._darker(self.p["surface"], 10))
        for i in range(4):
            hip_y = torso_y + torso_h//2 + i*waist_h//4
            hip_w = torso_w//2 - 5 + i*3
            self.draw.arc([cx-hip_w, hip_y, cx+hip_w, hip_y+waist_h//2], start=0, end=180, fill=self._darker(self.p["surface"], 15), width=2)
        self.draw.rectangle([cx-7, torso_y-neck_h, cx+7, base_y+20], fill=self._darker(self.p["surface"], 35))
        self.draw.ellipse([cx-12, base_y+10, cx+12, base_y+30], fill=self._darker(self.p["surface"], 35))

    def model(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        bottle_h, bottle_w = int(scale * 2.0), int(scale * 0.7)
        bottle_x, bottle_y = cx - bottle_w//2, base_y - bottle_h
        self.draw.ellipse([bottle_x-bottle_w//4+3, bottle_y+3, bottle_x+bottle_w//4+3, bottle_y+bottle_h//6+3], fill=(0,0,0))
        self.draw.ellipse([bottle_x-bottle_w//4, bottle_y, bottle_x+bottle_w//4, bottle_y+bottle_h//6], fill=self._darker(self.p["surface"], 20))
        self.draw.rounded_rectangle([bottle_x-5, bottle_y+bottle_h//6, bottle_x+bottle_w+5, bottle_y+bottle_h], radius=bottle_w//3, fill=self._darker(self.p["surface"], 15))
        self.draw.rounded_rectangle([bottle_x, bottle_y+bottle_h//6, bottle_x+bottle_w, bottle_y+bottle_h], radius=bottle_w//3, fill=self.p["surface"], outline=self._darker(self.p["surface"], 20), width=2)
        neck_h = bottle_h//5
        self.draw.rectangle([bottle_x+bottle_w//3, bottle_y+bottle_h//6-neck_h, bottle_x+bottle_w*2//3, bottle_y+bottle_h//6], fill=self.p["surface"])
        self.draw.rectangle([bottle_x+bottle_w//3-3, bottle_y+bottle_h//6-neck_h-5, bottle_x+bottle_w*2//3+3, bottle_y+bottle_h//6], fill=self._darker(self.p["surface"], 15))
        self.draw.ellipse([bottle_x+bottle_w//3+2, bottle_y+bottle_h*2//5, bottle_x+bottle_w*2//3-2, bottle_y+bottle_h*3//5], fill=self._lighter(self.p["accent"], 30))
        jewel_r = 8
        for i in range(3):
            jy = bottle_y + bottle_h//2 + i*bottle_h//4
            self.draw.ellipse([cx-jewel_r+2, jy-jewel_r+2, cx+jewel_r+2, jy+jewel_r+2], fill=(0,0,0))
            self.draw.ellipse([cx-jewel_r, jy-jewel_r, cx+jewel_r, jy+jewel_r], fill=self.p["accent"])
            self.draw.ellipse([cx-jewel_r//2, jy-jewel_r//2, cx+jewel_r//2, jy+jewel_r//2], fill=self._lighter(self.p["accent"], 30))

    def interior_designer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        sofa_l, sofa_r = cx - int(scale * 1.5), cx + int(scale * 1.5)
        sofa_h, sofa_top = int(scale * 0.8), base_y - int(scale * 0.8)
        for s in range(10, 0, -1):
            self.draw.rounded_rectangle([sofa_l+s, sofa_top+s, sofa_r+s, base_y+s], radius=20, fill=(0,0,0))
        self.draw.rounded_rectangle([sofa_l, sofa_top, sofa_r, base_y], radius=20, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        cushion_w = (sofa_r - sofa_l) // 4
        for i in range(3):
            cx_pos = sofa_l + cushion_w//2 + i*cushion_w
            self.draw.rounded_rectangle([cx_pos-cushion_w//3, sofa_top+10, cx_pos+cushion_w//3, base_y-20], radius=12, fill=self._darker(self.p["surface"], 10))
        self.draw.rounded_rectangle([sofa_l-20, sofa_top+20, sofa_l+30, base_y], radius=15, fill=self._darker(self.p["surface"], 10))
        self.draw.rounded_rectangle([sofa_r-30, sofa_top+20, sofa_r+20, base_y], radius=15, fill=self._darker(self.p["surface"], 10))
        for lx in [sofa_l+30, sofa_r-30]:
            self.draw.rectangle([lx-8, base_y, lx+8, base_y+30], fill=self._darker(self.p["surface"], 35))
        lamp_h = int(scale * 1.5)
        lamp_x = sofa_l - 80
        lamp_y = base_y - lamp_h
        for s in range(6, 0, -1):
            self.draw.polygon([(lamp_x+s, lamp_y+s), (lamp_x+60+s, lamp_y+s), (lamp_x+30+s, lamp_y+50+s)], fill=(0,0,0))
        self.draw.polygon([(lamp_x, lamp_y), (lamp_x+60, lamp_y), (lamp_x+30, lamp_y+50)], fill=self.p["accent"], outline=self._darker(self.p["accent"], 20), width=2)
        self.draw.rectangle([lamp_x+20, lamp_y+50, lamp_x+40, lamp_y+lamp_h], fill=self._darker(self.p["surface"], 30))
        self.draw.ellipse([lamp_x-10, base_y-5, lamp_x+20, base_y+15], fill=self._darker(self.p["surface"], 30))
        soft_glow(self.draw, lamp_x+30, lamp_y+70, 80, self.p["glow"], 25)

    def architect(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        col_h, col_w = int(scale * 1.8), int(scale * 0.27)
        col_x, col_y = cx - col_w//2, base_y - col_h
        for s in range(8, 0, -1):
            self.draw.rectangle([col_x+s+3, col_y+s+3, col_x+col_w+s+3, base_y+s+3], fill=(0,0,0))
        self.draw.rectangle([col_x, col_y+col_h//5, col_x+col_w, base_y], fill=self._darker(self.p["surface"], 15))
        for fl in range(4):
            fl_y = col_y + col_h//5 + fl * (col_h*4//5)//3
            self.draw.rectangle([col_x-5, fl_y, col_x+col_w+5, fl_y+8], fill=self._darker(self.p["surface"], 20))
            self.draw.rectangle([col_x, fl_y, col_x+col_w, fl_y+5], fill=self.p["surface"])
        self.draw.rectangle([col_x, col_y, col_x+col_w, col_y+col_h//5], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        self.draw.rectangle([col_x-col_w//2, col_y-col_h//8, col_x+col_w+col_w//2, col_y], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        self.draw.rectangle([col_x-col_w//2, base_y, col_x+col_w+col_w//2, base_y+15], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        bp_w, bp_h, bp_x = int(scale * 1.8), int(scale * 1.4), col_x - int(scale * 1.8) - 60
        bp_y = base_y - bp_h
        for s in range(6, 0, -1):
            self.draw.rectangle([bp_x+s+3, bp_y+s+3, bp_x+bp_w+s+3, bp_y+bp_h+s+3], fill=(0,0,0))
        self.draw.rectangle([bp_x, bp_y, bp_x+bp_w, bp_y+bp_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        for i in range(6):
            line_y = bp_y + 20 + i*20
            line_w = bp_w - 40 if i % 2 == 0 else bp_w - 60
            line_x = bp_x + 20 + (i % 3) * 10
            self.draw.rectangle([line_x, line_y, line_x+line_w, line_y+8], fill=self._darker(self.p["surface"], 15) if i % 2 == 0 else self.p["accent"])

    def artist_painter(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 38 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        canvas_w, canvas_h = int(scale * 1.6), int(scale * 1.2)
        canvas_x, canvas_y = cx - canvas_w//2, base_y - canvas_h
        for s in range(10, 0, -1):
            self.draw.rectangle([canvas_x-canvas_w//12+s+3, canvas_y-canvas_h//10+s+3, canvas_x+canvas_w+canvas_w//12+s+3, canvas_y+canvas_h+canvas_h//10+s+3], fill=(0,0,0))
        self.draw.rectangle([canvas_x-canvas_w//12, canvas_y-canvas_h//10, canvas_x+canvas_w+canvas_w//12, canvas_y+canvas_h+canvas_h//10], fill=self._darker(self.p["surface"], 25))
        self.draw.rectangle([canvas_x, canvas_y, canvas_x+canvas_w, canvas_y+canvas_h], fill=self.p["surface"])
        brush_strokes = [(canvas_x+20, canvas_y+20, canvas_x+canvas_w//3, canvas_y+canvas_h//2), (canvas_x+canvas_w//2, canvas_y+30, canvas_x+canvas_w-20, canvas_y+canvas_h//3), (canvas_x+30, canvas_y+canvas_h//2, canvas_x+canvas_w*2//3, canvas_y+canvas_h-20)]
        paint_colors = [self.p["accent"], self.p["glow"], self.p["warm"], self.p["textMuted"]]
        for (x1, y1, x2, y2), col in zip(brush_strokes, paint_colors):
            for i in range(5):
                offset = random.randint(-5, 5)
                self.draw.line([(x1+offset, y1+offset), (x2+offset, y2+offset)], fill=col, width=8+i*2)
        palette_x, palette_y = canvas_x + canvas_w + 40, canvas_y + canvas_h//4
        palette_w, palette_h = int(scale * 0.8), int(scale * 0.5)
        self.draw.ellipse([palette_x+3, palette_y+3, palette_x+palette_w+3, palette_y+palette_h+3], fill=(0,0,0))
        self.draw.ellipse([palette_x, palette_y, palette_x+palette_w, palette_y+palette_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        paint_spots = [(palette_x+palette_w//5, palette_y+palette_h//3, self.p["accent"]), (palette_x+palette_w*2//5, palette_y+palette_h//3, self.p["glow"]), (palette_x+palette_w*3//5, palette_y+palette_h//3, self.p["warm"]), (palette_x+palette_w*4//5, palette_y+palette_h//3, self.p["textMuted"]), (palette_x+palette_w//3, palette_y+palette_h*2//3, self.p["accent"]), (palette_x+palette_w*2//3, palette_y+palette_h*2//3, self.p["glow"])]
        for px, py, col in paint_spots:
            r = 18
            self.draw.ellipse([px-r, py-r, px+r, py+r], fill=col)
            self.draw.ellipse([px-r//2, py-r//2, px+r//2, py+r//2], fill=self._lighter(col, 25))

    def illustrator(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        tablet_w, tablet_h = int(scale * 2.0), int(scale * 1.3)
        tablet_x, tablet_y = cx - tablet_w//2, base_y - tablet_h
        for s in range(8, 0, -1):
            self.draw.rounded_rectangle([tablet_x+s+4, tablet_y+s+4, tablet_x+tablet_w+s+4, tablet_y+tablet_h+s+4], radius=8, fill=(0,0,0))
        self.draw.rounded_rectangle([tablet_x, tablet_y, tablet_x+tablet_w, tablet_y+tablet_h], radius=8, fill=self._darker(self.p["surface"], 15), outline=self._darker(self.p["surface"], 30), width=2)
        screen_l, screen_t = tablet_x + tablet_w//8, tablet_y + tablet_h//8
        screen_r, screen_b = tablet_x + tablet_w*7//8, tablet_y + tablet_h*6//8
        self.draw.rectangle([screen_l, screen_t, screen_r, screen_b], fill=self.p["surface"], outline=self._darker(self.p["surface"], 20), width=2)
        stylus_len = int(scale * 1.6)
        stylus_x, stylus_y = tablet_x + tablet_w + 30, base_y - stylus_len//2
        for s in range(4, 0, -1):
            self.draw.line([(stylus_x+s+3, stylus_y+s+3), (stylus_x+s+3, stylus_y+stylus_len//2+s+3)], fill=(0,0,0), width=6)
        self.draw.line([(stylus_x, stylus_y), (stylus_x, stylus_y+stylus_len//2)], fill=self.p["accent"], width=10)
        tip_y = stylus_y + stylus_len//2
        self.draw.polygon([(stylus_x-6, tip_y), (stylus_x+6, tip_y), (stylus_x, tip_y+20)], fill=self._darker(self.p["surface"], 20))
        self.draw.rectangle([stylus_x-8, stylus_y+stylus_len//3, stylus_x+8, stylus_y+stylus_len//3+stylus_len//4], fill=self._darker(self.p["accent"], 15))

    def calligrapher(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        scroll_w, scroll_h = int(scale * 1.8), int(scale * 1.2)
        scroll_x, scroll_y = cx - scroll_w//2, base_y - scroll_h
        for s in range(8, 0, -1):
            self.draw.rectangle([scroll_x+s+3, scroll_y+s+3, scroll_x+scroll_w+s+3, scroll_y+scroll_h+s+3], fill=(0,0,0))
        self.draw.rectangle([scroll_x, scroll_y, scroll_x+scroll_w, scroll_y+scroll_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        for i in range(3):
            self.draw.arc([scroll_x+20+i*scroll_w//4, scroll_y+15, scroll_x+scroll_w//2+i*scroll_w//4, scroll_y+scroll_h//3], start=0, end=180, fill=self.p["accent"], width=3)
        for i in range(4):
            bx = scroll_x + 30 + i * (scroll_w-60)//3
            self.draw.ellipse([bx-4, scroll_y+scroll_h//2-4, bx+4, scroll_y+scroll_h//2+4], fill=self.p["accent"])
        pen_len = int(scale * 2.0)
        pen_x, pen_y = scroll_x + scroll_w + 40, base_y - pen_len
        for s in range(5, 0, -1):
            self.draw.line([(pen_x+s+3, pen_y+s+3), (pen_x+s+3, base_y+s+3)], fill=(0,0,0), width=8)
        self.draw.line([(pen_x, pen_y), (pen_x, base_y)], fill=self.p["accent"], width=10)
        self.draw.polygon([(pen_x-10, base_y), (pen_x+10, base_y), (pen_x, base_y+25)], fill=self._darker(self.p["surface"], 20))
        self.draw.line([(pen_x, pen_y), (pen_x, base_y+25)], fill=self._darker(self.p["accent"], 30), width=2)
        self.draw.rectangle([pen_x-8, pen_y+pen_len//3, pen_x+8, pen_y+pen_len//3+pen_len//3], fill=self._darker(self.p["accent"], 20))

    def craft_artist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        scissor_len = int(scale * 1.5)
        scissor_x, scissor_y = cx - scissor_len//2 - 50, base_y - scissor_len
        for s in range(6, 0, -1):
            self.draw.line([(scissor_x+s, scissor_y+s), (scissor_x+scissor_len//3+s, scissor_y+scissor_len//2+s)], fill=(0,0,0), width=8)
        handle_r = scissor_len//5
        self.draw.ellipse([scissor_x-handle_r+3, scissor_y+scissor_len//2-handle_r+3, scissor_x+handle_r+3, scissor_y+scissor_len//2+handle_r+3], fill=(0,0,0))
        self.draw.ellipse([scissor_x-handle_r, scissor_y+scissor_len//2-handle_r, scissor_x+handle_r, scissor_y+scissor_len//2+handle_r], fill=self.p["accent"])
        self.draw.ellipse([scissor_x-handle_r//2, scissor_y+scissor_len//2-handle_r//2, scissor_x+handle_r//2, scissor_y+scissor_len//2+handle_r//2], fill=self._darker(self.p["accent"], 20))
        pivot_x, pivot_y = scissor_x + scissor_len//3, scissor_y + scissor_len//2
        self.draw.ellipse([pivot_x-8, pivot_y-8, pivot_x+8, pivot_y+8], fill=self._darker(self.p["surface"], 30))
        self.draw.ellipse([pivot_x-4, pivot_y-4, pivot_x+4, pivot_y+4], fill=self.p["surface"])
        blade_len = int(scissor_len * 0.6)
        self.draw.line([(pivot_x, pivot_y-4), (pivot_x+blade_len, pivot_y-int(blade_len*0.15))], fill=self.p["surface"], width=8)
        self.draw.line([(pivot_x, pivot_y+4), (pivot_x+blade_len, pivot_y+int(blade_len*0.15))], fill=self.p["surface"], width=8)
        supply_x, supply_y = cx + 30, base_y - int(scale * 1.5)
        supply_w, supply_h = int(scale * 1.2), int(scale * 1.0)
        self.draw.rounded_rectangle([supply_x+4, supply_y+4, supply_x+supply_w+4, supply_y+supply_h+4], radius=8, fill=(0,0,0))
        self.draw.rounded_rectangle([supply_x, supply_y, supply_x+supply_w, supply_y+supply_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        for i in range(3):
            for j in range(3):
                rx = supply_x + 15 + i * (supply_w-30)//2
                ry = supply_y + 20 + j * (supply_h-40)//2
                r = 15
                self.draw.ellipse([rx-r, ry-r, rx+r, ry+r], fill=blend_c(self.p["accent"], self.p["glow"], (i+j)/6))
                self.draw.ellipse([rx-r//2, ry-r//2, rx+r//2, ry+r//2], fill=self._lighter(self.p["accent"], 20))

    def floral_designer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        vase_h, vase_w = int(scale * 1.2), int(scale * 0.6)
        vase_x, vase_y = cx - vase_w//2, base_y - vase_h
        for s in range(8, 0, -1):
            self.draw.polygon([(vase_x+s, vase_y+s), (vase_x+vase_w+s, vase_y+s), (vase_x+vase_w*2//3+s, base_y+s), (vase_x+vase_w//3+s, base_y+s)], fill=(0,0,0))
        self.draw.polygon([(vase_x, vase_y), (vase_x+vase_w, vase_y), (vase_x+vase_w*2//3, base_y), (vase_x+vase_w//3, base_y)], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        vase_neck_h = vase_h//6
        self.draw.polygon([(vase_x+vase_w//4, vase_y), (vase_x+vase_w*3//4, vase_y), (vase_x+vase_w*3//5, vase_y-vase_neck_h), (vase_x+vase_w*2//5, vase_y-vase_neck_h)], fill=self.p["surface"], outline=self._darker(self.p["surface"], 20), width=2)
        for flower_i in range(7):
            f_angle = -60 + flower_i * 25
            f_len = int(scale * (0.8 + (flower_i % 3) * 0.15))
            fx = cx + int(f_len * math.cos(math.radians(f_angle)))
            fy = vase_y - vase_neck_h - int(f_len * 0.6)
            stem_len = int(f_len * 0.7)
            sx = cx + int(stem_len * math.cos(math.radians(f_angle)) * 0.3)
            sy = vase_y - vase_neck_h
            self.draw.line([(sx, sy), (fx, fy)], fill=self._darker(self.p["surface"], 20), width=3)
            petal_r = 15 + (flower_i % 3) * 5
            for p in range(6):
                p_angle = p * 60 + flower_i * 15
                px = fx + int(petal_r * math.cos(math.radians(p_angle)))
                py = fy + int(petal_r * math.sin(math.radians(p_angle)))
                self.draw.ellipse([px-petal_r//2, py-petal_r//2, px+petal_r//2, py+petal_r//2], fill=blend_c(self.p["accent"], self.p["glow"], flower_i/7))
            self.draw.ellipse([fx-petal_r//3, fy-petal_r//3, fx+petal_r//3, fy+petal_r//3], fill=self._lighter(self.p["accent"], 30))

    def wedding_planner(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        ring_r = int(scale * 0.6)
        ring1_x, ring1_y = cx - ring_r//2, base_y - ring_r
        for s in range(6, 0, -1):
            self.draw.ellipse([ring1_x-ring_r//3+s+2, ring1_y-ring_r//3+s+2, ring1_x+ring_r//3+s+2, ring1_y+ring_r//3+s+2], fill=(0,0,0))
        self.draw.ellipse([ring1_x-ring_r//3, ring1_y-ring_r//3, ring1_x+ring_r//3, ring1_y+ring_r//3], fill=self.p["surface"], outline=self._darker(self.p["surface"], 30), width=4)
        ring2_x, ring2_y = cx + ring_r//2, base_y - ring_r + 20
        self.draw.ellipse([ring2_x-ring_r//3+3, ring2_y-ring_r//3+3, ring2_x+ring_r//3+3, ring2_y+ring_r//3+3], fill=(0,0,0))
        self.draw.ellipse([ring2_x-ring_r//3, ring2_y-ring_r//3, ring2_x+ring_r//3, ring2_y+ring_r//3], fill=self.p["surface"], outline=self._darker(self.p["surface"], 30), width=4)
        invite_w, invite_h = int(scale * 1.8), int(scale * 1.3)
        invite_x, invite_y = cx - invite_w - 60, base_y - invite_h
        for s in range(6, 0, -1):
            self.draw.rectangle([invite_x+s+3, invite_y+s+3, invite_x+invite_w+s+3, invite_y+invite_h+s+3], fill=(0,0,0))
        self.draw.rectangle([invite_x, invite_y, invite_x+invite_w, invite_y+invite_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        border_off = 15
        self.draw.rectangle([invite_x+border_off, invite_y+border_off, invite_x+invite_w-border_off, invite_y+invite_h-border_off], outline=self.p["accent"], width=2)
        self.draw.arc([invite_x+invite_w//3, invite_y+20, invite_x+invite_w*2//3, invite_y+invite_h//3], start=0, end=180, fill=self.p["accent"], width=3)
        heart_x, heart_y = invite_x + invite_w//2, invite_y + invite_h//3 + 20
        h_size = 15
        self.draw.polygon([(heart_x, heart_y+h_size), (heart_x-h_size, heart_y), (heart_x, heart_y-h_size//2), (heart_x+h_size, heart_y)], fill=self.p["accent"])

    def event_planner(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.78)
        for balloon_i in range(5):
            bx = cx - 150 + balloon_i * 75
            by = base_y - 200 - (balloon_i % 2) * 80
            br = 35 + (balloon_i % 3) * 10
            for s in range(5, 0, -1):
                self.draw.ellipse([bx-br+s+2, by-br+s+2, bx+br+s+2, by+br+s+2], fill=(0,0,0))
            self.draw.ellipse([bx-br, by-br, bx+br, by+br], fill=blend_c(self.p["accent"], self.p["glow"], balloon_i/5), outline=self._darker(self.p["accent"], 20), width=2)
            triangle_size = 12
            self.draw.polygon([(bx, by+br), (bx-triangle_size//2, by+br+triangle_size), (bx+triangle_size//2, by+br+triangle_size)], fill=self._darker(self.p["accent"], 15))
            string_len = 80 + balloon_i * 20
            for st in range(0, string_len, 5):
                sx = bx + int(8 * math.sin(st / 15))
                sy = by + br + triangle_size + st
                self.draw.point((sx, sy), fill=self.p["surface"])

    def decor_stylist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        candle_h, candle_w = int(scale * 1.6), int(scale * 0.32)
        candle_x, candle_y = cx - candle_w//2, base_y - candle_h
        for s in range(8, 0, -1):
            self.draw.ellipse([candle_x-candle_w//2+s+2, candle_y+s+2, candle_x+candle_w//2+s+2, candle_y+candle_h//3+s+2], fill=(0,0,0))
        self.draw.ellipse([candle_x-candle_w//2, candle_y, candle_x+candle_w//2, candle_y+candle_h//3], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        self.draw.rounded_rectangle([candle_x, candle_y+candle_h//3, candle_x+candle_w, base_y], radius=candle_w//2, fill=self.p["surface"], outline=self._darker(self.p["surface"], 20), width=2)
        flame_h = candle_h//4
        flame_w = candle_w//2
        flame_y = candle_y - flame_h
        for s in range(4, 0, -1):
            self.draw.ellipse([candle_x-flame_w//2+s, flame_y+s, candle_x+flame_w//2+s, flame_y+flame_h+s], fill=(0,0,0))
        self.draw.ellipse([candle_x-flame_w//2, flame_y, candle_x+flame_w//2, flame_y+flame_h], fill=self.p["accent"])
        self.draw.ellipse([candle_x-flame_w//4, flame_y+flame_h//4, candle_x+flame_w//4, flame_y+flame_h//2], fill=self._lighter(self.p["accent"], 40))
        soft_glow(self.draw, candle_x, flame_y+flame_h//2, 60, self.p["glow"], 40)
        decor_objs = [(cx + scale + 40, base_y - int(scale * 0.6), int(scale * 0.4), self.p["accent"]), (cx + scale + 100, base_y - int(scale * 0.4), int(scale * 0.3), self.p["glow"]), (cx - scale - 80, base_y - int(scale * 0.5), int(scale * 0.35), self.p["surface"])]
        for ox, oy, ow, oc in decor_objs:
            for s in range(5, 0, -1):
                self.draw.ellipse([ox-ow//2+s+2, oy-ow//2+s+2, ox+ow//2+s+2, oy+ow//2+s+2], fill=(0,0,0))
            self.draw.ellipse([ox-ow//2, oy-ow//2, ox+ow//2, oy+ow//2], fill=oc, outline=self._darker(oc, 20), width=2)

    def baker(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        tier_h, tier_w = int(scale * 0.5), int(scale * 1.8)
        for tier_i in range(3):
            ty = base_y - (tier_i + 1) * tier_h
            tw = tier_w - tier_i * tier_w//5
            tx = cx - tw//2
            for s in range(6, 0, -1):
                self.draw.ellipse([tx+s+2, ty+s+2, tx+tw+s+2, ty+tier_h+s+2], fill=(0,0,0))
            self.draw.ellipse([tx, ty, tx+tw, ty+tier_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
            frosting_y = ty + tier_h//4
            for fx in range(tx+10, tx+tw-10, 8):
                wave_h = 8 + (fx % 3) * 4
                self.draw.arc([fx-4, frosting_y-wave_h, fx+4, frosting_y+wave_h], start=0, end=180, fill=self.p["accent"], width=3)
        cherry_r = 15
        cherry_x, cherry_y = cx, base_y - 3 * tier_h - cherry_r
        for s in range(5, 0, -1):
            self.draw.ellipse([cherry_x-cherry_r+s+2, cherry_y-cherry_r+s+2, cherry_x+cherry_r+s+2, cherry_y+cherry_r+s+2], fill=(0,0,0))
        self.draw.ellipse([cherry_x-cherry_r, cherry_y-cherry_r, cherry_x+cherry_r, cherry_y+cherry_r], fill=self.p["accent"])
        self.draw.ellipse([cherry_x-cherry_r//2-3, cherry_y-cherry_r//2-3, cherry_x-3, cherry_y-3], fill=self._lighter(self.p["accent"], 40))
        self.draw.arc([cherry_x, cherry_y-cherry_r-15, cherry_x+20, cherry_y-cherry_r+5], start=0, end=180, fill=self._darker(self.p["surface"], 25), width=3)

    def chef(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        hat_h, hat_w = int(scale * 1.5), int(scale * 1.8)
        hat_x, hat_y = cx - hat_w//2, base_y - hat_h
        for s in range(8, 0, -1):
            self.draw.ellipse([hat_x+s+3, hat_y+s+3, hat_x+hat_w+s+3, hat_y+hat_h*2//3+s+3], fill=(0,0,0))
        self.draw.ellipse([hat_x, hat_y, hat_x+hat_w, hat_y+hat_h*2//3], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        pleat_count = 7
        for pi in range(pleat_count):
            px = hat_x + hat_w//(pleat_count+1) + pi * (hat_w-2*hat_w//(pleat_count+1))//pleat_count
            self.draw.line([(px, hat_y+hat_h*2//3), (px, base_y)], fill=self._darker(self.p["surface"], 15), width=2)
        brim_w, brim_h = hat_w + 40, 20
        self.draw.rounded_rectangle([hat_x-20, base_y-brim_h, hat_x+hat_w+20, base_y], radius=10, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        pot_r = int(scale * 0.7)
        pot_x, pot_y = cx + hat_w//2 + 60, base_y - pot_r * 2
        for s in range(8, 0, -1):
            self.draw.ellipse([pot_x-pot_r+s+3, pot_y-pot_r//2+s+3, pot_x+pot_r+s+3, pot_y+pot_r+s+3], fill=(0,0,0))
        self.draw.ellipse([pot_x-pot_r, pot_y-pot_r//2, pot_x+pot_r, pot_y+pot_r], fill=self._darker(self.p["surface"], 20), outline=self._darker(self.p["surface"], 35), width=3)
        pot_neck_h = pot_r//3
        self.draw.rounded_rectangle([pot_x-pot_r//2, pot_y-pot_r//2-pot_neck_h, pot_x+pot_r//2, pot_y-pot_r//2], radius=5, fill=self._darker(self.p["surface"], 15))
        steam_y = pot_y - pot_r//2 - pot_neck_h
        for si in range(3):
            sx = pot_x - 20 + si * 20
            for step in range(5):
                sy = steam_y - step * 15
                sx_offset = int(5 * math.sin(step + si))
                self.draw.arc([sx+sx_offset-5, sy-5, sx+sx_offset+5, sy+5], start=0, end=180, fill=self._lighter(self.p["surface"], 20), width=2)

    def fitness_trainer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        db_len = int(scale * 1.8)
        db_handle_l, db_handle_r = cx - db_len//2, cx + db_len//2
        db_y = base_y - db_len//3
        handle_w, handle_h = 15, db_len//2
        for s in range(5, 0, -1):
            self.draw.rectangle([db_handle_l-handle_w//2+s+3, db_y-handle_h//2+s+3, db_handle_l+handle_w//2+s+3, db_y+handle_h//2+s+3], fill=(0,0,0))
            self.draw.rectangle([db_handle_r-handle_w//2+s+3, db_y-handle_h//2+s+3, db_handle_r+handle_w//2+s+3, db_y+handle_h//2+s+3], fill=(0,0,0))
        self.draw.rectangle([db_handle_l-handle_w//2, db_y-handle_h//2, db_handle_l+handle_w//2, db_y+handle_h//2], fill=self.p["accent"])
        self.draw.rectangle([db_handle_r-handle_w//2, db_y-handle_h//2, db_handle_r+handle_w//2, db_y+handle_h//2], fill=self.p["accent"])
        plate_r = int(scale * 0.5)
        plate_colors = [self.p["accent"], self.p["surface"], self.p["accent"]]
        plate_offsets = [db_len//2 + plate_r, db_len//2 + plate_r*2, db_len//2 + plate_r*3]
        for offset, col in zip(plate_offsets, plate_colors):
            for side in [-1, 1]:
                px = cx + side * offset
                for s in range(5, 0, -1):
                    self.draw.ellipse([px-plate_r+s+2, db_y-plate_r+s+2, px+plate_r+s+2, db_y+plate_r+s+2], fill=(0,0,0))
                self.draw.ellipse([px-plate_r, db_y-plate_r, px+plate_r, db_y+plate_r], fill=col, outline=self._darker(col, 25), width=3)
                inner_r = plate_r//2
                self.draw.ellipse([px-inner_r, db_y-inner_r, px+inner_r, db_y+inner_r], fill=self._darker(col, 15))

    def yoga_instructor(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        mat_w, mat_h = int(scale * 3.0), int(scale * 0.3)
        mat_x, mat_y = cx - mat_w//2, base_y - mat_h
        for s in range(6, 0, -1):
            self.draw.rounded_rectangle([mat_x+s+3, mat_y+s+3, mat_x+mat_w+s+3, mat_y+mat_h+s+3], radius=8, fill=(0,0,0))
        self.draw.rounded_rectangle([mat_x, mat_y, mat_x+mat_w, mat_y+mat_h], radius=8, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        for lx in range(mat_x+10, mat_x+mat_w-10, 30):
            self.draw.line([(lx, mat_y+5), (lx+15, mat_y+mat_h-5)], fill=self._darker(self.p["surface"], 10), width=1)
        lotus_cx, lotus_cy = cx, mat_y - int(scale * 0.8)
        petal_len, petal_count = int(scale * 0.6), 8
        for p in range(petal_count):
            angle = p * (360 // petal_count)
            rad = math.radians(angle)
            px = lotus_cx + int(petal_len * 0.4 * math.cos(rad))
            py = lotus_cy + int(petal_len * 0.4 * math.sin(rad))
            ptip_x = lotus_cx + int(petal_len * math.cos(rad))
            ptip_y = lotus_cy + int(petal_len * math.sin(rad))
            for s in range(4, 0, -1):
                self.draw.polygon([(lotus_cx+s, lotus_cy+s), (ptip_x+s, ptip_y+s), (px+s, py+s)], fill=(0,0,0))
            self.draw.polygon([(lotus_cx, lotus_cy), (ptip_x, ptip_y), (px, py)], fill=self.p["accent"], outline=self._darker(self.p["accent"], 15), width=1)
        inner_r = petal_len // 3
        self.draw.ellipse([lotus_cx-inner_r, lotus_cy-inner_r, lotus_cx+inner_r, lotus_cy+inner_r], fill=self._lighter(self.p["accent"], 30))

    def personal_coach(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        bubble_w, bubble_h = int(scale * 2.0), int(scale * 1.4)
        bubble_x, bubble_y = cx - bubble_w//2, base_y - bubble_h - 40
        for s in range(8, 0, -1):
            self.draw.rounded_rectangle([bubble_x+s+4, bubble_y+s+4, bubble_x+bubble_w+s+4, bubble_y+bubble_h+s+4], radius=20, fill=(0,0,0))
        self.draw.rounded_rectangle([bubble_x, bubble_y, bubble_x+bubble_w, bubble_y+bubble_h], radius=20, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        tail_x, tail_y = bubble_x + bubble_w//3, bubble_y + bubble_h
        self.draw.polygon([(tail_x-20, tail_y), (tail_x+20, tail_y), (bubble_x, bubble_y+bubble_h//2)], fill=self.p["surface"])
        target_r = int(scale * 0.7)
        target_x, target_y = cx + bubble_w//2 + 80, base_y - target_r
        for ring_i, r in enumerate(range(target_r, target_r//3, -15)):
            ring_color = self.p["accent"] if ring_i % 2 == 0 else self._darker(self.p["accent"], 30)
            for s in range(4, 0, -1):
                self.draw.ellipse([target_x-r+s+2, target_y-r+s+2, target_x+r+s+2, target_y+r+s+2], fill=(0,0,0))
            self.draw.ellipse([target_x-r, target_y-r, target_x+r, target_y+r], outline=ring_color, width=5)
        bullseye_r = target_r//4
        for s in range(4, 0, -1):
            self.draw.ellipse([target_x-bullseye_r+s+2, target_y-bullseye_r+s+2, target_x+bullseye_r+s+2, target_y+bullseye_r+s+2], fill=(0,0,0))
        self.draw.ellipse([target_x-bullseye_r, target_y-bullseye_r, target_x+bullseye_r, target_y+bullseye_r], fill=self.p["accent"])

    def tutor(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        book_w, book_h = int(scale * 1.4), int(scale * 1.0)
        for book_i in range(4):
            bx = cx - book_w//2 - book_i * 20
            by = base_y - book_h - book_i * 8
            for s in range(5, 0, -1):
                self.draw.rectangle([bx+s+2, by+s+2, bx+book_w+s+2, by+book_h+s+2], fill=(0,0,0))
            self.draw.rectangle([bx, by, bx+book_w, by+book_h], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
            self.draw.rectangle([bx, by, bx+8, by+book_h], fill=self._darker(self.p["surface"], 15))
            for lx in range(bx+20, bx+book_w-10, 25):
                self.draw.line([(lx, by+20), (lx+15, by+20)], fill=self._darker(self.p["surface"], 20), width=2)
                self.draw.line([(lx, by+35), (lx+20, by+35)], fill=self._darker(self.p["surface"], 20), width=2)
        apple_r = int(scale * 0.4)
        apple_x, apple_y = cx + book_w//2 + 60, base_y - apple_r
        for s in range(5, 0, -1):
            self.draw.ellipse([apple_x-apple_r+s+2, apple_y-apple_r+s+2, apple_x+apple_r+s+2, apple_y+apple_r+s+2], fill=(0,0,0))
        self.draw.ellipse([apple_x-apple_r, apple_y-apple_r, apple_x+apple_r, apple_y+apple_r], fill=self.p["accent"], outline=self._darker(self.p["accent"], 25), width=2)
        self.draw.ellipse([apple_x-apple_r//3, apple_y-apple_r//3, apple_x+apple_r//3, apple_y+apple_r//3], fill=self._lighter(self.p["accent"], 30))
        self.draw.line([(apple_x, apple_y-apple_r), (apple_x+5, apple_y-apple_r-20)], fill=self._darker(self.p["surface"], 25), width=4)
        self.draw.polygon([(apple_x+5, apple_y-apple_r-15), (apple_x+20, apple_y-apple_r-25), (apple_x+25, apple_y-apple_r-10)], fill=self._darker(self.p["surface"], 15))

    def content_creator(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 28 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        ring_r = int(scale * 0.9)
        ring_cx, ring_cy = cx - 100, base_y - ring_r
        for s in range(8, 0, -1):
            self.draw.ellipse([ring_cx-ring_r+s+3, ring_cy-ring_r+s+3, ring_cx+ring_r+s+3, ring_cy+ring_r+s+3], fill=(0,0,0))
        self.draw.ellipse([ring_cx-ring_r, ring_cy-ring_r, ring_cx+ring_r, ring_cy+ring_r], fill=self.p["surface"], outline=self._darker(self.p["surface"], 30), width=4)
        self.draw.ellipse([ring_cx-int(ring_r*0.7), ring_cy-int(ring_r*0.7), ring_cx+int(ring_r*0.7), ring_cy+int(ring_r*0.7)], fill=self._darker(self.p["surface"], 15))
        cam_w, cam_h = int(scale * 1.4), int(scale * 0.9)
        cam_x, cam_y = cx - cam_w//2, base_y - cam_h
        for s in range(6, 0, -1):
            self.draw.rounded_rectangle([cam_x+s+3, cam_y+s+3, cam_x+cam_w+s+3, cam_y+cam_h+s+3], radius=6, fill=(0,0,0))
        self.draw.rounded_rectangle([cam_x, cam_y, cam_x+cam_w, cam_y+cam_h], radius=6, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        lens_r = int(cam_h * 0.45)
        lens_cx, lens_cy = cx, cam_y + cam_h//2
        for s in range(4, 0, -1):
            self.draw.ellipse([lens_cx-lens_r+s+2, lens_cy-lens_r+s+2, lens_cx+lens_r+s+2, lens_cy+lens_r+s+2], fill=(0,0,0))
        self.draw.ellipse([lens_cx-lens_r, lens_cy-lens_r, lens_cx+lens_r, lens_cy+lens_r], fill=self._darker(self.p["surface"], 15))
        for r in range(lens_r, lens_r//3, -6):
            t = r / lens_r
            c = blend_c(self._darker(self.p["surface"], 25), self.p["surface"], t*0.5)
            self.draw.ellipse([lens_cx-r, lens_cy-r, lens_cx+r, lens_cy+r], c)
        self.draw.ellipse([lens_cx-lens_r//3, lens_cy-lens_r//3, lens_cx+lens_r//3, lens_cy+lens_r//3], fill=self._darker(self.p["surface"], 35))
        self.draw.ellipse([lens_cx-lens_r//6, lens_cy-lens_r//6, lens_cx+lens_r//6, lens_cy+lens_r//6], fill=self.p["accent"])
        laptop_w, laptop_h = int(scale * 2.0), int(scale * 1.3)
        laptop_x, laptop_y = cx + cam_w//2 + 60, base_y - laptop_h
        for s in range(6, 0, -1):
            self.draw.rounded_rectangle([laptop_x+s+3, laptop_y+s+3, laptop_x+laptop_w+s+3, laptop_y+laptop_h+s+3], radius=6, fill=(0,0,0))
        self.draw.rounded_rectangle([laptop_x, laptop_y, laptop_x+laptop_w, laptop_y+laptop_h], radius=6, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        screen_pad = 15
        self.draw.rectangle([laptop_x+screen_pad, laptop_y+screen_pad, laptop_x+laptop_w-screen_pad, laptop_y+laptop_h-screen_pad], fill=self._darker(self.p["surface"], 10))

    def influencer(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        phone_w, phone_h = int(scale * 0.6), int(scale * 1.2)
        phone_x, phone_y = cx - phone_w//2, base_y - phone_h
        for s in range(6, 0, -1):
            self.draw.rounded_rectangle([phone_x+s+3, phone_y+s+3, phone_x+phone_w+s+3, phone_y+phone_h+s+3], radius=12, fill=(0,0,0))
        self.draw.rounded_rectangle([phone_x, phone_y, phone_x+phone_w, phone_y+phone_h], radius=12, fill=self._darker(self.p["surface"], 15), outline=self._darker(self.p["surface"], 30), width=2)
        screen_pad = 8
        self.draw.rectangle([phone_x+screen_pad, phone_y+screen_pad*2, phone_x+phone_w-screen_pad, phone_y+phone_h-screen_pad*2], fill=self.p["surface"])
        cam_dot_r = 5
        self.draw.ellipse([phone_x+phone_w//2-cam_dot_r, phone_y+screen_pad, phone_x+phone_w//2+cam_dot_r, phone_y+screen_pad+cam_dot_r*2], fill=self._darker(self.p["surface"], 25))
        social_icons = [(phone_x+phone_w//4, phone_y+phone_h*2//5, self.p["accent"]), (phone_x+phone_w//2, phone_y+phone_h*2//5, self.p["glow"]), (phone_x+phone_w*3//4, phone_y+phone_h*2//5, self._darker(self.p["accent"], 20)), (phone_x+phone_w//3, phone_y+phone_h*3//5, self._darker(self.p["glow"], 20)), (phone_x+phone_w//2, phone_y+phone_h*3//5, self.p["accent"]), (phone_x+phone_w*2//3, phone_y+phone_h*3//5, self.p["glow"])]
        icon_r = 12
        for ix, iy, ic in social_icons:
            self.draw.ellipse([ix-icon_r, iy-icon_r, ix+icon_r, iy+icon_r], fill=ic)

    def nutritionist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        apple_r = int(scale * 0.7)
        apple_x, apple_y = cx, base_y - apple_r
        for s in range(6, 0, -1):
            self.draw.ellipse([apple_x-apple_r+s+2, apple_y-apple_r+s+2, apple_x+apple_r+s+2, apple_y+apple_r+s+2], fill=(0,0,0))
        self.draw.ellipse([apple_x-apple_r, apple_y-apple_r, apple_x+apple_r, apple_y+apple_r], fill=self.p["accent"], outline=self._darker(self.p["accent"], 25), width=2)
        self.draw.ellipse([apple_x-apple_r//3, apple_y-apple_r//3, apple_x+apple_r//3, apple_y+apple_r//3], fill=self._lighter(self.p["accent"], 30))
        self.draw.line([(apple_x, apple_y-apple_r), (apple_x+5, apple_y-apple_r-25)], fill=self._darker(self.p["surface"], 25), width=5)
        self.draw.polygon([(apple_x+5, apple_y-apple_r-20), (apple_x+25, apple_y-apple_r-30), (apple_x+30, apple_y-apple_r-12)], fill=self._darker(self.p["surface"], 15))
        produce_items = [(cx - scale - 40, base_y - int(scale * 0.5), int(scale * 0.4), self.p["glow"]), (cx + scale + 40, base_y - int(scale * 0.6), int(scale * 0.5), self._darker(self.p["glow"], 15)), (cx - scale//2, base_y - int(scale * 0.3), int(scale * 0.35), self.p["accent"])]
        for px, py, pr, pc in produce_items:
            for s in range(5, 0, -1):
                self.draw.ellipse([px-pr+s+2, py-pr+s+2, px+pr+s+2, py+pr+s+2], fill=(0,0,0))
            self.draw.ellipse([px-pr, py-pr, px+pr, py+pr], fill=pc, outline=self._darker(pc, 20), width=2)

    def skincare_specialist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 35 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        jar_r = int(scale * 0.8)
        jar_x, jar_y = cx - jar_r, base_y - jar_r * 2
        for s in range(8, 0, -1):
            self.draw.ellipse([jar_x+s+3, jar_y+s+3, jar_x+jar_r*2+s+3, jar_y+jar_r*2+s+3], fill=(0,0,0))
        self.draw.ellipse([jar_x, jar_y, jar_x+jar_r*2, jar_y+jar_r*2], fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        self.draw.ellipse([jar_x+jar_r//4, jar_y+jar_r//4, jar_x+jar_r*3//4, jar_y+jar_r*3//4], fill=self._darker(self.p["surface"], 10))
        lid_h, lid_y = jar_r//2, jar_y - jar_r//4
        for s in range(5, 0, -1):
            self.draw.ellipse([jar_x+s+3, lid_y+s+3, jar_x+jar_r*2+s+3, lid_y+lid_h+s+3], fill=(0,0,0))
        self.draw.ellipse([jar_x, lid_y, jar_x+jar_r*2, lid_y+lid_h], fill=self.p["accent"], outline=self._darker(self.p["accent"], 20), width=2)
        leaf_len = int(scale * 0.8)
        leaf_x, leaf_y = jar_x + jar_r * 2 + 40, base_y - leaf_len
        for s in range(5, 0, -1):
            self.draw.polygon([(leaf_x+s, leaf_y+s), (leaf_x+leaf_len//2+s, leaf_y+leaf_len//2+s), (leaf_x+s, leaf_y+leaf_len+s)], fill=(0,0,0))
        self.draw.polygon([(leaf_x, leaf_y), (leaf_x+leaf_len//2, leaf_y+leaf_len//2), (leaf_x, leaf_y+leaf_len)], fill=self._darker(self.p["glow"], 20), outline=self._darker(self.p["glow"], 30), width=2)
        self.draw.line([(leaf_x, leaf_y), (leaf_x, leaf_y+leaf_len)], fill=self._darker(self.p["glow"], 25), width=2)
        for i in range(1, 4):
            lx = leaf_x + int(leaf_len//4 * i/3)
            ly = leaf_y + int(leaf_len * i/3)
            self.draw.line([(leaf_x, ly), (lx, ly)], fill=self._darker(self.p["glow"], 20), width=1)

    def mehndi_artist(self, seed=0):
        random.seed(seed)
        bg = self.bg
        accent = self.p["accent"]
        self.draw.rectangle([0,0,self.w,self.h], bg)
        for y in range(self.h):
            t = y / self.h
            c = blend_c(bg, self._lighter(bg, 8), t*0.5)
            self.draw.rectangle([0, y, self.w, y+1], c)
        soft_glow(self.draw, self.w//2, self.h//2, self.h//3, accent, 40)
        palm_h, palm_w = int(self.h * 0.75), int(self.h * 0.56)
        palm_left, palm_top = (self.w - palm_w) // 2, (self.h - palm_h) // 2
        skin = self._skin(12)
        skin_dark = self._darker(skin, 15)
        skin_light = self._lighter(skin, 10)
        shadow_off = 12
        for s in range(8, 0, -1):
            sc = tuple(max(0, c-15) for c in skin)
            self.draw.rounded_rectangle([palm_left+shadow_off+s, palm_top+shadow_off+s, palm_left+palm_w+shadow_off+s, palm_top+palm_h+shadow_off+s], radius=palm_w//5, fill=sc)
        for y in range(palm_top, palm_top+palm_h):
            t = (y - palm_top) / palm_h
            c = blend_c(skin_dark, skin_light, 0.3 + t*0.4)
            self.draw.line([(palm_left, y), (palm_left+palm_w, y)], c)
        self.draw.rounded_rectangle([palm_left, palm_top, palm_left+palm_w, palm_top+palm_h], radius=palm_w//5, outline=skin_dark, width=2)
        finger_count = 5
        finger_gap = palm_w // (finger_count + 1)
        finger_w = int(finger_gap * 0.72)
        finger_h = int(self.h * 0.28)
        for i in range(finger_count):
            fx = palm_left + (i+1)*finger_gap - finger_w//2
            fy = palm_top - finger_h + palm_w//10
            self.draw.rounded_rectangle([fx+3, fy+3, fx+finger_w+3, palm_top+palm_h//6+3], radius=finger_w//2, fill=skin_dark)
            self.draw.rounded_rectangle([fx, fy, fx+finger_w, palm_top+palm_h//6], radius=finger_w//2, fill=skin)
            self.draw.rounded_rectangle([fx+finger_w//4, fy+2, fx+finger_w//2, fy+finger_h//3], radius=finger_w//4, fill=skin_light)
            self.draw.ellipse([fx+finger_w//2-5, fy+6, fx+finger_w//2+5, fy+16], fill=self._lighter(skin,20))
        thumb_w = finger_w * 12//10
        thumb_base_y = palm_top + palm_h*4//10
        pts = [(palm_left+4, thumb_base_y), (palm_left - thumb_w + 10, thumb_base_y - palm_h*0.06), (palm_left - thumb_w + 6, thumb_base_y + palm_h*0.08), (palm_left+4, thumb_base_y + palm_h*0.05)]
        self.draw.polygon(pts, fill=skin)
        self.draw.polygon([(palm_left+4+i, thumb_base_y-i//2) for i in range(4)], fill=skin_light)
        band_y = palm_top + palm_h - int(palm_h*0.05)
        self.draw.rounded_rectangle([palm_left+6, band_y, palm_left+palm_w-6, band_y+12], radius=6, fill=accent)
        for dx in range(palm_left+20, palm_left+palm_w-20, 14):
            self.draw.ellipse([dx-2, band_y+3, dx+2, band_y+7], fill=bg)
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
        add_noise_to_img(self.img, self.draw, self.w, self.h, 5)

    def nail_artist(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 28 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        bottle_positions = [(cx - scale - 30, base_y - int(scale * 1.8), int(scale * 0.5), self.p["accent"]), (cx, base_y - int(scale * 2.0), int(scale * 0.55), self.p["glow"]), (cx + scale + 30, base_y - int(scale * 1.7), int(scale * 0.48), self._darker(self.p["accent"], 25))]
        for bx, by, bw, bc in bottle_positions:
            bottle_h = int(bw * 2.5)
            neck_h, neck_w = bottle_h // 5, bw // 2
            for s in range(5, 0, -1):
                self.draw.ellipse([bx-bw//2+s+2, by+s+2, bx+bw//2+s+2, by+bw+s+2], fill=(0,0,0))
            self.draw.ellipse([bx-bw//2, by, bx+bw//2, by+bw], fill=self._darker(bc, 15), outline=self._darker(bc, 30), width=2)
            self.draw.rounded_rectangle([bx-neck_w//2, by+bw, bx+neck_w//2, by+bottle_h-neck_h], radius=neck_w//2, fill=bc, outline=self._darker(bc, 20), width=2)
            for s in range(4, 0, -1):
                self.draw.ellipse([bx-neck_w//2+s+1, by+bottle_h-neck_h+s+1, bx+neck_w//2+s+1, by+bottle_h+s+1], fill=(0,0,0))
            self.draw.ellipse([bx-neck_w//2, by+bottle_h-neck_h, bx+neck_w//2, by+bottle_h], fill=self._darker(self.p["surface"], 20), outline=self._darker(self.p["surface"], 30), width=2)
            cap_h, cap_y = neck_h, by + bottle_h - neck_h
            for s in range(3, 0, -1):
                self.draw.rounded_rectangle([bx-neck_w//2+s, cap_y-cap_h+s, bx+neck_w//2+s, cap_y+s], radius=4, fill=(0,0,0))
            self.draw.rounded_rectangle([bx-neck_w//2, cap_y-cap_h, bx+neck_w//2, cap_y], radius=4, fill=self.p["surface"])
            high_x, high_y = bx - bw//4, by + bw//4
            self.draw.ellipse([high_x-bw//4, high_y-bw//4, high_x+bw//4, high_y+bw//4], fill=self._lighter(bc, 40))

    def boutique_owner(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        bag_w, bag_h = int(scale * 1.2), int(scale * 1.4)
        bag_x, bag_y = cx - bag_w//2, base_y - bag_h
        for s in range(8, 0, -1):
            self.draw.rounded_rectangle([bag_x+s+3, bag_y+s+3, bag_x+bag_w+s+3, bag_y+bag_h+s+3], radius=12, fill=(0,0,0))
        self.draw.rounded_rectangle([bag_x, bag_y, bag_x+bag_w, bag_y+bag_h], radius=12, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        handle_w, handle_h = bag_w // 3, bag_h // 2
        handle_x, handle_y = bag_x + bag_w//2 - handle_w//2, bag_y
        for s in range(5, 0, -1):
            self.draw.polygon([(handle_x+s, handle_y+s), (handle_x+handle_w+s, handle_y+s), (handle_x+handle_w+s, handle_y-handle_h+s), (handle_x+s, handle_y-handle_h+s)], fill=(0,0,0))
        self.draw.polygon([(handle_x, handle_y), (handle_x+handle_w, handle_y), (handle_x+handle_w, handle_y-handle_h), (handle_x, handle_y-handle_h)], fill=self._darker(self.p["surface"], 15), outline=self._darker(self.p["surface"], 25), width=2)
        ribbon_y, ribbon_h = bag_y + bag_h//3, 15
        self.draw.rectangle([bag_x, ribbon_y, bag_x+bag_w, ribbon_y+ribbon_h], fill=self.p["accent"])
        bow_size = 20
        self.draw.polygon([(bag_x+bag_w//2, ribbon_y), (bag_x+bag_w//2-bow_size, ribbon_y-bow_size), (bag_x+bag_w//2, ribbon_y-bow_size//2), (bag_x+bag_w//2+bow_size, ribbon_y-bow_size)], fill=self.p["accent"])
        self.draw.polygon([(bag_x+bag_w//2, ribbon_y), (bag_x+bag_w//2+bow_size, ribbon_y-bow_size), (bag_x+bag_w//2, ribbon_y-bow_size//2), (bag_x+bag_w//2-bow_size, ribbon_y-bow_size)], fill=self.p["accent"])
        rack_x, rack_y = bag_x + bag_w + 80, base_y - int(scale * 1.8)
        rack_h, rack_w = int(scale * 1.8), 10
        for s in range(5, 0, -1):
            self.draw.rectangle([rack_x+s+2, rack_y+s+2, rack_x+rack_w+s+2, base_y+s+2], fill=(0,0,0))
        self.draw.rectangle([rack_x, rack_y, rack_x+rack_w, base_y], fill=self._darker(self.p["surface"], 30))
        self.draw.rectangle([rack_x-rack_w, base_y, rack_x+rack_w*2, base_y+15], fill=self._darker(self.p["surface"], 25))
        for h_idx in range(5):
            hanger_x = rack_x + 25 + h_idx * 50
            hanger_y = rack_y + 20
            self.draw.line([(hanger_x, hanger_y), (hanger_x, hanger_y+20)], fill=self._darker(self.p["surface"], 20), width=3)
            self.draw.polygon([(hanger_x-5, hanger_y+20), (hanger_x+5, hanger_y+20), (hanger_x, hanger_y+35)], fill=self._darker(self.p["surface"], 20))
            for c_idx in range(3):
                cy = hanger_y + 40 + c_idx * 25
                cw = 60 - c_idx * 10
                cl, cr = hanger_x - cw//2, hanger_x + cw//2
                for s in range(4, 0, -1):
                    self.draw.rectangle([cl+s, cy+s, cr+s, cy+20+s], fill=(0,0,0))
                self.draw.rectangle([cl, cy, cr, cy+20], fill=blend_c(self.p["accent"], self.p["glow"], (h_idx+c_idx)/8), outline=self._darker(self.p["surface"], 15), width=1)

    def creative_consultant(self, seed=0):
        random.seed(seed)
        self._base_draw(seed)
        scale = min(self.w, self.h) * 30 // 100
        cx = self.w // 2
        base_y = int(self.h * 0.82)
        bulb_r = int(scale * 0.7)
        bulb_x, bulb_y = cx, base_y - bulb_r * 2 - 40
        for s in range(8, 0, -1):
            self.draw.ellipse([bulb_x-bulb_r+s+2, bulb_y-bulb_r+s+2, bulb_x+bulb_r+s+2, bulb_y+bulb_r+s+2], fill=(0,0,0))
        self.draw.ellipse([bulb_x-bulb_r, bulb_y-bulb_r, bulb_x+bulb_r, bulb_y+bulb_r], fill=self.p["accent"], outline=self._darker(self.p["accent"], 20), width=2)
        filament_r = bulb_r // 3
        self.draw.ellipse([bulb_x-filament_r, bulb_y-filament_r, bulb_x+filament_r, bulb_y+filament_r], fill=self._lighter(self.p["accent"], 50))
        neck_w = bulb_r // 2
        self.draw.rectangle([bulb_x-neck_w//2, bulb_y+bulb_r-neck_w, bulb_x+neck_w//2, bulb_y+bulb_r], fill=self._darker(self.p["surface"], 20))
        base_h = bulb_r // 3
        for s in range(4, 0, -1):
            self.draw.rectangle([bulb_x-neck_w//2+s+2, bulb_y+bulb_r+s+2, bulb_x+neck_w//2+s+2, bulb_y+bulb_r+base_h+s+2], fill=(0,0,0))
        self.draw.rectangle([bulb_x-neck_w//2, bulb_y+bulb_r, bulb_x+neck_w//2, bulb_y+bulb_r+base_h], fill=self.p["surface"])
        for rib_i in range(4):
            rib_x = bulb_x - neck_w//2 + rib_i * neck_w//3
            self.draw.rectangle([rib_x, bulb_y+bulb_r, rib_x+2, bulb_y+bulb_r+base_h], fill=self._darker(self.p["surface"], 15))
        soft_glow(self.draw, bulb_x, bulb_y, bulb_r, self.p["glow"], 50)
        briefcase_w, briefcase_h = int(scale * 1.5), int(scale * 1.0)
        briefcase_x, briefcase_y = bulb_x + bulb_r + 80, base_y - briefcase_h
        for s in range(6, 0, -1):
            self.draw.rounded_rectangle([briefcase_x+s+3, briefcase_y+s+3, briefcase_x+briefcase_w+s+3, briefcase_y+briefcase_h+s+3], radius=8, fill=(0,0,0))
        self.draw.rounded_rectangle([briefcase_x, briefcase_y, briefcase_x+briefcase_w, briefcase_y+briefcase_h], radius=8, fill=self.p["surface"], outline=self._darker(self.p["surface"], 25), width=2)
        handle_ww = briefcase_w // 4
        self.draw.polygon([(briefcase_x+briefcase_w//2-handle_ww//2, briefcase_y), (briefcase_x+briefcase_w//2+handle_ww//2, briefcase_y), (briefcase_x+briefcase_w//2+handle_ww//2, briefcase_y-handle_ww), (briefcase_x+briefcase_w//2-handle_ww//2, briefcase_y-handle_ww)], fill=self._darker(self.p["surface"], 20))
        clasp_y = briefcase_y + briefcase_h // 3
        self.draw.rectangle([briefcase_x+briefcase_w//3, clasp_y, briefcase_x+briefcase_w*2//3, clasp_y+10], fill=self.p["accent"])


def generate_for_niche(niche, out_dir, variant, palette):
    ensure_dir(out_dir)
    w, h = 1920, 1080
    for section in SECTIONS:
        img = Image.new('RGB', (w, h), palette["bg"])
        draw = ImageDraw.Draw(img)
        nd = NicheDrawer(img, draw, w, h, palette)
        getattr(nd, niche)(seed=SECTIONS.index(section))
        draw_section_overlay(draw, w, h, section, palette)
        img.save(f"{out_dir}/{section}.png", quality=95)
        print(f"Generated: {out_dir}/{section}.png")

def main():
    base = "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/public/assets/generated"
    for niche, variants in PALETTES.items():
        for variant, palette in variants.items():
            out_dir = f"{base}/{niche}/{variant}"
            ensure_dir(out_dir)
            generate_for_niche(niche, out_dir, variant, palette)
            print(f"Completed: {niche}/{variant}")

if __name__ == "__main__":
    main()
