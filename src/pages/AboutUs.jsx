const AboutUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to <strong>Recipe Finder</strong>, your go-to platform for discovering delicious recipes from around the world!
      </p>
      <p className="mb-4">
        Our mission is to make cooking easy and fun for everyone. Whether you&apos;re a seasoned chef or a beginner in the kitchen,
        Recipe Finder helps you explore a wide variety of dishes, ingredients, and cooking techniques.
      </p>
      <h2 className="text-xl font-bold mb-2">Benefits of Using Recipe Finder:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Search for recipes by dish name, category, or cuisine.</li>
        <li>View detailed instructions and ingredient lists.</li>
        <li>Watch embedded YouTube tutorials for step-by-step guidance.</li>
        <li>Toggle between light and dark mode for a comfortable viewing experience.</li>
      </ul>
      <p>
        Start exploring today and discover your next favorite recipe!
      </p>
    </div>
  );
};

export default AboutUs;