// =============================================
//  Form Validation - Experiment 3
//  TY CSE Sem 8
// =============================================

function validateForm() {
  var isValid = true;

  // --- Get values ---
  var name     = document.getElementById("name").value.trim();
  var email    = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var mobile   = document.getElementById("mobile").value.trim();

  // --- Reset previous validation state ---
  clearErrors();

  // --- Validate Name ---
  if (name === "") {
    showError("name", "nameError");
    isValid = false;
  } else {
    showValid("name");
  }

  // --- Validate Email ---
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    showError("email", "emailError");
    isValid = false;
  } else {
    showValid("email");
  }

  // --- Validate Password ---
  if (password.length < 6) {
    showError("password", "passwordError");
    isValid = false;
  } else {
    showValid("password");
  }

  // --- Validate Mobile ---
  var mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    showError("mobile", "mobileError");
    isValid = false;
  } else {
    showValid("mobile");
  }

  // --- Show success or prevent submission ---
  if (isValid) {
    document.getElementById("successMsg").style.display = "block";
  }

  // Return false to prevent actual page reload (demo purposes)
  return false;
}

// Helper: Show error for a field
function showError(fieldId, errorId) {
  var field = document.getElementById(fieldId);
  var errorSpan = document.getElementById(errorId);
  field.classList.add("error-field");
  field.classList.remove("valid-field");
  errorSpan.classList.add("visible");
}

// Helper: Show valid state for a field
function showValid(fieldId) {
  var field = document.getElementById(fieldId);
  field.classList.remove("error-field");
  field.classList.add("valid-field");
}

// Helper: Clear all error states
function clearErrors() {
  var fields = ["name", "email", "password", "mobile"];
  fields.forEach(function(id) {
    var field = document.getElementById(id);
    field.classList.remove("error-field", "valid-field");
  });

  var errors = ["nameError", "emailError", "passwordError", "mobileError"];
  errors.forEach(function(id) {
    document.getElementById(id).classList.remove("visible");
  });

  document.getElementById("successMsg").style.display = "none";
}