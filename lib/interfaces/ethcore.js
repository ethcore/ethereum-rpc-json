import { Address, Data, Quantity } from '../types';

export default {
  acceptNonReservedPeers: {
    desc: 'Accept non-reserved peers (default behavior).',
    params: [],
    returns: {
      type: Boolean,
      desc: 'Success.'
    }
  },

  addReservedPeer: {
    desc: 'Add reserved peer.',
    params: [
      {
        type: String,
        desc: 'Enode'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'True if added successfully.'
    }
  },

  defaultExtraData: {
    desc: 'Returns the default extra data',
    params: [],
    returns: {
      type: Data,
      desc: 'Extra data'
    }
  },

  devLogs: {
    desc: 'Returns latest logs of your node',
    params: [],
    returns: {
      type: Array,
      desc: 'Development logs'
    }
  },

  devLogsLevels: {
    desc: 'Returns current log level settings',
    params: [],
    returns: {
      type: String,
      decs: 'Current log level'
    }
  },

  dropNonReservedPeers: {
    desc: 'Drop all non-reserved peers.',
    params: [],
    returns: {
      type: Boolean,
      desc: 'Dropped successfully.'
    }
  },

  extraData: {
    desc: 'Returns currently set extra data',
    params: [],
    returns: {
      type: Data,
      desc: 'Extra data'
    }
  },

  gasFloorTarget: {
    desc: 'Returns current target for gas floor',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Gas Floor Target',
      format: 'outputBigNumberFormatter'
    }
  },

  minGasPrice: {
    desc: 'Returns currently set minimal gas price',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Minimal Gas Price',
      format: 'outputBigNumberFormatter'
    }
  },

  netChain: {
    desc: 'Returns the name of the connected chain.',
    params: [],
    returns: {
      type: String,
      desc: 'chain name'
    }
  },

  netMaxPeers: {
    desc: 'Returns maximal number of peers.',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Maximal number of peers'
    }
  },

  netPort: {
    desc: 'Returns network port the node is listening on.',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Port Number'
    }
  },

  nodeName: {
    desc: 'Returns node name (identity).',
    params: [],
    returns: {
      type: String,
      desc: 'Node name'
    }
  },

  removeReservedPeer: {
    desc: 'Remove a reserved peer.',
    params: [
      {
        type: String,
        desc: 'Enode'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'Successfully removed.'
    }
  },

  rpcSettings: {
    desc: 'Returns basic settings of rpc (enabled, port, interface).',
    params: [],
    returns: {
      type: Object,
      desc: 'JSON object containing rpc settings'
    }
  },

  setAuthor: {
    desc: 'Changes author (coinbase) for mined blocks.',
    params: [
      {
        type: Address,
        desc: '20 Bytes - Address',
        format: 'inputAddressFormatter'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'Successfully changed the author.'
    }
  },

  setExtraData: {
    desc: 'Changes extra data for newly mined blocks.',
    params: [
      {
        type: Data,
        desc: 'Extra Data',
        format: 'utils.toHex'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'Successfully changed extra data.'
    }
  },

  setGasFloorTarget: {
    desc: 'Changes current gas floor target.',
    params: [
      {
        type: Quantity,
        desc: 'Gas Floor Target',
        format: 'utils.toHex'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'whether the call was successful'
    }
  },

  setMinGasPrice: {
    desc: 'Changes minimal gas price for transaction to be accepted to the queue.',
    params: [
      {
        type: Quantity,
        desc: 'Minimal gas price',
        format: 'utils.toHex'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'whether the call was successful'
    }
  },

  setTransactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [
      {
        type: Quantity,
        desc: 'New Limit',
        format: 'utils.toHex'
      }
    ],
    returns: {
      type: Boolean,
      desc: 'whether the call was successful'
    }
  },

  transactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Current max number of transactions in queue',
      format: 'outputBigNumberFormatter'
    }
  },

  unsignedTransactionsCount: {
    desc: 'Returns number of unsigned transactions when running with Trusted Signer. Error otherwise.',
    params: [],
    returns: {
      type: Quantity,
      desc: 'Number of unsigned transactions.'
    }
  },

  generateSecretPhrase: {
    desc: 'Returns a cryptographically random phrase sufficient for securely seeding a secret key.',
    params: [],
    returns: {
      type: String,
      desc: 'Secret phrase.'
    }
  },

  phraseToAddress: {
    desc: 'Returns whatever address would be derived from the given phrase if it were to seed a brainwallet.',
    params: [
      {
        type: String,
        desc: 'Brain-wallet phrase.'
      }
    ],
    returns: {
      type: Address,
      desc: 'Corresponding address.'
    }
  },

  startNetwork: {
    desc: 'Start the network.',
    params: [],
    returns: {
      type: Boolean,
      desc: 'Started successfully.'
    }
  },

  stopNetwork: {
    desc: 'Stop the network.',
    params: [],
    returns: {
      type: Boolean,
      desc: 'Stopped successfully.'
    }
  },

  netPeers: {
    desc: 'Returns peers details.',
    params: [],
    returns: {
      type: Object,
      desc: 'Information about connected peers.'
    }
  },

  gasPriceStatistics: {
    desc: 'Returns distribution of gas price in latest blocks.',
    params: [],
    returns: {
      type: Array,
      desc: 'Octile distribution of recent transaction gas prices; first element is the minimum, middle is the median and last is the maximum.'
    }
  },

  registryAddress: {
    desc: 'Returns the value of the registrar for this network.',
    params: [],
    returns: {
      type: Address,
      desc: 'Address of the registry or null if none.'
    }
  },

  listAccounts: {
    desc: 'Returns all addresses if Fat DB is enabled (`--fat-db`), or null if not.',
    params: [],
    returns: {
      type: Array,
      desc: 'Array of all addresses.'
    }
  },

  listStorageKeys: {
    desc: 'Returns all storage keys of the given address if Fat DB is enabled (`--fat-db`), or null if not.',
    params: [
      {
        type: Address,
        desc: 'Address which keys should be returned.'
      }
    ],
    returns: {
      type: Array,
      desc: 'Array of all keys.'
    }
  },

  encryptMessage: {
    desc: 'Encrypt some data with a public key under ECIES.',
    params: [
      {
        type: Data,
        desc: '512-byte public key to encrypt with.'
      },
      {
        type: Data,
        desc: 'Message to be encrypted.'
      }
    ],
    returns: {
      type: Data,
      desc: 'Encrypted message.'
    }
  },

  pendingTransactions: {
    desc: 'Returns all pending transactions from transaction queue.',
    params: [],
    returns: {
      type: Array,
      desc: 'Array of transactions.'
    }
  },

  hashContent: {
    desc: 'Hash a file content under given URL.',
    params: [],
    returns: {
      type: Array,
      desc: 'Array of transactions.'
    }
  }
};
