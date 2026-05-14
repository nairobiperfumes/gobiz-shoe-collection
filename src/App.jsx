import { useState } from "react";

export default function App() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      brand: "Nike",
      gender: ["Unisex",  "Men",  "Women"],
      price: "KSh 4,000",
      availability: "Available",
      image:
        "Nike-Air-Max.jpg",
    },
    {
      id: 2,
      name: "Adidas Street",
      brand: "Adidas",
      gender: ["Unisex",  "Men",  "Women"],
      price: "KSh 4,500",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Jordan Retro",
      brand: "Jordan",
      gender: ["Unisex",  "Men",  "Women"],
      price: "KSh 3,500",
      availability: "Limited Stock",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    },

    {
  id: 4,
  name: "Double Monk Casuals",
  brand: "Double Monk",
  gender: ["Men"],
  price: "KSh 4,800",
  availability: "Available",
  image: "double-monk-casuals1.jpg",
  images: [
    "/images/double-monk-casuals1.jpg",
    "/images/double-monk-casuals2.jpg",
    "/images/double-monk-casuals3.jpg",
    "/images/double-monk-casuals4.jpg",
  ],
},

{id: 90,
  name: "Print Breathables 1",
  brand: "Print",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 2,800",
  availability: "Available",
  image: "print-breathables1.jpg",
  images: [
    "print-breathables1.jpg",
  ],
},
{id: 92,
  name: "Print Breathables 2",
  brand: "Print",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 2,800",
  availability: "Available",
  image: "print-breathables2.jpg",
  images: [
    "print-breathables2.jpg",
  ],
},
{id: 93,
  name: "Print Breathables 3",
  brand: "Print",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 2,800",
  availability: "Available",
  image: "print-breathables3.jpg",
  images: [
    "print-breathables3.jpg",
  ],
},
  { 

  id: 5,
  name: "Nike Shox 1/7",
  brand: "Nike",
  gender: "Men", 
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox1.jpg",
  gallery: [
    "nike-shox1.jpg",
    
  ],

},
{ 
  id: 31,
  name: "Nike Shox 2/7",
  brand: "Nike",
  gender: "Men", 
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox2.jpg",
  gallery: [
    "nike-shox2.jpg",
    
  ],

},{ 
  id: 32,
  name: "Nike Shox 3/7",
  brand: "Nike",
  gender: "Men",
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox3.jpg",
  gallery: [
    "nike-shox3.jpg",
   
  ],

},
{ 
  id: 33,
  name: "Nike Shox 4/7",
  brand: "Nike",
  gender: "Men", 
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox4.jpg",
  gallery: [
    "nike-shox4.jpg",
    
  ],

},

{ 
  id: 34,
  name: "Nike Shox 5/7",
  brand: "Nike",
  gender: "Men", 
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox5.jpg",
  gallery: [
    "nike-shox5.jpg",
    
  ],

},
{ 
  id: 35,
  name: "Nike Shox 6/7",
  brand: "Nike",
  gender: "Men", 
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox6.jpg",
  gallery: [
    "nike-shox6.jpg",
    
  ],

},
{ 
  id: 36,
  name: "Nike Shox 7/7",
  brand: "Nike",
  gender: "Men",
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox7.jpg",
  gallery: [
    "nike-shox7.jpg",
    
  ],

},
{
  id: 7,
  name: "Nike Airzoom",
  brand: "Nike",
  gender: ["Men", "women", "Unisex"],
  price: "KSh 3,000",
  availability: "Available",
  image: "nike-airzoom1.jpg",
  gallery: [
    "nike-airzoom2.jpg",
    "nike-airzoom3.jpg",
    "nike-airzoom4.jpg",
    "nike-airzoom5.jpg",
    "nike-airzoom6.jpg",
    "nike-airzoom7.jpg",
    "nike-airzoom8.jpg",
  ],
},
  {
  id: 8,
  name: "Double view monk cofee",
  brand: "Double Monk",
  gender: ["Men"],  
  price: "KSh 4,500",
  availability: "Available",
  image: "double-monk-cofee.jpg",
  gallery: [
    "double-monk-cofee.jpg"
  ],

},

