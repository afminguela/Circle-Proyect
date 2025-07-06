const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<style> 
.header {
  display: flex;
  width: 100%;
  padding: 70px 170px 0px 70px;
  justify-content: space-between; 
  align-items: baseline; 
  gap: 20px;
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

.nav-toggle-label {
  display: none; 
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: relative;
}

.nav-toggle-label span {
  background-color: var(--Neutral-medium);
  height: 2px;
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  transition: var(--transition-normal);
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
    padding: 20px 15px 0px 15px; 
    position: relative; 
    justify-content: space-between;
  }
.logo {
    order: 1; 
  }
  .btn-header {
    order: 3; 
    display: none; 
  }

  .nav-toggle-label {
    display: block;
    margin-left: auto;
    order: 2;
    margin-left: auto;
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
    border-top: 2px solid #ccc;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  #nav-toggle:checked ~ .nav {
    display: block;
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
}

@media (min-width: 761px) {
  .header {
    padding: 70px 170px 0px 170.645px; 
  }

  .nav-toggle-label {
    display: none;
  }
  
  .nav {
    display: flex; 
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
}

</style>

<header class="header">

<div class="logo">
<img src="./media/logos/circle.svg" alt="Circle's Logo">
</div>
<input aria-label="burger menu" type="checkbox" id="nav-toggle" class="nav-toggle" />
<label for="nav-toggle" class="nav-toggle-label">
<span></span>
<span></span>
<span></span>
</label>
<nav class="nav">
<ul aria-label="Menu" class="">
<li>
<a href="#">Home</a>
</li>
<li>
<a href="#">Projects</a>
</li>
<li>
<a href="#">Services</a>
</li>

</ul>
</nav>

<button class="btn btn-header" type="button"> Contact Us</button>

</header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerTemplate.innerHTML;
  }

  connectedCallback() {
    const checkbox = this.querySelector("#nav-toggle");
    const label = this.querySelector(".nav-toggle-label");
    const navLinks = this.querySelectorAll(".nav a");

    if (label && checkbox) {
      label.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        checkbox.checked = false;
      });
    });
  }
}
customElements.define("header-component", HeaderComponent);
