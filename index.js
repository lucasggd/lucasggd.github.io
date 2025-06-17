
// Trigger tooling title animation
const observerToolingSection = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const titleEl = document.querySelector('#tooling-title');
        const itemsEl = document.querySelector('#tooling-items-div');

        if (entry.isIntersecting) {

            titleEl.classList.add('tooling-title-animation');
            itemsEl.classList.add('tooling-items-div-animation');
            return;
        }

        titleEl.classList.remove('tooling-title-animation');
        itemsEl.classList.remove('tooling-items-div-animation');
    });
});

observerToolingSection.observe(document.querySelector('#tooling-title'));