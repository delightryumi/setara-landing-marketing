import os
from PIL import Image, ImageOps

images_dir = r"f:\WEB-SERVER\WEB\setara-landing-marketing\public\images"
image_names = [
    "pos-1.png",
    "pos-2.png",
    "front-office.png",
    "housekeeping.png",
    "food-beverage.png",
    "purchasing.png",
    "accounting.png",
    "hrd.png",
    "self-order.png",
    "employee-portal.png"
]

print("Starting dark image generation...")

for name in image_names:
    src_path = os.path.join(images_dir, name)
    dest_path = os.path.join(images_dir, name.replace(".png", "-dark.png"))
    
    # If the source image does not exist, create a simple dark placeholder
    if not os.path.exists(src_path):
        print(f"Source {name} not found. Creating a dark placeholder...")
        img = Image.new("RGB", (800, 600), color=(20, 20, 20))
        img.save(dest_path)
        # also create a light placeholder so we don't get 404
        img_light = Image.new("RGB", (800, 600), color=(240, 240, 240))
        img_light.save(src_path)
        continue

    try:
        # Load light image
        img = Image.open(src_path).convert("RGBA")
        
        # Split into channels
        r, g, b, a = img.split()
        
        # Invert colors for RGB channels
        rgb_img = Image.merge("RGB", (r, g, b))
        inverted_rgb = ImageOps.invert(rgb_img)
        
        # Re-merge with original alpha or a slightly darkened transparent layer
        dark_img = Image.merge("RGBA", (inverted_rgb.split()[0], inverted_rgb.split()[1], inverted_rgb.split()[2], a))
        
        # Save dark version
        dark_img.save(dest_path)
        print(f"Created dark version: {dest_path}")
    except Exception as e:
        print(f"Failed to process {name}: {e}")
        # Fallback to simple copy or simple placeholder
        try:
            img = Image.new("RGB", (800, 600), color=(20, 20, 20))
            img.save(dest_path)
            print(f"Created fallback placeholder for {name}")
        except Exception:
            pass

print("Done!")
