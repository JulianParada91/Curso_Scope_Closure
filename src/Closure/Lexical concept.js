const myGlobal = 0;


function myFunction () {
  const myNumber = 1;
  console.log(myGlobal);

  function parent () { // Function Interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child () {
      console.log(myGlobal, myNumber, inner);
    }

    return child();
  }

  return parent();
}

myFunction();