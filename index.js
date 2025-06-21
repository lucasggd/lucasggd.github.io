// Trigger tooling title animation
const observerToolingSection = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    const titleEl = document.querySelector("#tooling-title");
    const itemsEl = document.querySelector("#tooling-items-div");

    if (entry.isIntersecting) {
      titleEl.classList.add("tooling-title-animation");
      itemsEl.classList.add("tooling-items-div-animation");
      return;
    }

    titleEl.classList.remove("tooling-title-animation");
    itemsEl.classList.remove("tooling-items-div-animation");
  });
});

observerToolingSection.observe(document.querySelector("#tooling-title"));

// Trigger tooling title animation
const observerCompaniesSection = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    const titleEl = document.querySelector("#exp-title");
    const itemsEl = document.querySelector("#exp-main-div");

    if (entry.isIntersecting) {
      titleEl.classList.add("tooling-title-animation");
      itemsEl.classList.add("tooling-items-div-animation");
      return;
    }

    titleEl.classList.remove("tooling-title-animation");
    itemsEl.classList.remove("tooling-items-div-animation");
  });
});

observerCompaniesSection.observe(document.querySelector("#exp-title"));

// Trigger tooling title animation
const observerServicesSection = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    const titleEl = document.querySelector("#service-title");
    const itemsEl = document.querySelector("#services-list");

    if (entry.isIntersecting) {
      titleEl.classList.add("tooling-title-animation");
      itemsEl.classList.add("tooling-items-div-animation");
      return;
    }

    titleEl.classList.remove("tooling-title-animation");
    itemsEl.classList.remove("tooling-items-div-animation");
  });
});

observerServicesSection.observe(document.querySelector("#service-title"));
