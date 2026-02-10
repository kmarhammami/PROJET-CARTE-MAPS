document.addEventListener("DOMContentLoaded", () => {
  const label = document.getElementById("selectedName");

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");

  const govs = document.querySelectorAll("svg .gov");

  govs.forEach((el) => {
    el.addEventListener("click", () => {
      const name = el.id.replaceAll(" ", "_");


      // texte sous la carte (on le garde)
      label.textContent = "Gouvernorat : " + name;

      // contenu de la fenêtre
      modalTitle.textContent = name;
      modalImg.src = `images/${name}.jpg`;   // ex: images/SILIANA.jpg
      modalImg.alt = name;
      modalDesc.textContent = descriptions[name] || "Description indisponible.";


      // ouvrir la fenêtre
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    });
  });
});
;
// ===== FERMETURE DE LA MODAL =====
const modal = document.getElementById("modal");

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

// clic sur le bouton X
modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close='true']")) {
    closeModal();
  }
});

// touche ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const descriptions = {
  TATAOUINE: "Région saharienne du sud tunisien, Tataouine est connue pour ses paysages désertiques et ses ksour traditionnels. Elle possède un riche patrimoine berbère et une architecture unique. La région est également célèbre pour ses décors de films.",
  KAIROUAN: "Ville historique et spirituelle de la Tunisie, Kairouan est classée au patrimoine mondial de l’UNESCO. Elle est réputée pour la Grande Mosquée et son rôle majeur dans l’histoire islamique. Son artisanat est très apprécié.",
  SILIANA: "Située au nord-ouest, Siliana se distingue par ses reliefs, ses forêts et son agriculture. La région est connue pour la culture des céréales et de l’olivier. Elle offre un cadre naturel calme et authentique.",
  SIDI_BOUZID: "Gouvernorat du centre tunisien à vocation agricole, Sidi Bouzid est un acteur clé dans la production de fruits et légumes. Il occupe une place importante dans l’histoire contemporaine du pays. La région est majoritairement rurale.",
  GAFSA: "Riche en ressources minières, Gafsa est un centre majeur de production de phosphate. Elle possède également des oasis et un patrimoine antique important. La région joue un rôle économique stratégique.",
  TOZEUR: "Célèbre pour ses oasis et son architecture en briques traditionnelles, Tozeur est une destination touristique majeure. Elle est située aux portes du désert du Sahara. Son artisanat est unique.",
  KEBILI: "Gouvernorat saharien connu pour ses vastes oasis et le lac Chott El Jerid. Kébili est une région agricole importante, notamment pour les dattes. Elle offre des paysages désertiques impressionnants.",
  MEDENINE: "Située au sud-est, Médenine est connue pour ses ksour et son héritage berbère. Elle joue un rôle important dans le commerce régional. La région combine tradition et modernité.",
  GABES: "Ville côtière du sud, Gabès possède l’une des rares oasis maritimes au monde. Elle est un pôle industriel et agricole important. Son écosystème est unique en Tunisie.",
  SFAX: "Deuxième pôle économique du pays, Sfax est un centre industriel et commercial majeur. La ville est réputée pour son port et son dynamisme économique. Son patrimoine culturel est riche.",
  SOUSSE: "Ville touristique par excellence, Sousse est connue pour sa médina classée à l’UNESCO. Elle combine histoire, plages et activités modernes. Son économie est tournée vers le tourisme.",
  MONASTIR: "Ville côtière historique, Monastir est célèbre pour son ribat et son rôle culturel. Elle est également un centre universitaire important. Le tourisme y est très développé.",
  MAHDIA: "Ancienne capitale fatimide, Mahdia est une ville paisible au bord de la mer. Elle est connue pour ses plages et sa médina. La pêche est une activité clé.",
  NABEUL: "Située au Cap Bon, Nabeul est réputée pour son artisanat et sa céramique. La région est aussi agricole et touristique. Elle offre un mélange de traditions et de modernité.",
  TUNIS: "Capitale de la Tunisie, Tunis est le centre politique, économique et culturel du pays. Elle abrite une médina classée à l’UNESCO. La ville combine histoire et vie moderne.",
  ARIANA: "Gouvernorat urbain proche de la capitale, Ariana est un centre résidentiel et économique. Elle est connue pour ses espaces verts et ses institutions. Son développement est rapide.",
  BEN_AROUS: "Situé au sud de Tunis, Ben Arous est un pôle industriel important. Il joue un rôle clé dans l’économie nationale. La région est fortement urbanisée.",
  MANNOUBA: "La Manouba est une région agricole et universitaire proche de la capitale. Elle est connue pour ses terres fertiles. Son développement est en pleine croissance.",
  BIZERTE: "Ville portuaire du nord, Bizerte possède un important patrimoine maritime. Elle est connue pour son vieux port et ses plages. La pêche y est très présente.",
  BEJA: "Région agricole majeure, Béja est souvent appelée le grenier de la Tunisie. Elle produit céréales et produits laitiers. Son paysage est verdoyant.",
  JENDOUBA: "Située à l’extrême nord-ouest, Jendouba est riche en forêts et terres agricoles. Elle est proche de sites antiques importants. La région est très verte.",
  ZAGHOUAN: "Zaghouan est connue pour son patrimoine romain et ses montagnes. Elle abrite le temple des eaux. La région est riche en histoire et en nature.",
  KASSERINE: "Gouvernorat montagneux du centre-ouest, Kasserine est marqué par le mont Chaambi. L’agriculture et l’élevage y sont dominants. La région possède un fort potentiel naturel.",
  KEF: "Ville du nord-ouest au riche passé historique, Le Kef est connue pour ses monuments et sa culture. Elle offre un cadre montagneux agréable. Son patrimoine est remarquable."
};

