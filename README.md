# Tereza Cleaning Services: multi-page website

This version separates the original single-page website into five HTML pages while keeping the shared styling and interface components in central files. It remains a static site: no package installation, framework, or build step is required.

## Project structure

```text
tereza-cleaning-multipage/
├── index.html                  # Home
├── services.html               # Services and cleaning process
├── about.html                  # About us and service approach
├── locations.html              # Blantyre and Lilongwe locations
├── contact.html                # Quote request form
├── assets/
│   ├── css/
│   │   └── styles.css          # Shared styling for every page
│   └── js/
│       ├── components.js       # Shared top strip, navigation, footer and dialog
│       ├── main.js             # Shared menu, scroll, service dialog and UI behavior
│       └── contact.js          # Contact form validation and WhatsApp handoff
└── README.md
```

## Run the site locally

1. Download and extract the project ZIP.
2. Open the extracted `tereza-cleaning-multipage` folder in Visual Studio Code or your preferred editor.
3. For the simplest preview, use the VS Code **Live Server** extension and open `index.html` with Live Server.
4. Alternatively, with Python installed, open a terminal in the project folder and run:

   ```bash
   python -m http.server 8000
   ```

5. Visit `http://localhost:8000` in your browser. Use the navigation to test all five pages.

The site also uses Google Fonts, Font Awesome, and selected images from Unsplash, so an internet connection is needed for those external assets.

## Publish with GitHub Pages

1. Create or open the GitHub repository for the website.
2. Upload the **contents** of this project folder, not the ZIP file itself. `index.html` should be at the repository root, alongside `services.html`, `about.html`, `locations.html`, `contact.html`, `assets/`, and `README.md`.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. When GitHub Pages finishes publishing, open the URL it provides and test each page, the mobile menu, service detail dialogs, and the contact form.

Keep the relative file structure unchanged when uploading. The links are relative so the site works at a GitHub Pages project URL as well as a custom domain.

## Where to make future changes

- **Navigation, top contact strip, footer, floating WhatsApp control and service details dialog:** `assets/js/components.js`
- **Shared navigation behavior, scroll effects, reveal animation and service dialog logic:** `assets/js/main.js`
- **Colors, typography, layout, responsive rules and all shared styles:** `assets/css/styles.css`
- **Quote form fields, validation and WhatsApp message:** `contact.html` and `assets/js/contact.js`
- **Page content and page-specific SEO titles/descriptions:** the relevant HTML file

Because GitHub Pages serves static files and does not provide server-side HTML includes, the shared navigation and footer are rendered from `components.js`. Keep JavaScript enabled for those shared components and their interactions to appear.

## Quote requests

The contact form validates the required information and prepares a WhatsApp message for `+265 992 524 513`. The visitor must review and press **Send** in WhatsApp. The static site does not save form submissions or claim a request was delivered before the visitor sends it.

When someone selects **Request this service** on the Services page, the selected service is passed to the Contact page and preselected in the form.

## Before launch

- Replace the temporary brand mark with the official logo file when available.
- Replace external photography with approved company photographs where possible.
- Verify the Facebook page URL and any additional social profile links with the business owner.
- Test the site on mobile and desktop after publishing.
