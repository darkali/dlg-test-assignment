<script>
  // Show/hide the back to top button based on scroll position
  window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTopBtn');
    if (window.scrollY > 100) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
</script>