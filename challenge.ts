import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// check if the public is correct

function isValidPublicKey(publicKeyString: string): boolean {
    try {
      new PublicKey(publicKeyString); // If this works, it's valid. it validates the format and length
      return true;
    } catch {
      return false; // If it throws an error, it's invalid
    }
  }

  console.log(isValidPublicKey("Ge4S6P9a5a16zRqBY353Mem7YY1i25Y4RY7Zte7KLYWv") ? "Valid public key" : "Invalid public key");

// modify the code to connect to mainet
const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

console.log("Connection established with mainnet", connection.rpcEndpoint);