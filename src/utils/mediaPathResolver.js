/**
 * Résout dynamiquement le chemin d’un fichier dans le dossier `assets/`
 * à partir de son nom, en utilisant `import.meta.glob`.
 *
 * @param {string} source - Nom du fichier (ex. "logo.png").
 * @returns {string|null} Chemin du fichier ou `null` s’il est introuvable.
 */

const images = import.meta.glob('../assets/*', { eager: true });

export const mediaPathResolver = (source) => {
    return images[`../assets/${source}`]?.default || null;
};
