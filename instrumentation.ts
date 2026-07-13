export async function register() {
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    const store: Record<string, string> = {};
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      writable: true,
      value: {
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => {
          store[key] = value;
        },
        removeItem: (key: string) => {
          delete store[key];
        },
        clear: () => {
          Object.keys(store).forEach((k) => delete store[k]);
        },
        key: (index: number) => Object.keys(store)[index] ?? null,
        get length() {
          return Object.keys(store).length;
        },
      },
    });
  }
}
