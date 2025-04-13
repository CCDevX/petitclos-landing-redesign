import "./home.scss";

const initHomePage = () => {
  const logoUrl = new URL("../../assets/img/logo.png", import.meta.url).href;
  const localUrl = new URL("../../assets/img/espace_priv.jpg", import.meta.url)
    .href;
  const groceryUrl = new URL(
    "../../assets/img/epicerie_fine.jpg",
    import.meta.url
  ).href;
  const terraceUrl = new URL("../../assets/img/terrasse.jpg", import.meta.url)
    .href;
  const imgLogo = document.querySelector("#logo-home-page");
  const imgLocal = document.querySelector("#local");
  const imgGrocery = document.querySelector("#grocery");
  const imgTerrace = document.querySelector("#terrace");
  imgLogo.src = logoUrl;
  imgLocal.src = localUrl;
  imgGrocery.src = groceryUrl;
  imgTerrace.src = terraceUrl;
};

export { initHomePage };
