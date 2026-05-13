export default function App() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "KSh 4,000",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Adidas Street",
      price: "KSh 4,500",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Jordan Retro",
      price: "KSh 4,600",
      availability: "Limited Stock",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    },

    {
  id: 4,
  name: "Double Monk Casuals",
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

  { 
  id: 5,
  name: "Nike Shox",
  price: "KSh 4,500",
  availability: "Available",
  image: "nike-shox1.jpg",
  gallery: [
    "nike-shox2.jpg",
    "nike-shox3.jpg",
    "nike-shox4.jpg",
    "nike-shox5.jpg",
    "nike-shox6.jpg",
    "nike-shox7.jpg",
  ],

},

{
  id: 7,
  name: "Nike Airzoom",
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
  price: "KSh 4,500",
  availability: "Available",
  image: "double-monk-cofee.jpg",
  gallery: [
    "double-monk-cofee.jpg"
  ],

},

{
  id: 6,
  name: "Nike Portal",
  price: "KSh 4,600",
  availability: "Available",
  image: "nike-portal1.jpg",
  gallery: [
    "nike-portal2.jpg",
    "nike-portal3.jpg",
    "nike-portal4.jpg",
    "nike-portal5.jpg",
    "nike-portal6.jpg",
  ],

},
{
  id: 9,
  name: "Polo Casual black",
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
  availability: "Available",
  image: "MK-ladies-black.jpg",
  gallery: [
    "MK-ladies-black.jpg",
    
  ],
},
{
  id: 13,
  name: "MK Ladies sneakers pink",
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
  price: "KSh 3,200",
  availability: "Available",
  image: "Adidas-campus-grey.jpg",
  gallery: [ 
    "Adidas-campus-grey.jpg"
  ],
}
];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-black text-white py-10 md:py-14 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

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
          <div className="flex flex-col sm:flex-row gap-4">

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

      {/* COLLECTION */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Our Collection
          </h2>

          <p className="text-gray-600 text-lg">
            Browse our available shoe collection.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {shoe.name}
                </h3>

                <p className="text-xl font-semibold mb-3">
                  {shoe.price}
                </p>

                <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  {shoe.availability}
                </span>

                <a
                  href="https://wa.me/254741404204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 bg-black text-white text-center py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
                >
                  Order on WhatsApp
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">

        <h3 className="text-2xl font-bold mb-2">
          GOBIZ SHOE COLLECTION
        </h3>

        <p className="text-gray-400">
          Thank you for shopping with us.
        </p>

      </footer>

    </div>
  );
}