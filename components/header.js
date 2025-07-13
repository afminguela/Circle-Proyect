const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<style> 
.header {
  display: flex;
  width: 100%;
  justify-content: space-between; 
  align-items: center; 
  gap: 20px;
  margin-top:30px
}

.header li {
  font-family: "Roboto";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  list-style: none;
}

.header a {
  text-decoration: none;
  color: var(--Primary-default);
}

.header a:hover {
  text-decoration: underline;
}

.logo {
  z-index: 101;
}


.nav-toggle {
  display: none;
}

.nav {
  display: flex;
  z-index: 100;
}

.nav ul {
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0;
  padding: 0;
}

.btn {
  display: block;
  margin-left: auto; 
}

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  display: none; 
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index:102;
 
}

.nav-toggle-label span {
  background-color: var(--Neutral-dark);
  height: 2px;
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  transition: var(--transition-normal);
  border-radius: 1px;
  
}

.nav-toggle-label span:nth-child(1) {
  top: 0.4rem;
  border-radius: 1px;
}
.nav-toggle-label span:nth-child(2) {
  top: 0.9rem;
  border-radius: 1px;
}
.nav-toggle-label span:nth-child(3) {
  top: 1.4rem;
  border-radius: 1px;
}

.nav-toggle:checked + .nav-toggle-label span:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}
.nav-toggle:checked + .nav-toggle-label span:nth-child(2) {
  opacity: 0;
}
.nav-toggle:checked + .nav-toggle-label span:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}

@media (max-width: 760px) {
  .header {
    padding: 0px 15px 0px 15px; 
    position: relative; 
    justify-content: space-between;
  }

.logo {
    order: 1;
    flex-shrink: 0;
  }
  .btn-header {
    order: 3; 
    display: none; 
  }

  .nav-toggle-label {
    display: block !important;
    margin-left: auto;
    order: 2;
    
  }
 
  .nav {
    display: none;
    background-color: white;
    position: absolute;
    top: 100%; 
    right: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-top: 2px solid var(--White);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  #nav-toggle:checked ~ .nav {
    display: block !important;
  }

  .nav ul {
    flex-direction: column;
    gap: 1rem;
  }
 
  .nav li a {
    width: 100%;
    display: block;
    text-align: center;
    padding: 0.5rem 0;
  }

    .btn-header2 {
    display: block;
    margin-top: 1rem;
    width: 100%;
  }

}

@media (min-width: 761px) {
  .header {
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 0px;
  }

  .nav-toggle-label {
    display: none !important;
  }
  
  .nav {
    display: flex !important; 
    position: static;
    width: auto;
    padding: 0;
    border-top: none;
  }
  
  .nav ul {
    display: flex; 
    align-items: center;
    gap: 60px;
  }

  .btn {
    display: block;
  }
    .btn-header2{
    display:none
  }
}

</style>

<header class="header">

<div class="logo">
<img src="./media/logos/circle.svg" alt="Circle's Logo" onclick="window.location.href='./index.html'">
</div>
<input aria-label="burger menu" type="checkbox" id="nav-toggle" aria-label="Toggle navigation menu" class="nav-toggle" />
<label for="nav-toggle" class="nav-toggle-label" aria-label="Open navigation menu" >
<span ></span>
<span ></span>
<span ></span>
</label>
<nav class="nav">
<ul aria-label="Menu">
<li>
<a href="../index.html">Home</a>
</li>
<li>
<a href="../project.html?id=1">Projects</a>
</li>
<li>
<a href="../index.html#services-section">Services</a>
</li>
<button class="btn btn-header2" type="button" data-href="../contact.html"> Contact Us</button>
</ul>
</nav>

<button class="btn btn-header" type="button" data-href="../contact.html"> Contact Us</button>

</header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerTemplate.innerHTML;
  }

  connectedCallback() {
    const checkbox = this.querySelector("#nav-toggle");
    const navLinks = this.querySelectorAll(".nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        checkbox.checked = false;
      });
    });

    const button1 = this.querySelector(".btn-header");
    const button2 = this.querySelector(".btn-header2");

    if (button1) {
      const href1 = button1.getAttribute("data-href");
      if (href1) {
        button1.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = href1;
        });
      }
    }

    if (button2) {
      const href2 = button2.getAttribute("data-href");
      if (href2) {
        button2.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = href2;
        });
      }
    }
  }
}
customElements.define("header-component", HeaderComponent);
