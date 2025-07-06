const newsletterTemplate = document.createElement("template");

newsletterTemplate.innerHTML = `
      <style>
        .newsletter{
        display:flex;
        flex-direction:column;
color: var(--Neutral-dark);
background-color: var(--Secondary-2);


}
        .input-email {
          background-image: url("./media/newsletter/icon/mail.svg");

          background-repeat: no-repeat;

          background-position: 15px center;

          padding-left: 50px;

          width: 100%;
          height: 48px;
          box-sizing: border-box;
        }
       
            .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
        
      </style>
      
  <section class="newsletter">
      <h3>Do you have any questions?</h3>
      <p>Let us help you!</p>

      <form class="formulario-suscripcion" action="/subscribe" method="post">
        <div class="campo-email">
          <label for="email" class="sr-only">Your mail here</label>

          <input
            type="email"
            id="email"
            name="email"
            class="input-email"
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" class="btn">Suscribirse</button>
      </form>

    </section>
`;

class NewsletterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = newsletterTemplate.innerHTML;
    }
}

customElements.define('newsletter-component', NewsletterComponent);
