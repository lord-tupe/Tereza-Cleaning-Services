# 🧹 Tereza Cleaning Services

<p align="center">
  <strong>A cleaner space. A lighter mind.</strong><br>
  A responsive, multi-page website for professional cleaning services in Malawi.
</p>

<p align="center">
  <a href="https://lord-tupe.github.io/Tereza-Cleaning-Services/">
    <img src="https://img.shields.io/badge/Live%20Website-Visit%20Site-9CE800?style=for-the-badge&logo=googlechrome&logoColor=252A2D" alt="Visit the live website">
  </a>
  <a href="https://github.com/lord-tupe/Tereza-Cleaning-Services">
    <img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View the GitHub repository">
  </a>
  <a href="https://pages.github.com/">
    <img src="https://img.shields.io/badge/Hosting-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="Hosted on GitHub Pages">
  </a>
</p>

## 🌐 Live website

**Visit:** [lord-tupe.github.io/Tereza-Cleaning-Services](https://lord-tupe.github.io/Tereza-Cleaning-Services/)

The website is deployed and publicly accessible. It introduces Tereza Cleaning Services, presents its cleaning services and service areas, and gives visitors a way to request a quote through WhatsApp.

## ✨ Overview

Tereza Cleaning Services is a static website built with HTML, CSS and JavaScript. The original single-page experience has been organised into five pages, with shared styling and reusable interface components kept in central files.

The website showcases residential, commercial and specialist cleaning services in **Blantyre and Lilongwe, Malawi**. It does not require a framework, package installation or build process.

## ✅ Features

- 📱 **Responsive layout** designed for desktop and mobile screens.
- 🧭 **Five connected pages** covering the home page, services, company information, locations and contact details.
- 🧩 **Shared interface components** for the contact strip, navigation, footer, floating WhatsApp control and service detail dialog.
- 🧼 **Service detail dialogs** to help visitors explore services and continue to a quote request.
- 💬 **WhatsApp quote requests** with form validation and a prepared message for the visitor to review and send.
- 🔗 **Service selection hand-off** that carries the selected service from the Services page to the Contact page.
- ✨ **Interface interactions** including mobile navigation, scroll behaviour and reveal effects.
- 🔎 **Page-specific SEO metadata**, including titles and descriptions.
- 🚀 **Static hosting** through GitHub Pages.

## 📄 Website pages

| Page | File | Purpose |
| --- | --- | --- |
| 🏠 Home | `index.html` | Introduces the business and directs visitors to services or quote requests. |
| 🧽 Services | `services.html` | Presents the cleaning services and cleaning process. |
| 🏢 About us | `about.html` | Explains the business and its service approach. |
| 📍 Locations | `locations.html` | Highlights the Blantyre and Lilongwe service areas. |
| ✉️ Contact | `contact.html` | Collects quote request details and prepares a WhatsApp message. |

## 🧰 Technology and external assets

- **HTML5** for page structure and content.
- **CSS3** for shared styling, layout and responsive behaviour.
- **JavaScript** for shared components, navigation and interactive features.
- **Google Fonts** for typography.
- **Font Awesome** for interface icons.
- **Unsplash** for selected website photography.
- **GitHub Pages** for hosting the live website.

No Node.js, npm packages or compilation step is required. An internet connection is needed for the externally hosted fonts, icons and photography to load.

## 📁 Project structure

```text
Tereza-Cleaning-Services/
├── index.html                  # Home page
├── services.html               # Services and cleaning process
├── about.html                  # About the business
├── locations.html              # Blantyre and Lilongwe locations
├── contact.html                # Quote request form
├── assets/
│   ├── css/
│   │   └── styles.css          # Shared styles for all pages
│   └── js/
│       ├── components.js       # Shared contact strip, navigation, footer and dialog
│       ├── main.js             # Menu, scroll behaviour, reveal effects and service dialog
│       └── contact.js          # Form validation and WhatsApp hand-off
└── README.md
```

## 💻 Run the website locally

You can preview the website on your computer before making changes.

### 1. Clone the repository

```bash
git clone https://github.com/lord-tupe/Tereza-Cleaning-Services.git
cd Tereza-Cleaning-Services
```

### 2. Open the project

Open the folder in Visual Studio Code or your preferred code editor.

**Option A: Visual Studio Code Live Server**

Install the Live Server extension, then open `index.html` with Live Server.

**Option B: Python local server**

If Python is installed, run this command from the project folder:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. Use the navigation to visit all five pages.

## 🛠️ Where to make changes

| To update | Edit this file |
| --- | --- |
| Top contact strip, navigation, footer, floating WhatsApp control and service details dialog | `assets/js/components.js` |
| Mobile menu, scroll behaviour, reveal effects and service dialog logic | `assets/js/main.js` |
| Colours, typography, layout, responsive rules and shared styles | `assets/css/styles.css` |
| Quote form fields, validation and WhatsApp message content | `contact.html` and `assets/js/contact.js` |
| Page content and page-specific SEO titles or descriptions | The relevant HTML file |

### ℹ️ Shared components

GitHub Pages serves this project as a static website and does not process server-side HTML includes. The shared navigation and footer are therefore rendered by `assets/js/components.js`. JavaScript must be enabled for these components and their related interactions to appear.

## 💬 How quote requests work

1. A visitor opens the Contact page and completes the required form fields.
2. JavaScript validates the details and prepares a WhatsApp message for **+265 992 524 513**.
3. WhatsApp opens with the prepared message for the visitor to review.
4. The visitor must press **Send** in WhatsApp to submit the request.

The website does **not** store form submissions or send messages automatically. A message is not delivered until the visitor sends it in WhatsApp.

When a visitor selects **Request this service** on the Services page, the chosen service is passed to the Contact page and preselected in the form.

## 🚀 Deployment status

The website is already deployed on **GitHub Pages**:

**Live URL:** [https://lord-tupe.github.io/Tereza-Cleaning-Services/](https://lord-tupe.github.io/Tereza-Cleaning-Services/)

To update the live website, edit the relevant files, commit the changes and push them to the repository's configured GitHub Pages publishing branch. GitHub Pages will publish updates according to the repository's Pages settings.

Keep the existing relative links and file structure unchanged unless you also update the references in the HTML and JavaScript files. The current structure keeps `index.html` and the other page files at the repository root, with shared assets inside `assets/`.

## 🧪 Checks after making changes

Before considering an update complete, check the live site on desktop and mobile:

- [ ] All five pages open and navigation links work.
- [ ] The mobile menu opens and closes correctly.
- [ ] Service detail dialogs open and close correctly.
- [ ] **Request this service** carries the selected service into the Contact form.
- [ ] Required form fields display validation when incomplete.
- [ ] The WhatsApp hand-off opens the correct prepared message.
- [ ] Fonts, icons and images load when an internet connection is available.
- [ ] Each page has an appropriate title and meta description.

## 🧭 Future improvements

- Replace the temporary brand mark with the official company logo when it is available.
- Replace selected external photography with approved company photographs where possible.
- Confirm the Facebook page URL and any other social profile links with the business owner.
- Re-test the complete visitor journey after design or content updates.

---

<p align="center">
  <strong>Tereza Cleaning Services</strong><br>
  Professional cleaning for homes and workplaces in Malawi.<br>
  <a href="https://lord-tupe.github.io/Tereza-Cleaning-Services/">Visit the live website</a>
</p>
