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

      @observable deliveries =    {
          costco: [
            {
              name: "Jean",
              itemNb: 1,
              distance: 56,
            },
            {
              name: "Frank",
              itemNb: 5,
              distance: 4,
            },
            {
              name: "Audrey",
              itemNb: 4,
              distance: 1,
            },
            {
              name: "Labine",
              itemNb: 7,
              distance: 9,
            },
            {
              name: "Laurence",
              itemNb: 9,
              distance: 69,
            },
            {
              name: "Mehdi",
              itemNb: 3,
              distance: 18,
            },
          ],
        iga: [
          {
            name: "Jean",
            itemNb: 13,
            distance: 56,
          },
          {
            name: "Mehdi",
            itemNb: 5,
            distance: 18,
          },
        ],

        maxi: [
          {
            name: "Jean",
            itemNb: 3,
            distance: 56,
          },
          {
            name: "Labine",
            itemNb: 5,
            distance: 9,
          },
          {
            name: "Laurence",
            itemNb: 7,
            distance: 69,
          },
        ],

        walmart: [
           {
              name: "Jean",
              itemNb: 1,
              distance: 56,
            },
            {
              name: "Frank",
              itemNb: 5,
              distance: 4,
            },
            {
              name: "Audrey",
              itemNb: 4,
              distance: 1,
            },
            {
              name: "Labine",
              itemNb: 7,
              distance: 9,
            },
            {
              name: "Laurence",
              itemNb: 9,
              distance: 69,
            },
            {
              name: "Mehdi",
              itemNb: 3,
              distance: 18,
            },
        ],

        superC: [
          {
            name: "Frank",
            itemNb: 6,
            distance: 4,
          },
          {
            name: "Audrey",
            itemNb: 4,
            distance: 1,
          },
          {
            name: "Labine",
            itemNb: 7,
            distance: 9,
          },
          {
            name: "Laurence",
            itemNb: 2,
            distance: 69,
          },
        ],

        metro: [
          {
            name: "Labine",
            itemNb: 2,
            distance: 9,
          },
          {
            name: "Laurence",
            itemNb: 1,
            distance: 69,
          },
          {
            name: "Mehdi",
            itemNb: 4,
            distance: 18,
          },
          
        ],
        

      }
}

const listsStores = new ListsStores();
export default listsStores;
