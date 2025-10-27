# React Portfolio

A modern, professional portfolio website built with React and Vite, featuring dynamic GitHub integration and clean UI design.

## Features

- **Modern Design**: Clean, professional design with blue accent colors
- **Dynamic GitHub Integration**: Fetches and displays repositories from GitHub API
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Elements**: 
  - Smooth scroll animations
  - Skill bar animations
  - Project cards with hover effects
- **Modern React**: Built with React 18+ and Vite for fast development

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── sections/        # All main sections (Hero, About, Projects, etc.)
│   └── common/          # Reusable components (Button, ProjectCard)
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── styles/             # CSS files
└── utils/              # Utility functions
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Sections

- **Hero**: Landing section with profile photo and introduction
- **About**: Professional profile and career overview
- **Projects**: Project portfolio with GitHub integration
- **Skills**: Technical skills and proficiencies
- **Interests**: Personal interests and activities
- **Certifications**: Professional certifications
- **Experience**: Leadership roles and achievements
- **Contact**: Contact information and links

## GitHub Integration

The Projects section includes a toggle to switch between:
- **Portfolio Projects**: Curated projects with detailed descriptions
- **GitHub Repositories**: Live data from GitHub API with stars, forks, and languages

## Technologies Used

- React 18+
- Vite
- CSS3 with custom properties
- GitHub API
- Google Fonts (Inter)

## Customization

### Personal Information
Update `src/data/personalInfo.js` with your details:
- Name, role, location
- Contact information
- Education and experience
- Professional summary

### Projects
Modify `src/data/projects.js` to add your projects or update the GitHub username in the Projects section.

### Styling
All styles are in `src/styles/index.css` with CSS custom properties for easy theming.



## License

This project is open source and available under the MIT License.
