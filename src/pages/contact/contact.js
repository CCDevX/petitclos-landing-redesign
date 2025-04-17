import "./contact.scss";
import { showModal } from "../../common/JavaScript/helper/modal-helper";

const gdprCheckbox = document.querySelector("#gdpr");
gdprCheckbox.setCustomValidity(
  "Veuillez accepter la politique de confidentialité pour continuer."
);

document.querySelector("#open-policy").addEventListener("click", (e) => {
  e.preventDefault();
  showModal("rgpd-modal");
});
