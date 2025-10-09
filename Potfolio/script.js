// When click the home, scroll to the top of the page
document.getElementById("homeButton").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// When click the about, scroll to the about section
document.getElementById("aboutButton").addEventListener("click", function () {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});

// When click the skills, scroll to the skills section
document.getElementById("skillsButton").addEventListener("click", function () {
  const skillsSection = document.getElementById("skills");
  skillsSection.scrollIntoView({
    behavior: "smooth",
  });
});

// When click the projects, scroll to the projects section
document
  .getElementById("projectsButton")
  .addEventListener("click", function () {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({
      behavior: "smooth",
    });
  });

// When click the contact, scroll to the contact section
document.getElementById("contactButton").addEventListener("click", function () {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});

// When click the resume, open the resume in a new tab
document.querySelector(".resumeButton").addEventListener("click", function () {
  window.open("Resume1.pdf", "_blank");
});

// contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const submitButton = document.getElementById("submitButton");

    // Validate the form data
    if (name === "" || email === "" || !email.includes("@")) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Form submitted successfully!");
  });
