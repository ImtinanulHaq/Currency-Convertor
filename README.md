Currency Converter
A simple, elegant, and user-friendly web application for converting currencies in real-time, built using HTML, CSS, and JavaScript. This project leverages the Currency API to fetch up-to-date exchange rates and integrates flag icons from FlagsAPI to enhance the user interface with country-specific visuals. The application supports a wide range of global currencies, making it ideal for travelers, financial enthusiasts, or developers looking for a lightweight currency conversion tool.
Features

Real-time Conversion: Fetches live exchange rates using the Currency API for accurate conversions.
Wide Currency Support: Includes over 80 currencies with their respective symbols and country flags.
Responsive Design: Clean and modern UI with a gradient background and subtle animations, optimized for both desktop and mobile devices.
Interactive UI: Dropdown menus for selecting currencies, accompanied by flag icons that update dynamically based on user selection.
Error Handling: Displays clear messages for invalid inputs or API errors, ensuring a smooth user experience.

File Structure and Explanation
1. index.html
The main HTML file serves as the entry point for the application, defining the structure of the user interface. Key components include:

Header: Displays the title "Currency Converter" in a styled heading.
Input Section: Contains a number input for the amount to convert and two dropdown menus (<select> elements) for choosing the source and target currencies.
Flag Display: Includes image elements (<img>) to show country flags next to each currency dropdown.
Convert Button: A styled button to trigger the conversion process.
Result Box: A dedicated area to display the conversion result or error messages.
External Resources: Links to the style.css for styling, country.js for the currency data, and app.js for the application logic.

2. style.css
This CSS file defines the visual styling and layout of the application, ensuring a modern and responsive design:

Background and Animation: Uses a gradient background with a subtle radial gradient animation for a dynamic effect.
Container Styling: Centers the converter in a semi-transparent, rounded container with a shadow for depth.
Input and Select Elements: Styled with a dark theme, rounded corners, and subtle shadows for a polished look.
Button Styling: The "Convert" button features a gradient background, hover effects, and a slight scale animation for interactivity.
Result Box: A distinct area with a dark background and highlighted text for displaying conversion results.
Responsive Design: Ensures the layout adapts to various screen sizes with flexible widths and centered content.

3. country.js
This JavaScript file contains a comprehensive list of supported currencies in a countryList array, used to populate the dropdown menus and display currency symbols and flags:

Data Structure: Each entry includes the country name, currency code (e.g., USD), country code for FlagsAPI (e.g., US), and currency symbol (e.g., $).
Currency Coverage: Supports over 80 currencies, including major ones like USD, EUR, GBP, and regional currencies like PKR, INR, and AED.
Export: Uses a conditional export to support both browser-based and module-based environments.

4. app.js
The core JavaScript file handles the application's logic, including currency selection, flag updates, and conversion calculations:

DOM Manipulation: Accesses HTML elements (dropdowns, input, button, result box) for dynamic updates.
Dropdown Population: Dynamically generates <option> elements for currency selection, displaying the country name, currency code, and symbol.
Flag Updates: Updates flag images using the FlagsAPI based on the selected currency's country code.
Conversion Logic: Fetches exchange rates from the Currency API (EUR-based) and performs conversions by calculating the amount in EUR as an intermediate step.
Event Listeners: Handles user interactions, such as changing currency selections or clicking the "Convert" button.
Error Handling: Validates input amounts and handles API errors, displaying appropriate messages in the result box.

Installation and Setup

Clone the Repository:git clone https://github.com/your-username/currency-converter.git


Navigate to the Project Directory:cd currency-converter


Open index.html:
Open the index.html file in a web browser to run the application locally.
Alternatively, serve the project using a local server (e.g., with npx http-server or VS Code's Live Server extension).



Usage

Select the source currency from the "From" dropdown.
Select the target currency from the "To" dropdown.
Enter the amount to convert in the input field.
Click the "Convert" button to see the result displayed below.

Dependencies

Currency API: Provides real-time exchange rates (no API key required for the free tier).
FlagsAPI: Supplies country flag images based on country codes.
No external libraries or frameworks are required, keeping the project lightweight.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
