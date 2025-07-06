const headerTemplate = document.createElement('template');

headerTemplate.innerHTML =`
<style> 
.header {
  display: flex;
  width: 100%;
  padding: 70px 170px 0px 170.645px;
  justify-content: space-evenly;
  align-items: baseline;
  gap: 20px;

}

.header li {
  /* Web/Headline/Medium */
  font-family: "Roboto";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 22.1px */
  list-style: none;
}

.header a {
  text-decoration: none;
  color:var(--Primary-default);
}
.header a:hover {
  text-decoration: underline;
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

<button class="btn" type="button"> Contact Us</button>

</header>
`;

class HeaderComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = headerTemplate.innerHTML;
    }




connectedCallback(){
    const checkbox = this.shadowRoot.querySelector('#nav-toggle');
    const label = this.shadowRoot.querySelector('.nav-toggle-label');
if (label && checkbox) {
    label.addEventListener('click',()=> {checkbox.checked = !checkbox.checked;});
}}
}


customElements.define('header-component',HeaderComponent)