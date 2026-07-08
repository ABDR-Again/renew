const landingPagePath = '/';
const countdownElement = document.getElementById('redirectCountdown');
let secondsRemaining = 5;

const renderCountdown = () => {
  const unit = secondsRemaining === 1 ? 'second' : 'seconds';
  countdownElement.textContent = `Returning to the main page in ${secondsRemaining} ${unit}.`;
};

renderCountdown();

const redirectTimer = window.setInterval(() => {
  secondsRemaining -= 1;

  if (secondsRemaining <= 0) {
    window.clearInterval(redirectTimer);
    window.location.replace(landingPagePath);
    return;
  }

  renderCountdown();
}, 1000);

window.addEventListener('pagehide', () => window.clearInterval(redirectTimer), { once: true });
