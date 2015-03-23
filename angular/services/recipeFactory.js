(function() {
	var recipeFactory = function () {
		var recipes = [
			{
				id: 1,
				img: "images/recipe-pictures/potatoes-surpeme.jpg",
				title: "Potatoes Supreme",
				servings: "Servings: 8 - 10",
				ingredients: [
					"6 medium potatoes, peeled",
					"Salt",
					"&frac12; cup butter or margarine, melted",
					"2 cups shredded Cheddar cheese",
					"&frac13; cup chopped green onion",
					"1 pint sour cream",
					"&frac14; teaspoon pepper",
					"&frac12; teaspoon salt"
				],
				directions: [
					"Oven 350&#176;",
					"Cook potatoes in boiling salted water until done",
					"The next day grate potatoes coarsely",
					"Mix with remaining ingredients",
					"Place in shallow 1.5 or 2 quart baking dish and bake about 35 minutes"
				]
			},//end potatoesSupreme

			{
				id: 2,
				img: "images/recipe-pictures/spinach-and-artichoke-casserole.jpg",
				title: "Spinach and Artichoke Casserole",
				servings: "10-12",
				ingredients: [
					"1 cup chopped onion",
					"&frac12; cup chopped celery (optional)",
					"&frac12; cup butter",
					"2 101&frasl;2-ounce packages frozen chopped spinach, cooked and sqeezed dry",
					"8 ounces sour cream",
					"1 cup grated Parmesan cheese",
					"1 15-ounce can artichoke hearts, rinsed, drained and chopped",
					"salt and pepper to taste"
				],
				directions: [
					"Saute' onions and celery in butter and remove from heat",
					"Add spinach and stir",
					"Add sour cream, 1&frasl;2 cup Parmesan cheese and artichoke hearts",
					"Place in buttered 2-quart casserole dish and top with remaining 1&frasl;2 cup Parmesan cheese",
					"Bake 30 minutes or until bubbly"
				]
			},//end spinachArtichoke

			{
				id: 3,
				img: "images/recipe-pictures/beer-bread.jpg",
				title: "Beer Bread",
				servings: "Servings: 6-8",
				ingredients: [
					"3 cups self-rising flour",
					"6 tablespoons sugar",
					"1 12-ounce can regular light beer",
					"&frac12; cup butter or margarine"
				],
				directions: [
					"In large bowl, mix flour, sugar and beer",
					"Pour into greased 9x5x3inch loaf pan",
					"Bake 45 minutes",
					"Melt butter and pour over bread",
					"Bake 15 minutes more",
					"Serve warm"
				]
			},//end beer bread

			{
				id: 4,
				img: "images/recipe-pictures/chicken-scampi.jpg",
				title: "Chicken Scampi",
				servings: "Servings: 4-6",
				ingredients: [
					"&frac12; cup butter",
					"&frac12; cup olive oil",
					"&frac14; cup finely chopped green onions",
					"1 tablespoon minced garlic juice of 1 lemon",
					"2 pounds chicken breasts, boned, skinned and cut into &frac12;-inch pieces",
					"1 teaspoon salt",
					"&frac12; teaspoon freshly ground black pepper",
					"&frac14; cup minced fresh parsley",
					"1 tomato, chopped buttered noodles or cooked rice"
				],
				directions: [
					"In skillet, heat together butter and olive oil and saute' green onions and garlic",
					"Add lemon juice, chicken, salt, pepper and parsley",
					"Continue cooking, stirring constantly, for 5-8 minutes or until chicken is done",
					"Add tomatoes and heat through",
					"Serve over buttered noodles or hot rice"
				]
			},//end chicken scampi

			{
				id:5,
				img: "images/recipe-pictures/baked-corn-in-sour-cream.jpg",
				title: "Baked Corn in Sour Cream",
				servings: "Servings: 6-8",
				ingredients: [
					"2 tablespoons butter",
					"2 tablespoons all-purpose flour",
					"2 tablespoons chopped onions",
					"&frac12; teaspoon salt",
					"1 cup sour cream",
					"1&frac12; pounds whole kernel corn",
					"2 tablespoons finely chopped celery",
					"6 slices bacon, cooked crisp, drained and crumbled, divided",
					" 1 tablespoon minced fresh parsley"
				],
				directions: [
					"In large saucepan, melt butter",
					"Stir in onion and saute' until transparent",  
					"Blend in flour and salt",
					"Gradually stir in sour cream until mixture is smooth",
					"Add corn and celery, heaing thoroughly",
					"Stir in half the crumbled bacon",
					"Pour into greased 2-quart casserole and top with parlsey and remaining bacon",
					"Bake at 350 degrees for 30-45 minutes"
				]
			},//end bakedCorn

			{
				id:6,
				img: "images/recipe-pictures/spinach-artichoke-supreme.jpg",
				title: "Spinach Artichoke Supreme",
				servings: "Servings: 6",
				ingredients: [
					"2 10-ouche packages frozen chopped spinach, cooked and drained",
					"8 ounces cream cheese, softened",
					"&frac14; cup butter, melted",
					"&frac12; pound artichoke hearts",
					"1 cup seasoned croutons"
				],
				directions: [
					"In large bowl, mix spinach, cream cheese, &frac14; cup butter, salt and pepper",
					"Pour mixture into buttered 1-quart casserole",
					"Arrange artichokes on top",
					"Coat croutons with remaining &frac14; cup butter and spread over artichokes",
					"Bake at 350 degrees for 20-30 minutes or until bubbly"
				]
			},//end spinach Supreme

			{
				id:7,
				img: "images/recipe-pictures/crab-stuffed-potatoes.jpg",
				title: "Crab-Stuffed Potatoes",
				servings: "Servings: 8",
				ingredients: [
					"4 medium baking potatoes",
					"&frac12; cup butter",
					"&frac12; cup heavy cream",
					"&frac34; teaspoon of salt",
					"&frac12; teaspoon ground white pepper",
					"&frac13; cup minced green onions",
					"6&frac12; ounces crabmeat",
					"&frac12; cup shredded Cheddar cheese"
				],
				directions: [
					"Bake potatoes at 400 degrees for 1 hour",
					"Halve lengthwise and scoop out potato; reserve skins",
					"In large bowl, mash potatoes with butter, cream, salt and pepper",
					"Stir in onions and crab",
					"Fill reserved skins with potato mixture",
					"Sprinkle with cheese",
					"Bake at 350 degrees for 20-30 minutes"
				]
			},//end crabPotatoes

			{
				id: 8, 
				img: "images/recipe-pictures/spinach-enchilada-casserole.jpg",
				title: "Spinach Enchilada Casserole",
				servings: "Servings: 8",
				ingredients: [
					"1&frac12; pounds lean ground beef",
					"1 clove garlic, minced",
					"&frac12; cup chopped onion",
					"2 tomatoes chopped",
					"8 ounces tomato sauce",
					"2 4-ounce cans diced green chiles juice of &frac12; lime",
					"1 tablespoon sugar",
					"1 10-ounce package frozen chopped spinach, thawed and squeezed dry",
					"10 6-inch corn tortillas",
					"&frac12; cup butter, melted",
					"3 cups shredded Monterey Jack cheese",
					"1 cup sour cream"
				],
				directions: [
					"In large skillet, cook ground beef with garlic, onion, salt and pepper until beef is crumbled and no longer pink",
					"Add tomatoes, tomato sauce, green chiles, lime juice, sugar and spinach",
					"Mix well",
					"Cover and simmer for 10 minutes",
					"Cut tortillas into quarters and dip into melted butter",
					"Cover bottom of greased 9x13 inch baking dish with half the tortilla quarters, overlapping slightly",
					"Spoon half of the beef mixture over tortillas",
					"Sprinkle with half of cheese",
					"Arrange rest of tortilla quarters over cheese, overlapping slightly",
					"Spread with sour cream",
					"Spoon remaining beef mixture over sour cream",
					"Sprinkle with remaining cheese",
					"Bake at 350 degrees for 30 minutes"
				]
			},//end spinachEnchilada
			{
				id: 9, 
				img: "images/recipe-pictures/double-rich-chocolate-cookies.jpg",
				title: "Double-Rich Chocolate Cookies",
				servings: "Yield: 4 dozen",
				ingredients: [
					'2 &frac12; C all-purpose flour',
					'&frac12; tsp. baking soda',
					'&frac14; tsp. salt',
					'&frac12; cup unsweetened cocoa powder',
					'1 cup dark brown sugar, packed',
					'&frac14; cup white flour', 
					'1 cup salted butter, softened',
					'3 large eggs',
					'2 tsp. pure vanilla',
					'2 cups (12oz.) semisweet chocolate chips'
				],
				directions: [
					"Preheat oven to 300 &#176; F",
					"In a medium bowl combine flour, soda, salt and cocoa powder.  Mix well with a wire whisk and set aside",
					"In a large bowl blend sugars with an electric mixer at medium speed",
					"Add butter and beat to form a grainy paste",
					"Scrape down sides or bowl, then add eggs and vanilla",
					"Beat at medium speed until light and fluffy",
					"Add the flour mixture and chocolate chips and blend at low speed just until combined - don't overmix",
					"Drop dough by rounded tablespoons into ungreased cookie sheets, 1 &frac12; inches apart",
					"Bake for 21-23 minutes",
					"Immediately transfer cookies with a spatula to a cool surface"
				]
			},//Double-Rich Chocolate Cookies
			{
				id: 10, 
				img: "images/recipe-pictures/cinnamon-sugar-butter-cookies.jpg",
				title: "Cinnamon Sugar Butter Cookies",
				servings: "Yield: 3 dozen",
				ingredients: [
					"3 Tbsp. white sugar",
					"1 Tbsp. ground cinnamon",
					"2 &frac12; cups all-purpose flower",
					"&frac12; tsp. baking soda",
					"&frac14; tsp. salt",
					"1 cup dark brown sugar, packed",
					"&frac12; cup white sugar",
					"1 cup salted butter, softened",
					"2 large eggs",
					"2 tsp. pure vanilla extract"
				],
				directions: [
					"Preheat oven to 300&#176; F",
					"In a small bowl combine sugar and cinnamon for toppings and set aside",
					"In a medium bowl combine flour, soda and salt - mix well with a wire whisk and set aside",
					"In a large bowl blend sugars with an electric mixer set at medium speed.  Add the butter, and mix to form a grainy paste.  Scrape sides of bowl, then add the eggs and vanilla extract.  Mix at medium speed until light and fluffy",
					"Add the flour mixture and blend at low speed just until combined.  Do not overmix.  Shape dough into 1-inch balls and roll each ball in cinnamon-sugar topping",
					"Place onto ungreased cookie sheets, 2 inches apart",
					"Bake 18 to 20 minutes",
					"Immediately transfer cookies with spatula to a cool flat surface"
				]
			},//end cinnamon sugar butter cookies
			{
				id: 11, 
				img: "images/recipe-pictures/pumpkin-crunch-cake.jpg",
				title: "Pumpkin Crunch Cake",
				servings: "",
				ingredients: [
					"1 box yellow cake mix",
					"1 can (15oz) pumpkin puree",
					"1 can (12oz) evaporated milk",
					"3 large eggs",
					"1 &frac12; cups of sugar",
					"1 tsp. cinnamon",
					"&frac12; tsp salt",
					"1 &frac12; cups chopped pecans",
					"1 cup butter, melted"
				],
				directions: [
					"Preheat oven to 300&#176; F", 
					"Grease bottom of 9x13 inch pan",
					"Mix pumpkin, milk, eggs, sguar, cinnamon, and salt",
					"Pour mixture into greased pan",
					"Sprinkle dry cake mix over pumpkin mixture and top with pecans",
					"Drizzle melted butter over pecans",
					"Bake 50-55 minutes"
				]
			},//Pumpkin Crunch Cake
			{
				id: 12, 
				img: "images/recipe-pictures/sauerkraut-and-bean-soup.jpg",
				title: "Sauerkraut and Bean Soup",
				servings: "Servings: 4",
				ingredients: [
					"3 cups basic small white beans, cooked",
					"1 quart beef or chicken stock (pages 122 or 124)",
					"2 cloves garlic, peeled and mashed",
					"pinch red pepper flakes",
					"1 pound spicy chicken or beef sausage, sliced into rounds",
					"Sea salt",
					"2 cups sauerkraut"
				],
				directions: [
					"Bring stock to a boil and skim",
					"Add garlic, red pepper and sausage and simmer for 15 minutes or until sausage is cooked",
					"Season to taste",
					"Let cool until the soup can be touched without burning and stir in sauerkraut",
					"Ladle into heated bowls and serve"
				]
			},//end Sauerkraut and Bean Soup
			{
				id: 13, 
				img: "images/recipe-pictures/winter-root-soup.jpg",
				title: "Winter Root Soup",
				servings: "Servings: 6-8",
				ingredients: [
					"3 medium onions, peeled and chopped",
					"2 leeks, washed, trimmed and sliced",
					"4 carrots, peeled and sliced",
					"2 turnips, peeled and sliced",
					"1 rutabaga, peeled and sliced",
					"3 parsnips, peeled and sliced",
					"4 tablespoons butter",
					"1 &frac12; quarts chicken stock or combination of filtered water and stock",
					"serveral thyme sprigs, tied together",
					"4 cloves garlic, peeled and mashed",
					"pinch cayenne pepper",
					"sea salt or fish sauce and pepper",
					"pinch of nutmeg",
					"piima cream or cremem fraiche"
				],
				directions: [
					"Melt butter in a large, stainless steel pot and add onions, leeks, carrots, turnips, rutabaga and parsnips",
					"Cover and cook gently about 1/2 hour over low heat, stirring occasionally",
					"Add stock, bring to a boil and skim",
					"Add, garlic, thyme and cayenne", 
					"Simmer, covered, for about 1/2 hour until the vegetables are soft",
					"Remove thyme and pur&eacute;e soup with handheld blender", 
					"Season to taste", 
					"If soup is too thick, thin with a little water",
					"Ladle into heated bowls and serve with cultured cream"
				]
			},//end Winter Root Soup
			{
				id: 14, 
				img: "images/recipe-pictures/tomato-dill-soup.jpg",
				title: "Tomato-Dill Soup",
				servings: "Servings: 6",
				ingredients: [
					"2 medium onions, peeled and coarsely chopped",
					"3 celery stalks, coarsely chopped",
					"3 tablespoons butter",
					"8 ripe tomatoes, peeled, seeded and chopped",
					"2 cups chicken stock",
					"&frac12; teaspoon dried green peppercorns, crushed",
					"Sea salt or fish sauce and pepper",
					"&frac14; cup snipped fresh dill",
					"Piima cream or creme fraiche"
				],
				directions: [
					"Peel tomatoes",
					"Saut&eacute; soup with a handheld blender",
					"Thin soup with a little water, if necessary, and season to taste",
					"Stir in the dill",
					"Simmer gently about 5 minutes",
					"Ladle into heated bowls and serve with cultured cream"
				]
			},//end Tomato Dill Soup
			{
				id: 15, 
				img: "images/recipe-pictures/carrot-soup.jpg",
				title: "Carrot Soup",
				servings: "Servings: 6",
				ingredients: [
					"2 medium onions, peeled and chopped",
					"1 pound carrots, peeled and sliced",
					"4 tablespoons of butter",
					"2 teaspoons curry powder",
					"1 &frac12; quarts chicken stock",
					"&frac12; teaspoon freshly grated lemon rind",
					"&frac12; teaspoon freshly grated ginger",
					"Sea salt or fish sauce and pepper",
					"Piima cream or creme fraiche"
				],
				directions: [
					"Saut&eacute; onions and carrots very gently in butter about 45 minutes or until tender",
					"Add curry powder and stir around until well amalgamated",
					"Add stock, bring to a boil and skim",
					"Add lemon rind and ginger",
					"Simmer, covered, about 15 minutes",
					"Pur&eacute;e soup with handheld blender",
					"Season to taste",
					"Ladle into heated bowls and serve with cultured cream"
				]
			},//Carrot Soup 
			{
				id: 16, 
				img: "images/recipe-pictures/squash-and-sun-dried-tomato-soup.jpg",
				title: "Squash and Sun Dried Tomato Soup",
				servings: "Servings: 6",
				ingredients: [
					"1 butternut squash",
					"2 medium onoins, peeled and chopped",
					"3 tablespoons butter",
					"1 cup sun dried tomatoes, packed in oil",
					"1 quart chicken stock",
					"&frac14; teaspoon red chile flakes",
					"2 tablespoons finely chopped basil",
					"Sea salt or fish sauce and pepper",
					"Piima cream or creme fraiche"
				],
				directions: [
					"Cut squash in half lengthwise and place, cut sides down, in a glass baking pan with about &frac12; inch of water",
					"Bake at 350&#176; F until tender, about 1 hour",
					"Meanwhile, saut&eacute; onions gently in butter until tender",
					"Add tomatoes, stock and chile flakes",
					"Bring to a boil and skim",
					"Scoop cooked squash out of skin and add to soup",
					"Simmer about 1/2 hour",
					"Pur&eacute;e soup with a handheld blender",
					"Thin with water if necessary",
					"Add basil and season to taste",
					"Simmer gently about 5 minutes, ladle into heated bowls and serve with cultured cream"
				]
			},//end Squash and sun dried tomato soup 
			{
				id: 17, 
				img: "images/recipe-pictures/beef-bourgignon.jpg",
				title: "Beef Bourgignon",
				servings: "Servings: 6-8",
				ingredients: [
					"3 pounds stew beef, cut into 2-inch pieces",
					"2 cups red wine",
					"4 cups beef stock",
					"6 tablespoons butter",
					"3 tablespoons extra virgin olive oil",
					"&frac12; cup unbleached flour",
					"Served small slivers orange peel",
					"Several sprigs fresh thyme, tied together",
					"&frac12; teaspoon dried green peppercorns, crushed",
					"1 pound fresh mushrooms",
					"2 pounds medium boiling onions",
					"sea salt and pepper"
				],
				directions: [
					"Marinate beef in wine for serveral hours or overnight",
					"Remove and dry very well with paper towels (this is important, if beef is too wet it won't brown)",
					"Melt 3 tablespoons each butter and oil in a heavy, flameproof casserole",
					"Brown the meat cubes in small batches, transferring with a slotted spoon to a plate when done",
					"When all are browned, pour out cooking fat",
					"Add remaining 3 tablespoons butter to the casserole, let it melt and add flour",
					"Cook the flour in the butter, stirring constantly, for several minutes",
					"Add wine from the marinade and stock",
					"Bring to a boil, stirring up scrapings from the bottom of the pan and blend well with wire whisk",
					"Return meat nad juices that have accumulated in the plate",
					"Add thyme, crushed peppercorns and orange peel",
					"Transfer casserole to a 300-degree oven and cook 3 or 4 hours or until meat is tender",
					"Meanwhile, brown the mushrooms, either whole or sliced",
					"Peel the onions and saut&eacute them gently in butter and oil for about 20 minutes.",
					"when meat is tender, remove from oven",
					"Season to taste",
					"Remove thyme", 
					"Stir in onions and mushrooms and serve"
				]
			},//end Beef Bourgignon
			{
				id: 18, 
				img: "images/recipe-pictures/all-day-beef-stew.jpg",
				title: "All-Day Beef Stew",
				servings: "Servings: 6-8",
				ingredients: [
					"3 pounds stew beef, cut into 1-inch pieces",
					"1 cups red wine",
					"3-4 cups beef stock",
					"4 tomatoes, peeled, seeded and chopped or 1 can tomatoes",
					"4 tablespoons tomato paste",
					"6 whole cloves",
					"2-3 small pieces orange peel",
					"8 small red potatoes",
					"1 pound carrots, peeled and cut into sticks",
					"sea salt and pepper"
				],
				directions: [
					"Marinate meat in red wine overnight",
					"Place all ingredients except for potatoes and carrots in a flameproof casserole and cook gently in a 250-degree oven for about 12 hours",
					"You may also use a crock pot set at medium temperature",
					"Add carrots and potatoes 3 hours before serving",
					"Season to taste"
				]
			},//end All Day Beef Stew
		];//end recipes
		return recipes;
	};//end recipeFactory function

	angular.module('app')
		.factory('recipeFactory', recipeFactory);
}());