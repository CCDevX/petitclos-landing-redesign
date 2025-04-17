// Select DOM elements for the modal container and overlay
const modalContainer = document.querySelector("#modal-container");
const modalOverlay = document.querySelector("#modal-overlay");

/**
 * Dynamically loads and displays a modal window based on the given type.
 * @param {string} modalType - The name of the modal file (without .html extension).
 */
const showModal = async (modalType) => {
  try {
    // Fetch the modal HTML content from the appropriate file
    const response = await fetch(
      `./pages/modals/${modalType}/${modalType}.html`
    );

    console.log(response.text);

    // If the response is not successful, throw an error
    if (!response.ok) throw new Error("Modal not found");

    // Inject the fetched HTML into the modal container
    modalContainer.innerHTML = await response.text();

    // Display the modal container and overlay
    modalContainer.classList.add("active");
    modalOverlay.classList.add("active");

    // Allow closing the modal by clicking outside of it (on the overlay)
    modalOverlay.addEventListener("click", hideModal);
    const closeModalButton = modalContainer.querySelector("#close-modal");
    if (closeModalButton) {
      closeModalButton.addEventListener("click", (e) => {
        e.preventDefault();
        hideModal();
      });
    } else {
      console.log("Bouton de fermeture non trouvé dans le HTML chargé.");
    }

    try {
      const module = await import(`@pages/modals/${modalType}/${modalType}.js`);
      return module;
    } catch (error) {
      console.error(`Erreur de chargement de ${modalType}:`, error);
    }
  } catch (error) {
    // Log any error that occurred while loading the modal
    console.error("Error loading modal:", error);
    throw error;
  }
};

/**
 * Hides the modal and clears its content from the DOM.
 */
const hideModal = () => {
  modalContainer.innerHTML = ""; // Remove modal content
  modalContainer.classList.remove("active");
  modalOverlay.classList.remove("active");
};

export { showModal, hideModal };
