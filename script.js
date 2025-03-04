document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('.article__share-button');
  const shareWrapper = document.querySelector('.article__share-wrapper');
  const mobileAuthorWrapper = document.querySelector(
    '.article__button-group-wrapper'
  );
  const mobileSharingWrapper = document.querySelector('.article__share-mobile');
  const activeShareBtn = document.querySelector('.active');

  function isMobile() {
    return window.innerWidth <= 768;
  }

  if (
    shareButton &&
    shareWrapper &&
    mobileAuthorWrapper &&
    mobileSharingWrapper
  ) {
    shareButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (isMobile()) {
        mobileAuthorWrapper.style.display = 'none';
        mobileSharingWrapper.style.display = 'flex';
      } else {
        shareWrapper.classList.toggle('display-none');
      }
    });

    // Desktop/Tablet: Close share wrapper when clicking outside
    document.addEventListener('click', (event) => {
      if (
        !isMobile() &&
        !shareWrapper.contains(event.target) &&
        !shareButton.contains(event.target)
      ) {
        shareWrapper.classList.add('display-none');
      }
    });

    // Mobile: Close sharing wrapper and show author wrapper
    if (activeShareBtn) {
      activeShareBtn.addEventListener('click', function () {
        if (isMobile()) {
          mobileAuthorWrapper.style.display = 'flex';
          mobileSharingWrapper.style.display = 'none';
        }
      });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (isMobile()) {
        shareWrapper.classList.add('display-none');
        mobileAuthorWrapper.style.display = 'flex';
        mobileSharingWrapper.style.display = 'none';
      } else {
        mobileAuthorWrapper.style.display = '';
        mobileSharingWrapper.style.display = '';
        shareWrapper.classList.add('display-none');
      }
    });
  } else {
    console.error('Required elements not found');
  }
});
