function convertirMontant(montant, taux) {
    if (taux <= 0 || montant < 0) throw new Error('Taux ou montant invalide');
    return montant * taux;
}  
  
module.exports = convertirMontant;
  