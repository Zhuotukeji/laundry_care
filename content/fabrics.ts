export interface FabricGuide {
  slug: string;
  title: string;
  description: string;
  overview: string;
  washTemperature: string;
  drying: string;
  ironing: string;
  commonMistakes: string[];
  keywords: string[];
  relatedSlugs: string[];
}

export const fabricGuides: FabricGuide[] = [
  {
    slug: "cotton",
    title: "How to Care for Cotton",
    description:
      "Everything you need to know about washing, drying, and ironing cotton fabrics to keep them soft and long-lasting.",
    overview:
      "Cotton is one of the most versatile and widely used natural fibers, prized for its breathability and comfort. It holds up well to frequent washing but can shrink if exposed to high heat. With proper care, cotton garments will maintain their shape, color, and softness for years.",
    washTemperature:
      "Most cotton items do well in warm water around 40°C (104°F). Use cold water for bright or dark colors to prevent fading, and reserve hot water only for heavily soiled white cotton items.",
    drying:
      "Tumble dry cotton on a medium heat setting, removing items promptly to reduce wrinkles. For garments prone to shrinking, air drying on a flat surface or clothesline is the safest option.",
    ironing:
      "Cotton can withstand high iron temperatures, typically around 200°C (400°F). Iron while the fabric is still slightly damp or use a steam setting for the best results.",
    commonMistakes: [
      "Using hot water on colored cotton, which causes fading",
      "Over-drying in the tumble dryer, leading to shrinkage",
      "Skipping fabric softener, which helps maintain softness",
      "Ignoring care labels that specify cold wash only",
    ],
    keywords: [
      "cotton care",
      "wash cotton",
      "cotton shrinkage",
      "cotton ironing",
      "natural fiber",
      "cotton laundry tips",
    ],
    relatedSlugs: ["linen", "denim"],
  },
  {
    slug: "silk",
    title: "How to Care for Silk",
    description:
      "A complete guide to gently washing and preserving the luxurious feel of silk garments.",
    overview:
      "Silk is a delicate natural protein fiber known for its smooth texture and elegant sheen. It requires gentle handling during washing and drying to avoid damage. Proper silk care preserves its drape and luster, making each garment last through many wears.",
    washTemperature:
      "Hand wash silk in cold water at or below 30°C (86°F) using a mild detergent designed for delicates. If machine washing, use the delicate cycle with a mesh laundry bag.",
    drying:
      "Never wring silk; instead, gently press out excess water with a clean towel. Lay flat on a towel to air dry away from direct sunlight, which can cause discoloration.",
    ironing:
      "Iron silk on the lowest heat setting while the fabric is still slightly damp. Always iron on the reverse side or use a pressing cloth to prevent shine marks.",
    commonMistakes: [
      "Using bleach or harsh detergents that break down silk fibers",
      "Wringing or twisting silk, which distorts its shape",
      "Drying silk in direct sunlight, causing yellowing",
      "Spraying perfume directly onto silk, which can leave permanent stains",
      "Machine washing without a protective mesh bag",
    ],
    keywords: [
      "silk care",
      "hand wash silk",
      "delicate fabric",
      "silk ironing",
      "silk stain removal",
      "luxury fabric care",
      "silk laundry",
    ],
    relatedSlugs: ["cashmere", "rayon"],
  },
  {
    slug: "wool",
    title: "How to Care for Wool",
    description:
      "Learn how to wash, dry, and store wool garments to prevent shrinking and pilling.",
    overview:
      "Wool is a natural fiber valued for its warmth, moisture-wicking properties, and natural resilience. However, wool is highly susceptible to shrinkage and felting when exposed to heat and agitation. Careful laundering techniques are essential to preserving the shape and texture of wool garments.",
    washTemperature:
      "Wash wool in cold water at 30°C (86°F) or below, using a wool-specific or pH-neutral detergent. Hand washing is preferred, but a gentle machine cycle with minimal spin works for sturdier wool knits.",
    drying:
      "Reshape wool garments while damp and lay them flat on a drying rack or clean towel. Never hang wet wool, as it will stretch out of shape under its own weight.",
    ironing:
      "Use a low to medium iron setting with plenty of steam, and always press through a damp cloth. Avoid dragging the iron across the surface to prevent flattening the fibers.",
    commonMistakes: [
      "Washing wool in hot water, which causes irreversible felting",
      "Tumble drying wool, leading to severe shrinkage",
      "Hanging wet wool garments on hangers",
      "Using regular detergent instead of a wool-safe formula",
      "Storing wool without moth protection",
    ],
    keywords: [
      "wool care",
      "wash wool",
      "wool shrinkage",
      "felting prevention",
      "wool sweater care",
      "merino wool",
      "wool laundry",
    ],
    relatedSlugs: ["cashmere", "cotton"],
  },
  {
    slug: "polyester",
    title: "How to Care for Polyester",
    description:
      "Practical tips for washing and maintaining polyester clothing so it stays vibrant and wrinkle-free.",
    overview:
      "Polyester is a durable synthetic fiber that resists wrinkles, stretching, and shrinking. It dries quickly and holds color well, making it a popular choice for everyday wear and athletic apparel. While polyester is low-maintenance, it can trap odors and attract static, so specific care steps help keep it fresh.",
    washTemperature:
      "Wash polyester in warm water around 40°C (104°F) on a regular or permanent press cycle. Cold water is fine for lightly worn items and helps reduce energy usage.",
    drying:
      "Tumble dry polyester on a low heat setting; high heat can cause the fabric to pill or develop a rough texture. Remove promptly to avoid static cling.",
    ironing:
      "Polyester rarely needs ironing, but if necessary, use a low temperature around 150°C (300°F). Iron on the reverse side or use a pressing cloth to prevent melting or shine.",
    commonMistakes: [
      "Using high dryer heat, which damages the fibers and causes pilling",
      "Skipping pre-treatment for oil-based stains, which polyester absorbs easily",
      "Using too much fabric softener, which can coat the fibers and trap odors",
      "Ironing at too high a temperature, risking melting",
    ],
    keywords: [
      "polyester care",
      "wash polyester",
      "synthetic fabric",
      "polyester wrinkles",
      "athletic wear care",
      "polyester laundry",
    ],
    relatedSlugs: ["nylon", "spandex"],
  },
  {
    slug: "linen",
    title: "How to Care for Linen",
    description:
      "Master the art of caring for linen to enjoy its natural texture and breathability season after season.",
    overview:
      "Linen is a strong, breathable natural fiber made from the flax plant, popular in warm-weather clothing and home textiles. It softens beautifully with each wash but is prone to wrinkling. Understanding how to properly wash and dry linen will help you embrace its relaxed aesthetic while keeping it in top condition.",
    washTemperature:
      "Machine wash linen in lukewarm water around 40°C (104°F) on a gentle cycle. Use a mild detergent and avoid overloading the machine so the fabric can move freely.",
    drying:
      "Air drying is best for linen; hang or lay flat while still damp to minimize wrinkles. If using a dryer, select a low heat setting and remove while slightly damp to finish drying naturally.",
    ironing:
      "Iron linen while it is still damp for the smoothest finish, using a medium-high heat setting. For a more relaxed look, skip ironing entirely and embrace the natural creasing.",
    commonMistakes: [
      "Washing linen with heavy items like jeans that cause abrasion",
      "Using bleach on colored linen, which weakens fibers and fades color",
      "Over-drying linen in the dryer, making it stiff and hard to iron",
      "Folding linen for long-term storage along the same creases, causing permanent lines",
    ],
    keywords: [
      "linen care",
      "wash linen",
      "linen wrinkles",
      "flax fiber",
      "linen ironing",
      "summer fabric care",
      "linen laundry tips",
    ],
    relatedSlugs: ["cotton", "rayon"],
  },
  {
    slug: "denim",
    title: "How to Care for Denim",
    description:
      "Keep your jeans looking their best with these denim washing and maintenance tips.",
    overview:
      "Denim is a sturdy cotton twill fabric most commonly associated with jeans and jackets. While denim is built to last, improper washing can cause fading, shrinkage, and loss of shape. Washing less frequently and following the right techniques will help your denim develop a desirable patina over time.",
    washTemperature:
      "Wash denim in cold water at 30°C (86°F) or below, turning garments inside out to preserve the color. Use a small amount of mild detergent and avoid washing denim too frequently.",
    drying:
      "Air dry denim by hanging or laying flat whenever possible to maintain shape and prevent shrinkage. If using a dryer, choose a low heat setting and remove while slightly damp.",
    ironing:
      "Denim rarely requires ironing, but if needed, iron on medium-high heat while inside out. A light steam can help smooth out deep creases without damaging the fabric.",
    commonMistakes: [
      "Washing jeans after every wear, which accelerates fading",
      "Using hot water, which causes significant shrinkage in raw denim",
      "Drying on high heat, leading to a stiff feel and color loss",
      "Washing dark denim with light-colored clothing, causing dye transfer",
    ],
    keywords: [
      "denim care",
      "wash jeans",
      "raw denim",
      "denim fading",
      "jeans laundry",
      "denim maintenance",
      "selvedge denim care",
    ],
    relatedSlugs: ["cotton", "spandex"],
  },
  {
    slug: "nylon",
    title: "How to Care for Nylon",
    description:
      "Simple care instructions for nylon fabrics, from activewear to outerwear and everyday garments.",
    overview:
      "Nylon is a lightweight, strong synthetic fiber that resists abrasion and dries quickly. It is commonly used in activewear, hosiery, and outdoor gear. Nylon is generally easy to care for, but it is sensitive to heat and can be prone to static buildup.",
    washTemperature:
      "Machine wash nylon in cold or warm water up to 40°C (104°F) on a gentle cycle. Separate nylon items from rough fabrics to avoid snagging.",
    drying:
      "Air dry nylon garments when possible, as the fabric dries very quickly. If using a tumble dryer, select the lowest heat setting to prevent warping or melting.",
    ironing:
      "Nylon generally does not need ironing. If wrinkles are present, use the lowest iron setting and place a cloth between the iron and the fabric to prevent damage.",
    commonMistakes: [
      "Using high dryer heat, which can melt or warp nylon fibers",
      "Washing with rough fabrics like denim that cause pilling and snags",
      "Using chlorine bleach, which degrades nylon over time",
      "Ignoring odor buildup by not using an enzyme-based detergent for activewear",
    ],
    keywords: [
      "nylon care",
      "wash nylon",
      "synthetic fabric care",
      "nylon activewear",
      "nylon drying",
      "nylon laundry",
    ],
    relatedSlugs: ["polyester", "spandex"],
  },
  {
    slug: "cashmere",
    title: "How to Care for Cashmere",
    description:
      "Protect your cashmere investment with gentle washing, proper drying, and smart storage practices.",
    overview:
      "Cashmere is a premium natural fiber obtained from cashmere goats, known for its exceptional softness and insulating warmth. It is more delicate than regular wool and requires extra care to prevent pilling, stretching, and fiber loss. Treating cashmere gently will reward you with garments that feel luxurious for years.",
    washTemperature:
      "Hand wash cashmere in cold water at or below 30°C (86°F) using a gentle, wool-safe detergent. Avoid agitating the fabric; instead, soak for a few minutes and gently squeeze.",
    drying:
      "Press excess water out by rolling the garment in a clean towel. Reshape and lay flat on a dry towel away from direct heat or sunlight.",
    ironing:
      "Steaming is preferred over ironing for cashmere. If you must iron, use the lowest heat setting on the reverse side with a pressing cloth between the iron and the fabric.",
    commonMistakes: [
      "Machine washing cashmere without a mesh bag and delicate cycle",
      "Hanging cashmere to dry, which causes stretching at the shoulders",
      "Using regular detergent that strips natural oils from the fibers",
      "Wearing cashmere with rough accessories that cause pilling",
      "Storing without cedar or lavender sachets to repel moths",
    ],
    keywords: [
      "cashmere care",
      "wash cashmere",
      "cashmere pilling",
      "luxury knitwear care",
      "cashmere storage",
      "hand wash cashmere",
      "cashmere sweater care",
      "delicate wool care",
    ],
    relatedSlugs: ["wool", "silk"],
  },
  {
    slug: "rayon",
    title: "How to Care for Rayon",
    description:
      "Understand the unique needs of rayon to prevent shrinkage, stretching, and loss of drape.",
    overview:
      "Rayon is a semi-synthetic fiber made from regenerated cellulose, offering the soft drape of natural fibers at an affordable price. It is commonly used in blouses, dresses, and linings. Rayon is particularly vulnerable to water damage when wet, so careful washing and drying are essential to maintaining its shape.",
    washTemperature:
      "Hand wash rayon in cold water at 30°C (86°F) or below with a gentle detergent. Some rayon garments are dry-clean only, so always check the care label first.",
    drying:
      "Lay rayon flat on a towel to dry, reshaping while damp. Never wring or twist rayon, and avoid the tumble dryer entirely as heat can cause permanent shrinkage.",
    ironing:
      "Iron rayon on a low to medium setting while the garment is still slightly damp. Use the reverse side of the fabric and avoid steam, which can cause water spots on certain rayon finishes.",
    commonMistakes: [
      "Machine washing rayon labeled as dry-clean only",
      "Wringing or twisting wet rayon, which distorts the weave",
      "Tumble drying rayon, causing it to shrink dramatically",
      "Spraying water directly on rayon while ironing, leaving marks",
      "Storing rayon on wire hangers that can leave shoulder dents",
    ],
    keywords: [
      "rayon care",
      "wash rayon",
      "rayon shrinkage",
      "viscose care",
      "semi-synthetic fabric",
      "rayon laundry tips",
      "rayon ironing",
    ],
    relatedSlugs: ["silk", "linen"],
  },
  {
    slug: "spandex",
    title: "How to Care for Spandex",
    description:
      "Keep your stretchy spandex and elastane garments from losing their shape with these care guidelines.",
    overview:
      "Spandex, also known as elastane or Lycra, is a synthetic fiber renowned for its exceptional elasticity. It is rarely used alone and is typically blended with other fabrics to add stretch to activewear, swimwear, and fitted garments. Heat and harsh chemicals are the biggest enemies of spandex, breaking down its elastic properties over time.",
    washTemperature:
      "Wash spandex blends in cold water at 30°C (86°F) or below on a gentle cycle. Use a mild detergent and avoid bleach or fabric softeners, which degrade the elastic fibers.",
    drying:
      "Air dry spandex garments by laying them flat or hanging them away from direct sunlight. Never tumble dry spandex, as the heat breaks down elasticity permanently.",
    ironing:
      "Spandex should not be ironed, as even low heat can damage the elastic fibers. If a blended garment needs pressing, use the lowest setting and avoid the areas with the most stretch.",
    commonMistakes: [
      "Tumble drying spandex blends, which destroys elasticity",
      "Using fabric softener, which coats and weakens the fibers",
      "Exposing spandex to chlorine frequently without rinsing promptly",
      "Storing spandex in compressed or folded positions for extended periods",
      "Ironing directly on spandex sections of a blended garment",
    ],
    keywords: [
      "spandex care",
      "elastane care",
      "Lycra care",
      "stretch fabric laundry",
      "activewear washing",
      "swimwear care",
      "spandex maintenance",
    ],
    relatedSlugs: ["polyester", "nylon"],
  },
];

export function getAllFabricGuides(): FabricGuide[] {
  return fabricGuides;
}

export function getFabricGuide(slug: string): FabricGuide | undefined {
  return fabricGuides.find((guide) => guide.slug === slug);
}

export function getFabricSlugs(): string[] {
  return fabricGuides.map((guide) => guide.slug);
}
