export interface SymbolGuide {
  slug: string;
  title: string;
  description: string;
  symbolName: string;
  category: "Washing" | "Drying" | "Ironing" | "Bleaching" | "Professional Care";
  meaning: string;
  recommendedAction: string;
  avoidList: string[];
  keywords: string[];
  relatedSlugs: string[];
}

export const symbolGuides: SymbolGuide[] = [
  {
    slug: "wash-normal",
    title: "Normal Wash Cycle Symbol Explained",
    description:
      "Learn what the normal wash cycle symbol means and how to use it for everyday laundry.",
    symbolName: "Normal Wash",
    category: "Washing",
    meaning:
      "The normal wash symbol is a washtub icon without any additional markings. It indicates that the garment can be machine washed using a standard cycle with regular agitation. There are no special temperature or cycle restrictions beyond what is typical for everyday fabrics.",
    recommendedAction:
      "Place the garment in the washing machine and select the normal or regular cycle. Use your usual laundry detergent and follow any temperature guidance on other care labels. This setting works well for cotton, linen, and durable synthetic fabrics that can withstand full agitation.",
    avoidList: [
      "Do not use this cycle for delicate or embellished fabrics",
      "Avoid overloading the machine as it reduces cleaning effectiveness",
      "Do not ignore other care label symbols that may restrict temperature",
      "Avoid washing with heavily soiled items that may require pre-treatment",
    ],
    keywords: [
      "normal wash",
      "machine wash",
      "regular cycle",
      "standard wash",
      "washtub symbol",
      "laundry care label",
    ],
    relatedSlugs: ["wash-temperature", "wash-hand", "wash-do-not"],
  },
  {
    slug: "wash-temperature",
    title: "Wash Temperature Symbol Guide",
    description:
      "Understand the wash temperature symbol and how to select the correct water heat for your fabrics.",
    symbolName: "Wash at Specified Temperature",
    category: "Washing",
    meaning:
      "The wash temperature symbol is a washtub icon with a number inside indicating the maximum water temperature in degrees Celsius. Common values include 30, 40, 60, and 95. This tells you the hottest water the fabric can safely tolerate without damage such as shrinking or color loss.",
    recommendedAction:
      "Check the number inside the washtub symbol and set your washing machine temperature to that value or lower. For example, a label showing 40 means you should wash at 40 degrees Celsius or cooler. Using cooler water than specified is always safe and can help preserve colors and reduce energy consumption.",
    avoidList: [
      "Do not exceed the temperature indicated on the label",
      "Avoid using hot water on fabrics labeled for cold wash only",
      "Do not assume all fabrics can handle high-temperature washes",
    ],
    keywords: [
      "wash temperature",
      "water temperature",
      "degrees celsius",
      "cold wash",
      "warm wash",
      "hot wash",
      "temperature setting",
    ],
    relatedSlugs: ["wash-normal", "wash-hand", "wash-do-not"],
  },
  {
    slug: "wash-hand",
    title: "Hand Wash Only Symbol Explained",
    description:
      "Find out what the hand wash symbol means and how to properly hand wash your garments.",
    symbolName: "Hand Wash",
    category: "Washing",
    meaning:
      "The hand wash symbol is a washtub icon with a hand reaching into the water. It means the garment is too delicate for machine washing and should be washed by hand. This is common for silk, wool, lace, and other fabrics that could be damaged by machine agitation.",
    recommendedAction:
      "Fill a basin or sink with cool to lukewarm water and add a small amount of gentle detergent. Submerge the garment and gently swirl or squeeze it without wringing or twisting. Rinse thoroughly with clean water and press out excess moisture by rolling the item in a clean towel before laying flat or hanging to dry.",
    avoidList: [
      "Do not put hand-wash-only garments in the washing machine",
      "Avoid wringing or twisting the fabric as this can cause stretching",
      "Do not use hot water as it may shrink or damage delicate fibers",
      "Avoid harsh detergents or bleach unless the label specifically allows it",
    ],
    keywords: [
      "hand wash",
      "delicate wash",
      "gentle wash",
      "hand wash only",
      "silk care",
      "wool care",
      "delicate fabrics",
    ],
    relatedSlugs: ["wash-normal", "wash-do-not", "do-not-bleach"],
  },
  {
    slug: "wash-do-not",
    title: "Do Not Wash Symbol Explained",
    description:
      "Learn what the do not wash symbol means and how to care for garments that cannot be washed.",
    symbolName: "Do Not Wash",
    category: "Washing",
    meaning:
      "The do not wash symbol is a washtub icon with a large X through it. It means the garment should not be washed in water at all, whether by machine or by hand. These items typically require professional dry cleaning or specialized spot cleaning to avoid damage.",
    recommendedAction:
      "Take the garment to a professional dry cleaner for routine cleaning. For minor stains or spots, use a dry cleaning solvent or spot-cleaning spray designed for the fabric type. Always test any spot-cleaning product on a hidden area of the garment first to check for adverse reactions.",
    avoidList: [
      "Do not machine wash or hand wash the garment",
      "Avoid submerging the garment in water of any temperature",
      "Do not attempt to soak stains out with water-based solutions",
    ],
    keywords: [
      "do not wash",
      "no washing",
      "dry clean only",
      "water sensitive",
      "no water",
      "spot clean",
    ],
    relatedSlugs: ["dry-clean", "wash-hand", "do-not-bleach"],
  },
  {
    slug: "tumble-dry",
    title: "Tumble Dry Symbol Explained",
    description:
      "Understand the basic tumble dry symbol and when it is safe to use your dryer.",
    symbolName: "Tumble Dry",
    category: "Drying",
    meaning:
      "The tumble dry symbol is a square with a circle inside it. When shown without any dots or additional markings, it means the garment can be tumble dried at any heat setting. This is the most permissive dryer symbol you will find on a care label.",
    recommendedAction:
      "Place the garment in the tumble dryer and select your preferred heat setting. Since no specific temperature restriction is indicated, you can use low, medium, or high heat based on the fabric weight and your preference. Remove the garment promptly when the cycle ends to minimize wrinkling.",
    avoidList: [
      "Do not leave items in the dryer for extended periods after the cycle ends",
      "Avoid overloading the dryer as it reduces drying efficiency",
      "Do not ignore other care symbols that may suggest lower heat",
      "Avoid tumble drying items with loose embellishments that could detach",
    ],
    keywords: [
      "tumble dry",
      "dryer safe",
      "machine dry",
      "dryer symbol",
      "tumble drying",
      "laundry dryer",
    ],
    relatedSlugs: ["tumble-dry-low", "tumble-dry-high", "do-not-tumble-dry"],
  },
  {
    slug: "tumble-dry-low",
    title: "Tumble Dry Low Heat Symbol Guide",
    description:
      "Learn what the low heat tumble dry symbol means and which fabrics benefit from gentle drying.",
    symbolName: "Tumble Dry Low",
    category: "Drying",
    meaning:
      "The tumble dry low symbol is a square with a circle inside and a single dot in the center of the circle. The single dot represents low heat. This symbol indicates that the garment can be tumble dried but only at a reduced temperature to prevent shrinkage, damage, or excessive wear.",
    recommendedAction:
      "Set your tumble dryer to the low heat or delicate setting before starting the cycle. This is ideal for synthetic fabrics, lightweight items, and garments prone to shrinking. Consider using dryer balls to improve air circulation and reduce drying time at the lower temperature.",
    avoidList: [
      "Do not use medium or high heat settings for these garments",
      "Avoid over-drying as it can cause static and fiber damage",
      "Do not mix heavy items with lightweight low-heat garments",
    ],
    keywords: [
      "tumble dry low",
      "low heat drying",
      "gentle dry",
      "delicate dryer setting",
      "one dot dryer symbol",
      "reduced heat",
      "synthetic fabrics",
    ],
    relatedSlugs: ["tumble-dry", "tumble-dry-high", "do-not-tumble-dry"],
  },
  {
    slug: "tumble-dry-high",
    title: "Tumble Dry High Heat Symbol Guide",
    description:
      "Discover what the high heat tumble dry symbol means and which items can handle it.",
    symbolName: "Tumble Dry High",
    category: "Drying",
    meaning:
      "The tumble dry high symbol is a square with a circle inside and two dots in the center of the circle. The two dots represent high heat. This indicates that the garment is durable enough to withstand tumble drying at a high temperature setting without risk of damage.",
    recommendedAction:
      "Select the high heat or regular setting on your tumble dryer. This setting works best for heavy cotton items like towels, bed sheets, and denim. High heat drying is effective at killing bacteria and dust mites, making it a good choice for bedding and heavily soiled workwear.",
    avoidList: [
      "Do not use high heat on synthetic or blended fabrics unless the label permits it",
      "Avoid drying items with rubber, elastic, or heat-sensitive trims on high heat",
      "Do not tumble dry high heat items together with delicate fabrics",
      "Avoid leaving items sitting in a hot dryer after the cycle completes",
    ],
    keywords: [
      "tumble dry high",
      "high heat drying",
      "two dots dryer",
      "heavy duty dry",
      "cotton drying",
      "towel drying",
    ],
    relatedSlugs: ["tumble-dry", "tumble-dry-low", "do-not-tumble-dry"],
  },
  {
    slug: "do-not-tumble-dry",
    title: "Do Not Tumble Dry Symbol Explained",
    description:
      "Understand the do not tumble dry symbol and learn alternative drying methods for your clothes.",
    symbolName: "Do Not Tumble Dry",
    category: "Drying",
    meaning:
      "The do not tumble dry symbol is a square with a circle inside and a large X drawn over it. This means the garment must not be placed in a tumble dryer at any heat setting. The fabric may shrink, warp, melt, or otherwise be damaged by the heat and mechanical action of a dryer.",
    recommendedAction:
      "Air dry the garment instead of using a tumble dryer. Depending on the fabric, you can hang it on a clothesline, lay it flat on a drying rack, or drape it over a hanger. Check the care label for additional drying guidance such as the line dry or dry flat symbols that may indicate the preferred air drying method.",
    avoidList: [
      "Do not place the garment in a tumble dryer at any temperature",
      "Avoid using heated drying racks as a substitute",
      "Do not wring out excess water aggressively before air drying",
    ],
    keywords: [
      "do not tumble dry",
      "no dryer",
      "air dry only",
      "hang dry",
      "no machine dry",
      "dryer prohibited",
      "line dry alternative",
    ],
    relatedSlugs: ["line-dry", "dry-flat", "tumble-dry"],
  },
  {
    slug: "line-dry",
    title: "Line Dry Symbol Explained",
    description:
      "Learn what the line dry symbol means and the best practices for drying clothes on a line.",
    symbolName: "Line Dry",
    category: "Drying",
    meaning:
      "The line dry symbol is a square with a curved line near the top, representing a clothesline. It indicates that the garment should be hung up to dry naturally in the air rather than being placed in a tumble dryer. This method is gentle on fabrics and helps preserve the shape and color of clothing.",
    recommendedAction:
      "Hang the garment on a clothesline, drying rack, or sturdy hanger in a well-ventilated area. If drying outdoors, choose a shaded spot to prevent sun fading on colored fabrics. Shake the garment gently before hanging to reduce wrinkles, and use clothespins at the seams or sturdier areas to avoid stretching.",
    avoidList: [
      "Do not hang heavy knits on a line as they may stretch out of shape",
      "Avoid prolonged direct sunlight exposure on dark or brightly colored fabrics",
      "Do not hang garments in a damp or poorly ventilated space",
      "Avoid using wire hangers that can leave marks on wet fabric",
    ],
    keywords: [
      "line dry",
      "hang dry",
      "air dry",
      "clothesline",
      "natural drying",
      "outdoor drying",
      "hang to dry",
    ],
    relatedSlugs: ["dry-flat", "do-not-tumble-dry", "tumble-dry"],
  },
  {
    slug: "dry-flat",
    title: "Dry Flat Symbol Explained",
    description:
      "Find out what the dry flat symbol means and which garments require flat drying to maintain their shape.",
    symbolName: "Dry Flat",
    category: "Drying",
    meaning:
      "The dry flat symbol is a square with a horizontal line inside it. It means the garment should be laid flat on a clean surface to dry rather than being hung or tumble dried. This prevents stretching, distortion, and misshaping that can occur when heavy, wet fabrics are hung vertically.",
    recommendedAction:
      "After washing, gently squeeze out excess water without wringing and lay the garment flat on a clean, dry towel or a mesh drying rack. Reshape the garment to its original dimensions while it is still damp. Flip it occasionally to ensure even drying on both sides, and replace the towel underneath if it becomes saturated.",
    avoidList: [
      "Do not hang the garment to dry as gravity can stretch the fibers",
      "Avoid placing the garment on a colored surface that could transfer dye",
      "Do not place it near direct heat sources like radiators",
    ],
    keywords: [
      "dry flat",
      "flat drying",
      "reshape while damp",
      "knit drying",
      "sweater care",
      "horizontal dry",
      "drying rack",
      "prevent stretching",
    ],
    relatedSlugs: ["line-dry", "do-not-tumble-dry", "wash-hand"],
  },
  {
    slug: "iron-low",
    title: "Iron on Low Heat Symbol Guide",
    description:
      "Understand the low heat ironing symbol and which fabrics require a cool iron.",
    symbolName: "Iron Low Temperature",
    category: "Ironing",
    meaning:
      "The iron low symbol is an iron icon with a single dot inside it. The single dot indicates a maximum ironing temperature of around 110 degrees Celsius. This setting is intended for heat-sensitive fabrics like acetate, acrylic, nylon, and polypropylene that can melt or become shiny under higher heat.",
    recommendedAction:
      "Set your iron to the lowest temperature setting, often labeled as the synthetic or nylon setting. Iron the garment on the reverse side whenever possible to protect the outer surface. Use a pressing cloth between the iron and the fabric for an extra layer of protection, and avoid leaving the iron in one spot for too long.",
    avoidList: [
      "Do not use medium or high heat on fabrics labeled for low ironing only",
      "Avoid using steam unless the label specifically allows it",
      "Do not press too hard or hold the iron in one place",
      "Avoid ironing over prints, decals, or embellishments directly",
    ],
    keywords: [
      "iron low",
      "low heat iron",
      "one dot iron",
      "synthetic ironing",
      "cool iron",
      "nylon ironing",
    ],
    relatedSlugs: ["iron-medium", "iron-high", "do-not-iron"],
  },
  {
    slug: "iron-medium",
    title: "Iron on Medium Heat Symbol Guide",
    description:
      "Learn what the medium heat ironing symbol means and how to iron fabrics at moderate temperatures.",
    symbolName: "Iron Medium Temperature",
    category: "Ironing",
    meaning:
      "The iron medium symbol is an iron icon with two dots inside it. The two dots indicate a maximum ironing temperature of around 150 degrees Celsius. This setting is suitable for fabrics like polyester, silk, wool, and blended materials that need moderate heat to remove wrinkles without scorching.",
    recommendedAction:
      "Set your iron to the medium temperature setting, typically labeled as the silk, wool, or polyester setting. For wool and silk, use a pressing cloth or iron on the reverse side to prevent shine marks. Light steam can often be used at this setting but check the garment label for any steam restrictions.",
    avoidList: [
      "Do not exceed the medium heat setting for these fabrics",
      "Avoid ironing silk when it is completely dry as it may scorch",
      "Do not use heavy pressure on wool as it can flatten the texture",
    ],
    keywords: [
      "iron medium",
      "medium heat iron",
      "two dots iron",
      "wool ironing",
      "silk ironing",
      "polyester ironing",
      "moderate heat",
    ],
    relatedSlugs: ["iron-low", "iron-high", "do-not-iron"],
  },
  {
    slug: "iron-high",
    title: "Iron on High Heat Symbol Guide",
    description:
      "Discover what the high heat ironing symbol means and which sturdy fabrics can handle maximum iron temperature.",
    symbolName: "Iron High Temperature",
    category: "Ironing",
    meaning:
      "The iron high symbol is an iron icon with three dots inside it. The three dots indicate a maximum ironing temperature of around 200 degrees Celsius. This is the highest ironing setting and is designed for durable natural fibers like cotton and linen that require strong heat to effectively smooth out wrinkles.",
    recommendedAction:
      "Set your iron to the highest temperature setting, typically labeled as the cotton or linen setting. Steam can be used freely at this temperature and is often necessary to remove stubborn wrinkles from heavy fabrics. Iron while the fabric is slightly damp for the best results, and use a spray bottle to remoisten dry areas as needed.",
    avoidList: [
      "Do not use high heat on synthetic, silk, or wool fabrics",
      "Avoid ironing over buttons or zippers at high temperature as they may melt or scratch",
      "Do not leave the iron face-down on the fabric at any time",
      "Avoid ironing dark cotton at high heat on the right side as it may develop a shine",
    ],
    keywords: [
      "iron high",
      "high heat iron",
      "three dots iron",
      "cotton ironing",
      "linen ironing",
      "maximum heat",
      "steam iron",
    ],
    relatedSlugs: ["iron-medium", "iron-low", "do-not-iron"],
  },
  {
    slug: "do-not-iron",
    title: "Do Not Iron Symbol Explained",
    description:
      "Understand the do not iron symbol and learn wrinkle-removal alternatives for non-ironable garments.",
    symbolName: "Do Not Iron",
    category: "Ironing",
    meaning:
      "The do not iron symbol is an iron icon with a large X through it. It means the garment should never be pressed with an iron at any temperature. These garments are typically made from fabrics that can melt, warp, lose texture, or become permanently damaged when exposed to direct heat and pressure.",
    recommendedAction:
      "To remove wrinkles from non-ironable garments, hang them in a steamy bathroom while you shower or use a handheld garment steamer at a safe distance if the label permits steam. You can also smooth wrinkles by laying the garment flat on a towel and gently patting it into shape while slightly damp after washing.",
    avoidList: [
      "Do not press the garment with an iron at any heat setting",
      "Avoid using heat-based wrinkle removers directly on the fabric",
      "Do not attempt to press creases into the garment with any heated tool",
    ],
    keywords: [
      "do not iron",
      "no ironing",
      "iron prohibited",
      "wrinkle alternative",
      "steam only",
      "heat sensitive",
    ],
    relatedSlugs: ["iron-low", "iron-medium", "iron-high"],
  },
  {
    slug: "bleach-allowed",
    title: "Bleach Allowed Symbol Explained",
    description:
      "Learn what the bleach allowed symbol means and how to safely bleach your garments.",
    symbolName: "Bleach Allowed",
    category: "Bleaching",
    meaning:
      "The bleach allowed symbol is an empty triangle. It indicates that the garment can be bleached using any type of bleach, including chlorine bleach and oxygen-based bleach. This is the most permissive bleaching symbol and is typically found on white or colorfast fabrics made from durable fibers.",
    recommendedAction:
      "Add bleach to your wash cycle following the product instructions and your washing machine guidelines. Use chlorine bleach for white fabrics to restore brightness, or oxygen-based bleach for a gentler option that is also suitable for colored items. Always measure bleach carefully and use the bleach dispenser in your machine rather than pouring it directly onto the garment.",
    avoidList: [
      "Do not pour undiluted bleach directly onto fabric",
      "Avoid using chlorine bleach on colored garments even if the symbol allows it unless they are confirmed colorfast",
      "Do not mix bleach with ammonia or other household cleaners",
      "Avoid bleaching more frequently than necessary as it weakens fibers over time",
    ],
    keywords: [
      "bleach allowed",
      "triangle symbol",
      "chlorine bleach",
      "oxygen bleach",
      "whitening",
      "bleach safe",
      "fabric bleaching",
    ],
    relatedSlugs: ["do-not-bleach", "wash-normal", "wash-temperature"],
  },
  {
    slug: "do-not-bleach",
    title: "Do Not Bleach Symbol Explained",
    description:
      "Understand the do not bleach symbol and discover safe stain removal alternatives.",
    symbolName: "Do Not Bleach",
    category: "Bleaching",
    meaning:
      "The do not bleach symbol is a triangle with a large X through it. It means no bleach of any kind should be used on the garment, including chlorine bleach and oxygen-based bleach. Using bleach on these fabrics can cause discoloration, weakening of fibers, or permanent damage to the material.",
    recommendedAction:
      "Use bleach-free stain removers or enzyme-based detergents to tackle stains on these garments. For spot treatment, apply a small amount of gentle stain remover to the affected area and let it sit before washing. White vinegar or baking soda pastes can serve as mild, bleach-free alternatives for brightening and deodorizing.",
    avoidList: [
      "Do not use chlorine bleach or oxygen-based bleach on the garment",
      "Avoid detergents that contain built-in bleaching agents",
      "Do not soak the garment in any bleach solution",
    ],
    keywords: [
      "do not bleach",
      "no bleach",
      "bleach prohibited",
      "bleach-free",
      "stain removal alternative",
      "color safe",
      "non-bleach",
    ],
    relatedSlugs: ["bleach-allowed", "wash-hand", "wash-do-not"],
  },
  {
    slug: "dry-clean",
    title: "Dry Clean Symbol Explained",
    description:
      "Learn what the dry clean symbol means and when to take your garments to a professional cleaner.",
    symbolName: "Dry Clean",
    category: "Professional Care",
    meaning:
      "The dry clean symbol is a circle, sometimes containing a letter that specifies which solvent the cleaner should use. A plain circle means the garment can be dry cleaned with any standard solvent. This care method uses chemical solvents instead of water to clean fabrics that may be damaged by washing.",
    recommendedAction:
      "Take the garment to a reputable professional dry cleaner for routine cleaning. Point out any specific stains so the cleaner can pre-treat them with appropriate solvents. Between dry cleaning visits, use a garment brush or lint roller to keep the item looking fresh and hang it in a well-ventilated area to air out after wearing.",
    avoidList: [
      "Do not attempt to wash dry-clean-only garments at home with water",
      "Avoid using at-home dry cleaning kits on heavily soiled or stained items",
      "Do not store recently dry-cleaned garments in the plastic bag from the cleaner",
      "Avoid ironing dry-clean-only items without checking the ironing symbol first",
    ],
    keywords: [
      "dry clean",
      "professional cleaning",
      "solvent cleaning",
      "dry clean only",
      "circle symbol",
      "chemical cleaning",
      "garment care",
    ],
    relatedSlugs: ["do-not-dry-clean", "wash-do-not", "do-not-iron"],
  },
  {
    slug: "do-not-dry-clean",
    title: "Do Not Dry Clean Symbol Explained",
    description:
      "Understand the do not dry clean symbol and learn which cleaning methods to use instead.",
    symbolName: "Do Not Dry Clean",
    category: "Professional Care",
    meaning:
      "The do not dry clean symbol is a circle with a large X through it. It means the garment should not be taken to a dry cleaner or exposed to dry cleaning solvents. The chemicals used in dry cleaning can damage the fabric, dissolve coatings, or cause discoloration on these particular materials.",
    recommendedAction:
      "Clean the garment at home using the washing method indicated on the care label, whether that is machine washing or hand washing. Pay attention to the temperature and cycle symbols alongside this one to determine the correct home laundering approach. If the garment has a stubborn stain, use a gentle spot-cleaning product rather than seeking dry cleaning services.",
    avoidList: [
      "Do not take the garment to a dry cleaner",
      "Avoid exposing the fabric to any dry cleaning solvents",
      "Do not use at-home dry cleaning sheets or kits on these garments",
    ],
    keywords: [
      "do not dry clean",
      "no dry cleaning",
      "dry clean prohibited",
      "home wash only",
      "solvent sensitive",
      "wash at home",
      "no solvent",
      "water wash",
    ],
    relatedSlugs: ["dry-clean", "wash-normal", "wash-hand"],
  },
];

export function getAllSymbolGuides(): SymbolGuide[] {
  return symbolGuides;
}

export function getSymbolGuide(slug: string): SymbolGuide | undefined {
  return symbolGuides.find((guide) => guide.slug === slug);
}

export function getSymbolSlugs(): string[] {
  return symbolGuides.map((guide) => guide.slug);
}
