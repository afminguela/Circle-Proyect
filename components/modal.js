class Modal extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
       
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: modalSlideIn 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

@keyframes modalSlideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  background-color: #2E57F0; /* Azul como en la imagen */
  color: white;
  padding: 15px 25px;
  text-align: center;
  position: relative;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.modal-body {
  background-color: #E8EEFF; /* Azul claro como en la imagen */
  padding: 40px 25px;
  text-align: center;
}

.modal-body h3 {
  margin: 0;
  color: #2E57F0; /* Azul oscuro para el texto */
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.4;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;
  background: none;
  border: none;
  padding: 5px;
}

.close:hover {
  color: #ddd;
  transform: scale(1.1);
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .modal-content {
    width: 95%;
    margin: 20px;
  }
  
  .modal-header {
    padding: 12px 20px;
  }
  
  .modal-header h2 {
    font-size: 1.1rem;
  }
  
  .modal-body {
    padding: 30px 20px;
  }
  
  .modal-body h3 {
    font-size: 1.1rem;
  }
}

</style>

<div id="modal" class="modal hidden">
  <div class="modal-content">
    <span class="close">×</span>
    <div class="modal-header">
      <h2>Circle Agency</h2>
    </div>
    <div class="modal-body">
      <h3>Thank you! Your form has been sent successfully!!</h3>
    </div>
  </div>
</div>
`;


}
connectedCallback() {
        const closeButton = this.shadowRoot.querySelector(".close");
        const modal = this.shadowRoot.querySelector("#modal");
        
        
        closeButton.addEventListener("click", () => {
            this.hideModal();
        });
        
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                this.hideModal();
            }
        });
    }

    showModal() {
        const modal = this.shadowRoot.querySelector("#modal");
        modal.classList.remove("hidden");
    }

    hideModal() {
        const modal = this.shadowRoot.querySelector("#modal");
        modal.classList.add("hidden");
    }
}

customElements.define("modal-component",Modal);