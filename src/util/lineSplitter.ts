export function splitLines(text: string): string[] {
    return text.split(/\n+/g).filter(x => x);
}

export function smartSplit(text: string): string[] {
    return text.split(/(?:\n+|([^\n]{60,}?[^\n\.][\.\!\?\;\-])\s\n*)/g).filter(x => x); // This regex is a mess, needs annotation
}