Feature: Effectuer une recherche de bien

  Background: Accéder au site web
    Given Un utilisateur se connecte à la page d'accueil
    Then  La Home Page est bien affichée
    And   Le Logo Fonica est bien affiché 
    And   Le texte Foncia, 1er syndic et 1er loueur de France est bien affiché
  Scenario: Louer un appartement avec des critères spécifiques
    When Il choisit l'option Louer comme type de projet
    And  Il choisit l'option Appartement comme type de biens
    And  Il choisit le Prix Max suivant
         | PrixMax|
         | 1500   |
    And  Il choisit Paris comme Ville
    And  Il clique sur le button Rechercher
    Then La recherche est réalisée avec succès
    And  Inclure une capture d'écran à la fin de la recherche dans le rapport