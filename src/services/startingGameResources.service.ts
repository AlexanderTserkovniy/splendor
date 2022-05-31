export type ResourcesType = {
  tokens: {
    goldJokerTokens: Number;
    emeraldTokens: Number;
    diamondTokens: Number;
    sapphireTokens: Number;
    onyxTokens: Number;
    rubyTokens: Number;
  },
  nobleTiles: Number;
};

type StartingGameResourcesType = {
  4: ResourcesType;
  3: ResourcesType;
  2: ResourcesType;
};

const startingGameResources: StartingGameResourcesType = {
  4: {
    tokens: {
      goldJokerTokens: 5,
      emeraldTokens: 7,
      diamondTokens: 7,
      sapphireTokens: 7,
      onyxTokens: 7,
      rubyTokens: 7,
    },
    nobleTiles: 5,
  },
  3: {
    tokens: {
      goldJokerTokens: 5,
      emeraldTokens: 5,
      diamondTokens: 5,
      sapphireTokens: 5,
      onyxTokens: 5,
      rubyTokens: 5,
    },
    nobleTiles: 4,
  },
  2: {
    tokens: {
      goldJokerTokens: 5,
      emeraldTokens: 4,
      diamondTokens: 4,
      sapphireTokens: 4,
      onyxTokens: 4,
      rubyTokens: 4,
    },
    nobleTiles: 3,
  },
};

class startingGameResourcesService {
  readonly #amountOfPlayers: Number;
  readonly #resources: ResourcesType;

  constructor(amountOfPlayers: Number) {
    this.#amountOfPlayers = amountOfPlayers;

    // calculate base resources
    // @ts-ignore
    this.#resources = startingGameResources[this.#amountOfPlayers];
  }

  get () {
    return this.#resources;
  }

}

export default startingGameResourcesService;