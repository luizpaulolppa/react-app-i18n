export function onlyCnpjNumbers(value: string): string {
  return value
    .replace(".", "")
    .replace(".", "")
    .replace("/", "")
    .replace("-", "");
}