class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // Card Left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = `By ${this.getAttribute("autor") || `Anonymous`}`;

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute('content');

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // Card Right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute('photo') || "./assets/img/default-image.jpg";
    newsImage.alt = this.getAttribute('photo-alt');
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .card {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 9px 9px 27px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 9px 9px 27px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 9px 9px 27px rgba(0, 0, 0, 0.75);
        margin-top: 30px;
        margin-left: 20px
      }
      
      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }
      
      .card__left > span {
        font-weight: 400;
      }
      
      .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        color: #000;
        text-decoration: none;
        font-weight: bold;
      }
      
      .card__left > p {
        color: #464646;
      }
    `;
      
    return style;
  }
}

customElements.define("card-news", CardNews);
