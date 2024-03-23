// Write your solution here!
  let cats = ["Milo", "Otis", "Garfield"];
  
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat() {
    cats.unshift(name);
  }
  function destructivelyRemoveFirstCat() {
    cats.pop();
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
  }
  function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
  }
  function removeLastCat() {
    letnewCats = cats.slice(0, -1);
    return newCats;
  }
  function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
  }


