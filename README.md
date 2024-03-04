# Title

ReactJs Fullstack Assignment - Interactive Cake shop Application

## Objective

The application should allow user to browse and search for cakes, View cakes, add cakes to a shopping cart, and place an order.

## Tech Stack

Use ReactJs, React Router, Redux or React Context API, CSS or CSS frameworks, Git and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have

- Build a ReactJs application with multiple pages and components, including Home, Cakes, About Us, Contact Us, and Cart pages.

- Implement features such as search cakes, filter cakes, add to cart, remove from cart, and order placements.

#### Pages:

### Home

- Page Details:

  - Header - links for Home, Cakes, About, Contact Us, Facebook, Instagram, Twitter
  - Banner - Heading and "OrderNow" Button
  - Highlighted cake - Heading, Description and Image
  - Carousel - Cake Image, Cake Name, Cake Price
  - Video - Cake Video
  - Follow Us - Cake Images and "Cake Shop" Button
  - Footer - Description, "Social Media" Buttons

- Navigation:

  - Header Navigation - Facebook,Instagram, Twitter Home and cart
  - Banner Navigation - "orderNow" Button to Cart
  - FollowUs Navigation - "Cake shop" Button to Instagram
  - Footer Navigation - Facebook,Instagram and Twitter

### Cakes

- Page Details:
  - Header - links for Home, Cakes, About, Contact Us, Facebook, Instagram, Twitter
  * Banner - Heading
  * Filter - Filter Button with option to filter by cake type and price range low to high or high to low
  * search - To search for a specific cakes
  * Cake List - list cake with Image, Name, Description, Price, Quantity and Weight "+" button to Increase Quantity and "-" button to Decrease Quantity and "Add" button to add cake to cart "read More" button to read hidden description
  - Follow Us - Cake Images and "Cake Shop" Button
  - Footer - Description, "Social Media" Buttons

* Navigation:
  - Header Navigation - Facebook,Instagram, Twitter Home and cart
  * FollowUs Navigation - "Cake shop" Button to Instagram
  * Footer Navigation - Facebook,Instagram and Twitter

### About

- Page Details:

  - Header - links for Home, Cakes, About, Contact Us, Facebook, Instagram, Twitter

  * Banner - Heading
  * About Our Story - Heading, Description and Image
  * Our Services Banner - Heading, Icons and Description
  * About Our Team - Heading, Description and Image
  * Follow Us - Cake Images and "Cake Shop" Button
  * Footer - Description, "Social Media" Buttons

* Navigation:
  - Header Navigation - Facebook,Instagram, Twitter Home and cart
  * FollowUs Navigation - "Cake shop" Button to Instagram
  * Footer Navigation - Facebook,Instagram and Twitter

### Contact Us

- Page Details:

  - Header - links for Home, Cakes, About, Contact Us, Facebook, Instagram, Twitter

  * Banner - Heading
  * Location - Image
  * Get In Touch - form having name, Message, Email and Subject Input with Form validations and "Send" button to trigger toaster notification. Toaster notification appears when form validation passed.
  * Ways of communication - Icon,Heading and Description
  * Footer - Description, "Social Media" Buttons

* Navigation:
  - Header Navigation - Facebook,Instagram, Twitter Home and cart
  - Footer Navigation - Facebook,Instagram and Twitter

### Cart

- Page Details:
  - Header - links for Home, Cakes, About, Contact Us, Facebook, Instagram, Twitter
  - Banner - Heading
  * Remove All - "Remove All" button to remove all cart Items
  * Cart List - Image, Name, Increase & Decrease Button, price and "Remove" button to Remove the Single Item
  * Order Total -Total price, Item Quantity and "Check out" Button

* Navigation:
  - Header Navigation - Facebook,Instagram, Twitter Home and cart
  - Footer Navigation - Facebook,Instagram and Twitter

#### Nice to Have

- Implementing user authentication.

* Animation and Transitions.

### Guidelines to develop a project

#### Must Have

- Use Github
  - Commit code regularly and commit Changes should be clear.
  - Include a ReadMe file explaining the project setup, usage instruction, and any additional information
  - The repo should be well organized and easy to read.
  - The code should be clean, modular, and well-structure
