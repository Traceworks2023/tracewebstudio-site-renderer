// update-config-images.js
const fs = require('fs');
const path = require('path');

function update(slug) {
  const configPath = path.resolve(__dirname, `src/templates/${slug}/config.json`);
  const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const baseSlug = slug.replace(/-(growth|pro)$/, '');
  const variant = slug.endsWith('-growth') ? 'growth' : 'pro';
  const prefix = `/assets/generated/${baseSlug}/${variant}`;
  
  const sections = data.pages[0].sections;
  
  sections.forEach(s => {
    // Hero images
    if (s.content.hasOwnProperty('image') && s.content.image === '') {
      s.content.image = `${prefix}/hero-main.png`;
    }
    if (s.content.images && s.content.images.length > 0 && s.content.images[0] === '') {
      s.content.images = [`${prefix}/hero-main.png`];
    }
    
    // Gallery / masonry items
    if (s.content.items && Array.isArray(s.content.items)) {
      s.content.items.forEach((item, i) => {
        if (item.image === '') {
          if (item.title?.includes('Baraat') && variant === 'pro') {
            const idx = (i % 5) + 1;
            item.image = `${prefix}/baraat-0${idx}.png`;
          } else {
            const idx = (i % 6) + 1;
            item.image = `${prefix}/work-0${idx}.png`;
          }
        }
      });
    }
    
    // Horizontal scroll items
    if (s.type === 'horizontal-scroll' && s.content.items) {
      s.content.items.forEach((item, i) => {
        if (item.image === '') {
          item.image = `${prefix}/baraat-0${i + 1}.png`;
        }
      });
    }
  });
  
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
  console.log(`Updated ${slug}`);
}

['wedding-photographer-growth', 'wedding-photographer-pro', 'mehndi-artist-growth', 'mehndi-artist-pro'].forEach(update);
console.log('All configs updated');
