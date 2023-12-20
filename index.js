// Function to change navigation style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'blue';
    } else {
      header.style.backgroundColor = 'green';
    }
  });
  
  // Add hover effect for menu items
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      item.style.backgroundColor = 'aqua';
      item.style.color = 'black';
    });
  
    item.addEventListener('mouseout', function() {
      item.style.backgroundColor = 'transparent';
      item.style.color = '#fff';
    });
  });
  