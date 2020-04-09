export class DataFetcher {
  map = {}

  get(location) {
    if (this.map[location]) {
      return this.map[location]
    }

    let fetcher = this.map[location] = fetch(location)
      .then(r => r.json())

    return fetcher
  }
}

export const fetcher = new DataFetcher()
