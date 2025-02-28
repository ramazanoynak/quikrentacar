import { useState, useEffect } from 'react';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showAdjustModal, setShowAdjustModal] = useState(false);

  useEffect(() => {
    // Check localStorage or cookie to see if user has already made a choice
    const userChoice = localStorage.getItem('cookie-consent-choice');
    if (!userChoice) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-choice', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent-choice', 'rejected');
    setShowBanner(false);
  };

  const handleAdjust = () => {
    setShowAdjustModal(true);
  };

  const handleCloseAdjust = () => {
    setShowAdjustModal(false);
    // If you want, store partial preferences here:
    // localStorage.setItem('cookie-consent-choice', 'adjusted');
    // or keep it undone until the user finalizes their preferences.
  };

  // If the user has already consented or rejected, no banner is shown
  if (!showBanner) return null;

  return (
    <>
      {/* BANNER SLIDING UP FROM THE BOTTOM */}
      <div style={{ 
        ...styles.bannerContainer, 
        transform: showBanner ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s ease-in-out',
      }}>
        <div style={styles.bannerContent}>
          <p style={styles.text}>
            We use cookies to improve your experience on our platform. By clicking 
            <strong> Accept</strong>, you consent to our use of cookies. 
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.buttonAccept} onClick={handleAccept}>
              Accept
            </button>
            <button style={styles.buttonReject} onClick={handleReject}>
              Reject
            </button>
            <button style={styles.buttonAdjust} onClick={handleAdjust}>
              Adjust
            </button>
          </div>
        </div>
      </div>

      {/* ADJUST OVERLAY/MODAL */}
      {showAdjustModal && (
        <AdjustModal onClose={handleCloseAdjust} />
      )}
    </>
  );
}

// A simple modal overlay for adjusting cookie preferences
function AdjustModal({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Adjust Your Cookie Preferences</h2>
        <p>
          Enable or disable specific cookies here (analytics, marketing, etc.).
        </p>
        {/* Example checkboxes */}
        <div style={styles.formRow}>
          <input id="analytics" type="checkbox" defaultChecked />
          <label htmlFor="analytics">Analytics Cookies</label>
        </div>
        <div style={styles.formRow}>
          <input id="marketing" type="checkbox" />
          <label htmlFor="marketing">Marketing Cookies</label>
        </div>
        <button style={styles.buttonAccept} onClick={onClose}>
          Save Preferences
        </button>
      </div>
    </div>
  );
}

const styles = {
  // The banner that slides up from the bottom
  bannerContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#111',
    color: '#fff',
    padding: '1rem',
    boxSizing: 'border-box',
    zIndex: 9999,
    // Start off-screen. We'll slide it up via transform.
    transform: 'translateY(100%)',
  },
  bannerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    margin: '0 0 0.5rem 0',
    flex: 1,
  },
  buttonContainer: {
    display: 'flex',
    gap: '0.5rem',
  },
  buttonAccept: {
    backgroundColor: '#0F9D58',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonReject: {
    backgroundColor: '#DB4437',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonAdjust: {
    backgroundColor: '#4285F4',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  // Adjust Modal overlay
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '1.5rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '450px',
    textAlign: 'center',
  },
  formRow: {
    textAlign: 'left',
    margin: '0.5rem 0',
  },
};
