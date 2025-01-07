import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publickey = new PublicKey("Ge4S6P9a5a16zRqBY353Mem7YY1i25Y4RY7Zte7KLYWv");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publickey);

const balanceInSOL = balanceInLamports/LAMPORTS_PER_SOL;


console.log(
    `💰 Finished! The balance for the wallet at address ${publickey} is ${balanceInSOL}!`,
  );