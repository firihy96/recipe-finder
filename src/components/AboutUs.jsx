import { useSelector } from 'react-redux';

function AboutUs() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Welcome to Recipe Finder</h2>
            <p className="text-lg leading-relaxed">
              Welcome to <span className="font-bold text-blue-500">Recipe Finder</span>, your ultimate platform for discovering delicious recipes from around the world! Whether you&#39;re craving a classic dish or exploring new cuisines, we&#39;re here to inspire your culinary journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to make cooking fun, easy, and accessible for everyone. From seasoned chefs to kitchen beginners, we provide a wide range of recipes, tips, and tools to help you create mouthwatering meals with confidence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">
                <span className="font-bold">Search Recipes:</span> Find recipes by name, ingredients, or dietary preferences.
              </li>
              <li className="text-lg">
                <span className="font-bold">Browse Categories:</span> Explore recipes by meal type, including Breakfast, Lunch, Dinner, and Desserts.
              </li>
              <li className="text-lg">
                <span className="font-bold">Save Favorites:</span> Bookmark your favorite recipes for quick access anytime.
              </li>
              <li className="text-lg">
                <span className="font-bold">Dark Mode:</span> Enjoy a comfortable viewing experience with our light and dark mode toggle.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-lg leading-relaxed">
              At Recipe Finder, we believe that cooking should be a joyful and rewarding experience. Our platform is designed to simplify your time in the kitchen while encouraging creativity and exploration. Join our community of food lovers and start your culinary adventure today!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Thank You</h2>
            <p className="text-lg leading-relaxed">
              Thank you for choosing Recipe Finder. We&#39;re excited to be part of your cooking journey. Happy cooking!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;