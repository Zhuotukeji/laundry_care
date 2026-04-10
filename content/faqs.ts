export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Stains" | "Symbols" | "Fabrics" | "Drying" | "Ironing";
  keywords: string[];
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-01",
    question: "What water temperature should I use for laundry?",
    answer:
      "Cold water (below 30 C / 85 F) is safe for most everyday loads and saves energy. Use warm water (30-40 C) for moderately soiled items and towels, and hot water (above 60 C) only for whites, heavily soiled work clothes, or bedding that needs sanitizing. When in doubt, check the care label for the maximum recommended temperature.",
    category: "General",
    keywords: ["temperature", "hot water", "cold water", "warm water", "wash temperature"],
  },
  {
    id: "faq-02",
    question: "Can I mix colors and whites in the same load?",
    answer:
      "It is best to separate whites from darks and brights, especially for the first few washes when dye transfer is most likely. If you must combine them, use cold water and a color-catching sheet to reduce bleeding. Once garments have been washed several times and the excess dye is gone, mixing becomes less risky for casual wear.",
    category: "General",
    keywords: ["colors", "whites", "sorting", "dye transfer", "color bleeding"],
  },
  {
    id: "faq-03",
    question: "How do I read care labels on clothing?",
    answer:
      "Care labels use a set of standardized symbols: a tub for washing, a triangle for bleaching, a square for drying, an iron for ironing, and a circle for professional cleaning. A number inside the tub indicates the maximum wash temperature in degrees Celsius. Lines beneath a symbol mean use a gentler cycle, and an X through any symbol means that treatment is not recommended.",
    category: "Symbols",
    keywords: ["care labels", "laundry symbols", "clothing tags", "wash instructions"],
  },
  {
    id: "faq-04",
    question: "What does the triangle symbol on a care label mean?",
    answer:
      "The triangle symbol relates to bleaching. An empty triangle means any bleach is safe, a triangle with diagonal lines means only non-chlorine (oxygen) bleach is allowed, and a solid triangle with an X through it means do not bleach at all. Always follow this guidance to avoid weakening the fabric or causing discoloration.",
    category: "Symbols",
    keywords: ["triangle", "bleach symbol", "care label", "bleaching"],
  },
  {
    id: "faq-05",
    question: "How do I prevent clothes from shrinking?",
    answer:
      "Shrinking is usually caused by high heat and mechanical agitation. Wash prone fabrics like cotton and wool on a cold, gentle cycle and avoid the tumble dryer or use the lowest heat setting. Laying items flat to dry or hanging them on a drying rack is the safest approach for garments you want to keep at their original size.",
    category: "Fabrics",
    keywords: ["shrinking", "prevent shrinkage", "cotton", "wool", "size"],
  },
  {
    id: "faq-06",
    question: "Is air drying better than machine drying?",
    answer:
      "Air drying is gentler on fabrics and uses no energy, which helps clothes last longer and lowers utility bills. However, machine drying is faster and can leave towels feeling softer because the tumbling action fluffs the fibers. A good compromise is to air-dry delicate and heat-sensitive items while machine-drying sturdier fabrics like towels and sheets.",
    category: "Drying",
    keywords: ["air drying", "machine drying", "tumble dryer", "line drying", "energy saving"],
  },
  {
    id: "faq-07",
    question: "How often should I wash jeans?",
    answer:
      "Most denim experts recommend washing jeans every five to ten wears, or when they are visibly dirty or start to smell. Frequent washing fades the color and breaks down the fibers faster. Between washes you can spot-clean stains and hang jeans in fresh air to keep them feeling fresh.",
    category: "Fabrics",
    keywords: ["jeans", "denim", "wash frequency", "fading"],
  },
  {
    id: "faq-08",
    question: "Can I iron polyester?",
    answer:
      "Yes, but use a low heat setting (around 110 C / 230 F) because polyester can melt or become shiny under high heat. Place a pressing cloth between the iron and the fabric for extra protection. Steaming is often a safer and easier alternative for removing wrinkles from polyester garments.",
    category: "Ironing",
    keywords: ["polyester", "ironing", "low heat", "pressing cloth", "synthetic"],
  },
  {
    id: "faq-09",
    question: "How do I remove static from clothes?",
    answer:
      "Static cling builds up when fabrics rub together in low humidity, especially synthetics in the dryer. Adding a dryer sheet or a wool dryer ball helps reduce static. You can also lightly mist garments with water, rub them with a metal hanger, or apply a thin layer of hand lotion to your skin before putting clothes on.",
    category: "Drying",
    keywords: ["static", "static cling", "dryer sheets", "dryer balls"],
  },
  {
    id: "faq-10",
    question: "What is the best way to sort laundry?",
    answer:
      "Start by separating lights, darks, and brights into their own piles. Then sort by fabric weight and care needs: heavy items like towels and jeans in one load, delicates and synthetics in another. Sorting prevents color transfer, ensures each load gets the right wash cycle, and keeps heavier items from damaging lighter fabrics.",
    category: "General",
    keywords: ["sorting", "separating", "laundry loads", "lights", "darks"],
  },
  {
    id: "faq-11",
    question: "How do I remove a red wine stain?",
    answer:
      "Act quickly by blotting (never rubbing) as much wine as possible with a clean cloth. Cover the stain with salt or baking soda to absorb the remaining liquid, let it sit for a few minutes, then rinse with cold water. For stubborn marks, apply a mixture of dish soap and hydrogen peroxide before washing on the warmest setting the fabric allows.",
    category: "Stains",
    keywords: ["red wine", "stain removal", "baking soda", "hydrogen peroxide"],
  },
  {
    id: "faq-12",
    question: "How do I get grease or oil stains out of clothing?",
    answer:
      "Apply a small amount of dish soap or liquid laundry detergent directly to the grease stain and gently work it in with your fingers. Let it sit for at least 15 minutes before washing in the warmest water the fabric can handle. Check that the stain is gone before putting the item in the dryer, because heat will set a grease stain permanently.",
    category: "Stains",
    keywords: ["grease", "oil", "stain removal", "dish soap", "detergent"],
  },
  {
    id: "faq-13",
    question: "What does the circle symbol on a care label mean?",
    answer:
      "The circle symbol indicates professional dry cleaning instructions. A plain circle means dry cleaning is acceptable, while letters inside the circle (such as P, F, or W) tell the cleaner which solvents are safe to use. A circle with an X through it means do not dry clean the garment.",
    category: "Symbols",
    keywords: ["circle", "dry cleaning", "care label", "professional cleaning"],
  },
  {
    id: "faq-14",
    question: "How do I wash delicate fabrics like silk and lace?",
    answer:
      "Hand washing in cool water with a mild detergent is the safest option for silk and lace. Gently swirl the garment in the water without wringing or twisting. If using a machine, place the item in a mesh laundry bag and select the delicate or hand-wash cycle with cold water and a slow spin.",
    category: "Fabrics",
    keywords: ["silk", "lace", "delicate", "hand wash", "mesh bag"],
  },
  {
    id: "faq-15",
    question: "How much detergent should I use per load?",
    answer:
      "Follow the dosing instructions on the detergent package, which are based on load size and soil level. Using too much detergent leaves residue on clothes and inside the machine, while too little may not clean effectively. For high-efficiency (HE) machines, always use an HE-rated detergent and typically about half the amount used in a standard washer.",
    category: "General",
    keywords: ["detergent", "dosage", "HE", "high efficiency", "soap amount"],
  },
  {
    id: "faq-16",
    question: "How do I remove blood stains from fabric?",
    answer:
      "Rinse the stain immediately with cold water; never use hot water, as heat causes the proteins in blood to set into the fibers. Apply hydrogen peroxide or an enzyme-based stain remover to the area and let it soak for 10 to 15 minutes. Wash on a cold cycle and verify the stain is gone before drying.",
    category: "Stains",
    keywords: ["blood", "stain removal", "cold water", "enzyme", "hydrogen peroxide"],
  },
  {
    id: "faq-17",
    question: "What is the proper way to iron a dress shirt?",
    answer:
      "Start with the collar, then move to the cuffs and sleeves, and finish with the body panels (back first, then front). Use the temperature setting recommended on the care label and iron while the shirt is still slightly damp for the best results. A burst of steam helps smooth out stubborn creases around seams and button plackets.",
    category: "Ironing",
    keywords: ["dress shirt", "ironing order", "collar", "cuffs", "steam"],
  },
  {
    id: "faq-18",
    question: "Can I put shoes in the washing machine?",
    answer:
      "Canvas and athletic shoes can usually be machine washed on a gentle cycle with cold water. Remove the laces and insoles first and place the shoes inside a mesh bag or pillowcase to protect both the shoes and the drum. Avoid the dryer; instead stuff them with newspaper or towels and let them air dry away from direct heat.",
    category: "General",
    keywords: ["shoes", "sneakers", "machine wash", "canvas", "athletic shoes"],
  },
  {
    id: "faq-19",
    question: "How do I remove coffee stains from clothes?",
    answer:
      "Blot the excess coffee immediately and flush the stain from the back with cold water to push the coffee out of the fibers. Apply a small amount of liquid detergent or a paste of baking soda and water, gently rub it in, and let it sit for five minutes. Wash on the warmest setting safe for the fabric and check before drying.",
    category: "Stains",
    keywords: ["coffee", "stain removal", "baking soda", "detergent"],
  },
  {
    id: "faq-20",
    question: "What do the dots inside the iron symbol mean?",
    answer:
      "The dots inside the iron symbol indicate the maximum safe temperature. One dot means low heat (up to 110 C) for synthetics, two dots mean medium heat (up to 150 C) for wool and blends, and three dots mean high heat (up to 200 C) for cotton and linen. An iron with an X through it means the garment should not be ironed at all.",
    category: "Symbols",
    keywords: ["iron symbol", "dots", "temperature", "care label", "ironing temperature"],
  },
  {
    id: "faq-21",
    question: "How should I wash wool sweaters?",
    answer:
      "Turn the sweater inside out and hand wash it in lukewarm water with a wool-specific or pH-neutral detergent. Gently squeeze out water without wringing, then roll the sweater in a clean towel to remove excess moisture. Reshape it and lay it flat on a drying rack to prevent stretching.",
    category: "Fabrics",
    keywords: ["wool", "sweater", "hand wash", "reshape", "flat dry"],
  },
  {
    id: "faq-22",
    question: "How do I keep towels soft and fluffy?",
    answer:
      "Avoid using too much detergent and skip fabric softener, which coats the fibers and reduces absorbency over time. Add half a cup of white vinegar to the rinse cycle every few washes to break down detergent buildup. Tumble dry on medium heat with a couple of clean tennis balls or dryer balls to fluff the fibers.",
    category: "Drying",
    keywords: ["towels", "soft", "fluffy", "vinegar", "dryer balls", "fabric softener"],
  },
  {
    id: "faq-23",
    question: "What does the square with a circle inside mean on a care label?",
    answer:
      "The square with a circle inside represents tumble drying. Dots inside the circle indicate the heat level: one dot for low heat, two dots for normal heat, and no dots for any heat. An X through the symbol means the item should not be tumble dried.",
    category: "Symbols",
    keywords: ["square", "circle", "tumble dry", "care label", "dryer symbol"],
  },
  {
    id: "faq-24",
    question: "How do I remove ink stains from clothing?",
    answer:
      "Place a paper towel under the stain and dab it with rubbing alcohol or hand sanitizer using a clean cloth, working from the outside in to prevent spreading. Blot repeatedly as the ink transfers to the cloth, replacing it with a fresh section as needed. Once most of the ink is lifted, rinse with cold water and launder normally.",
    category: "Stains",
    keywords: ["ink", "stain removal", "rubbing alcohol", "hand sanitizer", "ballpoint"],
  },
  {
    id: "faq-25",
    question: "At what temperature should I iron cotton and linen?",
    answer:
      "Cotton and linen can handle high heat, so set your iron to around 200 C (390 F) for the best results. Iron while the fabric is slightly damp or use a spray bottle to mist it, as moisture helps release stubborn wrinkles. For dark-colored cotton or linen, iron on the reverse side to prevent a shiny finish on the surface.",
    category: "Ironing",
    keywords: ["cotton", "linen", "iron temperature", "high heat", "wrinkles"],
  },
];

/**
 * Returns all FAQ items.
 */
export function getAllFaqItems(): FaqItem[] {
  return faqItems;
}

/**
 * Returns FAQ items filtered by the given category.
 */
export function getFaqsByCategory(category: string): FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}
