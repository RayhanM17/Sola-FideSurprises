// validation controller
const UserVal = (function(){
  const UISelectors = {
    form: '#contact-form',
    firstNameIn: '#first-name',
    lastNameIn: '#last-name',
    emailIn: '#email',
    phoneIn: '#phone',
    msgIn: '#message',
    parent: 'main'
  }

  // Public Methods
  return {
    getSelectors: function() {
      return UISelectors;
    },
    validateFN: function() {
      const firstN = document.querySelector(UISelectors.firstNameIn);
      const re = /^[a-zA-Z]{2,10}$/;

      if(!re.test(firstN.value)) {
        firstN.classList.add('is-invalid');
      } else {
        firstN.classList.remove('is-invalid');
      }
    },
    validateLN: function() {
      const lastN = document.querySelector(UISelectors.lastNameIn);
      const re = /^[a-zA-Z]{2,10}$/;

      if(!re.test(lastN.value)) {
        lastN.classList.add('is-invalid');
      } else {
        lastN.classList.remove('is-invalid');
      }
    },
    validateEmail: function() {
      const email = document.querySelector(UISelectors.emailIn);
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

      if(!re.test(email.value)) {
        email.classList.add('is-invalid');
      } else {
        email.classList.remove('is-invalid');
      }
    },
    validatePhone: function() {
      const phone = document.querySelector(UISelectors.phoneIn);
      const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

      if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
      } else {
        phone.classList.remove('is-invalid');
      }
    },
    validateMessage: function() {
      const msg = document.querySelector(UISelectors.msgIn);
      const re = /^[\S\s/]{1,50}$/;

      if(!re.test(msg.value)) {
        msg.classList.add('is-invalid');
      } else {
        msg.classList.remove('is-invalid');
      }
    },
    validateAll: function() {

      // validate
      this.validateFN();
      this.validateLN();
      this.validateEmail();
      this.validatePhone();
      this.validateMessage();

      //get input
      const inputs = document.querySelectorAll('input');

      // Loop through all inputs
      let count = 0;
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('is-invalid')) {
          count++;
        }
      }
      if (count > 0) {
        UserVal.showAlert('Please fill in all fields correctly', 'error');
      } else {
        return true;
      }
      
    },
    showAlert: function(message, className) {
      // Create div
      const div = document.createElement('div');
      // add class
      div.className = `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const parent = document.querySelector(UISelectors.parent);
      // Get form
      const form = document.querySelector(UISelectors.form);
      // Insert alert
      parent.insertBefore(div, form);

      // timeout after 3 sec
      setTimeout(function() {
        document.querySelector('.alert').remove();
      }, 3000);
    },
    clearFields() {
      document.querySelector(UISelectors.firstNameIn).value = '';
      document.querySelector(UISelectors.lastNameIn).value = '';
      document.querySelector(UISelectors.emailIn).value = '';
      document.querySelector(UISelectors.phoneIn).value = '';
      document.querySelector(UISelectors.msgIn).value = '';
    }
  }
})();

// database communicate controller
const HTTP = (function() {

  // user constructor
  const User = function(firstN, lastN, email, phone, msg) {
    this.firstN = firstN;
    this.lastN = lastN;
    this.email = email;
    this.phone = phone;
    this.msg = msg;
  }

  async function post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  //Public methods
  return {
    DBsubmit: function() {
      //get inputs
      const UISelectors = UserVal.getSelectors(),
            firstN = document.querySelector(UISelectors.firstNameIn).value,
            lastN = document.querySelector(UISelectors.lastNameIn).value,
            email = document.querySelector(UISelectors.emailIn).value,
            phone = document.querySelector(UISelectors.phoneIn).value,
            msg = document.querySelector(UISelectors.msgIn).value,
      // create user obj
            user = new User(firstN, lastN, email, phone, msg);
      
      // post to database
      post('https://jsonplaceholder.typicode.com/users', user)
      .then(() => {
        UserVal.clearFields();
        UserVal.showAlert('User Submitted', 'success');
      })
      .catch(err => console.log(err));
    }
  }
})();

// App controller
const App = (function(UserVal, HTTP) {

  // load event listeners
  const loadEventListeners = function() {
    //get UI selectors
    const UISelectors = UserVal.getSelectors();

    // Form Blur Event listeners
    document.querySelector(UISelectors.firstNameIn).addEventListener('blur', UserVal.validateFN);
    document.querySelector(UISelectors.lastNameIn).addEventListener('blur', UserVal.validateLN);
    document.querySelector(UISelectors.emailIn).addEventListener('blur', UserVal.validateEmail);
    document.querySelector(UISelectors.phoneIn).addEventListener('blur', UserVal.validatePhone);
    document.querySelector(UISelectors.msgIn).addEventListener('blur', UserVal.validateMessage);

    // Submit Event listener
    document.querySelector(UISelectors.form).addEventListener('submit', function(e) {
      const valAll = UserVal.validateAll(); //return a bolean

      if (valAll === true) {
        HTTP.DBsubmit();
      }

      e.preventDefault();
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