const newsletterTemplate = document.createElement("template");

newsletterTemplate.innerHTML = `
    <style>
    .newsletter{
        display:flex;
        flex-direction:column;
        color: var(--Neutral-dark);
        background-color: var(--Secondary-2);
        margin:20px;
        padding:20px;

}
    .newsletter h2, h3{
        background-color:transparent;
    }    

    .form-email{
    background:transparent;
    display:flex;
    flex-direction:column;
    
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

    .input-email:hover{
    border:1px solid black;
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

    .btn-news{

    }
    @media (min-width: 761px){
    
    .form-email{
    flex-direction:row;
    align-items:baseline;
    gap:20px;
    justify-items: space-between;
    width:60%
    }

    .input-email{
     width:200%;
    }
    
    }

    </style>
    
<section class="newsletter">
    <h2>Do you have any questions?</h2> <br>
    <h3>Let us help you!</h3>

    <form class="form-email" action="/subscribe" method="post">
        
            <label for="email" class="sr-only">Your mail here</label>

            <input
                type="email"
                id="email"
                name="email"
                class="input-email"
                placeholder="Enter your email"
                required
            />
  

        <button type="submit" class="btn btn-news" data-href="../contact.html" >Suscribirse</button>
    </form>

    </section>
`;

class NewsletterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = newsletterTemplate.innerHTML;
    }

    connectedCallback() {
        const button = this.querySelector('.btn-news');
        const href = button.getAttribute('data-href');
        
        if (button && href) {
            button.addEventListener('click', (e) => {
                e.preventDefault(); 
                window.location.href = href; 
            });
        }
    }
}

customElements.define('newsletter-component', NewsletterComponent);
