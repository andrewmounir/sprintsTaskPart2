# Art Gallery Project

Welcome to the Art Gallery project! This project is a web-based art gallery where users can view and purchase artworks. It was developed as part of Final Project for Sprints.

## Features

- **Product Listings:** Browse and search for artworks by category or using a search function.
- **Product Details:** Click on a product to view detailed information about it.
- **User Accounts:** Users can create accounts, log in, and make purchases.
- **Cart:** Add artworks to your cart and proceed to checkout.
- **Admin Panel:** Admins can manage products, users, and orders for now user has admin policy but it will be modified into two roles as a future plan all code is implemented.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `composer install` and `npm install`
3. Configure the `.env` file with your database settings and other environment variables.
4. Migrate the database: `php artisan migrate`
5. Seed the database with sample data: `php artisan db:seed`

## Usage

- Start the Laravel development server: `php artisan serve`
- Start the Angular development server: `ng serve`

Access the application at `http://localhost:8000`.

## Known Issues

- The cart functionality is partially implemented as a code only and is still underDevelopment. You can add items to the cart, but the checkout process is not complete.
- also all routes are made and written in the controllers but not all are being used

## Contributing

Contributions are welcome! Feel free to open issues or pull requests to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).
