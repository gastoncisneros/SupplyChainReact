const ItemManager = artifacts.require('ItemManager');

let instance;

beforeEach(async () => {
    //Despliega en la red un nuevo smart contract para cada test
    instance = await ItemManager.new();
});

//Truffle nos proporciona las cuentas disponibles en la red, nos ahorra el web3.eth.getaccounts
contract('ItemManager', accounts => {
    it('should have not any Item created', async() => {
        let items = await instance.totalItems();
        assert(items <= 0);
    });
});