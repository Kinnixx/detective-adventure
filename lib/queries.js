import supabase from "./supabase";

/**
 * Récupère toutes les scènes.
 * @returns {Promise<Object[]>} - Tableau d'objets (les scènes) ou un tableau vide en cas d'erreur.
 */
export const fetchScenes = async () => {
    const { data, error } = await supabase.from("scenes").select("*");

    if(error) {
        console.error("Erreur lors de la récupération des scènes :", error);
        return [];
    }

    return data;
};

/**
 * Récupère une scène par son ID.
 * @param {number} id - ID de la scène à récupérer.
 * @returns {Promise<Object|null>} - Objet (la scène) ou null en cas d’erreur.
 */
export const fetchSceneById = async (id) => {
    const { data, error } = await supabase.from("scenes").select("*").eq('id', id).single();

    if(error) {
        console.error("Erreur lors de la récupération de la scène :", error);
        return null;
    }

    return data;
}

/**
 * Récupère une scène par son ID et tous ses choix associés
 * @param {number} id - ID de la scène à récupérer.
 * @returns {Promise<Object|null>} - Objet (la scène) ou null en cas d’erreur. 
 */
export const fetchFullScene = async (id) => {
    const { data, error } = await supabase.from("scenes").select("*, choices:choices_scene_id_fkey(*)").eq("id",id).single();

    if(error) {
        console.error("Erreur lors de la récupération de la scène :", error);
        return null;
    }

    return data;    
}