{
  id: 37,
  name: "Nike Portal 1/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal1.jpg",
  gallery: [
    "nike-portal1.jpg",
   
  ],

},
{
  id: 38,
  name: "Nike Portal 2/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal2.jpg",
  gallery: [
    "nike-portal2.jpg",
   
  ],

},
{
  id: 39,
  name: "Nike Portal 3/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal3.jpg",
  gallery: [
    "nike-portal3.jpg",
   
  ],

},
{
  id: 40,
  name: "Nike Portal 4/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal4.jpg",
  gallery: [
    "nike-portal4.jpg",
   
  ],

},
{
  id: 41,
  name: "Nike Portal 5/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal5.jpg",
  gallery: [
    "nike-portal5.jpg",
   
  ],

},
{
  id: 42,
  name: "Nike Portal 6/6",
  brand: "Nike",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal6.jpg",
  gallery: [
    "nike-portal6.jpg",
   
  ],

},
{
  id: 9,
  name: "Polo Casual black",
  brand: "Polo",
  gender: ["Men",],
  price: "KSh 3,500",
  availability: "Available",
  image: "polo-casuals.jpg",
  gallery: [
    "polo-casuals.jpg",
    
  ],
},
{
  id: 10,
  name: "Polo Casual white",
  brand: "Polo",
  gender: ["Men",],
  price: "KSh 3,500",
  availability: "Available",
  image: "polo-casuals-white.jpg",
  gallery: [
    "polo-casuals-white.jpg",
    
  ],
},
{
  id: 11,
  name: "MK Ladies sneakers white",
  brand: "MK",
  gender: ["Women"],
  price: "KSh 2,800",
  availability: "Available",
  image: "MK-ladies-white.jpg",
  gallery: [
    "MK-ladies-white.jpg",
    
  ],
},
{
  id: 12,
  name: "MK Ladies sneakers blacck", 
  brand: "MK",
  gender: "Women",
  price: "KSh 2,800",
  availability: "Available",
  image: "MK-ladies-black.jpg",
  gallery: [
    "MK-ladies-black.jpg",
    
  ],
},
{
  id: 13,
  name: "MK Ladies sneakers pink",
  brand: "MK",
  gender: "Women",
  price: "KSh 2,800",
  availability: "Available",
  image: "MK-ladies-pink.jpg",
  gallery: [
    "MK-ladies-pink.jpg",
    
  ],
},
{
  id: 14,
  name: "MK Ladies sneakers brown",
  brand: "MK",
  gender: "Women",
  price: "KSh 2,800",
  availability: "Available",
  image: "MK-ladies-brown.jpg",
  gallery: [
    "MK-ladies-brown.jpg",
    
  ],
},
{
  id: 15,
  name: "Double view monk black",
  brand: "Double Monk",
  gender: "Men",
  price: "KSh 4,500",
  availability: "Available",
  image: "double-monk-black.jpg",
  gallery: [
    "double-monk-black.jpg"
  ],

},
{
  id: 19,
  name: "Adidas campus black",
  brand: "Adidas",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "Adidas-campus-black.jpg",
  gallery: [
    "Adidas-campus-black.jpg"
  ],
},
{
  id: 16,
  name: "Adidas campus pink",
  brand: "Adidas",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "Adidas-campus-pink.jpg",
  gallery: [
    "Adidas-campus-pink.jpg"
  ],
},
{
  id: 17,
  name: "Adidas campus white",
  brand: "Adidas",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "Adidas-campus-white.jpg",
  gallery: [
    "Adidas-campus-white.jpg"
  ],
},
{
  id: 18,
  name: "Adidas campus grey",
  brand: "Adidas",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "Adidas-campus-grey.jpg",
  gallery: [ 
    "Adidas-campus-grey.jpg"
  ],
},
{
  id: 19,
  name: "Ladies wedges red",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "ladies-wedges-red.jpg",
  gallery: [ 
    "ladies-wedges-red.jpg"
  ],
},
{
  id: 20,
  name: "Ladies wedges white",
  brand: "Ladies",
  gender: "Women",
  price: "KSh 3,200",
  availability: "Available",
  image: "ladies-wedges-white.jpg",
  gallery: [ 
    "ladies-wedges-white.jpg"
  ],
},
{
  id: 21,
  name: "Ladies wedges black",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "ladies-wedges-black.jpg",
  gallery: [ 
    "ladies-wedges-black.jpg"
  ],
},
{
  id: 22,
  name: "Zara flat Sandals(multiple colours)",
  brand: "Zara",
  gender: ["Women"],
  price: "KSh 3,200",
  availability: "Available",
  image: "zara-flat-sandals.jpg",
  gallery: [ 
    "zara-flat-sandals.jpg"
  ],
},
{
  id: 23,
  name: "LV Sandals brown",
  brand: "Luis Vutton",
  gender: ["Women", "Unisex", "Men"],
  price: "KSh 3,200",
  availability: "Available",
  image: "lv-sandals-brown.jpg",
  gallery: [ 
    "lv-sandals-brown.jpg"
  ],
},
{
  id: 24,
  name: "LV Sandals pink",
  brand: "Luis Vutton",
  gender: ["Women", "Unisex", "Men"],
  price: "KSh 3,200",
  availability: "Available",
  image: "lv-sandals-pink.jpg",
  gallery: [ 
    "lv-sandals-pink.jpg"
  ],
},
{
  id: 25,
  name: "Cute strappy sandals (multiple colours)",
  brand: "Cute",
  gender: ["Women"],
  price: "KSh 1,800",
  availability: "Available",
  image: "cute-strappy-sandals.jpg",
  gallery: [ 
    "cute-strappy-sandals.jpg"
  ],
},
{
  id: 26,
  name: "Ladies heels(multiple colours)",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,000",
  availability: "Available",
  image: "ladies-heels.jpg",
  gallery: [ 
    "ladies-heels.jpg"
  ],
},
{
  id: 27,
  name: "Ladies heels green",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,000",
  availability: "Available",
  image: "ladies-heels-green.jpg",
  gallery: [ 
    "ladies-heels-green.jpg"
  ],
},
{
  id: 28,
  name: "Ladies heels black",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,000",
  availability: "Available",
  image: "ladies-heels-black.jpg",
  gallery: [ 
    "ladies-heels-black.jpg"
  ],
},
{
  id: 29,
  name: "Ladies heels white",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 3,000",
  availability: "Available",
  image: "ladies-heels-white.jpg",
  gallery: [ 
    "ladies-heels-white.jpg"
  ],
},
{
  id: 30,
  name: "Converse Chuck 70 X A Ma Maniere",
  brand: "Converse",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 3,800",
  availability: "Available",
  image: "Converse-Chuck-70-X-A-Ma-Maniere.jpg",
  gallery: [ 
    "Converse-Chuck-70-X-A-Ma-Maniere.jpg"
  ],
},
{
  id: 43,
  name: "Ladies comfy slides(multiple colours)",
  brand: "Ladies",
  gender: ["Women"],
  price: "KSh 1,900",
  availability: "Available",
  image: "ladies-comfy-slides.jpg",
  gallery: [ 
    "ladies-comfy-slides.jpg"
  ],
},
{
  id: 44,
  name: "Gucci sandles (multiple colours)",
  brand: "Gucci",
  gender: ["Women"],
  price: "KSh 2,700",
  availability: "Available",
  image: "gucci-sandles.jpg",
  gallery: [ 
    "gucci-sandles.jpg"
  ],
},
{
  id: 45,
  name: "Puma speedcat ballet (multiple colours)",
  brand: "Puma",
  gender: ["Women"],
  price: "KSh 2,700",
  availability: "Available",
  image: "puma-speedcat-ballet.jpg",
  gallery: [ 
    "puma-speedcat-ballet.jpg"
  ],
},

