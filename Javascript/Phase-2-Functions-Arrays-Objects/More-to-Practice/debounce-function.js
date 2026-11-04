function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };


}

  function search(value){
      console.log("Searching:", value);
  }


let goodSearch = debounce(search, 500);

goodSearch("o");
goodSearch("op");
goodSearch("opt");
goodSearch("opti");
goodSearch("optim");
goodSearch("optimi");
goodSearch("optimiz");
goodSearch("optimize");
goodSearch("optimized");
goodSearch("optimizeds");
goodSearch("optimizedse");
goodSearch("optimizedsea");
goodSearch("optimizedsear");
goodSearch("optimizedsearc");
goodSearch("optimizedsearch");