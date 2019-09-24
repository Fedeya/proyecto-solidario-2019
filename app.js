document.addEventListener('DOMContentLoaded', () => {
  const collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible, {});
  const sidenavItem = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavItem, {});
});