{
  id: 46,
  name: "New balance 1000 1/4",
  brand: "New Balance",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "new-balance-1000-1-4.jpg",
  gallery: [ 
    "new-balance-1000-1-4.jpg"
  ],
},
{
  id: 47,
  name: "New balance 1000 2/4",
  brand: "New Balance",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "new-balance-1000-2-4.jpg",
  gallery: [ 
    "new-balance-1000-2-4.jpg"
  ],
},
{
  id: 48,
  name: "New balance 1000 3/4",
  brand: "New Balance",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "new-balance-1000-3-4.jpg",
  gallery: [ 
    "new-balance-1000-3-4.jpg"
  ],
},
{
  id: 49,
  name: "New balance 1000 4/4",
  brand: "New Balance",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "new-balance-1000-4-4.jpg",
  gallery: [ 
    "new-balance-1000-4-4.jpg"
  ],
},
{
  id: 50,
  name: "Asic 1",
  brand: "Asic",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "asic-1-3.jpg",
  gallery: [ 
    "asic-1-3.jpg"
  ],
},
{
  id: 51,
  name: "Asic 2",
  brand: "Asic",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "asic-2-3.jpg",
  gallery: [ 
    "asic-2-3.jpg"
  ],
},
{
  id: 52,
  name: "Asic 3",
  brand: "Asic",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "asic-3-3.jpg",
  gallery: [ 
    "asic-3-3.jpg"
  ],
},


