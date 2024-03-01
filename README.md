# REACT Portfolio

This is my personal portfolio showcasing my professional experience, education, and key skills.

## Overview

The portfolio is built using React with Vite as the build tool. It follows a component-based architecture, with each section of the portfolio implemented as a reusable React component. Here's a breakdown of how components were used:

- **Header Component**: A reusable header component is used across all pages of the portfolio. It includes navigation links to different sections of the portfolio.

- **Navigation Component**: Within the header, a navigation component is implemented using `react-router-dom` to conditionally render different sections of the portfolio based on the selected route.

- **Sections**: The portfolio consists of several sections, including About Me, Portfolio, Contact, and Resume. Each section is implemented as a separate React component, making it easy to manage and update individual sections independently.

- **Contact Form Component**: The Contact section includes a contact form implemented as a separate component. This component handles form input and submission logic.

- **Project Component**: In the Portfolio section, individual projects are displayed using a Project component. This component is reusable and can be easily configured to display information about different projects.

## Technologies Used

- React
- Vite
- Bootstrap
- React Router
- AOS (Animate On Scroll)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd my-portfolio`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Deployment

The project is deployed on Netlify. Visit [My Portfolio](https://yasir-jamah-react-portfolio.netlify.app/) to view the live site.

