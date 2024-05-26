# Design Guide for Bahul Neel Upadhyaya's Personal Website

## Color Palette

### Primary Colors
- **Dark Blue:** #002F6C
- **Teal:** #008080

### Secondary Colors
- **Gray:** #4A4A4A
- **Light Gray:** #D3D3D3

### Accent Colors
- **Orange:** #FF6600
- **White:** #FFFFFF

### Gradient Colors
- **Gradient Start:** #005B99
- **Gradient End:** #00CCCC

## Typography
- **Headers:** Bold, modern font (e.g., Montserrat or Lato)
- **Body Text:** Clean, readable font (e.g., Open Sans or Roboto)

## Layout Guidelines

### Home Page
- **Header:**
  - Background: Gradient from dark blue to teal (`bg-gradient-to-r from-gradient-start to-gradient-end`)
  - Text: White (`text-accent-white`)
  - Navigation Links: Light Gray (`text-secondary-lightGray`) with hover state in Orange (`hover:text-accent-orange`)
- **Body:**
  - Introduction Section:
    - Background: Dark Blue (`bg-primary-darkBlue`)
    - Text: White (`text-accent-white`)
    - Professional Photo: Centered
    - Brief Introduction and Summary of Experience and Skills: Below the photo

### About Me Page
- **Section Background:** Light Gray (`bg-secondary-lightGray`)
- **Text:** Gray (`text-secondary-gray`)
- **Professional Summary:**
  - Title: Dark Blue (`text-primary-darkBlue`)
  - Body: Gray (`text-secondary-gray`)
- **Career Goals and Interests:**
  - Title: Teal (`text-primary-teal`)
  - Body: Gray (`text-secondary-gray`)

### Experience Page
- **Work History:**
  - Background: Dark Blue (`bg-primary-darkBlue`)
  - Text: White (`text-accent-white`)
  - Links: Orange (`text-accent-orange hover:text-gradient-end`)
  - Job Roles and Descriptions: Listed in chronological order
  - Project Links: Teal (`text-primary-teal hover:text-accent-orange`)

### Projects Page
- **Portfolio Section:**
  - Background: Gradient from dark blue to teal (`bg-gradient-to-r from-gradient-start to-gradient-end`)
  - Text: White (`text-accent-white`)
  - Project Cards: Each card contains project image, title, and description
- **Case Studies:**
  - Title: Dark Blue (`text-primary-darkBlue`)
  - Description: Gray (`text-secondary-gray`)
  - Links: Teal (`text-primary-teal hover:text-accent-orange`)

### Skills Page
- **Skills List:**
  - Background: Light Gray (`bg-secondary-lightGray`)
  - Text: Gray (`text-secondary-gray`)
  - Titles: Dark Blue (`text-primary-darkBlue`)
  - Proficiency Levels:
    - Bars: Teal (`bg-primary-teal`)
    - Fill: Gradient from start to end colors (`bg-gradient-to-r from-gradient-start to-gradient-end`)

### Contact Page
- **Contact Form:**
  - Background: Dark Blue (`bg-primary-darkBlue`)
  - Text: White (`text-accent-white`)
  - Input Fields: Light Gray (`bg-secondary-lightGray text-secondary-gray`)
- **Email Address:** Teal (`text-primary-teal`)
- **Social Media Links:** Orange (`text-accent-orange hover:text-primary-teal`)

## Example Usage in HTML

### Home Page Header
```html
<header class="bg-gradient-to-r from-gradient-start to-gradient-end text-accent-white p-4">
  <nav class="container mx-auto">
    <ul class="flex space-x-4">
      <li><a href="/" class="text-secondary-lightGray hover:text-accent-orange">Home</a></li>
      <li><a href="/about" class="text-secondary-lightGray hover:text-accent-orange">About Me</a></li>
      <li><a href="/experience" class="text-secondary-lightGray hover:text-accent-orange">Experience</a></li>
      <li><a href="/projects" class="text-secondary-lightGray hover:text-accent-orange">Projects</a></li>
      <li><a href="/skills" class="text-secondary-lightGray hover:text-accent-orange">Skills</a></li>
      <li><a href="/contact" class="text-secondary-lightGray hover:text-accent-orange">Contact</a></li>
    </ul>
  </nav>
</header>
```
### About Me Section
```html
<section class="bg-secondary-lightGray p-8 text-secondary-gray">
  <h1 class="text-primary-darkBlue text-3xl font-bold mb-4">About Me</h1>
  <p class="mb-4">Detailed professional summary...</p>
  <h2 class="text-primary-teal text-2xl font-bold mb-2">Career Goals and Interests</h2>
  <p>...</p>
</section>
```
### Experience Section
```html
<section class="bg-primary-darkBlue p-8 text-accent-white">
  <h1 class="text-3xl font-bold mb-4">Experience</h1>
  <ul>
    <li class="mb-2">
      <h2 class="text-2xl font-bold">Company Name</h2>
      <p>Role and accomplishments...</p>
      <a href="https://example.com" class="text-accent-orange hover:text-gradient-end">Project Link</a>
    </li>
    <!-- Repeat for other experiences -->
  </ul>
</section>
```
### Skills Section
```html
<section class="bg-secondary-lightGray p-8 text-secondary-gray">
  <h1 class="text-primary-darkBlue text-3xl font-bold mb-4">Skills</h1>
  <ul>
    <li class="mb-2">
      <h2 class="text-primary-teal text-2xl font-bold">Technical Skills</h2>
      <p>Proficiency levels...</p>
    </li>
    <!-- Repeat for other skills -->
  </ul>
</section>
```
### Contact Section
```html
<section class="bg-primary-darkBlue p-8 text-accent-white">
  <h1 class="text-3xl font-bold mb-4">Contact</h1>
  <form>
    <!-- Contact form fields -->
    <input type="email" class="bg-secondary-lightGray text-secondary-gray p-2 mb-4" placeholder="Your email">
    <textarea class="bg-secondary-lightGray text-secondary-gray p-2 mb-4" placeholder="Your message"></textarea>
    <button type="submit" class="bg-primary-teal text-accent-white p-2">Send</button>
  </form>
  <p>Email: <span class="text-primary-teal">you@example.com</span></p>
  <div>
    <a href="#" class="text-accent-orange hover:text-primary-teal">LinkedIn</a>
    <a href="#" class="text-accent-orange hover:text-primary-teal">GitHub</a>
  </div>
</section>
```