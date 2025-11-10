'use client';

import { useState, useEffect } from 'react';
import ProductHero from './ProductHero';
import TechnicalSpecifications from './TechnicalSpecifications';
import ProductConfigurator from './ProductConfigurator';
import ComparisonMatrix from './ComparisonMatrix';
import ApplicationGuide from './ApplicationGuide';
import RelatedProducts from './RelatedProducts';

interface ProductDetailInteractiveProps {}

const ProductDetailInteractive = ({}: ProductDetailInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="h-64 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>);

  }

  // Mock product data
  const productData = {
    id: "industrial-dryer-hd-500",
    name: "Industrial Spray Dryer HD-500",
    category: "Industrial Dryers",
    description: "High-performance spray dryer designed for pharmaceutical, food, and chemical industries. Features advanced atomization technology, precise temperature control, and superior product quality with minimal thermal degradation.",
    mainImage: "https://images.unsplash.com/photo-1672676935290-fa2ce117d5de",
    mainImageAlt: "Large industrial spray dryer equipment with stainless steel construction in modern manufacturing facility",
    gallery: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1735429934534-5472ff9a48a1",
      alt: "Close-up view of spray dryer control panel with digital displays and control buttons"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1507298992594-e9640edb7ad2",
      alt: "Internal chamber view showing spray nozzle and drying chamber construction"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1690122310586-e142d7b26a2c",
      alt: "Product discharge system with collection chamber and pneumatic conveying"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1732030235618-be05d869ad99",
      alt: "Heat exchanger unit integrated with spray dryer system for energy recovery"
    }],

    keyFeatures: [
    "Advanced Atomization Technology",
    "Precise Temperature Control",
    "Energy Efficient Design",
    "GMP Compliant Construction",
    "Automated CIP System",
    "Real-time Monitoring"],

    applications: [
    "Pharmaceutical",
    "Food & Dairy",
    "Chemical Processing",
    "Biotechnology",
    "Nutraceuticals"]

  };

  const technicalSpecs = {
    general: [
    { parameter: "Model", value: "HD-500" },
    { parameter: "Capacity", value: "50-500", unit: "kg/hr" },
    { parameter: "Inlet Temperature", value: "150-300", unit: "°C" },
    { parameter: "Outlet Temperature", value: "80-120", unit: "°C" },
    { parameter: "Evaporation Capacity", value: "200-2000", unit: "kg/hr" }],

    performance: [
    { parameter: "Thermal Efficiency", value: "85-90", unit: "%" },
    { parameter: "Product Recovery", value: ">95", unit: "%" },
    { parameter: "Particle Size", value: "10-500", unit: "μm" },
    { parameter: "Moisture Content", value: "<2", unit: "%" },
    { parameter: "Bulk Density", value: "0.3-0.8", unit: "g/cm³" }],

    dimensions: [
    { parameter: "Overall Height", value: "12", unit: "m" },
    { parameter: "Chamber Diameter", value: "3.5", unit: "m" },
    { parameter: "Floor Area", value: "8 x 6", unit: "m" },
    { parameter: "Total Weight", value: "15", unit: "tons" },
    { parameter: "Installation Height", value: "15", unit: "m" }],

    materials: [
    { parameter: "Contact Parts", value: "SS 316L" },
    { parameter: "Non-contact Parts", value: "SS 304" },
    { parameter: "Insulation", value: "Mineral Wool" },
    { parameter: "Gaskets", value: "FDA Approved" },
    { parameter: "Surface Finish", value: "Ra < 0.8 μm" }]

  };

  const configurationOptions = [
  {
    id: "atomizer",
    name: "Atomization System",
    options: [
    { value: "pressure", label: "Pressure Nozzle", price: 0 },
    { value: "rotary", label: "Rotary Atomizer", price: 150000 },
    { value: "two-fluid", label: "Two-Fluid Nozzle", price: 75000 }]

  },
  {
    id: "heating",
    name: "Heating System",
    options: [
    { value: "steam", label: "Steam Heating", price: 0 },
    { value: "electric", label: "Electric Heating", price: 100000 },
    { value: "gas", label: "Gas Heating", price: 125000 }]

  },
  {
    id: "collection",
    name: "Product Collection",
    options: [
    { value: "cyclone", label: "Cyclone Separator", price: 0 },
    { value: "bag-filter", label: "Bag Filter", price: 200000 },
    { value: "wet-scrubber", label: "Wet Scrubber", price: 300000 }]

  },
  {
    id: "automation",
    name: "Automation Level",
    options: [
    { value: "manual", label: "Manual Control", price: 0 },
    { value: "semi-auto", label: "Semi-Automatic", price: 250000 },
    { value: "full-auto", label: "Fully Automatic", price: 500000 }]

  }];


  const comparisonModels = [
  {
    id: "hd-250",
    name: "HD-250",
    capacity: "25-250 kg/hr",
    power: "150 kW",
    efficiency: "85%",
    price: "₹1.8 Cr",
    features: ["Compact Design", "Energy Efficient", "Easy Maintenance"],
    recommended: false
  },
  {
    id: "hd-500",
    name: "HD-500",
    capacity: "50-500 kg/hr",
    power: "300 kW",
    efficiency: "90%",
    price: "₹2.5 Cr",
    features: ["High Capacity", "Advanced Control", "Superior Quality", "GMP Compliant"],
    recommended: true
  },
  {
    id: "hd-1000",
    name: "HD-1000",
    capacity: "100-1000 kg/hr",
    power: "500 kW",
    efficiency: "92%",
    price: "₹4.2 Cr",
    features: ["Maximum Capacity", "Premium Features", "Automated CIP"],
    recommended: false
  },
  {
    id: "hd-2000",
    name: "HD-2000",
    capacity: "200-2000 kg/hr",
    power: "800 kW",
    efficiency: "94%",
    price: "₹6.8 Cr",
    features: ["Industrial Scale", "Multi-Product", "Advanced Analytics"],
    recommended: false
  }];


  const applicationData = [
  {
    id: "pharmaceutical",
    industry: "Pharmaceutical",
    title: "Pharmaceutical API & Excipient Drying",
    description: "Specialized spray drying for active pharmaceutical ingredients (APIs), excipients, and drug formulations. Our equipment ensures product integrity, maintains potency, and meets stringent regulatory requirements for pharmaceutical manufacturing.",
    image: "https://images.unsplash.com/photo-1702971916926-948dd75f0898",
    imageAlt: "Modern pharmaceutical manufacturing facility with spray dryer processing white powder medications",
    benefits: [
    "GMP compliant design with validation documentation",
    "Minimal thermal degradation preserves API activity",
    "Controlled particle size distribution for bioavailability",
    "Automated CIP/SIP systems for contamination prevention",
    "Real-time monitoring for batch consistency"],

    caseStudy: {
      client: "Leading Pharma Manufacturer",
      result: "Successful API drying with 99.2% purity retention",
      improvement: "35% reduction in processing time"
    }
  },
  {
    id: "food-dairy",
    industry: "Food & Dairy",
    title: "Food Powder & Dairy Product Processing",
    description: "Food-grade spray drying solutions for milk powder, coffee, flavors, and nutritional supplements. Our systems maintain nutritional value, ensure food safety, and deliver consistent product quality for the food and beverage industry.",
    image: "https://images.unsplash.com/photo-1472633000120-16b5381f2c04",
    imageAlt: "Food processing facility with stainless steel spray dryer producing milk powder in clean environment",
    benefits: [
    "Food-grade stainless steel construction",
    "Preservation of nutritional content and flavor",
    "Hygienic design with easy cleaning protocols",
    "Consistent powder characteristics for packaging",
    "Energy recovery systems for cost efficiency"],

    caseStudy: {
      client: "Major Dairy Cooperative",
      result: "Premium milk powder with extended shelf life",
      improvement: "25% energy savings with heat recovery"
    }
  },
  {
    id: "chemical",
    industry: "Chemical Processing",
    title: "Specialty Chemical & Catalyst Drying",
    description: "Robust spray drying systems for specialty chemicals, catalysts, and industrial powders. Engineered to handle corrosive materials, high temperatures, and demanding process conditions while ensuring operator safety and environmental compliance.",
    image: "https://images.unsplash.com/photo-1651672391284-2f5bd4451694",
    imageAlt: "Industrial chemical plant with large spray dryer system processing specialty chemical powders",
    benefits: [
    "Corrosion-resistant materials for harsh chemicals",
    "Explosion-proof design for hazardous environments",
    "Advanced emission control systems",
    "Precise temperature and atmosphere control",
    "Automated safety interlocks and monitoring"],

    caseStudy: {
      client: "Specialty Chemical Producer",
      result: "Consistent catalyst powder with optimal activity",
      improvement: "40% improvement in product uniformity"
    }
  }];


  const relatedProductsData = [
  {
    id: "heat-exchanger-he-300",
    name: "Shell & Tube Heat Exchanger HE-300",
    category: "Heat Exchangers",
    description: "High-efficiency heat exchanger designed for process heating and cooling applications in pharmaceutical and chemical industries.",
    image: "https://images.unsplash.com/photo-1642721084296-4eeec95f74da",
    imageAlt: "Stainless steel shell and tube heat exchanger with multiple tube passes in industrial setting",
    keyFeatures: ["High Heat Transfer", "Corrosion Resistant", "Easy Maintenance"],
    priceRange: "₹15-45 Lakhs"
  },
  {
    id: "pressure-vessel-pv-500",
    name: "Stainless Steel Pressure Vessel PV-500",
    category: "Pressure Vessels",
    description: "ASME certified pressure vessel for storage and processing of liquids and gases under pressure in various industrial applications.",
    image: "https://images.unsplash.com/photo-1642721084262-db9a35314f4c",
    imageAlt: "Large cylindrical stainless steel pressure vessel with safety valves and instrumentation",
    keyFeatures: ["ASME Certified", "Custom Design", "Safety Systems"],
    priceRange: "₹25-75 Lakhs"
  },
  {
    id: "mixing-tank-mt-1000",
    name: "Agitated Mixing Tank MT-1000",
    category: "Mixing Equipment",
    description: "Versatile mixing tank with variable speed agitator for blending, dissolving, and homogenizing applications in process industries.",
    image: "https://images.unsplash.com/photo-1630522521616-aac6fd729e11",
    imageAlt: "Industrial mixing tank with overhead agitator and baffles in pharmaceutical manufacturing facility",
    keyFeatures: ["Variable Speed", "Multiple Impellers", "Jacketed Design"],
    priceRange: "₹12-35 Lakhs"
  }];


  return (
    <div className="min-h-screen bg-background">
      <ProductHero product={productData} />
      <TechnicalSpecifications specifications={technicalSpecs} />
      <ProductConfigurator configurations={configurationOptions} />
      <ComparisonMatrix models={comparisonModels} />
      <ApplicationGuide applications={applicationData} />
      <RelatedProducts products={relatedProductsData} />
    </div>);

};

export default ProductDetailInteractive;