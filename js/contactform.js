// validation controller
const UserVal = (function(){
  const UISelectors = {
    form: '#contact-form',
    firstNameIn: '#first-name',
    lastNameIn: '#last-name',
    emailIn: '#email',
    phoneIn: '#phone',
    msgIn: '#message',
    feedback: '.feedback'
  }

  // Public Methods
  return {
    getSelectors: function() {
      return UISelectors;
    },
    validateLN: function() {
      const firstN = document.querySelector(UISelectors.firstNameIn);
      const re = /^[a-zA-Z]{2,10}$/;

      if(!re.test(firstN.value)) {
        firstN.classList.add('is-invalid');
        UserVal.showAlert('Please fill in name correctly', 'error');
      } else {
        firstN.classList.remove('is-invalid');
      }
    },
    showAlert: function(message, className) {
      // Create div
      const div = document.createElement('div');
      div.className = `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector(UISelectors.feedback);
      // reveal parent
      // container.style.display = 'block';
      // Insert alert
      container.append(div);

      // timeout after 3 sec
      setTimeout(function() {
        document.querySelector('.alert').remove();
      }, 3000);
    }
  }
})();

// database communicate controller
const HTTP = (function() {

})();

// App controller
const App = (function(UserVal, HTTP) {

  // load event listeners
  const loadEventListeners = function() {
    //get UI selectors
    const UISelectors = UserVal.getSelectors();

    // Form Blur Event listeners
    document.querySelector(UISelectors.firstNameIn).addEventListener('blur', UserVal.validateLN);
    document.querySelector(UISelectors.lastNameIn).addEventListener('blur', UserVal.validateFN);
    document.querySelector(UISelectors.emailIn).addEventListener('blur', UserVal.validateEmail);
    document.querySelector(UISelectors.phoneIn).addEventListener('blur', UserVal.validatePhone);
    document.querySelector(UISelectors.msgIn).addEventListener('blur', UserVal.validateMessage);

    // Submit Event listener
    document.querySelector(UISelectors.form).addEventListener('submit', function() {
      const validation = UserVal.validateAll(); //return a bolean

      if(validation = true) {
        HTTP.Post();
      }
    });
  }

  return {
    init: function() {


      loadEventListeners();
    }
  }


})(UserVal, HTTP);

// Initialize app
App.init();