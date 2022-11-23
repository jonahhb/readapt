export type StorageKeys = string | string[] | { [key: string]: unknown } | null
export type StorageItems = { [key: string]: unknown }

export interface Storage {
  get(keys?: StorageKeys): Promise<StorageItems>
  set(items: StorageItems): Promise<void>
}
