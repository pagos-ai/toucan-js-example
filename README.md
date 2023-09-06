# Toucan Test Client

To create network tokens and cryptograms, you need an ActionSuite account.

* Actionsuite API keys ClientKey, PrivateKey

## Setup

    npm install

copy `.env.example` to `.env` and populate the keys with your credentials

This example uses typescript v5, node v14, node-fetch and node-forge.

## Environments

Environment | API_HOST | Response cadence
------|------|------
sandbox | https://toucan.sandbox.pagosapi.com | Real time (simulated responses)
prod | https://services.prod.pagosapi.com | Real time

## Tokenize card

Edit `src/token-create.ts` to change card and expiration date

    ts-node --esm src/token-create.js

The returned tokenRefId is used in the next api calls

## Create cryptogram

Use the tokenRefId from previous call

    ts-node --esm src/token-transact.js <tokenRefId>

## Token status

    ts-node --esm src/token-get-status.js <tokenRefId>

## Suspend token

    ts-node --esm src/token-update-status.js <tokenRefId> suspend

## Resume token

    ts-node --esm src/token-update-status.js <tokenRefId> resume

## Delete token

    ts-node --esm src/token-delete.js <tokenRefId> resume