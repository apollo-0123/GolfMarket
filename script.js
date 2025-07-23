document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      this.classList.add('active');
      // Hide all tab contents
      tabContents.forEach(tc => tc.classList.remove('active'));
      // Show the selected tab content
      const tab = this.getAttribute('data-tab');
      document.querySelector('.tab-content.' + tab).classList.add('active');
    });
  });
}); 