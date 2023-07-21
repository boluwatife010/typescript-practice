interface Container {
    value: number | null | undefined;
  }
   
  function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);
                             
  
   
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  }