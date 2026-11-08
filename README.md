# Project 1: Counter Application (React useState)

A modern, responsive Counter Application built with **React** and **Vite**, demonstrating state management with the `useState` hook.

## ✨ Features

- **Functional React Component**: Built using modern React 19 / 18 functional paradigm in [`Counter.jsx`](file:///F:/counter%20application/src/components/Counter.jsx).
- **`useState` State Management**:
  ```jsx
  const [count, setCount] = useState(0);
  ```
- **Dynamic Controls**:
  - **Increment (+1)**: Increases counter dynamically.
  - **Decrement (-1)**: Decreases counter safely without dropping below 0.
  - **Reset (0)**: Instantly resets count back to ground state.
  - **Step Multiplier**: Flexible `+1`, `+5`, and `+10` step sizing.
- **Conditional Rendering**:
  - Dynamically renders **"Minimum limit reached"** warning badge when `count === 0`.
  - Disables the Decrement button when at zero.
  - Dynamically displays parity (Even / Odd) and milestone indicators when reaching higher counts.
- **Classic Typography**: Styled with Google Font **Poppins** across all headings, numeric readouts, and action buttons.
- **Themed Layout**: Features the provided golden origami artwork as a full-viewport canvas with the counter positioned elegantly on the **left side** using a glassmorphic card design.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 📁 Project Structure

```
F:\counter application\
├── index.html                  # HTML entry point with Poppins Google Font
├── package.json                # Dependencies & scripts
├── public\
│   └── origami-bg.jpg          # User-provided background artwork
├── src\
│   ├── assets\
│   ├── components\
│   │   └── Counter.jsx         # Counter functional component with useState
│   ├── App.jsx                 # Layout placing Counter on the left side
│   ├── App.css                 # Glassmorphic & themed styling
│   ├── index.css               # Global typography & resets
│   └── main.jsx                # React root mount
```
