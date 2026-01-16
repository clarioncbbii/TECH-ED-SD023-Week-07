--! This file is a reminder to submit:

--* Schema visualiser screenshot 
see './database-schema.jpg'

--* SQL queries from your editor on Supabase

--TODO: Create table called 'recipes'
CREATE TABLE IF NOT EXISTS recipes (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  recipe_name VARCHAR,
  ingredients VARCHAR,
  recipe_time INT,
  method TEXT,
  image_link TEXT
);

--TODO: Seed table
INSERT INTO recipes (recipe_name, ingredients, recipe_time, method, image_link) VALUES 
('Jollof rice', 'rice, tomatoes, onions, garlic', 120, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://static01.nyt.com/images/2024/08/07/multimedia/05FAMILY-REUNIONREX3-jollof-rice-kjhg/FAMILY-REUNIONREX3-jollof-rice-kjhg-mediumSquareAt3X.jpg'),
('Egusi soup', 'egusi, spinach, scotch bonnet', 180, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://simshomekitchen.com/wp-content/uploads/2025/09/Egusi-in-a-bowl-with-assorted-meat.jpg'),
('Puff puff', 'flour, sugar, butter, evaporated milk', 60, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://www.seriouseats.com/thmb/Nu0tR17GqQjiNALnk4WWKHAIlbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220705-PuffPuffMaureen-Celestine-21-b365ebc25e3d4dde978c02c19cc5b2cd.JPG'),
('Meat pie', 'beef mince, flour, butter, potato, carrot, onion', 90, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://www.dashofjazz.com/wp-content/uploads/2024/03/Dash-of-Jazz-Nigerian-Meat-Pies-18.jpg'),
('Tomato stew', 'tomato, onion, scotch bonnet, oil, meat of choice', 150, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://www.myactivekitchen.com/wp-content/uploads/2019/05/nigerian-beef-stew_image_10.jpg'),
('Goat pepper soup', 'pepper soup spice mix, stock cubes, goat/mutton', 150, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta quas obcaecati, et cupiditate aspernatur provident ratione aliquam fugit sunt officiis. Assumenda est iure maiores temporibus dolorum rerum explicabo deserunt?', 'https://canadabeef.ca/wp-content/uploads/2025/02/Nigerian-Beef-Pepper-Soup4-1030x773.jpg') RETURNING *

--TODO: CREATE a new recipe ---> POST method 
INSERT INTO recipes (recipe_name, ingredients, recipe_time, method, image_link) VALUES ($1, $2, $3,$4, $5) RETURNING *, [recipe_name, ingredients, recipe_time, method, image_link]

--TODO: READ data in the table --> GET method ("/all-recipes")
SELECT recipe_name, ingredients, recipe_time, method, image_link FROM recipes;

--TODO: READ data in the table --> GET method ("/all-recipes/:id")
SELECT recipe_name, ingredients, recipe_time, method, image_link FROM recipes WHERE id = $1




