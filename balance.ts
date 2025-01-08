import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publickey = new PublicKey("EZNUa7F7HuP7u7Xa4EaQ7XGnSqwqFRGbU3Tdn2o2LNfp");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publickey);

const balanceInSOL = balanceInLamports/LAMPORTS_PER_SOL;


console.log(
    `💰 Finished! The balance for the wallet at address ${publickey} is ${balanceInSOL}!`,
  );