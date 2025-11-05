// src/routes/coursRoutes.js
const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/cours', async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ error: "Utilisateur non authentifié" });
      }
  
      // Récupérer d'abord l'identifiant de l'étudiant à partir de l'ID utilisateur
      const etudiant = await database.getEtudiantParUserId(userId);
      if (!etudiant) {
        return res.status(404).json({ error: "Étudiant non trouvé" });
      }
  
      // Utiliser l'ID de l'étudiant pour récupérer ses cours
      const cours = await database.getCoursUtilisateur(etudiant.id_etudiant);
      res.json(cours);
    } catch (error) {
      console.error("Erreur lors de la récupération des cours :", error);
      res.status(500).json({ error: "Erreur interne du serveur." });
    }
  });

module.exports = router;