{
  id: 81,
  name: "Asic 5",
  brand: "Asic",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "asic-5-3.jpg",
  gallery: [ 
    "asic-5-3.jpg"
  ],
},
{
  id: 82,
  name: "Asic 6",
  brand: "Asic",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 4,500",
  availability: "Available",
  image: "asic-6-3.jpg",
  gallery: [ 
    "asic-6-3.jpg"
  ],
},

{
  id: 53,
  name: "Brogue 1/5",
  brand: "Brogue",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 2,900",
  availability: "Available",
  image: "brogue-1-5.jpg",
  gallery: [ 
    "brogue-1-5.jpg"
  ],
},
{
  id: 54,
  name: "Brogue 2/5",
  brand: "Brogue",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 2,900",
  availability: "Available",
  image: "brogue-2-5.jpg",
  gallery: [ 
    "brogue-2-5.jpg"
  ],
},
{
  id: 55,
  name: "Brogue 3/5",
  brand: "Brogue",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 2,900",
  availability: "Available",
  image: "brogue-3-5.jpg",
  gallery: [ 
    "brogue-3-5.jpg"
  ],
},
{
  id: 56,
  name: "Brogue 4/5",
  brand: "Brogue",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 2,900",
  availability: "Available",
  image: "brogue-4-5.jpg",
  gallery: [ 
    "brogue-4-5.jpg"
  ],
},
{
  id: 57,
  name: "Brogue 5/5",
  brand: "Brogue",
  gender: ["Unisex", "Men", "Women"],
  price: "KSh 2,900",
  availability: "Available",
  image: "brogue-5-5.jpg",
  gallery: [ 
    "brogue-5-5.jpg"
  ],
},


{
  id: 58,
  name: "Official 1",
  brand: "Official",
  gender:  "Men", 
  price: "KSh 4,200",
  availability: "Available",
  image: "official-1.jpg",
  gallery: [ 
    "official-1.jpg"
  ],
},
{
  id: 59,
  name: "Official 2",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-2.jpg",
  gallery: [ 
    "official-2.jpg"
  ],
},
{
  id: 60,
  name: "Official 3",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-3.jpg",
  gallery: [ 
    "official-3.jpg"
  ],
},
{
  id: 61,
  name: "Official 4",
  brand: "Official",
  gender: "Men",  
  price: "KSh 4,200",
  availability: "Available",
  image: "official-4.jpg",
  gallery: [ 
    "official-4.jpg"
  ],
},

