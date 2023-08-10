const Home = () => {
  return (
    <>
      <div>
        <div className="max-w-full min-h-screen mx-auto flex justify-center items-center">
          <div className="p-4 lg:p-10">
            <div className="text-center px-4 lg:px-40 py-20">
              <img
                className="object-contain h-28 mx-auto rounded-full"
                src="src/assets/img/nigeria_flag.jpg"
              />
              <p className="text-6xl font-archivoBlack leading-snug text-ngDarkblue font-black pt-10">
                <span className="text-gray-600">#1</span> The
                <span className="text-green-800"> Nigeria </span> Food Database
                API
              </p>
              <p className="text-xl font-albertSans leading-relaxed text-gray-600 pt-10 lg:px-24">
                Explore a rich collection of Nigerian recipes, ingredients,
                <br />
                and culinary traditions with our comprehensive <br />
                Nigeria Food API database.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full min-h-screen bg-gradient-to-r from-green-900 via-green-800 to-green-900">
          <div className="p-4 lg:p-10"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
