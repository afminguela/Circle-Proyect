class GlassButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
        :host {
            display: block;
            position: relative;
            z-index: 1;
            }

        

        .glass-button {
            position: fixed;
            top:450px;
            right:10px;
            display: flex;
            gap: 1.2rem;
            padding: 0.5rem 1rem;
            border-radius: 2.5rem;
            background:rgba(255, 255, 255, 0.15);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.14);
            transition: all 0.3s ease;
            animation: float 6s ease-in-out infinite;
            cursor: pointer;
            }

        .glass-button img{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            object-fit: cover;
    
            }

        @media (min-width:380px) AND (max-width:770px){
            
        .glass-button{
            top:750px;
            right:20px;
            padding: 1rem 1.5rem;

            }
        .glass-button img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            object-fit: cover;
    
            }
            }

        @media (min-width:771px){
            
        .glass-button{
            top:800px;
            right:100px;
            padding: 1rem 1.5rem;

            }
        .glass-button img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
    
            }
            
            }

        .glass-button span {
            object-fit:
            font-size: 0.2rem;
            color: black;
            opacity: 0.75;
            transition: transform 0.3s ease, opacity 0.3s ease;
            }
        .

        .glass-button span:hover {
            transform: scale(1.2);
            opacity: 1;
            }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50%      { transform: translateY(-10px); }
            }
        </style>

        <div class="glass-button" part="button">
            <span title="up"><img src="./media/up-arrow-svgrepo-com.svg" alt="up Arrow"></span>
        
            
        </div>
        `;
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector(".glass-button");
        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
}

customElements.define("uppy-button", GlassButton);
