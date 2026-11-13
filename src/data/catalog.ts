import { ASSETS } from './assets';

export type CategorySlug =
  | 'food-and-grocery'
  | 'building-materials'
  | 'transportation'
  | 'cleaning-items';

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  shortName: string;
  code: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  sku: string;
  name: string;
  categorySlug: CategorySlug;
  categoryName: string;
  image: string;
  summary: string;
  description: string;
  supplyFormats: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  featured?: boolean;
}

export const DEMO_CONTACT_INFO = {
  companyName: 'Royal Galaxy Trading and Contracting',
  notice:
    'Demonstration Profile: Address, phone, email, and business schedule below are placeholder demo details for website presentation.',
  address: 'Commercial District, Tower B, Suite 402 (Demo Placeholder Address)',
  phone: '+000 000 0000 (Demo Phone Line)',
  email: 'contact@demo-royalgalaxy.example',
  hours: 'Sunday – Thursday · 08:30 – 17:30 (Demo Hours)',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'food-and-grocery',
    name: 'Food & Grocery Items',
    shortName: 'Food & Grocery',
    code: 'DIV-01',
    tagline: 'Wholesale commodities, proteins, grains, oils, and pantry staples.',
    description:
      'Comprehensive bulk procurement and distribution of staple grains, pulses, edible oils, chilled and frozen proteins, spices, and commercial beverages for hospitality groups, catering contractors, and retail supermarkets.',
    image: ASSETS.catFoodGrocery,
    highlights: [
      'Temperature-controlled protein & frozen handling',
      'Bulk 25 kg & 50 kg sacks alongside retail packs',
      'Consistent batch grading for catering & retail',
    ],
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    shortName: 'Building Materials',
    code: 'DIV-02',
    tagline: 'Structural aggregates, steel, masonry, MEP fittings, and finishes.',
    description:
      'End-to-end civil and architectural supply covering Portland cement, deformed steel rebar, washed aggregates, masonry bricks, natural stone tiles, plumbing and electrical assemblies, coatings, roofing, and thermal insulation.',
    image: ASSETS.catBuildingMaterials,
    highlights: [
      'Direct job-site palletized & bulk delivery scheduling',
      'Structural core materials through interior finishes',
      'Contractor-grade electrical, plumbing, and hand tools',
    ],
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    shortName: 'Transportation',
    code: 'DIV-03',
    tagline: 'Commercial freight operations, cargo logistics, and heavy tyres.',
    description:
      'Integrated road haulage, cargo consolidation, and heavy commercial fleet consumables including radial truck tyres, OTR heavy-duty tyres, and essential commercial vehicle maintenance supplies.',
    image: ASSETS.catTransportationLogistics,
    highlights: [
      'Scheduled freight & palletized cargo haulage',
      'Heavy-duty & regional radial commercial tyres',
      'Fleet maintenance & commercial vehicle consumables',
    ],
  },
  {
    slug: 'cleaning-items',
    name: 'Cleaning Items',
    shortName: 'Cleaning Items',
    code: 'DIV-04',
    tagline: 'Institutional sanitation chemicals, hygiene papers, and janitorial machinery.',
    description:
      'Commercial-grade detergents, disinfectants, food-safe dishwashing solutions, paper tissue systems, ergonomic janitorial tools, and mechanized floor care equipment for facilities, healthcare, and hospitality.',
    image: ASSETS.catCleaningHygiene,
    highlights: [
      'Concentrated 5 L, 20 L, and drum chemical formats',
      'Hospitality & institutional hygiene paper dispensers',
      'Commercial scrubbers, carts, and microfiber systems',
    ],
  },
];

