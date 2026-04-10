export interface StainGuide {
  slug: string;
  title: string;
  description: string;
  overview: string;
  affectedMaterials: string[];
  steps: { step: number; title: string; instruction: string }[];
  doNot: string[];
  keywords: string[];
  relatedSlugs: string[];
}

export const stainGuides: StainGuide[] = [
  {
    slug: "oil",
    title: "How to Remove Oil Stains",
    description: "Get cooking oil and grease out of any fabric with common household items.",
    overview: "Oil stains are among the most common laundry challenges, whether from cooking splashes, salad dressing, or greasy foods. The key to removing oil is to treat it before washing, since hot water can set the stain permanently. Most oil stains respond well to dish soap or baking soda applied directly to the spot.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Denim", "Silk"],
    steps: [
      { step: 1, title: "Blot the excess", instruction: "Use a paper towel or clean cloth to blot away as much oil as possible. Do not rub, as this pushes the oil deeper into the fabric fibers." },
      { step: 2, title: "Apply dish soap", instruction: "Squeeze a small amount of liquid dish soap directly onto the stain. Dish soap is designed to cut through grease and works well on fabric too." },
      { step: 3, title: "Work it in gently", instruction: "Use your fingers or a soft toothbrush to gently work the soap into the stain in circular motions. Let it sit for 5 to 10 minutes." },
      { step: 4, title: "Rinse with warm water", instruction: "Rinse the treated area under warm running water to flush out the loosened oil and soap." },
      { step: 5, title: "Wash as normal", instruction: "Launder the garment on the warmest setting safe for the fabric. Check the care label before choosing the temperature." },
      { step: 6, title: "Check before drying", instruction: "Inspect the stain before putting the item in the dryer. If any oil remains, repeat the treatment. Heat from the dryer will set the stain permanently." }
    ],
    doNot: [
      "Do not put the garment in the dryer until the stain is completely gone.",
      "Do not rub the stain vigorously — this spreads the oil.",
      "Do not use hot water on the stain before pre-treating it.",
      "Do not ignore old oil stains — they can still be treated with baking soda paste."
    ],
    keywords: ["oil stain", "grease stain", "cooking oil", "remove oil", "dish soap stain removal", "grease removal", "oil on clothes"],
    relatedSlugs: ["grease", "tomato-sauce", "makeup"]
  },
  {
    slug: "red-wine",
    title: "How to Remove Red Wine Stains",
    description: "Act fast and use the right method to save your favorite garments from red wine.",
    overview: "Red wine stains look dramatic but are treatable if you act quickly. The tannins in red wine bond with fabric fibers, so speed matters more than with most other stains. Salt, club soda, and white wine are all effective first-response treatments.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Silk", "Wool"],
    steps: [
      { step: 1, title: "Blot immediately", instruction: "Press a clean cloth or paper towel firmly against the stain to absorb as much wine as possible. Work from the outside in to prevent spreading." },
      { step: 2, title: "Apply salt", instruction: "Cover the wet stain generously with table salt. The salt draws moisture and wine pigment out of the fabric. Leave it for 2 to 3 minutes." },
      { step: 3, title: "Rinse with cold water", instruction: "Hold the fabric under cold running water from the back side, pushing the stain out rather than through the fabric." },
      { step: 4, title: "Apply stain remover", instruction: "Use a commercial stain remover or a mix of dish soap and hydrogen peroxide (1:1 ratio). Apply it to the stain and let it sit for 10 minutes." },
      { step: 5, title: "Wash in cold water", instruction: "Launder the garment in cold water on a normal cycle. Hot water can set wine stains, so keep the temperature low." }
    ],
    doNot: [
      "Do not use hot water — it sets the tannin stain permanently.",
      "Do not rub the stain, as this forces the pigment deeper into fibers.",
      "Do not wait to treat the stain — dried wine is much harder to remove.",
      "Do not put in the dryer until the stain is fully gone."
    ],
    keywords: ["red wine stain", "wine stain removal", "remove wine", "tannin stain", "wine spill", "red wine on clothes"],
    relatedSlugs: ["coffee", "berry", "tea"]
  },
  {
    slug: "coffee",
    title: "How to Remove Coffee Stains",
    description: "Quick tips to lift fresh and set-in coffee stains from clothing and linens.",
    overview: "Coffee stains are tannin-based, similar to tea and wine, which means cold water and quick action give you the best results. Black coffee is easier to remove than coffee with milk or cream, since dairy adds a protein component. Most coffee stains come out completely with simple household supplies.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Silk", "Wool"],
    steps: [
      { step: 1, title: "Flush with cold water", instruction: "Run cold water through the back of the stain as soon as possible. This pushes coffee out of the fabric rather than deeper in." },
      { step: 2, title: "Apply liquid detergent", instruction: "Rub a small amount of liquid laundry detergent directly onto the stain. Work it in with your fingers and let it sit for 5 minutes." },
      { step: 3, title: "Soak if needed", instruction: "For older stains, soak the garment in a solution of cold water and oxygen-based bleach for 30 minutes to an hour." },
      { step: 4, title: "Wash normally", instruction: "Launder on the warmest setting the fabric allows. Check the care label first." },
      { step: 5, title: "Verify before drying", instruction: "Make sure the stain is gone before using the dryer. Repeat treatment if any trace remains." }
    ],
    doNot: [
      "Do not use hot water initially — it can set the tannins.",
      "Do not scrub aggressively on delicate fabrics.",
      "Do not bleach colored fabrics without testing a hidden area first.",
      "Do not dry the garment until the stain is completely removed."
    ],
    keywords: ["coffee stain", "remove coffee", "coffee spill", "tannin stain", "coffee on shirt", "coffee stain removal"],
    relatedSlugs: ["tea", "red-wine", "chocolate"]
  },
  {
    slug: "grass",
    title: "How to Remove Grass Stains",
    description: "Tackle green grass stains on jeans, uniforms, and sportswear effectively.",
    overview: "Grass stains are a combination of protein, chlorophyll, and other organic compounds that bind strongly to fabric. They are considered one of the tougher stains because the green pigment acts almost like a dye. Pre-treatment with an enzyme-based product or rubbing alcohol works best.",
    affectedMaterials: ["Cotton", "Denim", "Polyester", "Nylon"],
    steps: [
      { step: 1, title: "Pre-treat with enzyme detergent", instruction: "Apply an enzyme-based laundry detergent or stain remover directly to the grass stain. Enzymes break down the proteins in the grass." },
      { step: 2, title: "Let it soak", instruction: "Allow the detergent to work for 15 to 30 minutes. For stubborn stains, soak the item in cool water with detergent for up to an hour." },
      { step: 3, title: "Scrub gently", instruction: "Use an old toothbrush to work the detergent into the stain with gentle circular motions." },
      { step: 4, title: "Rinse and check", instruction: "Rinse under cool water and inspect the stain. If green pigment remains, apply rubbing alcohol with a cotton ball and blot." },
      { step: 5, title: "Wash as usual", instruction: "Launder the item on the warmest safe setting. Use oxygen-based bleach for white items if needed." }
    ],
    doNot: [
      "Do not use hot water before treating — heat sets grass stains.",
      "Do not use chlorine bleach on colored items.",
      "Do not put in the dryer until the stain is fully removed.",
      "Do not use ammonia or degreaser — these can set grass stains."
    ],
    keywords: ["grass stain", "remove grass stain", "green stain", "grass on jeans", "sports uniform stain", "chlorophyll stain"],
    relatedSlugs: ["mud", "blood", "sweat"]
  },
  {
    slug: "ink",
    title: "How to Remove Ink Stains",
    description: "Remove ballpoint, gel, and permanent ink from clothes with the right solvent.",
    overview: "Ink stains vary in difficulty depending on the type of ink. Ballpoint ink responds well to rubbing alcohol, while permanent marker may require acetone or specialized solvents. The key is to identify the ink type and choose the right treatment before washing.",
    affectedMaterials: ["Cotton", "Polyester", "Denim", "Silk", "Linen"],
    steps: [
      { step: 1, title: "Place a towel underneath", instruction: "Put a clean white towel or paper towels under the stained area to catch ink as it transfers out of the fabric." },
      { step: 2, title: "Apply rubbing alcohol", instruction: "Dab rubbing alcohol (isopropyl alcohol) onto the ink stain using a cotton ball. Do not pour — controlled application prevents spreading." },
      { step: 3, title: "Blot repeatedly", instruction: "Press the stain with a clean section of cloth, then reapply alcohol. You should see ink transferring to your blotting cloth." },
      { step: 4, title: "Rinse and apply detergent", instruction: "Rinse the area with cold water, then apply liquid laundry detergent. Work it in gently and let it sit for 10 minutes." },
      { step: 5, title: "Wash in cold water", instruction: "Launder on a cold cycle. Check the stain before drying — repeat alcohol treatment if ink remains." }
    ],
    doNot: [
      "Do not rub the stain — this spreads ink across a larger area.",
      "Do not use hot water, which can set certain ink types.",
      "Do not use acetone on acetate, triacetate, or modacrylic fabrics.",
      "Do not put in the dryer until the stain is completely gone."
    ],
    keywords: ["ink stain", "pen stain", "ballpoint ink", "remove ink", "ink on clothes", "marker stain", "gel pen stain"],
    relatedSlugs: ["paint", "makeup", "berry"]
  },
  {
    slug: "blood",
    title: "How to Remove Blood Stains",
    description: "Cold water is essential — learn the right way to remove blood from fabric.",
    overview: "Blood is a protein-based stain, which means heat is your enemy. Always use cold water, never hot, when treating blood stains. Fresh blood is relatively easy to remove, but dried blood requires soaking and enzyme-based products to break down the proteins.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Silk", "Denim"],
    steps: [
      { step: 1, title: "Rinse with cold water", instruction: "Hold the stained area under cold running water immediately. Cold water prevents the blood proteins from bonding with the fabric." },
      { step: 2, title: "Apply hydrogen peroxide or salt paste", instruction: "For white fabrics, apply hydrogen peroxide directly. For colored fabrics, make a paste of salt and cold water and apply to the stain." },
      { step: 3, title: "Soak in cold water", instruction: "Submerge the garment in cold water with enzyme-based detergent for 30 minutes. For dried stains, extend soaking to several hours." },
      { step: 4, title: "Gently scrub", instruction: "Use a soft brush or your fingers to work the detergent into the stain after soaking." },
      { step: 5, title: "Wash in cold water", instruction: "Launder on a cold cycle with regular detergent. Avoid warm or hot settings entirely." }
    ],
    doNot: [
      "Never use hot water on blood stains — it cooks the proteins and sets the stain.",
      "Do not iron over a blood stain before it is fully removed.",
      "Do not use chlorine bleach on colored fabrics.",
      "Do not put in the dryer until you have confirmed the stain is gone."
    ],
    keywords: ["blood stain", "remove blood", "blood on clothes", "protein stain", "dried blood", "blood removal"],
    relatedSlugs: ["sweat", "grass", "rust"]
  },
  {
    slug: "chocolate",
    title: "How to Remove Chocolate Stains",
    description: "Treat chocolate stains correctly by addressing both the oil and the color components.",
    overview: "Chocolate stains are tricky because they contain both oil (cocoa butter) and tannin (cocoa solids). This dual nature means you need to tackle both components for a complete clean. Scraping off the excess first, then treating with detergent, handles most chocolate spills.",
    affectedMaterials: ["Cotton", "Polyester", "Silk", "Wool", "Linen"],
    steps: [
      { step: 1, title: "Scrape off excess", instruction: "Use a dull knife or spoon edge to lift off any solid chocolate. Be careful not to press it deeper into the fabric." },
      { step: 2, title: "Flush with cold water", instruction: "Run cold water through the back of the stain to push the chocolate out from the fabric fibers." },
      { step: 3, title: "Apply liquid detergent", instruction: "Work a generous amount of liquid dish soap or laundry detergent into the stain. The surfactants will break down the cocoa butter." },
      { step: 4, title: "Soak for 15 minutes", instruction: "Let the detergent sit on the stain for at least 15 minutes to break down both the oil and tannin." },
      { step: 5, title: "Wash on appropriate setting", instruction: "Launder according to the care label. Use the warmest safe temperature for the fabric." }
    ],
    doNot: [
      "Do not use hot water first — it can melt the cocoa butter and spread the stain.",
      "Do not rub melted chocolate into the fabric.",
      "Do not skip the scraping step — less chocolate means easier cleaning.",
      "Do not dry until the stain is fully gone."
    ],
    keywords: ["chocolate stain", "remove chocolate", "cocoa stain", "chocolate on clothes", "hot chocolate spill"],
    relatedSlugs: ["coffee", "oil", "berry"]
  },
  {
    slug: "tomato-sauce",
    title: "How to Remove Tomato Sauce Stains",
    description: "Remove stubborn tomato and pasta sauce stains from clothing quickly.",
    overview: "Tomato sauce stains are a combination of tannin and natural red pigment that can set quickly. Acting fast makes a big difference with these stains. The acidic nature of tomatoes means they respond well to a cold water flush followed by detergent treatment.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Nylon", "Denim"],
    steps: [
      { step: 1, title: "Scrape off excess sauce", instruction: "Remove as much sauce as possible with a spoon or dull knife without spreading it further." },
      { step: 2, title: "Flush from the back", instruction: "Run cold water through the back of the stain to push the sauce outward rather than deeper in." },
      { step: 3, title: "Apply dish soap", instruction: "Rub liquid dish soap into the stain and let it sit for 10 minutes. The soap cuts through the oils in the sauce." },
      { step: 4, title: "Apply white vinegar", instruction: "Dab white vinegar on the remaining stain. The acid helps break down the tomato pigment." },
      { step: 5, title: "Launder normally", instruction: "Wash on the warmest safe cycle for the fabric. For white items, add oxygen-based bleach." }
    ],
    doNot: [
      "Do not let the stain dry without treating it first.",
      "Do not use hot water before pre-treating.",
      "Do not rub the stain — blot and dab instead.",
      "Do not skip checking the stain before drying."
    ],
    keywords: ["tomato sauce stain", "pasta sauce stain", "remove tomato", "ketchup stain", "red sauce stain", "tomato on clothes"],
    relatedSlugs: ["oil", "berry", "red-wine"]
  },
  {
    slug: "mud",
    title: "How to Remove Mud Stains",
    description: "Let mud dry first, then brush and wash for the best results.",
    overview: "Mud stains seem messy, but they are actually one of the easier stains to handle if you approach them correctly. The most important rule is to let the mud dry completely before attempting removal. Wet mud smears and pushes deeper into fabric, while dry mud brushes away easily.",
    affectedMaterials: ["Cotton", "Denim", "Polyester", "Nylon", "Canvas"],
    steps: [
      { step: 1, title: "Let it dry", instruction: "Resist the urge to clean wet mud. Let the garment air dry completely — the dried mud will flake off much more easily." },
      { step: 2, title: "Brush off dried mud", instruction: "Use a stiff brush or the back of a butter knife to scrape and brush away the dried mud clumps." },
      { step: 3, title: "Pre-treat with detergent", instruction: "Apply liquid laundry detergent to any remaining stain and work it in gently. Let it sit for 15 minutes." },
      { step: 4, title: "Soak if needed", instruction: "For heavy stains, soak in warm water with detergent for 30 minutes." },
      { step: 5, title: "Wash normally", instruction: "Launder using the warmest water safe for the fabric. Add a booster like oxygen bleach for stubborn marks." }
    ],
    doNot: [
      "Do not try to clean wet mud — wait until it dries.",
      "Do not rub wet mud, as it will push it deeper into the weave.",
      "Do not use bleach on colored items.",
      "Do not dry until verified clean."
    ],
    keywords: ["mud stain", "dirt stain", "remove mud", "mud on clothes", "soil stain", "mud removal"],
    relatedSlugs: ["grass", "sweat", "rust"]
  },
  {
    slug: "sweat",
    title: "How to Remove Sweat Stains",
    description: "Tackle yellow sweat stains and odor with baking soda and hydrogen peroxide.",
    overview: "Yellow sweat stains form when the proteins in perspiration react with aluminum compounds found in many antiperspirants. These stains build up over time and can become permanent if left untreated. A paste of baking soda, hydrogen peroxide, and dish soap is one of the most effective home remedies.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Silk", "Blends"],
    steps: [
      { step: 1, title: "Mix a cleaning paste", instruction: "Combine 2 tablespoons of baking soda, 1 tablespoon of hydrogen peroxide, and 1 tablespoon of dish soap into a paste." },
      { step: 2, title: "Apply to the stain", instruction: "Spread the paste over the yellow sweat stain, making sure to cover the entire affected area." },
      { step: 3, title: "Let it work", instruction: "Leave the paste on the stain for 30 minutes to an hour. For severe stains, extend to 2 hours." },
      { step: 4, title: "Scrub gently", instruction: "Use an old toothbrush to work the paste into the fabric with gentle circular motions." },
      { step: 5, title: "Wash in warm water", instruction: "Launder on a warm cycle with regular detergent. For whites, add oxygen-based bleach for extra whitening power." }
    ],
    doNot: [
      "Do not use chlorine bleach on sweat stains — it can make yellowing worse.",
      "Do not iron over sweat stains before treating them.",
      "Do not skip pre-treatment and just wash — detergent alone rarely removes yellow stains.",
      "Do not use very hot water on protein-based stains."
    ],
    keywords: ["sweat stain", "yellow stain", "armpit stain", "perspiration stain", "remove sweat", "deodorant stain", "pit stain"],
    relatedSlugs: ["deodorant", "blood", "grass"]
  },
  {
    slug: "rust",
    title: "How to Remove Rust Stains",
    description: "Use lemon juice and salt to dissolve rust spots from clothing naturally.",
    overview: "Rust stains appear when iron-containing metal contacts wet fabric, leaving an orange-brown mark. Unlike many stains, rust requires an acid-based treatment — lemon juice and salt or a commercial rust remover work best. Regular laundry detergent alone will not remove rust.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Denim", "Nylon"],
    steps: [
      { step: 1, title: "Apply lemon juice", instruction: "Squeeze fresh lemon juice directly onto the rust stain, saturating the area completely." },
      { step: 2, title: "Add salt", instruction: "Sprinkle table salt over the lemon juice on the stain. The combination creates a gentle abrasive acid treatment." },
      { step: 3, title: "Place in sunlight", instruction: "If possible, lay the garment in direct sunlight with the lemon-salt mixture on it. The sun accelerates the chemical reaction." },
      { step: 4, title: "Wait and rinse", instruction: "Let the treatment work for 1 to 2 hours, then rinse thoroughly with cold water." },
      { step: 5, title: "Wash normally", instruction: "Launder as usual. Repeat the treatment if any rust color remains before drying." }
    ],
    doNot: [
      "Do not use chlorine bleach on rust stains — bleach reacts with iron and makes the stain worse.",
      "Do not put rust-stained items in the dryer before treatment.",
      "Do not use this method on dry-clean-only fabrics without testing first.",
      "Do not skip the rinse — lemon juice can weaken fabric if left too long."
    ],
    keywords: ["rust stain", "remove rust", "iron stain", "rust on clothes", "orange stain", "rust removal fabric"],
    relatedSlugs: ["mud", "blood", "sweat"]
  },
  {
    slug: "berry",
    title: "How to Remove Berry Stains",
    description: "Treat blueberry, strawberry, and blackberry stains with boiling water and detergent.",
    overview: "Berry stains come from natural plant pigments called anthocyanins, which are water-soluble but can set quickly with heat or time. Fresh berry stains respond remarkably well to boiling water poured from a height, which flushes the pigment straight through the fabric. For set-in stains, soaking in oxygen bleach is effective.",
    affectedMaterials: ["Cotton", "Polyester", "Linen", "Nylon", "Silk"],
    steps: [
      { step: 1, title: "Remove excess fruit", instruction: "Gently scrape off any berry pieces with a spoon. Do not press them into the fabric." },
      { step: 2, title: "Pour boiling water", instruction: "Stretch the stained fabric over a bowl and pour boiling water from about 12 inches above. The force and heat flush out fresh berry pigment. Skip this step for delicate fabrics." },
      { step: 3, title: "Apply stain remover", instruction: "Treat any remaining color with liquid detergent or an enzyme-based stain remover. Let it sit for 15 minutes." },
      { step: 4, title: "Soak in oxygen bleach", instruction: "For stubborn stains, soak in cool water with oxygen-based bleach for up to 4 hours." },
      { step: 5, title: "Wash and verify", instruction: "Launder on the appropriate setting and check the stain before drying." }
    ],
    doNot: [
      "Do not use bar soap — it can set berry pigments permanently.",
      "Do not rub the stain before flushing with water.",
      "Do not pour boiling water on silk, wool, or other delicate fabrics.",
      "Do not dry before the stain is completely gone."
    ],
    keywords: ["berry stain", "blueberry stain", "strawberry stain", "blackberry stain", "fruit stain", "remove berry", "anthocyanin"],
    relatedSlugs: ["red-wine", "coffee", "tomato-sauce"]
  },
  {
    slug: "grease",
    title: "How to Remove Grease Stains",
    description: "Dish soap and baking soda are your best tools for cutting through grease on fabric.",
    overview: "Grease stains from butter, automotive grease, or food grease can seem impossible to remove, but they respond very well to absorbent powders and degreasing agents. The trick is to draw out the grease before washing. Baking soda, cornstarch, or baby powder can absorb fresh grease in minutes.",
    affectedMaterials: ["Cotton", "Polyester", "Denim", "Nylon", "Canvas"],
    steps: [
      { step: 1, title: "Absorb with powder", instruction: "Cover the grease stain generously with baking soda, cornstarch, or baby powder. Let it sit for 15 to 30 minutes to absorb the grease." },
      { step: 2, title: "Brush off powder", instruction: "Brush away the powder. It should have absorbed a visible amount of grease." },
      { step: 3, title: "Apply dish soap", instruction: "Squeeze dish soap directly onto the stain. Dish soap is formulated to cut through kitchen grease and works just as well on fabric." },
      { step: 4, title: "Work in and wait", instruction: "Gently rub the soap into the stain with your fingers or a soft brush. Let it penetrate for 10 to 15 minutes." },
      { step: 5, title: "Wash in hot water", instruction: "Launder on the hottest setting safe for the fabric. Hot water helps dissolve grease that has been loosened by the soap." }
    ],
    doNot: [
      "Do not skip the absorption step — it makes a significant difference.",
      "Do not rub the grease stain without pre-treating.",
      "Do not use cold water for the final wash — grease dissolves better in warm or hot water.",
      "Do not dry until the stain is fully gone."
    ],
    keywords: ["grease stain", "butter stain", "automotive grease", "remove grease", "grease on clothes", "mechanical grease"],
    relatedSlugs: ["oil", "makeup", "chocolate"]
  },
  {
    slug: "makeup",
    title: "How to Remove Makeup Stains",
    description: "Remove foundation, lipstick, and mascara stains with the right approach for each type.",
    overview: "Makeup stains vary widely because cosmetics contain different bases — oil, wax, pigment, or a combination. Foundation and concealer are usually oil-based, lipstick contains wax and dye, and mascara is a mix of wax and carbon. The treatment depends on the makeup type, but micellar water or makeup remover is a good universal first step.",
    affectedMaterials: ["Cotton", "Polyester", "Silk", "Linen", "Wool"],
    steps: [
      { step: 1, title: "Scrape off solids", instruction: "Use a dull edge to remove any thick makeup residue without spreading it." },
      { step: 2, title: "Apply makeup remover", instruction: "Use micellar water or oil-free makeup remover on a cotton pad. Dab the stain to dissolve the cosmetic." },
      { step: 3, title: "Treat with dish soap", instruction: "Apply a drop of dish soap to handle the oil component. Work it in gently with your fingers." },
      { step: 4, title: "Dab with rubbing alcohol", instruction: "For stubborn pigment stains like lipstick, dab rubbing alcohol on the remaining color. Blot with a clean cloth." },
      { step: 5, title: "Wash normally", instruction: "Launder on the appropriate setting for the fabric. Use a stain-boosting detergent if available." }
    ],
    doNot: [
      "Do not rub makeup stains — always blot and dab.",
      "Do not use hot water before removing the oil base.",
      "Do not use acetone on delicate fabrics.",
      "Do not machine dry until the stain is gone."
    ],
    keywords: ["makeup stain", "foundation stain", "lipstick stain", "mascara stain", "remove makeup", "cosmetic stain"],
    relatedSlugs: ["oil", "ink", "grease"]
  },
  {
    slug: "paint",
    title: "How to Remove Paint Stains",
    description: "Water-based and oil-based paints require different removal approaches — here is how.",
    overview: "Paint stain removal depends entirely on whether the paint is water-based (latex/acrylic) or oil-based. Water-based paint washes out easily when still wet but becomes difficult once dry. Oil-based paint requires solvents like turpentine or mineral spirits. Always check the paint can for the base type before choosing a treatment.",
    affectedMaterials: ["Cotton", "Denim", "Polyester", "Canvas", "Nylon"],
    steps: [
      { step: 1, title: "Identify the paint type", instruction: "Check the paint can label. Water-based paints say latex or acrylic. Oil-based paints list mineral spirits as the cleanup solvent." },
      { step: 2, title: "For water-based paint", instruction: "Rinse immediately under warm running water while the paint is wet. Apply liquid detergent and scrub gently. Most fresh latex paint rinses right out." },
      { step: 3, title: "For oil-based paint", instruction: "Apply turpentine or mineral spirits to the stain with a cloth. Dab — do not rub. Work from the outside in to avoid spreading." },
      { step: 4, title: "Treat dried paint", instruction: "For dried water-based paint, soak in warm water with detergent for several hours to soften it. Scrape gently with a dull knife." },
      { step: 5, title: "Wash thoroughly", instruction: "After pre-treatment, launder as normal. For oil-based paint solvents, wash separately to avoid transferring chemicals." }
    ],
    doNot: [
      "Do not let water-based paint dry if you can help it — wet paint is far easier to remove.",
      "Do not use water on oil-based paint — it will not dissolve it.",
      "Do not use solvents near open flames or in unventilated areas.",
      "Do not put solvent-treated garments directly in the dryer."
    ],
    keywords: ["paint stain", "latex paint", "oil paint", "acrylic paint", "remove paint", "paint on clothes", "dried paint"],
    relatedSlugs: ["ink", "grease", "mud"]
  },
  {
    slug: "deodorant",
    title: "How to Remove Deodorant Stains",
    description: "Get rid of white deodorant marks and built-up residue from dark clothing.",
    overview: "Deodorant stains appear as white streaks on dark clothing or as stiff, crusty buildup in the underarm area of light garments. These marks are caused by aluminum compounds and waxy ingredients in antiperspirants. White vinegar and baking soda are the most effective household remedies for breaking down this residue.",
    affectedMaterials: ["Cotton", "Polyester", "Silk", "Rayon", "Blends"],
    steps: [
      { step: 1, title: "Dampen the stain", instruction: "Wet the stained area with cold water to prepare the fabric for treatment." },
      { step: 2, title: "Apply white vinegar", instruction: "Soak the stained area in undiluted white vinegar for 30 minutes. Vinegar dissolves the aluminum salts in deodorant." },
      { step: 3, title: "Make a baking soda paste", instruction: "Mix baking soda with a small amount of water to form a paste. Apply it to the stain and gently scrub with a brush." },
      { step: 4, title: "Let it sit", instruction: "Leave the paste on for 15 to 20 minutes to break down waxy residue." },
      { step: 5, title: "Wash in warm water", instruction: "Launder on a warm cycle. For persistent buildup, add one cup of white vinegar to the rinse cycle." }
    ],
    doNot: [
      "Do not use bleach on deodorant stains — it can react with the aluminum and darken the stain.",
      "Do not scrub white marks on delicate fabrics aggressively.",
      "Do not let deodorant buildup accumulate — treat regularly.",
      "Do not iron over deodorant residue."
    ],
    keywords: ["deodorant stain", "antiperspirant stain", "white marks", "underarm stain", "remove deodorant", "deodorant buildup"],
    relatedSlugs: ["sweat", "oil", "makeup"]
  },
  {
    slug: "pet-urine",
    title: "How to Remove Pet Urine Stains",
    description: "Eliminate pet urine stains and odor from washable fabrics with enzyme cleaners.",
    overview: "Pet urine contains proteins, uric acid, and bacteria that cause both staining and persistent odor. Regular detergent can remove the visible stain but often fails to eliminate the smell. Enzyme-based cleaners are specifically designed to break down the uric acid crystals that cause lingering odor.",
    affectedMaterials: ["Cotton", "Polyester", "Nylon", "Linen", "Blends"],
    steps: [
      { step: 1, title: "Blot immediately", instruction: "Soak up as much urine as possible with paper towels or a clean cloth. Press firmly but do not rub." },
      { step: 2, title: "Rinse with cold water", instruction: "Flush the area with cold water to dilute the urine and remove surface residue." },
      { step: 3, title: "Apply enzyme cleaner", instruction: "Saturate the stain with an enzyme-based pet stain remover. These products contain bacteria that digest uric acid and proteins." },
      { step: 4, title: "Soak for 15 minutes", instruction: "Let the enzyme cleaner work for at least 15 minutes. For older stains, soak for up to an hour." },
      { step: 5, title: "Wash with vinegar boost", instruction: "Launder in cold water and add one cup of white vinegar to the wash cycle for extra odor neutralization." },
      { step: 6, title: "Air dry and smell check", instruction: "Air dry the item and check for any remaining odor. If odor persists, repeat the enzyme treatment before machine drying." }
    ],
    doNot: [
      "Do not use hot water — it sets the proteins and makes odor worse.",
      "Do not use ammonia-based cleaners — urine contains ammonia and the smell will attract pets back.",
      "Do not use steam cleaners on urine stains before enzyme treatment.",
      "Do not skip the enzyme step — regular detergent cannot break down uric acid."
    ],
    keywords: ["pet urine stain", "dog urine", "cat urine", "remove pet stain", "urine odor", "enzyme cleaner", "pet accident"],
    relatedSlugs: ["blood", "sweat", "mud"]
  },
  {
    slug: "tea",
    title: "How to Remove Tea Stains",
    description: "Lift tea stains from cups, clothes, and linens with simple household treatments.",
    overview: "Tea stains are caused by tannins, the same compounds responsible for red wine and coffee stains. The good news is that tannin stains respond well to boiling water, lemon juice, and oxygen-based bleach. Black tea stains more than green or herbal tea due to its higher tannin content.",
    affectedMaterials: ["Cotton", "Linen", "Polyester", "Silk", "Wool"],
    steps: [
      { step: 1, title: "Rinse with cold water", instruction: "Flush the stain under cold running water as soon as possible to dilute the tannins." },
      { step: 2, title: "Apply lemon juice or vinegar", instruction: "Squeeze lemon juice or apply white vinegar to the stain. Acids help break down tannin compounds." },
      { step: 3, title: "Rub with detergent", instruction: "Apply liquid laundry detergent to the stain and gently rub it in with your fingers. Let it sit for 10 minutes." },
      { step: 4, title: "Soak in oxygen bleach", instruction: "For stubborn or set-in stains, soak the item in warm water with oxygen-based bleach for 1 to 2 hours." },
      { step: 5, title: "Wash as normal", instruction: "Launder on the appropriate setting and verify the stain is gone before drying." }
    ],
    doNot: [
      "Do not use bar soap — it can set tannin stains.",
      "Do not use hot water as the first step.",
      "Do not bleach colored items without testing on a hidden area.",
      "Do not dry until the stain is fully removed."
    ],
    keywords: ["tea stain", "remove tea", "tannin stain", "black tea stain", "tea on clothes", "tea spill"],
    relatedSlugs: ["coffee", "red-wine", "berry"]
  }
];

export function getAllStainGuides(): StainGuide[] {
  return stainGuides;
}

export function getStainGuide(slug: string): StainGuide | undefined {
  return stainGuides.find((s) => s.slug === slug);
}

export function getStainSlugs(): string[] {
  return stainGuides.map((s) => s.slug);
}
