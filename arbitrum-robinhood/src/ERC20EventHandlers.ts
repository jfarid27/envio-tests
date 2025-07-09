import { ERC20, ERC20_Transfer } from "generated";

ERC20.Transfer.handler(async ({ event, context }) => {
  const entity: ERC20_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    sourceAddress: event.srcAddress,
    value: event.params.value,
    timestamp: new Date(event.block.timestamp * 1000),
    blockNumber: event.block.number,
    logIndex: event.logIndex,
    chainId: event.chainId,
    transactionHash: event.transaction.hash
  };

  context.ERC20_Transfer.set(entity);
}, { wildcard: true , eventFilters: { from: '0xE066A4eE4815d285949BB826A0B0229eac0192AD'}});


// https://arbiscan.io/address/0xcbdf630a858e7d87b5b08d92968ca14ca0f8f556