- The application should be visually appealing, and user friendly
- The application should be handle all the errors

#### Nice to Have

- Implementing unit tests

### Submission Instructions

#### Must Have

- GitHub Repository

#### Nice to Have

- Deploy the application on a hosting platform.

## Technical Details

### Routes

| Pages      | Route     | path        |
| ---------- | --------- | ----------- |
| Home       | Home      | /           |
| Cakes      | Cakes     | /cakes      |
| About      | About     | /about      |
| Contact us | ContactUs | /contact-us |
| Cart       | Cart      | /cart       |
| Not found  | NotFound  | /not-found  |

### Routes & Components

**Home**

| Components | Details                                                                                                                     | State | API |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ----- | --- |
| Header     | Social Media Icons such as (Facebook, Instagram,Twitter), Logo , "Cart" Button and links for Home, Cakes, About, Contact Us | -     | -   |
| CakeSlider | Cake Image, Name and Price                                                                                                  | -     | -   |
| FollowUs   | Heading, "Cake shop" Button and Cake Images                                                                                 | -     | -   |
| Footer     | description, Social media Buttons such as (Facebook, Instagram, Twitter)                                                    | -     | -   |

**Cakes**

| Components  | Details                                                                                                                     | State                                                                                       | API                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Header      | Social Media Icons such as (Facebook, Instagram,Twitter), Logo , "Cart" Button and links for Home, Cakes, About, Contact Us | -                                                                                           | -                                                                              |
| CakeList    | cake data such as Id, Image, Name, Description, Price, Quantity , Type , Weight                                             | cakeData, cakeDataStatus, searchInput, priceAndOrderInput, cakeTypeInput, isFilterBtnActive | http://localhost:3001/cakes/?search_q=&cake_type=cake&order_by=price&order=Asc |
| CartContext | addCartItem                                                                                                                 | (Consumer Context)                                                                          | -                                                                              |
| FollowUs    | Heading, "Cake shop" Button and Cake Images                                                                                 | -                                                                                           | -                                                                              |
| Footer      | description, Social media Buttons such as (Facebook, Instagram, Twitter)                                                    | -                                                                                           | -                                                                              |

**About**

| Components | Details                                                                                                                     | State | API |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ----- | --- |
| Header     | Social Media Icons such as (Facebook, Instagram,Twitter), Logo , "Cart" Button and links for Home, Cakes, About, Contact Us | -     | -   |
| FollowUs   | Heading, "Cake shop" Button and Cake Images                                                                                 | -     | -   |
| Footer     | description, Social media Buttons such as (Facebook, Instagram, Twitter)                                                    | -     | -   |

**Contact Us**

| Components | Details                                                                                                                     | State | API |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ----- | --- |
| Header     | Social Media Icons such as (Facebook, Instagram,Twitter), Logo , "Cart" Button and links for Home, Cakes, About, Contact Us | -     | -   |
| Footer     | description, Social media Buttons such as (Facebook, Instagram, Twitter)                                                    | -     | -   |

**Cart**

| Components  | Details                                                                                                                     | State              | API |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ | --- |
| Header      | Social Media Icons such as (Facebook, Instagram,Twitter), Logo , "Cart" Button and links for Home, Cakes, About, Contact Us | -                  | -   |
| CartList    | cake Id, Name, Price, Increase And Decrease Quantity Button and "Remove" Button                                             | -                  | -   |
| CartContext | cartList, removeAllCartItems                                                                                                | (Context Consumer) | -   |
| Footer      | description, Social media Buttons such as (Facebook, Instagram, Twitter)                                                    | -                  | -   |

## Resources

### Design files

Home, Cakes, About, Contact Us and Cart

Reference: [Colorlib Cake shop Template](https://colorlib.com/wp/template/cakeshop/)

### APIs

Cake Api data created using Sqlite database, Node Js and Express Js

Api Link:

```http
http://localhost:3001/cakes/?search_q=&cake_type=cake&order_by=price&order=Asc
```

### Third-party packages

- Icons (react-icons)
- Loader (react-loader-spinner)
- Video player (react-player)
- Carousel (react-slick)
- CSS library (styled-components)
- Toast notification (react-hot-toast)
