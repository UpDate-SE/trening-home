export const importAll = (location: Record<string, any>): any[] => {
    return location.keys().map(location);
}