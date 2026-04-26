const fs = require('fs');
const path = require('path');

const templatesDir = './src/templates';

const categoryImages = {
  photographer: {
    hero: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200',
    featured: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800',
    brand: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    contact: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
  },
  videographer: {
    hero: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=1200',
    featured: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    brand: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
    contact: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
  },
  makeup_artist: {
    hero: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200',
    featured: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
    brand: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800',
    contact: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
  },
  hair_stylist: {
    hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200',
    featured: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800',
    brand: 'https://images.unsplash.com/photo-1562322140-8baeece509a7?w=800',
    contact: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800',
  },
  fashion_designer: {
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200',
    featured: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800',
    brand: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    contact: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
  },
  model: {
    hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200',
    featured: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800',
    brand: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
    contact: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
  },
  interior_designer: {
    hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
    featured: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    brand: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    contact: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
  },
  architect: {
    hero: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200',
    featured: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
    brand: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    contact: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800',
  },
  artist_painter: {
    hero: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200',
    featured: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    brand: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
    contact: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800',
  },
  illustrator: {
    hero: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200',
    featured: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    brand: 'https://images.unsplash.com/photo-1633355444132-695d5876cd00?w=800',
    contact: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800',
  },
  calligrapher: {
    hero: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200',
    featured: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800',
    brand: 'https://images.unsplash.com/photo-1516953957951-e1f53e71849a?w=800',
    contact: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
  },
  craft_artist: {
    hero: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200',
    featured: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800',
    brand: 'https://images.unsplash.com/photo-1558618047-f4b511cc0a08?w=800',
    contact: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800',
  },
  floral_designer: {
    hero: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200',
    featured: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    brand: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800',
    contact: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800',
  },
  wedding_planner: {
    hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    featured: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    brand: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
    contact: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
  },
  event_planner: {
    hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200',
    featured: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
    brand: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    contact: 'https://images.unsplash.com/photo-1467853602791-3e4b51c0c0b2?w=800',
  },
  decor_stylist: {
    hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
    featured: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    brand: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800',
    contact: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  },
  baker: {
    hero: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200',
    featured: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800',
    brand: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800',
    contact: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
  },
  chef: {
    hero: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200',
    featured: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    brand: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    contact: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800',
  },
  fitness_trainer: {
    hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200',
    featured: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    brand: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    contact: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800',
  },
  yoga_instructor: {
    hero: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200',
    featured: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    brand: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
    contact: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800',
  },
  personal_coach: {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    featured: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800',
    brand: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    contact: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800',
  },
  tutor: {
    hero: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200',
    featured: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    brand: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
    contact: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
  },
  content_creator: {
    hero: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',
    featured: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
    brand: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800',
    contact: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800',
  },
  influencer: {
    hero: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=1200',
    featured: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800',
    brand: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800',
    contact: 'https://images.unsplash.com/photo-158集?w=800',
  },
  nutritionist: {
    hero: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200',
    featured: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
    brand: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800',
    contact: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800',
  },
  skincare_specialist: {
    hero: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200',
    featured: 'https://images.unsplash.com/photo-1570194065650-d99fb4d6a673?w=800',
    brand: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800',
    contact: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
  },
  nail_artist: {
    hero: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200',
    featured: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    brand: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
    contact: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
  },
  boutique_owner: {
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    featured: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800',
    brand: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    contact: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
  },
  creative_consultant: {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    featured: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800',
    brand: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    contact: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800',
  },
  mehndi_artist: {
    hero: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a2d7?w=1200',
    featured: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=800',
    brand: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    contact: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
  },
};

const templateDirs = fs.readdirSync(templatesDir);

templateDirs.forEach(templateName => {
  const configPath = path.join(templatesDir, templateName, 'config.json');

  if (!fs.existsSync(configPath)) return;

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  const category = templateName.replace('-premium-max', '').replace('-premium', '');

  if (!categoryImages[category]) {
    console.log(`No images for category: ${category}`);
    return;
  }

  const images = categoryImages[category];

  config.pages.forEach(page => {
    page.sections.forEach(section => {
      if (section.type === 'hero-cinematic' || section.type === 'hero-section') {
        section.content.backgroundImage = images.hero;
      }
      if (section.type === 'gallery-grid' && section.content.images) {
        section.content.images = [images.featured];
      }
      if (section.type === 'split-media' && section.content.image) {
        section.content.image = images.brand;
      }
      if (section.type === 'cta-split' && section.content.backgroundImage) {
        section.content.backgroundImage = images.contact;
      }
    });
  });

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`Updated: ${templateName}`);
});

console.log('Done!');