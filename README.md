# Country Auto-Completion

A client-side country search box with real-time autocomplete, built with HTML, CSS, and vanilla JavaScript.

This project was developed as part of the **GDG GIP challenge**. It implements a custom autocomplete algorithm using the provided country dataset.

## Features

- **Real-time autocomplete:** Suggestions update as the user types.
- **Substring matching:** Find countries by typing a sequence of characters from anywhere in their names. For example, `land` matches `Iceland` and `Ireland`.
- **Accent-insensitive search:** Searching for `cote d'ivoire` matches `Côte d'Ivoire`.
- **Apostrophe normalization:** Handles common apostrophe variations during searches.
- **Case-insensitive search:** Uppercase and lowercase letters are treated equally.
- **Clickable suggestions:** Select a country to fill the search field.
- **Efficient preprocessing:** Country names are normalized once when the application starts, avoiding repeated normalization on every keystroke.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- DOM manipulation
- Array methods such as `map()`, `filter()`, and `forEach()`

No frameworks, external libraries, or backend are required.

## Dataset

The project uses the dataset provided for the challenge:

[auto-completion-challenge-GIP — data.js](https://github.com/Tenkeyyy/auto-completion-challenge-GIP/blob/main/data.js)

The dataset exports a `countries` array containing country objects with properties such as `id` and `name`.

## How It Works

### 1. Text normalization

A custom `normalizeText()` function converts text to lowercase, removes diacritical marks, and ignores supported apostrophe variations.

For example:

```text
Côte d'Ivoire  →  cote divoire
CÔTE D’IVOIRE  →  cote divoire
```

This allows differently formatted search queries to match the same country.

### 2. Preprocessing

Country names are normalized once when the application starts. The original names are preserved so that suggestions display the correct spelling and accents.

### 3. Search and filtering

Whenever the search input changes, the algorithm normalizes the query and filters the dataset using substring matching.

### 4. Displaying suggestions

Matching countries are dynamically rendered in the HTML using JavaScript DOM methods. Clicking a suggestion fills the search field with the original country name and clears the suggestion list.

## Getting Started

### Prerequisites

- A modern web browser
- Python 3 or another local development server

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/country-auto-completion.git
cd country-auto-completion
```

Make sure the project directory contains:

```text
country-auto-completion/
├── index.html
├── style.css
├── script.js
└── data.js
```

### Run Locally

Start a local server from the project directory:

```bash
python -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

A local server is recommended because the application uses JavaScript ES modules.

## Example Searches

| Search query | Expected match |
|---|---|
| `land` | Iceland, Ireland, and other matching countries |
| `cote d'ivoire` | Côte d'Ivoire |
| `CÔTE D’IVOIRE` | Côte d'Ivoire |
| `xyzxyz` | No matching suggestions |

## Project Structure

- **`index.html`** — Defines the search input and suggestion list.
- **`style.css`** — Styles the search interface and autocomplete suggestions.
- **`script.js`** — Implements text normalization, filtering, and suggestion rendering.
- **`data.js`** — Contains the provided country dataset.

## Performance

Let \(N\) be the number of countries in the dataset.

Country-name normalization is performed once during initialization. Each search then examines the dataset and checks whether each normalized name contains the normalized query.

The search takes **O(N)** time per input event, excluding the cost of rendering the matching suggestions. The preprocessing step requires **O(N)** additional storage for the normalized country data.

## Purpose

This project explores practical JavaScript concepts, including ES modules, event listeners, array processing, string normalization, DOM manipulation, and basic performance optimization.

---

Developed for the **GDG GIP challenge**.
