document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('.article__share-button');
  const shareWrapper = document.querySelector('.article__share-wrapper');

  if (shareButton && shareWrapper) {
    shareButton.addEventListener('click', (event) => {
      event.preventDefault();
      shareWrapper.classList.toggle('display-none');
    });

    // Close share wrapper when clicking outside
    document.addEventListener('click', (event) => {
      if (
        !shareWrapper.contains(event.target) &&
        !shareButton.contains(event.target)
      ) {
        shareWrapper.classList.add('display-none');
      }
    });

    // Ensure touch support for mobile
    document.addEventListener('touchstart', (event) => {
      if (
        !shareWrapper.contains(event.target) &&
        !shareButton.contains(event.target)
      ) {
        shareWrapper.classList.add('display-none');
      }
    });
  } else {
    console.error('Share button or wrapper not found');
  }
});
