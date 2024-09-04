import { ethers } from "ethers";
import {
  BundlerMode,
  BundlerProvider,
} from "imaccount-sdk/packages/bundler/provider";

import { WebAuthnValidator } from "imaccount-sdk/packages/module/validator/webAuthnValidator";
import { ECDSAValidator } from "imaccount-sdk/packages/module/validator/ecdsaValidator";
import { getPublicClient } from "imaccount-sdk/packages/provider";

// Local testnet
const RPC_URL = "http://localhost:8545";
const BUNDLER_URL = "http://localhost:3000";
const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const ENTRY_POINT_ADDRESS = "0x8464135c8f25da09e49bc8782676a84730c318bc";
const ECDSA_VALIDATOR_ADDRESS = "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F";
const WEB_AUTHN_VALIDATOR_ADDRESS =
  "0x59f2f1fcfe2474fd5f0b9ba1e73ca90b143eb8d0";
const ACCOUNT_FACTORY_ADDRESS = "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e";
const ENTRY_FACTORY_ADDRESS = "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508";
const USER_SALT = 12345n;

export const provider = getPublicClient(RPC_URL);

export const bundler = new BundlerProvider({
  url: BUNDLER_URL,
  entryPoint: ENTRY_POINT_ADDRESS,
  mode: BundlerMode.Manual,
});

export const ecdsaValidator = new ECDSAValidator({
  rpcUrl: RPC_URL,
  address: ECDSA_VALIDATOR_ADDRESS,
  owner: new ethers.Wallet(PRIVATE_KEY),
});

// const webAuthnValidator = new WebAuthnValidator({
//   rpcUrl: RPC_URL,
//   address: WEB_AUTHN_VALIDATOR_ADDRESS,
//   owner: WebAuthnValidatorOwner,
//   x: 0n,
//   y: 0n,
//   authenticatorRpidHash: "",
//   credentialId: "",
// });8

export {
  RPC_URL,
  BUNDLER_URL,
  PRIVATE_KEY,
  ENTRY_POINT_ADDRESS,
  ECDSA_VALIDATOR_ADDRESS,
  WEB_AUTHN_VALIDATOR_ADDRESS,
  ACCOUNT_FACTORY_ADDRESS,
  ENTRY_FACTORY_ADDRESS,
  USER_SALT,
};
