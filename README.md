Demo - https://lokeshloki3.github.io/loginswitchtabsreact/

Steps -

1. Install Node.

(2. Run commands for creating Project: 
	npx create-react-app react-tailwind
	cd react-tailwind
)

3. Run commands for Tailwind:
	A. npm install -D tailwindcss postcss autoprefixer vite
	B. npx tailwindcss init -p

4. Install tailwind css intellisense extension. [IGNORE IF ALREADY INSTALLED]

5. Add "./src/**/*.{js,jsx,ts,tsx}" in content in [ tailwind.config.js ] file.

6. Open src/index.css or src/App.css and insert: 
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

7. Run command to go live:
	A. npm run start

Install react toast	
	npm i react-toastify

	npm install gh-pages --save-dev
	
	Add in package.json above name
	"homepage" : "https://username.github.io/reponame",
	
	Add both in Scripts in package.json
	"predeploy":"npm run build",
	"deploy":"gh-pages -d build",
