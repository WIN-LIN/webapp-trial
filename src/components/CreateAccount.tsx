"use client";

import { useState } from "react";

export const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    entryAddress: string;
    balance: bigint;
    accountAddress: string;
    isDeployed: boolean;
  } | null>(null);

  const handleCreateAccount = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8787/api", {
        method: "GET",
      });
      console.log("handleCreateAccount response", response);
      const data = await response.json();
      if (response.ok) {
        setResult(data);
        console.log("Account created", data);
      } else {
        throw new Error(data.error || "Failed to create account");
      }
    } catch (error) {
      console.error("Error creating account", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {result ? (
        <div>
          <p>Entry Address: {result.entryAddress}</p>
          <p>Balance: {result.balance}</p>
          <p>Account Address: {result.accountAddress}</p>
          <p>Is Deployed: {result.isDeployed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <button onClick={handleCreateAccount} disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Account"}
        </button>
      )}
    </div>
  );
};