{
  id: 62,
  name: "Official 5",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-5.jpg",
  gallery: [ 
    "official-5.jpg"
  ],
},
{
  id: 63,
  name: "Official 6",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-6.jpg",
  gallery: [ 
    "official-6.jpg"
  ],
},
{
  id: 64,
  name: "Official 7",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-7.jpg",
  gallery: [ 
    "official-7.jpg"
  ],
},

{
  id: 65,
  name: "Official 8",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-8.jpg",
  gallery: [ 
    "official-8.jpg"
  ],
},
{
  id: 66,
  name: "Official 9",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-9.jpg",
  gallery: [ 
    "official-9.jpg"
  ],
},
{
  id: 67,
  name: "Official 10",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-10.jpg",
  gallery: [ 
    "official-10.jpg"
  ],
},
{
  id: 68,
  name: "Official 11",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-11.jpg",
  gallery: [ 
    "official-11.jpg"
  ],
},
{
  id: 69,
  name: "Official 12",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-12.jpg",
  gallery: [ 
    "official-12.jpg"
  ],
},
{
  id: 70,
  name: "Official 13",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-13.jpg",
  gallery: [ 
    "official-13.jpg"
  ],
},

  {
  id: 71,
  name: "Official 14",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-14.jpg",
  gallery: [ 
    "official-14.jpg"
  ],
},

{
  id: 72,
  name: "Official 15",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-15.jpg",
  gallery: [ 
    "official-15.jpg"
  ],
},
{
  id: 73,
  name: "Official 16",
  brand: "Official",
  gender: "Men",
  price: "KSh 4,200",
  availability: "Available",
  image: "official-16.jpg",
  gallery: [ 
    "official-16.jpg"
  ],
},
{
  id: 94,
  name: "Official Mule 1",
  brand: "Mules",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 3,500",
  availability: "Available",
  image: "official-mule-1.jpg",
  gallery: [ 
    "official-mule-1.jpg"
  ],
},

{
  id: 95,
  name: "Official mules 2",
  brand: "Mules",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 3,500",
  availability: "Available",
  image: "official-mule-2.jpg",
  gallery: [ 
    "official-mule-2.jpg"
  ],
},
{
  id: 96,
  name: "Official mules 3",
  brand: "Mules",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 3,500",
  availability: "Available",
  image: "official-mule-3.jpg",
  gallery: [ 
    "official-mule-3.jpg"
  ],
},
{
  id: 97,
  name: "Official mules 4",
  brand: "Mules",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 3,500",
  availability: "Available",
  image: "official-mule-4.jpg",
  gallery: [ 
    "official-mule-4.jpg"
  ],
},
{
  id: 98,
  name: "Official mules 5",
  brand: "Mules",
  gender: ["Men", "Women", "Unisex"],
  price: "KSh 3,500",
  availability: "Available",
  image: "official-mule-5.jpg",
  gallery: [ 
    "official-mule-5.jpg"
  ],
},
{
  id: 99,
  name: "Ladies mules 1",
  brand: "Mules",
  gender:  "Women", 
  price: "KSh 2,500",
  availability: "Available",
  image: "ladies-mule-1.jpg",
  gallery: [ 
    "ladies-mule-1.jpg"
  ],
},
{
  id: 100,
  name: "Ladies mules 2",
  brand: "Mules",
  gender:  "Women", 
  price: "KSh 2,500",
  availability: "Available",
  image: "ladies-mule-2.jpg",
  gallery: [ 
    "ladies-mule-2.jpg"
  ],
},

{
  id: 101,
  name: "Ladies mules 3",
  brand: "Mules",
  gender: "Women", 
  price: "KSh 2,500",
  availability: "Available",
  image: "ladies-mule-3.jpg",
  gallery: [ 
    "ladies-mule-3.jpg"
  ],
},

{
  id: 75,
  name: "Orthopedic rubbers 1/4",
  brand: "Orthopedic",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 2,200",
  availability: "Available",
  image: "orthopedic-rubbers-1-4.jpg",
  gallery: [ 
    "orthopedic-rubbers-1-4.jpg"
  ],
},
{
  id: 76,
  name: "Orthopedic rubbers 2/4",
  brand: "Orthopedic",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 2,200",
  availability: "Available",
  image: "orthopedic-rubbers-2-4.jpg",
  gallery: [ 
    "orthopedic-rubbers-2-4.jpg"
  ],
},

