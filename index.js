// Animation using GSAP

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);

// ===========================================================================================================================================
// Start section

// TITLE
gsap.from("#init-title", {
  x: "-200",
  duration: 1,
});

gsap.from("#init-title", {
  opacity: 0,
  duration: 2,
});

// DESC
let split = SplitText.create("#init-desc", { type: "chars" });

gsap.from(split.chars, {
  y: 50,
  autoAlpha: 0,
  stagger: 0.02,
});

// Picture
gsap.from("#init-me-picture", {
  x: "400",
  duration: 1,
});

gsap.from("#init-me-picture", {
  autoAlpha: 0,
  duration: 2,
});

// ===========================================================================================================================================
// Tooling section

// Title opacity from 0 to 1
// List opacity from 0 to 1 and X from 300px

gsap.from("#tooling-title", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#tooling-title",
    start: "top 60%",
  },
});

gsap.from("#tooling-items-div", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#tooling-items-div",
    start: "top 60%",
  },
});

gsap.from("#tooling-items-div", {
  x: 700,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#tooling-items-div",
    start: "top 60%",
  },
});

// ===========================================================================================================================================
// Experience

gsap.from("#exp-title", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#exp-title",
    start: "top 60%",
  },
});

gsap.from("#exp-main-div", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#exp-main-div",
    start: "top 60%",
  },
});

gsap.from("#exp-main-div", {
  x: 700,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#exp-main-div",
    start: "top 60%",
  },
});

// ===========================================================================================================================================
// Services

gsap.from("#service-title", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#service-title",
    start: "top 60%",
  },
});

var serviceChilds = document.querySelectorAll("#services-list")[0];

for (let index = 0; index < serviceChilds.children.length; index++) {
  gsap.from(serviceChilds.children[index], {
    opacity: 0,
    y: 500,
    duration: 1,
    delay: index * 0.2,
    ease: "none",
    scrollTrigger: {
      trigger: "#services-list",
      start: "top 60%",
    },
  });
}

// ===========================================================================================================================================
// Contact

gsap.from("#contact-title", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#service-title",
    start: "top 60%",
  },
});

var contactChilds = document.querySelectorAll("#contact-list")[0];

for (let index = 0; index < contactChilds.children.length; index++) {
  gsap.from(contactChilds.children[index], {
    duration: 0.5,
    autoAlpha: 0,
    ease: "none",
    delay: 0.5,
    scrollTrigger: {
      trigger: "#contact-list",
      start: "top 80%",
    },
  });

  gsap.from(contactChilds.children[index], {
    x: () =>
      window.innerWidth / 2 -
      contactChilds.children[index].offsetLeft -
      contactChilds.children[index].offsetWidth / 2,
    duration: 1,
    // autoAlpha: 0,
    ease: "back.out(1.7)",
    delay: 1,
    scrollTrigger: {
      trigger: "#contact-list",
      start: "top 80%",
    },
  });
}

gsap.from(".contact-text", {
  autoAlpha: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#contact-list",
    start: "top 60%",
  },
});
