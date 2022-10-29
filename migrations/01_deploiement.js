const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async (deployer) => {
  await deployer.deploy(SimpleStorage,7);
  var instance = await SimpleStorage.deployed();
  console.log(await instance.get());
};