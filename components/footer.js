const footerTemplate = document.createElement('template');

footerTemplate.innerHTML =`
<style> 


.footer {
    margin-bottom: 50px;
    margin-block-start:80px;
}

.footer p,
.footer a {
    color: var(--Neutral-medium);
    font-weight: normal;
}

.footer-Left p {
    margin: 20px 0;
}

.footer-Right {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 17px;
    list-style: none;
}

.footer-Right li {
    margin: 20px 0;
}

.footer-Right a:hover {
    color: var(--Primary-default);
    text-decoration: underline;
}

.footer-Left--logo {
    text-align: center;
}



@media (min-width: 768px) {
    .footer {
    
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .footer-Left--logo {
        margin-bottom: 20px;
    }

    .footer p {
        text-align: left;
    }

    .footer-Left p {
        margin: 30px 0;
    }

    .footer-Left {
        text-align: left;
    }

    .footer-Right {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .footer-Right li {
        flex: 0 32%;
        height: 60px;
        margin-bottom: 2%;
        /* (100-32*3)/2 */
    }
}
        



</style>

<footer class="footer">

<div class="footer-Left">
<div class="footer-Left--logo">
<img src="./media/logos/circle.svg" alt="Circle's Logo">
</div>
<address>
<p>2972 Westheimer Rd. Santa Ana, <br>
Illinois 85486</p>
</address>
</div>


<ul aria-label="Menu" class="footer-Right">
<li>
<a href="#">Team</a>
</li>
<li>
<a href="#">Services</a>
</li>
<li>
<a href="#">About Us</a>
</li>
<li>
<a href="#">Press</a>
</li>
<li>
<a href="#">Projects</a>
</li>
<li>
<a href="#">Privacy Policy</a>
</li>

</ul>




</footer>
`;

class FooterComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = footerTemplate.innerHTML;
    }
}






customElements.define('footer-component',FooterComponent);