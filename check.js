function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const isOpen = mobileNav.classList.contains('open-menu');

    if (isOpen) {
      mobileNav.classList.remove('open-menu');
      mobileNav.classList.add('closed-menu');
    } else {
      mobileNav.classList.remove('closed-menu');
      mobileNav.classList.add('open-menu');
    }
  }