import { observable } from "mobx";

class ListsStores {
    @observable currentPage = 0;

    @observable lists = [
        {
          name: "costco",
          url: "https://cdn.iconscout.com/icon/free/png-256/costco-282448.png",
          items: []
        },
        {
          name: "iga",
          url: "https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_20974_fr_2018_07_04_10_27_42.jpg",
          items: []
        },
        {
          name: "superC",
          url: "https://www.placedeville.com/app/uploads/sites/11/2018/04/SuperC_Web.png",
          items: []
        },
        {
          name: "metro",
          url: "https://www.metro.ca/userfiles/image/publicite/logo-metro.png",
          items: []
        },
        {
          name: "walmart",
          url: "https://cdn.iconscout.com/icon/free/png-256/walmart-282199.png",
          items: []
        },
        {
          name: "maxi",
          url: "https://www.circulaire-en-ligne.ca/wp-content/uploads/Circulaire-en-ligne-Maxi-et-Maxi-Cie.jpg",
          items: []
        },
      ];
}

const listsStores = new ListsStores();
export default listsStores;
