export default function App() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "KSh 4,500",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Adidas Street",
      price: "KSh 5,000",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Jordan Retro",
      price: "KSh 6,500",
      availability: "Limited Stock",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          GOBIZ SHOE COLLECTION
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Our main website is under modification and will be coming back better
          soon. Meanwhile, you can still place your orders directly with us.
        </p>

        <div className="bg-white/10 max-w-xl mx-auto rounded-3xl p-8 border border-white/20">

          <h2 className="text-2xl font-bold mb-4">
            Orders & Inquiries
          </h2>

          <a
            href="tel:0741404204"
            className="text-4xl font-extrabold hover:text-yellow-400 transition"
          >
            0741404204
          </a>

          <p className="mt-4 text-gray-300">
            Call or WhatsApp us anytime.
          </p>

        </div>

      </section>

      {/* COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

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