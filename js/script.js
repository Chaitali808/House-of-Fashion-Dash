// ===============================
// Global JavaScript – House of Fashion Admin
// Theme: Black & Gold
// ===============================

// Toggle Sidebar Collapse
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
  document.getElementById('topbar').classList.toggle('collapsed');
  document.getElementById('mainContent').classList.toggle('collapsed');
}

// Toggle Sidebar Submenus (Slide Open/Close)
function toggleSubMenu(el) {
  el.classList.toggle('active');
  const submenu = el.nextElementSibling;
  submenu.classList.toggle('show');
}

// Search Filter (Matches Sidebar Items by Text)
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.topbar input[type="text"]');
  const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();

      sidebarLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const parentDropdown = link.closest('.dropdown');

        if (text.includes(query)) {
          link.style.display = 'flex';
          if (parentDropdown) parentDropdown.style.display = 'block';
        } else {
          link.style.display = 'none';
          if (parentDropdown && parentDropdown.querySelectorAll('.nav-link:visible').length === 0) {
            parentDropdown.style.display = 'none';
          }
        }
      });
    });
  }

});

 // Notification dropdown
  const notifIcon = document.querySelector('#notifToggle');
  const notifDropdown = document.querySelector('#notifDropdown');

  if (notifIcon && notifDropdown) {
    notifIcon.addEventListener('click', (e) => {
      notifDropdown.classList.toggle('show');
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      if (!notifIcon.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.classList.remove('show');
      }
    });
  }

  // Profile dropdown
  const profileIcon = document.querySelector('#profileToggle');
  const profileDropdown = document.querySelector('#profileDropdown');

  if (profileIcon && profileDropdown) {
    profileIcon.addEventListener('click', (e) => {
      profileDropdown.classList.toggle('show');
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove('show');
      }
    });
  }
