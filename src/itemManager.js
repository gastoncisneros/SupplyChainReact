import ItemManagerContract from "../build/contracts/ItemManager.json";
import contract from "truffle-contract";

export default async(provider) => {
    const itemManager = contract(ItemManagerContract);
    itemManager.setProvider(provider);

    let instance = await itemManager.deployed();
    return instance;
}
