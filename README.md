# 💱 Currency Converter App

A responsive, modern, and lightweight real-time currency converter built with **React** and **Tailwind CSS**. It fetches dynamic exchange rates using custom hooks and provides a clean user interface to convert amounts between world currencies.

---

## ✨ Features

- **Real-Time Exchange Rates:** Dynamic conversion rates fetched from the Open Exchange Rates API.
- **Custom React Hook (`useCurrencyInfo`):** Reusable data-fetching logic with standard state management.
- **Reusable Input Component (`InputBox`):** Modular and accessible UI component for selecting currencies and entering numerical values.
- **Swap Functionality:** Instantly switch between "From" and "To" currencies and swap amounts.
- **Responsive Layout:** Tailored with Tailwind CSS for seamless viewing on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React.js](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **API Endpoint:** [Open Exchange Rates API](https://open.er-api.com/)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── InputBox.jsx     # Reusable component for currency inputs
│   └── index.js        # Centralized component export
├── hooks/
│   └── useCurrencyInfo.js # Custom hook to fetch currency exchange rates
├── App.css
├── App.jsx             # Main application container
└── main.jsx            # React root DOM renderer
