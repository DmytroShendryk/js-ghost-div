input.onblur = function() {
    if (!input.value.includes('@')) { 
      input.classList.add('invalid');
      error.innerHTML = 'Please enter valid email'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  }