{
  id: 77,
  name: "Orthopedic rubbers 3/4",
  brand: "Orthopedic",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 2,200",
  availability: "Available",
  image: "orthopedic-rubbers-3-4.jpg",
  gallery: [ 
    "orthopedic-rubbers-3-4.jpg"
  ],
},


{
  id: 78,
  name: "Orthopedic rubbers 4/4",
  brand: "Orthopedic",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 2,200",
  availability: "Available",
  image: "orthopedic-rubbers-4-4.jpg",
  gallery: [ 
    "orthopedic-rubbers-4-4.jpg"
  ],
},

{
  id: 79,
  name: "Tommy Hilfiger 1",
  brand: "Tommy Hilfiger",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 3,700",
  availability: "Available",
  image: "tommy-hilfiger.jpg",
  gallery: [ 
    "tommy-hilfiger.jpg"
  ],
},
{
  id: 80,
  name: "Tommy Hilfiger 2",
  brand: "Tommy Hilfiger",
  gender: ["Men", " Women", "Unisex"],  
  price: "KSh 3,700",
  availability: "Available",
  image: "tommy-hilfiger2.jpg",
  gallery: [ 
    "tommy-hilfiger2.jpg"
  ],
},

{
  id: 83,
  name: "Nike Vibram 1",
  brand: "Nike",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-vibram-1.jpg",
  gallery: [ 
    "nike-vibram.jpg-1"
  ],
},
{
  id: 84,
  name: "Nike Vibram 2",
  brand: "Nike",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-vibram-2.jpg",
  gallery: [ 
    "nike-vibram-2.jpg"
  ],
},
{
  id: 85,
  name: "Nike Vibram 3",
  brand: "Nike",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-vibram-3.jpg",
  gallery: [ 
    "nike-vibram-3.jpg"
  ],
},

{
  id: 52,
  name: "Nike Vibram 4",
  brand: "Nike",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-vibram-4.jpg",
  gallery: [ 
    "nike-vibram-4.jpg"
  ],
},
{
  id: 88,
  name: "Loafers 1",
  brand: "Loafers",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 3,200",
  availability: "Available",
  image: "loafers-1.jpg",
  gallery: [ 
    "loafers-1.jpg"
  ],
},
{
  id: 89,
  name: "Loafers 2",
  brand: "Loafers",
  gender: ["Men", " Women", "Unisex"],  
  price: "KSh 3,200",
  availability: "Available",
  image: "loafers-2.jpg",
  gallery: [ 
    "loafers-2.jpg"
  ],
},
{
  id: 90,
  name: "Loafers 3",
  brand: "Loafers",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 3,200",
  availability: "Available",
  image: "loafers-3.jpg",
  gallery: [ 
    "loafers-3.jpg"
  ],
},
{
  id: 91,
  name: "Loafers 4",
  brand: "Loafers",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 3,200",
  availability: "Available",
  image: "loafers-4.jpg",
  gallery: [ 
    "loafers-4.jpg"
  ],
},
  {
  id: 92,
  name: "Loafers 5",
  brand: "Loafers",
  gender: ["Men", " Women", "Unisex"],
  price: "KSh 3,200",
  availability: "Available",
  image: "loafers-5.jpg",
  gallery: [ 
    "loafers-5.jpg"
  ],
}

  ];

 const [search, setSearch] = useState("");
const [selectedBrand, setSelectedBrand] = useState("");
const [selectedGender, setSelectedGender] = useState("");
const [selectedImage, setSelectedImage] = useState(null);

const filteredShoes = shoes.filter((shoe) => {
  const matchesSearch = shoe.name
    .toLowerCase()
    .includes(search.toLowerCase());

  // BRAND FILTER
  const matchesBrand =
    selectedBrand === "" ||
    shoe.brand === selectedBrand;

  // GENDER FILTER
  const matchesGender =
    selectedGender === "" ||
    shoe.gender?.includes(selectedGender);

  return matchesSearch && matchesBrand && matchesGender;
});

