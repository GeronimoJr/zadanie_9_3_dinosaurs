var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var upperDinosaur = dinosaur.toUpperCase();
var textChange = text.replace('Velociraptor', upperDinosaur);
console.log(textChange.slice(1, 72));