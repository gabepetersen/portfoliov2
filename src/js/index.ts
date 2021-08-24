import NewComponent from './NewComponent';

(function () {
  const nc = new NewComponent();
  for (var i = 0; i < 6; i++) {
    nc.incNumber();
  }

  const nc2 = new NewComponent();
  console.log("\n---\nLet's see if it is static\n---\n");
  nc2.incNumber();
  
}());