return (
  <div className="min-h-screen bg-gray-100">

    {/* IMAGE MODAL */}
    {selectedImage && (
      <div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        onClick={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Zoomed Shoe"
          className="max-h-[90vh] max-w-[90vw] rounded-2xl"
        />
      </div>
    )}

    {/* HERO */}
    <section className="bg-black text-white py-10 md:py-14 px-6">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            GOBIZ SHOE COLLECTION
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Premium sneakers, streetwear and casual shoes available for direct order.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <a
            href="https://wa.me/254741404204"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition text-center"
          >
            Order on WhatsApp
          </a>

          <a
            href="#collection"
            className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition text-center"
          >
            View Collection
          </a>

        </div>

      </div>

    </section>

    {/* FILTERS */}
    <section className="bg-white shadow-sm sticky top-0 z-40">

      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* MOBILE HORIZONTAL FILTERS */}
        <div className="flex overflow-x-auto gap-3 whitespace-nowrap pb-2">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-w-[220px] border border-gray-300 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          {/* GENDER */}
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="min-w-[140px] border border-gray-300 rounded-2xl px-5 py-3 bg-white"
          >
            {/* Placeholder / Reset */}
            <option value="">Gender</option>

            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>

          {/* BRAND */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="min-w-[140px] border border-gray-300 rounded-2xl px-5 py-3 bg-white"
          >
            {/* Placeholder / Reset */}
            <option value="">Brand</option>

            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="New Balance">New Balance</option>
            <option value="Converse">Converse</option>
            <option value="Asic">Asic</option>
            <option value="MK">MK</option>
            <option value="Others">Others</option>
          </select>

        </div>

      </div>

    </section>

    {/* COLLECTION */}
    <section
      id="collection"
      className="max-w-7xl mx-auto px-4 py-14"
    >

      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Collection
        </h2>

        <p className="text-gray-600 text-lg">
          Browse our available shoe collection.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredShoes.map((shoe) => {

          const whatsappMessage = `Hello, I would like to order:

📦 Product: ${shoe.name}
💰 Price: ${shoe.price}
📍 Availability: ${shoe.availability}
👤 Gender: ${shoe.gender}
🏷️ Brand: ${shoe.brand}

Please share more details.`;

          return (
            <div
              key={shoe.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={shoe.image}
                  alt={shoe.name}
                  onClick={() => setSelectedImage(shoe.image)}
                  className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition duration-500"
                />

              </div>

              {/* DETAILS */}
              <div className="p-6">

                <div className="flex items-center justify-between gap-3 mb-2">

                  <h3 className="text-xl font-bold line-clamp-2">
                    {shoe.name}
                  </h3>

                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full whitespace-nowrap">
                    {shoe.brand}
                  </span>

                </div>

                <p className="text-gray-500 mb-2">
                  {shoe.gender}
                </p>

                <p className="text-2xl font-bold mb-4">
                  {shoe.price}
                </p>

                <div className="flex items-center justify-between gap-3">

                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                    {shoe.availability}
                  </span>

                </div>

                {/* WHATSAPP BUTTON */}
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/254741404204?text=${encodeURIComponent(
                        whatsappMessage
                      )}`,
                      "_blank"
                    )
                  }
                  className="w-full mt-6 bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
                >
                  Order via WhatsApp
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>

    {/* FOOTER */}
    <footer className="bg-black text-white text-center py-10 mt-10 px-6">

      <h3 className="text-2xl font-bold mb-2">
        GOBIZ SHOE COLLECTION
      </h3>

      <p className="text-gray-400 mb-2">
        Premium sneakers and footwear collection.
      </p>

      <p className="text-lg font-semibold">
        0741404204
      </p>

      <p className="text-gray-500 mt-2">
        © Gobiz Limited 2026
      </p>

    </footer>

  </div>
);

}

export default App;