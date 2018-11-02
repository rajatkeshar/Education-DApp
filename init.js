module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1000, 'domain.register')
  app.registerContract(1001, 'domain.set_ip')

  app.registerContract(1002, 'test.test');

  app.registerContract(2000, 'education.registerResults');

  //console.log("app: ", app);
  console.log("app.contract: ", app.contract);
  //console.log("app.register: ", app.contract.domain.register);

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}