Personal Portfolio Website

Project Overview
This is my personal portfolio site that I made for my INFR3120 - Web and Script Programming course. It’s basically a place to show my work, talk a bit about my skills, and give people an easy way to contact me.

Live Site
You can check out the live version on GitHub Pages (link on my GitHub).

Color Scheme
I used Adobe Color to come up with my color palette. The colors I ended up going with are:

Primary: #264653 (dark blue-green)

Secondary: #2A9D8F (teal)

Accent 1: #E9C46A (yellow-gold)

Accent 2: #F4A261 (orange)

Accent 3: #E76F51 (coral red)

I picked these because they look clean and professional but still friendly. The contrast also helps keep everything easy to read.

Responsive Design
I made sure the site looks good on all devices — desktop, tablet, and mobile.

Viewport sizes I used:

Desktop/Laptop: 960px and up

Tablet: 481px to 960px

Mobile: 480px and below

These sizes work well because 960px is a standard layout width, and 480px fits most phone screens.

Responsive stuff I added:

Fluid layouts using % widths for smaller screens

Different CSS files for each viewport (using media queries)

Single column layout on phones

Buttons that are easy to tap (44x44px min)

CSS Gradients
I added a few gradients to make the site look more modern and not too flat:

Linear gradient on the body background:
background: linear-gradient(to bottom, #264653 0%, #2A9D8F 100%);
Adds some depth to the page.

Angled gradient on the header:
background: linear-gradient(45deg, #264653 0%, #2A9D8F 100%);
Makes the top section stand out more.

Radial gradient for project/skill boxes:
background: radial-gradient(circle, #E9C46A 0%, #F4A261 100%);
Gives them a nice pop effect.

Site Structure
Here’s what’s on the site:

index.html – Home page

about.html – About me (includes photo + intro video)

projects.html – Shows 5 of my academic projects

contact.html – Contact form (with validation)

thankyou.html – Form submitted successfully

error.html – Error page for form issues

CSS Files

style-full.css – Desktop

style-tablet.css – Tablet

style-phone.css – Mobile

HTML5 Features Used
I used a bunch of semantic HTML5 stuff like <header>, <nav>, <main>, <section>, and <footer>.
Also added:

A video tag with controls and a poster image

Built-in form validation (required fields, email, and phone pattern)

Meta viewport tag for proper scaling

Form Validation
The form checks for:

Name (required)

Email (valid email format)

Phone (format 123-456-7890)

Comments (required)

Clear error messages if something’s missing

Testing Done
HTML validated with W3C
CSS validated
Links tested
Spell check done
Accessibility checked with WAVE

Technologies Used

HTML5
CSS3

No JavaScript or frameworks (as required by the assignment)

Browser Compatibility
Tested on Chrome, Firefox, Edge, and Safari — everything works fine.

Version Control
Used Git for version control, with frequent commits showing the site’s progress.

Credits
All code written by Rayyan Khan for INFR3120 Assignment 1, based on course material.

Contact Info
Email: rayyan.khan1@ontariotech.net

GitHub: github.com/rayyank06