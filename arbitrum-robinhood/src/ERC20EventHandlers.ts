import { ERC20, ERC20_Transfer } from "generated";

ERC20.Transfer.handler(async ({ event, context }) => {
  const entity: ERC20_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    timestamp: new Date(event.block.timestamp * 1000),
    blockNumber: event.block.number,
    logIndex: event.logIndex,
    chainId: event.chainId,
    transactionHash: event.transaction.hash
  };

  context.ERC20_Transfer.set(entity);
}); 

ERC20.Initialize.handler(async ({ event, context }) => {
  const entity: ERC20_Initialize = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    address: event.params.name,
    timestamp: new Date(event.block.timestamp * 1000),
    symbol: event.params.symbol,
    decimals: event.params.decimals,
  };
}, { wildcard: true , eventFilters: { from: '0xcBdF630A858E7D87B5b08d92968cA14cA0F8f556'}});

// https://arbiscan.io/address/0xcbdf630a858e7d87b5b08d92968ca14ca0f8f556