export default function generateUniqueId(): string {
  const currDate = Date.now();
  const randNum = Math.floor(Math.random() * 1000);
  return `id_${currDate}-${randNum}`;
}