export const PRODUCTS: ProductItem[] = [
  // 1. Food & Grocery Items (16 items)
  {
    id: 'fg-01',
    slug: 'chicken',
    sku: 'RG-FG-101',
    name: 'Chicken',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodPoultryMeat,
    summary: 'Chilled and IQF frozen whole chicken, breast fillets, and portioned cuts for commercial kitchens.',
    description:
      'Hygienically processed whole birds and calibrated portion cuts supplied in cold-chain insulated cartons for hotels, institutional catering contractors, and retail meat counters.',
    supplyFormats: ['10 kg IQF Master Carton', '12 kg Chilled Vacuum Tray', 'Custom Catering Portions'],
    applications: ['Hospitality Kitchens', 'Contract Catering', 'Supermarket Cold Counters'],
    specifications: [
      { label: 'Storage Grade', value: 'Chilled (0°C to 4°C) / Frozen (-18°C)' },
      { label: 'Packaging', value: 'Food-grade vacuum & poly-lined cartons' },
      { label: 'Minimum Order', value: 'Bulk carton & pallet volumes' },
    ],
    featured: true,
  },
  {
    id: 'fg-02',
    slug: 'mutton',
    sku: 'RG-FG-102',
    name: 'Mutton',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodPoultryMeat,
    summary: 'Prime bone-in and boneless mutton cuts graded for consistent yield and culinary performance.',
    description:
      'Carefully selected carcass and primal mutton cuts—including shoulder, leg, chops, and curry-cut portions—packed under strict cold-chain handling for commercial foodservice buyers.',
    supplyFormats: ['15 kg Chilled Carcass Wrap', '20 kg Frozen Primal Carton', 'Vacuum-Sealed Portion Packs'],
    applications: ['Banquet & Hotel Catering', 'Butchery Wholesalers', 'Foodservice Distributors'],
    specifications: [
      { label: 'Cut Options', value: 'Whole, Bone-in Cubes, Boneless Leg & Shoulder' },
      { label: 'Cold Chain', value: 'Continuous chilled or deep-freeze dispatch' },
      { label: 'Supply Type', value: 'Wholesale & Contract Supply' },
    ],
  },
  {
    id: 'fg-03',
    slug: 'palm-oil',
    sku: 'RG-FG-103',
    name: 'Palm Oil',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodOilsBeverages,
    summary: 'Refined RBD palm olein engineered for high-heat commercial frying and food manufacturing.',
    description:
      'Clean-tasting, heat-stable refined palm oil offering extended fry life and consistent viscosity for industrial bakeries, central commissaries, and bulk catering operations.',
    supplyFormats: ['18 L Tin / Jerrycan', '20 L HDPE Drum', '200 L Steel Drum'],
    applications: ['Commercial Frying Lines', 'Central Kitchens', 'Bakery & Snack Manufacturing'],
    specifications: [
      { label: 'Grade', value: 'Refined, Bleached & Deodorized (RBD) Olein' },
      { label: 'Smoke Point', value: 'High thermal stability for continuous frying' },
      { label: 'Container', value: 'Tamper-evident food-grade drums & tins' },
    ],
  },
  {
    id: 'fg-04',
    slug: 'cooking-oil',
    sku: 'RG-FG-104',
    name: 'Cooking Oil',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodOilsBeverages,
    summary: 'Refined sunflower, corn, and vegetable cooking oils in retail bottles and foodservice tins.',
    description:
      'Versatile culinary oils filtered for clarity, neutral aroma, and light mouthfeel, available across consumer bottle cases and heavy-duty catering containers.',
    supplyFormats: ['1 L x 12 Bottle Case', '5 L x 4 Jerrycan Carton', '18 L Commercial Tin'],
    applications: ['Retail Grocery Shelves', 'Restaurants & Cafes', 'Camp & Institutional Catering'],
    specifications: [
      { label: 'Varieties', value: 'Sunflower, Corn, Canola & Blended Vegetable' },
      { label: 'Shelf Stability', value: 'UV-protected sealed containers' },
      { label: 'Dispatch', value: 'Palletized cases & bulk drums' },
    ],
    featured: true,
  },
  {
    id: 'fg-05',
    slug: 'red-lentils',
    sku: 'RG-FG-105',
    name: 'Red Lentils',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodLentilsPulses,
    summary: 'Machine-cleaned split and whole red lentils with uniform grain size and rapid cooking time.',
    description:
      'Sortex-cleaned red lentils sourced for low moisture content, clean color uniformity, and dependable cooking consistency across bulk foodservice and wholesale trade.',
    supplyFormats: ['25 kg PP Woven Sack', '50 kg Burlap / PP Bag', '1 kg x 20 Retail Bale'],
    applications: ['Wholesale Grain Markets', 'Catering Commissaries', 'Retail Dry Goods'],
    specifications: [
      { label: 'Purity', value: 'Sortex-cleaned, minimal foreign matter' },
      { label: 'Moisture', value: 'Controlled dry-storage specification' },
      { label: 'Form', value: 'Split Football & Whole Crimson' },
    ],
  },
  {
    id: 'fg-06',
    slug: 'black-chana',
    sku: 'RG-FG-106',
    name: 'Black Chana',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodLentilsPulses,
    summary: 'Whole desi black chickpeas graded for firm texture, rich nutty flavor, and high protein yield.',
    description:
      'Cleaned whole black chana selected for uniform seed caliber and minimal split ratio, suited for commercial kitchens, flour millers, and grocery wholesalers.',
    supplyFormats: ['25 kg Woven Sack', '50 kg Export Bag', '1 kg Retail Pack Bales'],
    applications: ['Commercial Kitchens', 'Besan Milling', 'Regional Grocery Distribution'],
    specifications: [
      { label: 'Type', value: 'Whole Desi Chickpea (Kala Chana)' },
      { label: 'Grading', value: 'Machine-sieved uniform kernel size' },
      { label: 'Packaging', value: 'Moisture-resistant woven polypropylene' },
    ],
  },
  {
    id: 'fg-07',
    slug: 'dal',
    sku: 'RG-FG-107',
    name: 'Dal',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodLentilsPulses,
    summary: 'Assorted yellow, green, and black split lentils (Toor, Moong, Urad) for everyday commercial supply.',
    description:
      'Comprehensive range of staple split lentils processed to retain natural nutritional integrity and consistent simmering characteristics for high-volume kitchens.',
    supplyFormats: ['25 kg Sack', '50 kg Sack', 'Assorted 1 kg / 2 kg Retail Cases'],
    applications: ['Labor Camp & Industrial Catering', 'Restaurants', 'Supermarket Chains'],
    specifications: [
      { label: 'Varieties', value: 'Toor Dal, Moong Dal, Masoor & Urad Dal' },
      { label: 'Processing', value: 'Unpolished & polished options available' },
      { label: 'Storage', value: 'Cool, dry palletized warehousing' },
    ],
  },
  {
    id: 'fg-08',
    slug: 'chana-dal',
    sku: 'RG-FG-108',
    name: 'Chana Dal',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodLentilsPulses,
    summary: 'Split Bengal gram with clean golden color and firm bite for culinary and confectionery production.',
    description:
      'Precision-split Bengal gram chickpeas free from husk fragments, widely supplied to catering kitchens, snack producers, and wholesale commodity distributors.',
    supplyFormats: ['25 kg PP Bag', '50 kg Bulk Sack', '2 kg x 10 Consumer Bale'],
    applications: ['Central Catering', 'Savory & Sweet Manufacturing', 'Grocery Wholesale'],
    specifications: [
      { label: 'Split Quality', value: 'Uniform golden halves, low breakage' },
      { label: 'Cleaning', value: 'Gravity-separated & Sortex-inspected' },
      { label: 'Palletizing', value: '40 bags per standard 1,000 kg pallet' },
    ],
  },
  {
    id: 'fg-09',
    slug: 'beverages',
    sku: 'RG-FG-109',
    name: 'Beverages',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodOilsBeverages,
    summary: 'Packaged mineral water, fruit juices, iced teas, and carbonated soft drinks in bulk trays.',
    description:
      'Reliable wholesale beverage supply spanning still and sparkling water cases, 100% fruit juice cartons, ready-to-drink teas, and hospitality refreshment assortments.',
    supplyFormats: ['330 ml x 24 Case', '500 ml x 24 Shrink Pack', '1.5 L x 6 Multipack'],
    applications: ['Corporate Offices', 'Hotels & Events', 'Retail Convenience Stores'],
    specifications: [
      { label: 'Assortment', value: 'Water, Juices, Soft Drinks & Hot Beverage Packs' },
      { label: 'Handling', value: 'Shrink-wrapped cases on euro/standard pallets' },
      { label: 'Delivery', value: 'Scheduled weekly or project-based drop-offs' },
    ],
  },
  {
    id: 'fg-10',
    slug: 'fresh-and-frozen-products',
    sku: 'RG-FG-110',
    name: 'Fresh & Frozen Products',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodSpicesFrozen,
    summary: 'Chilled produce, IQF vegetables, frozen fries, and cold-chain perishable provisions.',
    description:
      'Curated daily fresh produce and blast-frozen kitchen staples engineered to reduce prep labor and preserve nutritional quality across multi-site foodservice operations.',
    supplyFormats: ['2.5 kg x 4 IQF Carton', '10 kg Bulk Produce Crate', 'Temperature-Controlled Vans'],
    applications: ['Quick-Service Restaurants', 'Institutional Dining', 'Retail Freezers'],
    specifications: [
      { label: 'Range', value: 'IQF Vegetables, Fries, Seafood & Fresh Produce' },
      { label: 'Cold Integrity', value: 'Strict chill and -18°C frozen logistics' },
      { label: 'Turnover', value: 'Batch-dated stock rotation' },
    ],
  },
  {
    id: 'fg-11',
    slug: 'rice',
    sku: 'RG-FG-111',
    name: 'Rice',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodRiceFlourSugar,
    summary: 'Aged extra-long Basmati, Sella parboiled, and Jasmine rice in commercial wholesale sacks.',
    description:
      'High-elongation aged basmati and daily-grade long-grain rice milled for minimal broken ratio, clean aroma, and non-sticky grain separation in large-batch cooking.',
    supplyFormats: ['20 kg Woven Sack', '40 kg Jute / PP Bag', '5 kg x 4 Retail Master Bag'],
    applications: ['Banquet & Hospitality', 'Wholesale Food Traders', 'Supermarket Private & Branded Supply'],
    specifications: [
      { label: 'Varieties', value: '1121 Steam, Golden Sella, White Long-Grain' },
      { label: 'Grain Length', value: 'Extra-long slender kernel specification' },
      { label: 'Packaging', value: 'Breathable woven polypropylene & jute' },
    ],
    featured: true,
  },
  {
    id: 'fg-12',
    slug: 'wheat-flour',
    sku: 'RG-FG-112',
    name: 'Wheat Flour',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodRiceFlourSugar,
    summary: 'Fine all-purpose, bread-grade, and whole-wheat chakki atta flour for bakeries and kitchens.',
    description:
      'Consistent protein-balanced wheat flours milled for predictable dough hydration, volume, and texture across commercial flatbreads, pastries, and culinary thickening.',
    supplyFormats: ['25 kg Multi-Wall Kraft Bag', '50 kg Bakery Sack', '5 kg x 4 Retail Bundle'],
    applications: ['Commercial Bakeries', 'Central Kitchens', 'Grocery Wholesalers'],
    specifications: [
      { label: 'Grades', value: 'All-Purpose Maida, High-Protein Bread, Whole Atta' },
      { label: 'Extraction', value: 'Sieved fine granulation, uniform ash level' },
      { label: 'Bagging', value: 'Dust-sealed stitched kraft & woven bags' },
    ],
  },
  {
    id: 'fg-13',
    slug: 'sugar',
    sku: 'RG-FG-113',
    name: 'Sugar',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodRiceFlourSugar,
    summary: 'Fine and medium-grain refined white crystal sugar and raw cane sugar in bulk sacks.',
    description:
      'Pure, free-flowing crystal sugar with high polarization and low moisture content, supplied in palletized sacks for beverage bottlers, bakeries, and wholesale distributors.',
    supplyFormats: ['25 kg Poly-Lined Bag', '50 kg Commercial Sack', '1 kg x 20 Retail Carton'],
    applications: ['Food & Beverage Processing', 'Confectionery & Bakery', 'Wholesale Trade'],
    specifications: [
      { label: 'Crystal Grade', value: 'ICUMSA 45 Refined White & Raw Cane' },
      { label: 'Liner', value: 'Inner moisture-barrier polyethylene liner' },
      { label: 'Order Unit', value: 'Bag, pallet, or full truckload' },
    ],
  },
  {
    id: 'fg-14',
    slug: 'pulses',
    sku: 'RG-FG-114',
    name: 'Pulses',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodLentilsPulses,
    summary: 'White chickpeas, kidney beans, green mung, and dried peas for diversified dry-goods procurement.',
    description:
      'Broad wholesale portfolio of whole and split dry legumes cleaned to uniform moisture and caliber tolerances for institutional dining and retail packaging.',
    supplyFormats: ['25 kg PP Bag', '50 kg Export Sack', 'Mixed Pallet Assortments'],
    applications: ['Institutional Catering', 'Dry-Goods Wholesalers', 'Retail Supermarkets'],
    specifications: [
      { label: 'Selection', value: 'Kabuli Chana, Rajma, Green Mung, Yellow Peas' },
      { label: 'Quality Control', value: 'Cleaned, graded, insect-free storage' },
      { label: 'Shelf Life', value: 'Long ambient dry-storage stability' },
    ],
  },
  {
    id: 'fg-15',
    slug: 'spices',
    sku: 'RG-FG-115',
    name: 'Spices',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.prodSpicesFrozen,
    summary: 'Whole and ground culinary spices including turmeric, cumin, cardamom, black pepper, and chili.',
    description:
      'Aromatic whole seeds, pods, barks, and freshly milled ground spices packed in aroma-lock barrier pouches and bulk cartons to preserve essential oils and color.',
    supplyFormats: ['1 kg Aroma-Lock Pouch', '5 kg Foodservice Bag', '25 kg Bulk Carton'],
    applications: ['Hospitality & Ethnic Cuisine', 'Spice Blenders', 'Wholesale Food Markets'],
    specifications: [
      { label: 'Forms', value: 'Whole Seeds/Pods & Fine Culinary Powders' },
      { label: 'Packaging', value: 'Moisture- and light-barrier sealed packs' },
      { label: 'Purity', value: 'Single-origin & standardized commercial grades' },
    ],
  },
  {
    id: 'fg-16',
    slug: 'other-grocery-items',
    sku: 'RG-FG-116',
    name: 'Other Grocery Items',
    categorySlug: 'food-and-grocery',
    categoryName: 'Food & Grocery Items',
    image: ASSETS.catFoodGrocery,
    summary: 'Canned goods, pasta, sauces, dairy staples, salt, tea, and assorted dry pantry provisions.',
    description:
      'Consolidated single-invoice supply of complementary kitchen and supermarket essentials—covering tinned tomatoes, condiments, tea, coffee, salt, and dry pasta.',
    supplyFormats: ['Wholesale Master Cartons', 'Catering Tin Packs', 'Consolidated Multi-SKU Pallets'],
    applications: ['Staff Accommodation Catering', 'Remote Project Camps', 'General Grocery Retail'],
    specifications: [
      { label: 'Scope', value: 'Canned Foods, Condiments, Salt, Tea & Pasta' },
      { label: 'Procurement', value: 'Consolidated multi-item order fulfillment' },
      { label: 'Scheduling', value: 'Recurring monthly supply agreements' },
    ],
  },

  // 2. Building Materials (13 items)
  {
    id: 'bm-01',
    slug: 'cement',
    sku: 'RG-BM-201',
    name: 'Cement',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodCementAggregates,
    summary: 'Ordinary Portland Cement (OPC) and sulfate-resistant grades for structural concrete and masonry.',
    description:
      'Fresh-batch structural cement supplied in 40 kg / 50 kg moisture-resistant kraft bags and shrink-wrapped pallets to support continuous pour schedules and site masonry.',
    supplyFormats: ['50 kg Multi-Ply Kraft Bag', '1.5 Ton Jumbo Bag', 'Shrink-Wrapped Pallets'],
    applications: ['Structural Foundations', 'Precast Elements', 'Plastering & Masonry Works'],
    specifications: [
      { label: 'Grades', value: 'OPC 42.5 / 52.5 & Sulfate-Resistant' },
      { label: 'Protection', value: 'Water-resistant palletized wrapping' },
      { label: 'Delivery', value: 'Flatbed & crane-offload site dispatch' },
    ],
    featured: true,
  },
  {
    id: 'bm-02',
    slug: 'steel-and-iron',
    sku: 'RG-BM-202',
    name: 'Steel & Iron',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodSteelRoofing,
    summary: 'Deformed TMT steel rebar, structural I-beams, hollow sections, plates, and binding wire.',
    description:
      'Mill-certified reinforcement bars and structural steel sections stocked across standard diameters and lengths for civil infrastructure, commercial framing, and fabrication.',
    supplyFormats: ['12 m Bundled Rebar', 'Structural Beams & Channels', '25 kg Binding Wire Coils'],
    applications: ['Reinforced Concrete Structures', 'Steel Warehouses', 'Civil Infrastructure'],
    specifications: [
      { label: 'Rebar Sizes', value: '8 mm to 32 mm Deformed High-Tensile' },
      { label: 'Profiles', value: 'H-Beams, I-Beams, Angles, Pipes & Plates' },
      { label: 'Finish', value: 'Black, Epoxy-Coated & Hot-Dip Galvanized' },
    ],
    featured: true,
  },
  {
    id: 'bm-03',
    slug: 'sand-and-gravel',
    sku: 'RG-BM-203',
    name: 'Sand & Gravel',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodCementAggregates,
    summary: 'Washed plastering sand, sharp concreting sand, and graded crushed stone aggregates.',
    description:
      'Sieved and washed mineral aggregates tested for low silt content and consistent gradation, delivered via tipper trucks or bulk jumbo bags to active job sites.',
    supplyFormats: ['Tipper Truck Load (Cubic Meters)', '1 Ton Jumbo Bag', '25 kg / 40 kg Yard Bags'],
    applications: ['Concrete Batching', 'Sub-Base Roadworks', 'Screeding & Block Laying'],
    specifications: [
      { label: 'Aggregate Sizes', value: '10 mm, 20 mm Crushed Stone & Road Base' },
      { label: 'Sand Types', value: 'Washed River Sand, Dune & Plastering Sand' },
      { label: 'Logistics', value: 'Scheduled dump-truck site tipping' },
    ],
  },
  {
    id: 'bm-04',
    slug: 'bricks',
    sku: 'RG-BM-204',
    name: 'Bricks',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodCementAggregates,
    summary: 'Solid clay bricks, hollow concrete blocks, and thermal insulated masonry units.',
    description:
      'Dimensionally accurate masonry bricks and concrete blocks engineered for compressive strength, clean mortar bonding, and minimal site breakage during transport.',
    supplyFormats: ['Strapped Timber Pallets', 'Full Flatbed Truckloads', 'Standard & Custom Sizes'],
    applications: ['Load-Bearing & Partition Walls', 'Perimeter Fencing', 'Commercial Developments'],
    specifications: [
      { label: 'Types', value: 'Red Clay Brick, Hollow & Solid Concrete Block' },
      { label: 'Sizes', value: '100 mm, 150 mm, 200 mm Standard Modules' },
      { label: 'Handling', value: 'Forklift-ready strapped pallets' },
    ],
  },
  {
    id: 'bm-05',
    slug: 'tiles-and-marble',
    sku: 'RG-BM-205',
    name: 'Tiles & Marble',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodTilesPaints,
    summary: 'Rectified porcelain floor tiles, ceramic wall tiles, granite slabs, and natural marble.',
    description:
      'Architectural stone and ceramic surfacing solutions combining slip resistance, calibrated thickness, and uniform shade batches for commercial lobbies, residences, and wet areas.',
    supplyFormats: ['Carton-Packed Tile Boxes', 'Wooden Crated Marble Slabs', 'Matching Skirting & Trims'],
    applications: ['Commercial Lobbies', 'Residential Flooring', 'Facade Cladding & Countertops'],
    specifications: [
      { label: 'Formats', value: '600x600 mm, 600x1200 mm & Cut-to-Size Slabs' },
      { label: 'Finishes', value: 'Polished, Matte, Honed & Anti-Slip R11' },
      { label: 'Batching', value: 'Single-caliber & shade-matched lot allocation' },
    ],
  },
  {
    id: 'bm-06',
    slug: 'plumbing-materials',
    sku: 'RG-BM-206',
    name: 'Plumbing Materials',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodPlumbingElectrical,
    summary: 'UPVC, PPR, and copper piping systems alongside brass valves, manifolds, and drainage fittings.',
    description:
      'Pressure-rated water supply and gravity drainage components engineered for leak-free MEP installation across multi-story buildings, villas, and industrial plants.',
    supplyFormats: ['4 m / 6 m Pipe Bundles', 'Boxed Brass Valves & Fittings', 'Solvent Cements & Seals'],
    applications: ['Potable Water Distribution', 'Sanitary Drainage', 'HVAC & Chilled Water Lines'],
    specifications: [
      { label: 'Pipe Materials', value: 'UPVC, CPVC, PPR, HDPE & Copper' },
      { label: 'Pressure Classes', value: 'PN10, PN16, PN20 & Schedule 40/80' },
      { label: 'Accessories', value: 'Gate Valves, Ball Valves, Traps & Clamps' },
    ],
  },
  {
    id: 'bm-07',
    slug: 'electrical-supplies',
    sku: 'RG-BM-207',
    name: 'Electrical Supplies',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodPlumbingElectrical,
    summary: 'Armored copper cables, switchgear, MCB distribution boards, conduits, and industrial lighting.',
    description:
      'Complete low-voltage electrical installation inventory covering flame-retardant wiring coils, heavy cable trays, circuit protection breakers, and site illumination fixtures.',
    supplyFormats: ['100 m Wire Coils', 'Wooden Cable Drums', 'Panel & Switchgear Cartons'],
    applications: ['Building MEP Fit-Outs', 'Industrial Workshops', 'Temporary Site Power'],
    specifications: [
      { label: 'Cables', value: 'Single/Multi-Core PVC, XLPE & Armored' },
      { label: 'Protection', value: 'MCBs, MCCBs, RCCBs & Weatherproof Enclosures' },
      { label: 'Conduits', value: 'GI & Heavy-Duty PVC Conduit Systems' },
    ],
  },
  {
    id: 'bm-08',
    slug: 'construction-tools',
    sku: 'RG-BM-208',
    name: 'Construction Tools',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodPlumbingElectrical,
    summary: 'Heavy-duty power tools, masonry hand tools, laser levels, cutting discs, and site safety gear.',
    description:
      'Contractor-grade tools built for continuous job-site durability—including rotary hammers, angle grinders, spirit levels, measuring tapes, trowels, and PPE kits.',
    supplyFormats: ['Individual Tool Kits', 'Contractor Bulk Cartons', 'Consumable Blade & Bit Packs'],
    applications: ['Civil Contracting Crews', 'MEP Installation Teams', 'Facility Maintenance'],
    specifications: [
      { label: 'Categories', value: 'Power Tools, Hand Tools, Fasteners & PPE' },
      { label: 'Consumables', value: 'Diamond Blades, Drill Bits & Abrasive Discs' },
      { label: 'Supply', value: 'Site-ready bundled crew kits' },
    ],
  },
  {
    id: 'bm-09',
    slug: 'paints',
    sku: 'RG-BM-209',
    name: 'Paints',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodTilesPaints,
    summary: 'Interior acrylic emulsions, weather-shield exterior coatings, epoxy floor paints, and primers.',
    description:
      'High-opacity architectural and protective coatings engineered for UV resilience, washability, and uniform coverage on concrete, plaster, timber, and structural steel.',
    supplyFormats: ['4 L Gallon Cans', '18 L / 20 L Contractor Drums', 'Rollers, Brushes & Thinners'],
    applications: ['Commercial Interiors', 'Exterior Facades', 'Industrial Epoxy Flooring'],
    specifications: [
      { label: 'Systems', value: 'Water-Based Acrylic, Alkyd Enamel & 2K Epoxy' },
      { label: 'Primers', value: 'Alkali-Resistant Masonry & Anti-Corrosion Steel' },
      { label: 'Sheen Options', value: 'Dead Flat, Matte, Silk & Gloss' },
    ],
  },
  {
    id: 'bm-10',
    slug: 'finishing-materials',
    sku: 'RG-BM-210',
    name: 'Finishing Materials',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodTilesPaints,
    summary: 'Gypsum boards, tile adhesives, grouts, wood trims, architectural hardware, and sealants.',
    description:
      'Interior fit-out and architectural detailing supplies designed to deliver clean tolerances across ceilings, wall partitions, flooring joints, and door hardware.',
    supplyFormats: ['Boxed Adhesives & Grouts', 'Palletized Gypsum Sheets', 'Hardware Sets'],
    applications: ['Interior Fit-Out Contractors', 'Hospitality Refurbishments', 'Office Partitions'],
    specifications: [
      { label: 'Scope', value: 'Gypsum Systems, Tile Adhesives, Silicone & Hardware' },
      { label: 'Adhesives', value: 'Polymer-modified C1/C2 cementitious mortars' },
      { label: 'Compatibility', value: 'Porcelain, natural stone & drywall substrates' },
    ],
  },
  {
    id: 'bm-11',
    slug: 'roofing-materials',
    sku: 'RG-BM-211',
    name: 'Roofing Materials',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodSteelRoofing,
    summary: 'Galvanized corrugated sheets, insulated sandwich panels, waterproofing membranes, and flashings.',
    description:
      'Weather-tight roofing assemblies combining structural span strength, corrosion resistance, and multi-layer bitumen or TPO waterproofing membranes.',
    supplyFormats: ['Cut-to-Length Profile Sheets', '10 m Waterproofing Rolls', 'Self-Drilling Fasteners'],
    applications: ['Industrial Warehouses', 'Flat Roof Waterproofing', 'Canopies & Carports'],
    specifications: [
      { label: 'Profiles', value: 'Trapezoidal GI, Color-Coated & Insulated Panels' },
      { label: 'Membranes', value: 'SBS/APP Torch-On & Liquid Waterproofing' },
      { label: 'Thickness', value: '0.45 mm to 0.90 mm Sheet Gauges' },
    ],
  },
  {
    id: 'bm-12',
    slug: 'insulation-materials',
    sku: 'RG-BM-212',
    name: 'Insulation Materials',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.prodSteelRoofing,
    summary: 'Rockwool blankets, extruded polystyrene (XPS) boards, fiberglass rolls, and acoustic panels.',
    description:
      'High-R-value thermal and acoustic insulation materials engineered to lower HVAC energy loads and improve fire and sound attenuation in commercial structures.',
    supplyFormats: ['Compressed Poly Rolls', 'Rigid Foam Board Packs', 'Foil-Faced Duct Wraps'],
    applications: ['Roof & Wall Cavities', 'HVAC Ductwork', 'Cold-Storage Enclosures'],
    specifications: [
      { label: 'Materials', value: 'Mineral Rockwool, XPS, EPS & Glasswool' },
      { label: 'Densities', value: '40 kg/m³ to 100 kg/m³ Acoustic & Thermal' },
      { label: 'Facing', value: 'Unfaced, Aluminum Foil & Kraft Vapor Barrier' },
    ],
  },
  {
    id: 'bm-13',
    slug: 'construction-supplies',
    sku: 'RG-BM-213',
    name: 'Construction Supplies',
    categorySlug: 'building-materials',
    categoryName: 'Building Materials',
    image: ASSETS.catBuildingMaterials,
    summary: 'Formwork plywood, scaffolding accessories, polythene sheeting, warning tapes, and site consumables.',
    description:
      'Essential day-to-day site consumables supporting shuttering, concrete curing, perimeter safety, and material staging throughout every phase of construction.',
    supplyFormats: ['Full Site Consumable Bundles', 'Palletized Film & Mesh Rolls', 'Boxed Anchor Bolts'],
    applications: ['General Contracting', 'Civil Engineering Sites', 'Infrastructure Maintenance'],
    specifications: [
      { label: 'Items', value: 'Film-Faced Plywood, Shuttering Oil, Curing Sheets' },
      { label: 'Safety', value: 'Barricade Mesh, Cones & Reflective Tapes' },
      { label: 'Fulfillment', value: 'Single-PO consolidated site replenishment' },
    ],
  },

  // 3. Transportation (7 items)
  {
    id: 'tr-01',
    slug: 'transportation-services',
    sku: 'RG-TR-301',
    name: 'Transportation Services',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.catTransportationLogistics,
    summary: 'Dedicated commercial road haulage and scheduled multi-drop delivery for project and trade cargo.',
    description:
      'Contracted vehicle dispatch utilizing flatbed trailers, box trucks, and light commercial vans to move construction materials, wholesale groceries, and industrial goods safely on schedule.',
    supplyFormats: ['Dedicated Truck Charter', 'Daily / Weekly Route Contracts', 'Project Site Mobilization'],
    applications: ['Construction Material Hauling', 'Wholesale Retail Distribution', 'Inter-Facility Transfers'],
    specifications: [
      { label: 'Fleet Mix', value: '3-Ton, 7-Ton, 10-Ton & 40 ft Flatbed/Box' },
      { label: 'Dispatch Model', value: 'On-demand & long-term contract scheduling' },
      { label: 'Tracking', value: 'Structured dispatch & proof-of-delivery logs' },
    ],
    featured: true,
  },
  {
    id: 'tr-02',
    slug: 'truck-tyres',
    sku: 'RG-TR-302',
    name: 'Truck Tyres',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.prodHeavyTyres,
    summary: 'All-steel radial steer, drive, and trailer tyres built for regional and long-haul commercial trucks.',
    description:
      'Reinforced multi-ply commercial truck tyres engineered for high mileage, even shoulder wear, heat dissipation, and retreadability across highway and mixed-road routes.',
    supplyFormats: ['Single Replacement Units', 'Fleet Axle Sets', 'Container / Bulk Wholesale Lots'],
    applications: ['Long-Haul Semi-Trailers', 'Regional Box Trucks', 'Commercial Fleet Operators'],
    specifications: [
      { label: 'Common Sizes', value: '295/80R22.5, 315/80R22.5, 11R22.5, 12.00R24' },
      { label: 'Positions', value: 'Steer, Drive Traction & Free-Rolling Trailer' },
      { label: 'Construction', value: 'All-steel radial tubeless & tube-type' },
    ],
    featured: true,
  },
  {
    id: 'tr-03',
    slug: 'commercial-vehicle-supplies',
    sku: 'RG-TR-303',
    name: 'Commercial Vehicle Supplies',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.prodHeavyTyres,
    summary: 'Heavy-duty lubricants, filters, batteries, brake linings, and fleet maintenance consumables.',
    description:
      'Workshop-ready consumables for commercial transport operators, keeping vans, buses, and heavy rigs roadworthy with dependable fluids, filtration, and safety gear.',
    supplyFormats: ['20 L & 208 L Lubricant Drums', 'Filter & Brake Service Kits', 'Fleet Workshop Pallets'],
    applications: ['Transport Fleet Garages', 'Logistics Hubs', 'Contractor Equipment Yards'],
    specifications: [
      { label: 'Range', value: '15W-40 Diesel Oil, Coolant, Air/Oil Filters, Batteries' },
      { label: 'Safety Kit', value: 'Wheel Chocks, Ratchet Straps & Reflective Triangles' },
      { label: 'Supply', value: 'Scheduled workshop stock replenishment' },
    ],
  },
  {
    id: 'tr-04',
    slug: 'heavy-vehicle-tyres',
    sku: 'RG-TR-304',
    name: 'Heavy Vehicle Tyres',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.prodHeavyTyres,
    summary: 'Cut-resistant off-the-road (OTR) and dump-truck tyres for construction sites and quarries.',
    description:
      'Deep-lug, cut-and-chip-resistant tyres engineered for wheel loaders, excavators, tipper trucks, and rigid haulers operating over gravel, rock, and unpaved terrain.',
    supplyFormats: ['Individual Heavy Units', 'Site Equipment Sets', 'Fleet Contract Supply'],
    applications: ['Dump & Tipper Fleets', 'Earthmoving Loaders', 'Quarry & Civil Sites'],
    specifications: [
      { label: 'Tread Types', value: 'E3/L3 Rock, G2 Grader & Mixed On/Off-Road' },
      { label: 'Durability', value: 'Reinforced sidewall & high-load ply ratings' },
      { label: 'Sizes', value: '17.5-25, 20.5-25, 23.5-25 & Heavy Tipper Sizes' },
    ],
  },
  {
    id: 'tr-05',
    slug: 'logistics-solutions',
    sku: 'RG-TR-305',
    name: 'Logistics Solutions',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.prodFreightCargo,
    summary: 'Coordinated staging, cross-docking, route planning, and multi-category supply consolidation.',
    description:
      'End-to-end operational coordination combining inbound vendor consolidation, pallet staging, and timed outbound dispatch so contractors and retailers receive unified deliveries.',
    supplyFormats: ['Consolidated Multi-Vendor Dispatch', 'Scheduled Replenishment Loops', 'Project Staging'],
    applications: ['Multi-Site Contractors', 'Wholesale Distributors', 'Hospitality Chains'],
    specifications: [
      { label: 'Capabilities', value: 'Consolidation, Palletization & Route Optimization' },
      { label: 'Documentation', value: 'Manifesting, Packing Lists & Delivery Sign-Off' },
      { label: 'Flexibility', value: 'Scalable capacity for peak project phases' },
    ],
  },
  {
    id: 'tr-06',
    slug: 'freight-transportation',
    sku: 'RG-TR-306',
    name: 'Freight Transportation',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.prodFreightCargo,
    summary: 'Full-truckload (FTL) and less-than-truckload (LTL) commercial freight movement across corridors.',
    description:
      'Structured FTL and consolidated LTL freight services engineered for palletized industrial goods, packaged food commodities, and bulk construction hardware.',
    supplyFormats: ['Full Truckload (FTL)', 'Consolidated LTL Pallets', 'Curtainside & Box Trailers'],
    applications: ['Industrial Manufacturers', 'Port-to-Warehouse Transfers', 'Regional Trade'],
    specifications: [
      { label: 'Load Types', value: 'Palletized Dry Freight, Crated Machinery & Sacks' },
      { label: 'Securement', value: 'Load bars, dunnage & heavy-duty strapping' },
      { label: 'Service Level', value: 'Predictable transit windows & direct routing' },
    ],
  },
  {
    id: 'tr-07',
    slug: 'cargo-transportation',
    sku: 'RG-TR-307',
    name: 'Cargo Transportation',
    categorySlug: 'transportation',
    categoryName: 'Transportation',
    image: ASSETS.catTransportationLogistics,
    summary: 'Container drayage, oversized project cargo haulage, and sealed commercial goods transit.',
    description:
      'Specialized movement of 20 ft and 40 ft containers, steel bundles, and crated equipment between ports, dry depots, and active contracting project sites.',
    supplyFormats: ['20 ft & 40 ft Container Chassis', 'Low-Bed & Flatbed Haulage', 'Port Clearance Transfer'],
    applications: ['Import/Export Traders', 'EPC Contractors', 'Heavy Equipment Suppliers'],
    specifications: [
      { label: 'Equipment', value: 'Skeletal Container Trailers & Heavy Flatbeds' },
      { label: 'Cargo Security', value: 'Container seal verification & tarpaulin cover' },
      { label: 'Coverage', value: 'Port terminals, industrial zones & job sites' },
    ],
  },

  // 4. Cleaning Items (10 items)
  {
    id: 'cl-01',
    slug: 'cleaning-chemicals',
    sku: 'RG-CL-401',
    name: 'Cleaning Chemicals',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningChemicals,
    summary: 'Concentrated multi-surface degreasers, glass cleaners, descalers, and facility maintenance fluids.',
    description:
      'Formulated commercial chemical concentrates designed for high dilution efficiency, surface safety, and reliable soil removal across kitchens, washrooms, and public lobbies.',
    supplyFormats: ['5 L x 4 Carton', '20 L Jerrycan', '200 L Facility Drum'],
    applications: ['Facility Management', 'Commercial Kitchens', 'Office & Retail Complexes'],
    specifications: [
      { label: 'Formulations', value: 'Neutral, Alkaline Degreasers & Acidic Descalers' },
      { label: 'Dilution', value: 'High-yield concentrates for dosing systems' },
      { label: 'Documentation', value: 'Clear usage & dilution labeling on containers' },
    ],
    featured: true,
  },
  {
    id: 'cl-02',
    slug: 'floor-cleaners',
    sku: 'RG-CL-402',
    name: 'Floor Cleaners',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningChemicals,
    summary: 'Low-foam neutral floor cleaners and perfumed mopping solutions for marble, tile, and vinyl.',
    description:
      'Streak-free floor maintenance liquids formulated for both manual microfiber mopping and automatic walk-behind scrubber dryers without dulling polished stone finishes.',
    supplyFormats: ['5 L Container', '20 L Commercial Pail', 'Auto-Scrubber Low-Foam Grades'],
    applications: ['Marble & Granite Lobbies', 'Hospitality Corridors', 'Shopping Centers'],
    specifications: [
      { label: 'Surfaces', value: 'Porcelain, Marble, Terrazzo, Epoxy & Vinyl' },
      { label: 'Foam Profile', value: 'Low-foam machine-safe & scented manual variants' },
      { label: 'pH Balance', value: 'Neutral pH formulas to protect stone sealers' },
    ],
  },
  {
    id: 'cl-03',
    slug: 'dishwashing-products',
    sku: 'RG-CL-403',
    name: 'Dishwashing Products',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningChemicals,
    summary: 'High-sudsing manual dish liquids, machine warewashing detergents, and spot-free rinse aids.',
    description:
      'Grease-cutting kitchen warewashing solutions engineered for commercial sculleries, high-temperature dishmachines, and staff pantries.',
    supplyFormats: ['1 L Squeeze Bottles', '5 L & 20 L Warewash Drums', 'Rinse Aid & Descaler Packs'],
    applications: ['Hotel Stewarding', 'Restaurant Sculleries', 'Catering Commissaries'],
    specifications: [
      { label: 'Variants', value: 'Manual Lemon Liquid, Auto Dish Detergent & Rinse Aid' },
      { label: 'Performance', value: 'Rapid grease emulsification & residue-free rinse' },
      { label: 'Pack Size', value: 'Bulk 5 L / 20 L foodservice containers' },
    ],
  },
  {
    id: 'cl-04',
    slug: 'detergents',
    sku: 'RG-CL-404',
    name: 'Detergents',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningChemicals,
    summary: 'Commercial laundry powder and liquid detergents for hospitality linens, uniforms, and workwear.',
    description:
      'Enzyme-assisted laundry detergents and fabric softeners formulated to lift stubborn food, oil, and site stains while preserving linen whiteness and fiber life.',
    supplyFormats: ['10 kg / 25 kg Laundry Sacks', '20 L Liquid Laundry Drums', 'Retail Pack Cases'],
    applications: ['On-Premise Hotel Laundries', 'Workwear Cleaning', 'Facility Linen Services'],
    specifications: [
      { label: 'Formats', value: 'Low-Foam Automatic Powder & Concentrated Liquid' },
      { label: 'Additives', value: 'Oxygen brighteners & fabric softeners available' },
      { label: 'Water Range', value: 'Effective across hard and soft water supplies' },
    ],
  },
  {
    id: 'cl-05',
    slug: 'disinfectants',
    sku: 'RG-CL-405',
    name: 'Disinfectants',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.catCleaningHygiene,
    summary: 'Broad-spectrum surface disinfectants, pine antiseptics, and food-contact sanitizing sprays.',
    description:
      'Reliable sanitizing agents for high-touch washrooms, medical clinics, food preparation tables, and communal workspaces requiring rigorous hygiene upkeep.',
    supplyFormats: ['750 ml Trigger Sprays', '5 L Concentrate Cans', '20 L Institutional Drums'],
    applications: ['Clinics & Healthcare', 'Food Prep Counters', 'Public Washrooms & Schools'],
    specifications: [
      { label: 'Active Types', value: 'Quaternary Ammonium, Chlorine & Pine Formulas' },
      { label: 'Application', value: 'Trigger spray, wipe-down & fogging dilutions' },
      { label: 'Safety', value: 'No-rinse food-safe & heavy washroom grades' },
    ],
  },
  {
    id: 'cl-06',
    slug: 'tissue-products',
    sku: 'RG-CL-406',
    name: 'Tissue Products',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.catCleaningHygiene,
    summary: 'Interfold hand towels, jumbo toilet rolls, facial tissue boxes, and kitchen wiping rolls.',
    description:
      'High-absorbency virgin and recycled-blend paper products sized for commercial dispensers, executive washrooms, and high-traffic public facilities.',
    supplyFormats: ['Jumbo Rolls (6 / 12 per Bale)', 'Interfold Towel Cartons', '2-Ply Facial Box Cases'],
    applications: ['Corporate Washrooms', 'Hotels & Restaurants', 'Healthcare Facilities'],
    specifications: [
      { label: 'Ply Options', value: '1-Ply Economy & 2-Ply Soft Virgin Pulp' },
      { label: 'Formats', value: 'JRT, M-Fold/C-Fold Towels, Autocut & Center-Pull' },
      { label: 'Packaging', value: 'Moisture-protected master cartons & poly bales' },
    ],
  },
  {
    id: 'cl-07',
    slug: 'cleaning-tools',
    sku: 'RG-CL-407',
    name: 'Cleaning Tools',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningEquipment,
    summary: 'Color-coded microfiber mops, brooms, squeegees, dusters, and commercial dustpans.',
    description:
      'Ergonomic, color-coded janitorial hand tools designed to prevent cross-contamination between kitchens, washrooms, and general office zones.',
    supplyFormats: ['Color-Coded Mop Sets', '12-Unit Contractor Packs', 'Replacement Microfiber Pads'],
    applications: ['Contract Cleaning Teams', 'Hospitality Housekeeping', 'Foodservice Zones'],
    specifications: [
      { label: 'Coding', value: 'Red, Blue, Green & Yellow zone separation' },
      { label: 'Handles', value: 'Anodized lightweight aluminum & telescopic poles' },
      { label: 'Materials', value: 'Washable high-density microfiber & durable polypropylene' },
    ],
  },
  {
    id: 'cl-08',
    slug: 'cleaning-equipment',
    sku: 'RG-CL-408',
    name: 'Cleaning Equipment',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningEquipment,
    summary: 'Janitorial utility trolleys, wet-dry vacuums, mop wringer buckets, and floor scrubber machines.',
    description:
      'Heavy-duty housekeeping carts and mechanized floor care equipment built to raise cleaning productivity across large warehouses, lobbies, and commercial towers.',
    supplyFormats: ['Assembled Trolley Units', 'Wet/Dry Vacuum Kits', 'Walk-Behind Floor Scrubbers'],
    applications: ['Shopping Malls & Airports', 'Warehouses', 'Commercial Building Maintenance'],
    specifications: [
      { label: 'Equipment', value: 'Janitorial Carts, Dual-Bucket Wringers, Scrubbers' },
      { label: 'Safety Gear', value: 'Wet-floor caution cones & A-frame signage' },
      { label: 'Mobility', value: 'Non-marking swivel casters & heavy bumpers' },
    ],
    featured: true,
  },
  {
    id: 'cl-09',
    slug: 'hygiene-supplies',
    sku: 'RG-CL-409',
    name: 'Hygiene Supplies',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.catCleaningHygiene,
    summary: 'Liquid hand soaps, alcohol sanitizers, wall dispensers, disposable gloves, and bin liners.',
    description:
      'Essential personal hygiene and waste-containment consumables supporting compliant, well-stocked washrooms and food-handling stations.',
    supplyFormats: ['5 L Hand Soap Refills', 'Wall-Mount Dispenser Kits', 'Heavy-Duty Trash Bag Rolls'],
    applications: ['Office Restrooms', 'Catering Prep Areas', 'Schools & Clinics'],
    specifications: [
      { label: 'Consumables', value: 'Foaming/Liquid Soap, Sanitizers, Nitrile Gloves' },
      { label: 'Waste Care', value: 'HDPE & LDPE bin liners in 30 L to 240 L sizes' },
      { label: 'Hardware', value: 'ABS lockable soap & paper dispensers' },
    ],
  },
  {
    id: 'cl-10',
    slug: 'industrial-cleaning-products',
    sku: 'RG-CL-410',
    name: 'Industrial Cleaning Products',
    categorySlug: 'cleaning-items',
    categoryName: 'Cleaning Items',
    image: ASSETS.prodCleaningChemicals,
    summary: 'Heavy-duty workshop degreasers, concrete floor cleaners, industrial wipes, and pressure-wash soaps.',
    description:
      'High-strength cleaning agents and heavy wiping cloths engineered to cut grease, tire marks, hydraulic oil, and construction dust in garages, factories, and warehouses.',
    supplyFormats: ['20 L Heavy Drums', '200 L Industrial Barrels', 'Bulk Rag & Wipe Bales'],
    applications: ['Fleet Maintenance Bays', 'Manufacturing Floors', 'Post-Construction Handover'],
    specifications: [
      { label: 'Chemistry', value: 'Solvent-Free & Heavy Alkaline Oil Degreasers' },
      { label: 'Use Mode', value: 'Pressure washer, dip-tank & scrubber compatible' },
      { label: 'Volume', value: 'Palletized 20 L pails & 200 L drums' },
    ],
  },
];

