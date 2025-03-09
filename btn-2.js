document.querySelectorAll('.btn-2').forEach(element => {
    element.addEventListener('click', function() {
      action1((value) => value+1)
      action2((value) => value-1)
    });
  });

  
  