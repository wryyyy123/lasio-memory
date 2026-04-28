const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const contactTrigger = document.querySelector(".contact-trigger");
const contactPanel = document.querySelector(".contact-panel");
const panelClose = document.querySelector(".panel-close");
const panelBackdrop = document.querySelector(".panel-backdrop");
const root = document.documentElement;
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(pointer: fine)");
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const projectItems = [...document.querySelectorAll(".project-item")];
const cursor = document.querySelector(".cursor-shell");
const navCurrent = document.querySelector(".nav-current");
const interactiveSelector = [
  "a",
  "button",
  ".nav-dock",
  ".project-item",
  ".stack-board article",
  ".quick-stats article",
  ".system-card",
  ".contact-block"
].join(",");

let cursorTargetX = -80;
let cursorTargetY = -80;
let cursorRenderX = -80;
let cursorRenderY = -80;
let scrollTicking = false;
let pendingRevealTargets = [];
const sectionLabels = {
  top: ["首页", "00"],
  about: ["简介", "01"],
  stack: ["技术栈", "02"],
  evidence: ["证据", "03"],
  projects: ["项目", "04"],
  contact: ["联系", "05"]
};

function closeMenu() {
  header?.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function openContactPanel() {
  contactPanel?.classList.add("is-open");
  contactPanel?.setAttribute("aria-hidden", "false");
  contactTrigger?.setAttribute("aria-expanded", "true");
  if (panelBackdrop) panelBackdrop.hidden = false;
}

function closeContactPanel() {
  contactPanel?.classList.remove("is-open");
  contactPanel?.setAttribute("aria-hidden", "true");
  contactTrigger?.setAttribute("aria-expanded", "false");
  if (panelBackdrop) panelBackdrop.hidden = true;
}

menuToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("menu-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeMenu();

    window.scrollTo({
      top: Math.max(0, target.offsetTop - 12),
      behavior: reduceMotionQuery.matches ? "auto" : "smooth"
    });
  });
});

contactTrigger?.addEventListener("click", () => {
  if (contactPanel?.classList.contains("is-open")) {
    closeContactPanel();
  } else {
    openContactPanel();
  }
});

panelClose?.addEventListener("click", closeContactPanel);
panelBackdrop?.addEventListener("click", closeContactPanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeContactPanel();
  }
});

function updateActiveSection(scrollY) {
  let activeId = sections[0]?.id;
  const activationLine = scrollY + window.innerHeight * 0.42;

  sections.forEach((section) => {
    if (section.offsetTop <= activationLine) {
      activeId = section.id;
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (activeId === "contact") {
    contactTrigger?.setAttribute("aria-current", "true");
  } else {
    contactTrigger?.removeAttribute("aria-current");
  }

  const [label, index] = sectionLabels[activeId] ?? sectionLabels.top;
  const currentLabel = navCurrent?.querySelector("span");
  const currentIndex = navCurrent?.querySelector("small");
  if (currentLabel) currentLabel.textContent = label;
  if (currentIndex) currentIndex.textContent = index;
}

function updateScrollState(scrollY) {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  root.style.setProperty("--scroll-progress", progress.toFixed(4));
  updateActiveSection(scrollY);
  updateRevealVisibility();
}

function updateRevealVisibility() {
  if (reduceMotionQuery.matches || pendingRevealTargets.length === 0) return;

  pendingRevealTargets = pendingRevealTargets.filter((element) => {
    const bounds = element.getBoundingClientRect();
    const isVisible = bounds.top < window.innerHeight * 0.9 && bounds.bottom > window.innerHeight * -0.15;

    if (isVisible) {
      element.classList.add("is-visible");
      return false;
    }

    return true;
  });
}

function setupRevealMotion() {
  const targets = [
    ".hero-copy",
    ".system-card",
    ".quick-stats article",
    ".section h2",
    ".body-copy",
    ".stack-board article",
    ".timeline-item",
    ".project-item",
    ".contact-block"
  ];

  const motionTargets = [...document.querySelectorAll(targets.join(","))];
  pendingRevealTargets = [...motionTargets];

  motionTargets.forEach((element) => {
    element.classList.add("motion-target");
  });

  projectItems.forEach((item, index) => {
    item.style.setProperty("--stack-index", index);
  });

  if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
    motionTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          pendingRevealTargets = pendingRevealTargets.filter((element) => element !== entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14
    }
  );

  motionTargets.forEach((element) => observer.observe(element));
  updateRevealVisibility();
}

function runCursorFrame() {
  cursorRenderX += (cursorTargetX - cursorRenderX) * 0.22;
  cursorRenderY += (cursorTargetY - cursorRenderY) * 0.22;
  root.style.setProperty("--cursor-x", `${cursorRenderX.toFixed(2)}px`);
  root.style.setProperty("--cursor-y", `${cursorRenderY.toFixed(2)}px`);
  requestAnimationFrame(runCursorFrame);
}

function setupCursor() {
  if (!cursor || reduceMotionQuery.matches || !finePointerQuery.matches) return;

  root.classList.add("cursor-ready");
  runCursorFrame();

  window.addEventListener("pointermove", (event) => {
    cursorTargetX = event.clientX;
    cursorTargetY = event.clientY;
    cursor.classList.remove("is-hidden");
    cursor.classList.toggle("is-hovering", Boolean(event.target.closest(interactiveSelector)));
  });

  window.addEventListener("pointerdown", () => {
    cursor.classList.add("is-pressing");
  });

  window.addEventListener("pointerup", () => {
    cursor.classList.remove("is-pressing");
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.add("is-hidden");
  });
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;

    scrollTicking = true;
    requestAnimationFrame(() => {
      updateScrollState(window.scrollY);
      scrollTicking = false;
    });
  },
  { passive: true }
);

setupRevealMotion();
updateScrollState(window.scrollY);
setupCursor();