export const SERVICES = [
  {
    number: '01',
    title: 'Multi-Sector Wholesale Sourcing',
    description:
      'Consolidated procurement across food commodities, building supplies, and hygiene consumables—reducing vendor fragmentation and simplifying purchase-order coordination.',
  },
  {
    number: '02',
    title: 'Project & Contracting Material Supply',
    description:
      'Scheduled bulk delivery of structural steel, cement, aggregates, finishes, and MEP assemblies aligned directly with civil construction timelines and site staging capacity.',
  },
  {
    number: '03',
    title: 'Commercial Freight & Fleet Support',
    description:
      'Dedicated flatbed, box-truck, and container cargo transport paired with reliable commercial truck tyres, OTR heavy tyres, and workshop fleet consumables.',
  },
  {
    number: '04',
    title: 'Institutional Hygiene & Facility Replenishment',
    description:
      'Recurring supply programs for hotels, corporate towers, clinics, and camps—combining concentrated sanitation chemicals, paper systems, and janitorial equipment.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Four Divisions Under One Partner',
    description:
      'Coordinate food provisions, construction materials, freight haulage, and facility hygiene through a single accountable corporate supplier.',
  },
  {
    title: 'Consistent Batch & Grade Standards',
    description:
      'Products are sourced against clear commercial specifications—from Sortex-cleaned pulses and cold-chain proteins to heavy radial tyres and structural cement.',
  },
  {
    title: 'Schedule-Aligned Site Logistics',
    description:
      'Our transportation division integrates cargo consolidation and scheduled truck dispatch so materials arrive when your site or warehouse is ready.',
  },
  {
    title: 'Responsive Procurement Desk',
    description:
      'Dedicated commercial coordination for mixed-SKU supply, recurring contracts, and project-specific bill-of-quantities fulfillment.',
  },
];

export function getCategoryBySlug(slug?: string): CategoryInfo | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getProductsByCategory(slug?: string): ProductItem[] {
  if (!slug) return PRODUCTS;
  return PRODUCTS.filter((item) => item.categorySlug === slug);
}
