# Food Logic

The app simplifies nutrition tracking, using tools such as calorie counters, nutrient trackers, and recipe calculators.The app is built using Python ` Flask ` framework and ` tailwind `.

## Running the App

To get started with the app:

- Clone the repository to your local machine

```bash Copy code
git clone https://github.com/samdoghor/foodlogic.git
```

- Navigate to the project directory in your terminal

```bash Copy code
cd foodlogic
```

- Create a virtual environment and activate it

```bash Copy code
pip install virtualenv 

virtualenv env

source env/scripts/activate
```

- On Mac, use the following command instead:

```bash Copy code
pip install virtualenv 

virtualenv env

source env/bin/activate
```

- Install dependencies

```bash Copy code
pip install pipenv

pipenv install
```

- Expose the Flask app by running the following command:

```bash Copy code
export FLASK_APP=app.py
```

- On Mac, use the following command instead:

```bash Copy code
set FLASK_APP=app.py
```

- To enable auto-restart when changes are detected, set debug to true:

```bash Copy code
export FLASK_DEBUG=True
```

On Mac, use the following command instead:

```bash Copy code
set FLASK_DEBUG=True
```

- Using Tailwind CSS

Make sure you have Node.js and npm installed on your computer.

This Flask app uses Tailwind CSS for styling. The necessary styles are already included in the `static/css` directory, so you don't need to install or configure anything further. To customize the styles, you can edit the `tailwind.config.js` file and rebuild the CSS using the command below.

```bash Copy code
npm run build
```

- Duplicate the `example.env` file and rename it to `.env`. Fill in the appropriate information in the `.env` file.

- Finally, run the app:

```bash Copy code
flask run
```

Open your web browser and go to `http://localhost:5000`.

## Current Functional Features

None

## Love to have Features

- **Calorie Counter:** This feature allows users to track their daily caloric intake by entering the type and amount of food they consume. The app then calculates the number of calories in the food and provides a total for the day. Users can also set a daily caloric intake goal based on their height, weight, and activity level.

- **Macronutrient Calculator:** This feature allows users to track their daily intake of protein, carbohydrates, and fats. Users can enter the foods they eat, and the app will calculate the amount of each macronutrient consumed. The app also provides recommendations for macronutrient ratios based on the user's goals (e.g., weight loss, muscle gain).

- **Nutrient Tracker:** This feature allows users to track their daily intake of various vitamins and minerals. Users can enter the foods they eat, and the app will calculate the amount of each nutrient consumed. The app also provides recommendations for nutrient intake based on the user's age, gender, and health status.

- **Recipe Calculator:** This feature allows users to calculate the nutritional information of homemade recipes. Users can enter the ingredients and amounts used in a recipe, and the app will calculate the calories, macronutrients, and other nutrients per serving. The app also provides suggestions for healthy ingredient substitutions.

- **Water Intake Tracker:** This feature allows users to calculate their recommended daily water intake based on their weight, activity level, and climate. Users can enter the amount of water they drink throughout the day, and the app will calculate their progress towards their daily goal. The app also provides reminders to drink water throughout the day.

## Contributing

Contributions to this project are welcome, but for the time being not allowed till bone structure of the project is ready. If you find a bug or have an idea for a new feature, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

To contact me, email [talkto@samdoghor.com](mailto:talkto@samdoghor.com)
