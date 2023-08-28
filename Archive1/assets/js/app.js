const listGame = document.querySelectorAll('.portfolio-item .portfolio-item-caption');
listGame.forEach(game => {
    game.addEventListener('click', () => {
        const modal = document.querySelector('#portfolioModal1');
        const imageAlt = game.parentNode.querySelector('img').getAttribute('alt');
        const modalTitle = modal.querySelector('.portfolio-modal-title');
        modalTitle.textContent = imageAlt;
        modal.style.top = '35%';
        modal.style.opacity = '1';
        modal.style.display = 'block';
        modal.style.overflow = 'initial';
        document.querySelector('#flou').style.filter = 'blur(5px)';
    });
});


function closeModal() {
  const modal = document.querySelector('#portfolioModal1');
  modal.style.display = 'none';
  document.querySelector('#flou').style.filter = 'none';
}

const closeModalBtn = document.querySelector('.close');
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}





 // Fonction pour remplacer le contenu de la balise <p> avec l'attribut data-description
 function remplacerContenuDesBalisesP() {
  const elementP = document.querySelector('p[data-description]');
  if (elementP) {
    const description = elementP.getAttribute('data-description');
    const nouveauContenu = "Nouveau contenu pour " + description;
    elementP.textContent = nouveauContenu;
  }
}

// Appeler la fonction pour remplacer le contenu de la balise <p>
remplacerContenuDesBalisesP();


// const listGame = document.querySelectorAll('.portfolio-item .portfolio-item-caption');
// listGame.forEach(game => {
//     game.addEventListener('click', () => {
//         const modal = document.querySelector('#portfolioModal1');
//         const imageAlt = game.parentNode.querySelector('img').getAttribute('alt');
//         const modalTitle = modal.querySelector('.portfolio-modal-title');
//         const modalDescription = modal.querySelector('.modal-body p');
//         modalTitle.textContent = imageAlt;
//         modalDescription.textContent = game.getAttribute('data-description'); // Correction ici
//         modal.style.top = '35%';
//         modal.style.opacity = '1';
//         modal.style.display = 'block';
//         modal.style.overflow = 'initial';
//         document.querySelector('#flou').style.filter = 'blur(5px)';
//     });
// });

// function closeModal() {
//   const modal = document.querySelector('#portfolioModal1');
//   modal.style.display = 'none';
//   document.querySelector('#flou').style.filter = 'none';
// }

// const closeModalBtns = document.querySelectorAll('.close');
// closeModalBtns.forEach(btn => {
//   btn.addEventListener('click', closeModal);
// });






// const listGame = document.querySelectorAll('.portfolio-item .portfolio-item-caption');

// listGame.forEach(game => {
//   game.addEventListener('click', () => {
//     const modal = document.querySelector('#portfolioModal1');
//     const imageAlt = game.parentNode.querySelector('img').getAttribute('alt');
//     const modalTitle = modal.querySelector('.portfolio-modal-title');
//     const modalDescription = modal.querySelector('.modal-description');

//     modalTitle.textContent = imageAlt;
//     modalDescription.textContent = game.dataset.description;

//     modal.style.top = '35%';
//     modal.style.opacity = '1';
//     modal.style.display = 'block';
//     modal.style.overflow = 'initial';
//     document.querySelector('#flou').style.filter = 'blur(5px)';
//   });
// });

// function closeModal() {
//   const modal = document.querySelector('#portfolioModal1');
//   modal.style.display = 'none';
//   document.querySelector('#flou').style.filter = 'none';
// }

// const closeModalBtns = document.querySelectorAll('.close, [data-dismiss="modal"]');
// closeModalBtns.forEach(btn => {
//   btn.addEventListener('click', closeModal);
// });








// // Sélectionnez tous les éléments du portfolio
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// // Parcourez chaque élément du portfolio
// portfolioItems.forEach(item => {
//   // Ajoutez un écouteur d'événement au clic sur chaque élément
//   item.addEventListener('click', () => {
//     // Récupérez l'image de l'élément cliqué
//     const image = item.querySelector('img');
    
//     // Appliquez le flou à l'ensemble de la page
//     document.body.style.filter = 'blur(20px)';
    
//     // Créez un élément de popup
//     const popup = document.createElement('div');
//     popup.classList.add('popup');
    
//     // Ajoutez l'image au popup
//     popup.appendChild(image.cloneNode(true));
    
//     // Ajoutez le popup à la page
//     document.body.appendChild(popup);
    
//     // Ajoutez un écouteur d'événement au clic sur le popup
//     popup.addEventListener('click', () => {
//       // Rétablissez la position initiale de l'image
//       image.style.filter = 'none';
      
//       // Supprimez le popup de la page
//       document.body.removeChild(popup);
      
//       // Rétablissez le flou de l'ensemble de la page
//       document.body.style.filter = 'none';
//     });
//   });
// });




// // Sélectionnez tous les éléments du portfolio
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// // Parcourez chaque élément du portfolio
// portfolioItems.forEach(item => {
//   // Ajoutez un écouteur d'événement au clic sur chaque élément
//   item.addEventListener('click', () => {
//     // Récupérez l'image de l'élément cliqué
//     const image = item.querySelector('img');
    
//     // Appliquez le flou à l'ensemble de la page
//     document.body.style.filter = 'blur(20px)';
    
//     // Créez un élément de popup
//     const popup = document.createElement('div');
//     popup.classList.add('popup');
    
//     // Ajoutez l'image au popup
//     popup.appendChild(image.cloneNode(true));
    
//     // Ajoutez le popup à la page
//     document.body.appendChild(popup);
    
//     // Ajoutez un écouteur d'événement au clic sur le popup
//     popup.addEventListener('click', () => {
//       // Rétablissez la position initiale de l'image
//       image.style.filter = 'none';
      
//       // Supprimez le popup de la page
//       document.body.removeChild(popup);
      
//       // Rétablissez le flou de l'ensemble de la page
//       document.body.style.filter = 'none';
//     });
//   });
// });

// derniere version


// const listGame = document.querySelectorAll('.portfolio-item .portfolio-item-caption');
// listGame.forEach(game => {
//   game.addEventListener('click', () => {
//     const modal = document.querySelector('#portfolioModal1');
//     const imageAlt = game.parentNode.querySelector('img').getAttribute('alt');
//     const modalTitle = modal.querySelector('.portfolio-modal-title');
//     const modalDescription = modal.querySelector('.modal-body p');
//     modalTitle.textContent = imageAlt;
//     modalDescription.textContent = game.dataset.description;
//     modal.style.top = '35%';
//     modal.style.opacity = '1';
//     modal.style.display = 'block';
//     modal.style.overflow = 'initial';
//     document.querySelector('#flou').style.filter = 'blur(5px)';
//   });
// });

// function closeModal() {
//   const modal = document.querySelector('#portfolioModal1');
//   modal.style.display = 'none';
//   document.querySelector('#flou').style.filter = 'none';
// }

// const closeModalBtns = document.querySelectorAll('.close');
// closeModalBtns.forEach(btn => {
//   btn.addEventListener('click', closeModal);
// });