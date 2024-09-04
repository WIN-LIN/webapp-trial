import { NextResponse } from "next/server";
import { imAccount } from "imaccount-sdk/packages/account";
import {
  ACCOUNT_FACTORY_ADDRESS,
  bundler,
  ecdsaValidator,
  ENTRY_FACTORY_ADDRESS,
  ENTRY_POINT_ADDRESS,
  RPC_URL,
  USER_SALT,
  provider,
} from "../../utils/config";
import { parseEther } from "viem";
import { testRole } from "imaccount-sdk/packages/util/test/helper";

export async function GET() {
  try {
    // const account = await imAccount.create({
    //   rpcUrl: RPC_URL,
    //   bundler,
    //   imAccountFactoryAddress: ACCOUNT_FACTORY_ADDRESS,
    //   accountEntryFactoryAddress: ENTRY_FACTORY_ADDRESS,
    //   entryPointAddress: ENTRY_POINT_ADDRESS,
    //   validator: ecdsaValidator,
    //   userSalt: USER_SALT,
    // });
    // console.log("account", account);
    // const entryAddress = account.getSenderAddress();
    // const balance = await provider.getBalance({ address: entryAddress });
    // console.log("before sendingbalance", balance);

    // if (balance < parseEther("0.05")) {
    //   console.log("balance is less than 0.05, sending eth to entry address");
    //   await testRole.wallet.sendTransaction({
    //     to: entryAddress,
    //     value: parseEther("1"),
    //   });
    //   const balance = await provider.getBalance({ address: entryAddress });
    //   console.log("after sending - balance", balance);
    // }
    // const accountAddress = account.getAccountsAddress();
    // console.log("accountAddress", accountAddress);
    // await account.deploy();
    // console.log("isDeployed", account.deployed);

    // alreay deployed
    const entryAddress = "0x7525f637F6A845Cf92e40a1Be79464d008e64A90";
    const account = await imAccount.import({
      rpcUrl: RPC_URL,
      bundler: bundler,
      accountAddresses: ["0x0D2B19fd98d4Ce8599aF482Bb950d36E7869ed0A"],
      entryAddress: "0x7525f637F6A845Cf92e40a1Be79464d008e64A90",
      validator: ecdsaValidator,
      entryPointAddress: ENTRY_POINT_ADDRESS,
    });

    const balance = await provider.getBalance({ address: entryAddress });
    const accountAddress = account.getAccountsAddress();
    return NextResponse.json({
      entryAddress: "0x7525f637F6A845Cf92e40a1Be79464d008e64A90",
      balance: Number(balance), // parse bigint to number
      accountAddress,
      isDeployed: account.deployed,
    });
  } catch (error) {
    console.error("Error creating account", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
