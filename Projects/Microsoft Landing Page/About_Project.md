# Microsoft India Landing Page — Frontend Recreation

A frontend recreation of the **Microsoft India landing page** built from scratch with **HTML5 and CSS3**.  
The project focuses on translating a real-world commercial interface into structured HTML, reusable layout patterns, and carefully controlled spacing, typography, positioning, cards, CTAs, and footer navigation.

> **Note:** This is a learning/recreation project and is not affiliated with or endorsed by Microsoft.

---

## 🚀 Project Overview

This project recreates the visual structure of a modern Microsoft-style landing page, including:

- Navigation bar with branding, links, icons, search/cart actions and profile UI
- Large hero/banner section
- CTA buttons
- Quick-access product/service links
- Product/content card layouts
- Large feature section with image + content
- Business/product card section
- Social media area
- Multi-column footer
- Privacy, language and legal navigation

The main goal was not just to reproduce the appearance, but to practice how a production-style landing page can be broken into independent UI sections and laid out using CSS.

---

## 📊 Project by the Numbers

| Metric | Implementation |
|---|---:|
| Major page sections | 8+ |
| Product/content cards | 10+ |
| Footer categories | 6 |
| Footer/navigation links | 40+ |
| Quick-access sections | 4 |
| Large horizontal feature sections | 2 |
| Social icons | 3 |
| CTA buttons | Multiple |
| Main layout system | CSS Flexbox |
| Positioning techniques | Relative + Absolute |
| Primary technologies | HTML5 + CSS3 |

> Metrics above describe the implemented page structure. They are not performance or accuracy scores.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **CSS Flexbox**
- **CSS Positioning**
- **Remix Icon**
- **External image assets**
- **Google/modern system font stack**

### CSS Concepts Used

- `display: flex`
- `flex-direction`
- `justify-content`
- `align-items`
- `gap`
- `padding`
- `margin`
- `border-radius`
- `box-shadow`
- `background-image`
- `background-size`
- `background-position`
- `position: relative`
- `position: absolute`
- `width` / `height`
- Typography and spacing control

---

## 🧩 Page Structure

```text
Microsoft Landing Page
│
├── Navigation
│   ├── Microsoft branding
│   ├── Navigation links
│   ├── Search
│   ├── Cart
│   └── Profile
│
├── Hero Section
│   ├── Promotional content
│   ├── New badge
│   └── Learn More CTA
│
├── Quick Access Section
│   ├── Product/service links
│   └── Icons
│
├── Product Cards
│   ├── Card images
│   ├── Titles
│   ├── Descriptions
│   └── CTA buttons
│
├── Feature Section
│   ├── Large visual
│   └── Supporting content
│
├── Business Section
│   └── Additional cards
│
├── Social Section
│   └── Social icons
│
└── Footer
    ├── Multiple navigation columns
    ├── Language/privacy links
    └── Legal/company links
```

---

## 💡 Key Frontend Concepts Practiced

### 1. Layout Architecture

The page was divided into multiple semantic sections instead of treating the interface as one large block.

This helped me understand how complex landing pages can be organized into smaller layout systems.

### 2. Flexbox

Flexbox was heavily used for:

- Navigation alignment
- Horizontal card layouts
- Vertical content stacks
- Footer columns
- Icon/text alignment
- CTA positioning

### 3. Relative + Absolute Positioning

The hero content uses a relatively positioned parent and absolutely positioned content.

This helped me understand how overlay-based designs are commonly structured.

### 4. Card-Based UI

The product sections use a repeatable card pattern containing:

- Image
- Heading
- Description
- CTA

This is a useful pattern for building scalable content-heavy interfaces.

### 5. Visual Hierarchy

I paid attention to:

- Font sizes
- Font weights
- Spacing
- Button prominence
- Image proportions
- Alignment
- Section separation
- Card shadows and radius

---

## 📐 Design & UI Details

The implementation uses a consistent visual system throughout the page:

- Rounded cards
- Subtle shadows
- Blue primary CTA buttons
- Highlighted promotional badge
- Large hero typography
- Consistent spacing between sections
- Multi-column footer structure
- Icon-based navigation/actions

The CSS also uses a system-font stack to maintain a clean native UI appearance.

---

## 🧠 What I Learned

This project reinforced an important frontend lesson:

> **A professional UI is not only about writing more CSS — it is about controlling structure, spacing, hierarchy, alignment and consistency.**

While building the page, I practiced converting a visual reference into:

**Reference → Layout breakdown → HTML structure → CSS layout → Visual refinement**

This workflow is useful when implementing real-world UI designs from screenshots, references or design files.

---

## 🔍 Challenges I Worked Through

### Navigation Layout

Aligning different navigation elements while maintaining consistent spacing required careful use of Flexbox.

### Hero Overlay

Positioning content over a large image required understanding the relationship between:

```css
position: relative;
```

and

```css
position: absolute;
```

### Card Sizing

Maintaining consistent card dimensions while fitting images, descriptions and buttons required attention to:

- Width
- Height
- Padding
- Gap
- `justify-content`

### Footer Organization

The footer contains multiple navigation groups, which provided practice with multi-column layouts and consistent typography.

---

## 📈 Current Development Status

### Completed

- [x] Navigation UI
- [x] Hero section
- [x] CTA buttons
- [x] Quick-access links
- [x] Product cards
- [x] Feature section
- [x] Business section
- [x] Social section
- [x] Multi-column footer
- [x] Basic visual styling

### Planned Improvements

- [ ] Improve responsive behavior across mobile/tablet/desktop
- [ ] Add interactive navigation
- [ ] Improve accessibility
- [ ] Add hover and focus states
- [ ] Improve semantic HTML
- [ ] Optimize image loading
- [ ] Reduce hard-coded dimensions
- [ ] Refactor repeated card styles into reusable classes
- [ ] Add JavaScript interactions

---

## 🎯 Why I Built This

I built this project as part of my frontend development practice to move beyond small isolated HTML/CSS exercises and work on a **larger real-world interface**.

The project helped me practice:

**UI recreation + layout engineering + CSS positioning + Flexbox + component-style thinking + visual consistency**

---

## 📂 Suggested Project Structure

```text
microsoft-landing-page/
│
├── index.html
├── style.css
├── assets/
│   └── images/
└── README.md
```

---

## ▶️ How to Run

1. Clone the repository.

```bash
git clone <your-repository-url>
```

2. Open the project folder.

```bash
cd microsoft-landing-page
```

3. Open `index.html` in your browser.

Or use **VS Code + Live Server** for a better development workflow.

---

## 🌐 Reference

The interface was recreated by studying the publicly available Microsoft India website:

**https://www.microsoft.com/en-in/**

This repository contains my own HTML/CSS implementation created for educational and frontend-learning purposes.

---

## 👨‍💻 Author

**Utkarsh Kushwaha**

B.Tech — Internet of Things & Cyber Security Including Blockchain Technology

Focused on building strong fundamentals in:

- Frontend Development
- JavaScript
- Data Structures & Algorithms
- Backend Development
- Cybersecurity

---

## ⭐ If You Find This Useful

Feel free to explore the code, suggest improvements, or use the project as a reference for learning frontend layout techniques.

**Build → Debug → Improve → Repeat.**
