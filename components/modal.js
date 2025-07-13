class ModalComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.previousFocus = null;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .modal-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          position: relative;
          max-height: 80vh;
          overflow-y: auto;
        }
        
        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
        }
        
        .close-button:hover,
        .close-button:focus {
          background: #f0f0f0;
          outline: 2px solid #072AC8;
        }
        
        .modal-title {
          margin-top: 0;
          color: #292E47;
        }
        
        .modal-description {
          margin-bottom: 1.5rem;
          color: #6B708D;
        }
      </style>
      
      <div 
        class="modal-overlay" 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div class="modal-content">
          <button class="close-button" aria-label="Cerrar modal">×</button>
          <h2 id="modal-title" class="modal-title">¡Mensaje enviado!</h2>
          <p id="modal-description" class="modal-description">
            Gracias por contactarnos. Te responderemos pronto.
          </p>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    const closeButton = this.shadowRoot.querySelector('.close-button');
    
    // Cerrar con botón X
    closeButton.addEventListener('click', () => this.hideModal());
    
    // Cerrar con clic fuera del modal
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.hideModal();
      }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.hideModal();
      }
    });
  }

  showModal() {
    this.previousFocus = document.activeElement;
    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    
    overlay.style.display = 'flex';
    document.body.classList.add('modal-open');
    this.isOpen = true;
    
    // Enfocar botón de cerrar
    setTimeout(() => {
      const closeButton = this.shadowRoot.querySelector('.close-button');
      closeButton.focus();
    }, 100);
    
    this.trapFocus();
  }

  hideModal() {
    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    
    overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.isOpen = false;
    
    // Restaurar foco
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
  }

  trapFocus() {
    const focusableElements = this.shadowRoot.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    
    // Solo añadir listener si modal está abierto
    if (this.isOpen) {
      document.addEventListener('keydown', handleTabKey);
      
      // Limpiar listener cuando se cierre
      const originalHideModal = this.hideModal.bind(this);
      this.hideModal = () => {
        document.removeEventListener('keydown', handleTabKey);
        originalHideModal();
      };
    }
  }
}

customElements.define('modal-component', ModalComponent);