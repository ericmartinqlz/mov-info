class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            nav{
                background: linear-gradient(to right, #FF0091,#ff2f7b);
                box-shadow: 0px 2px 6px black;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                z-index: 1 !important;
            }
            nav .navbar-brand{
                font-family: 'Baloo Da 2', cursive;
                font-weight: 400;
                font-size: 18pt;
            }
            nav .navbar-brand span{
                font-weight: 700;
            }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">Mov<span>Info</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Beranda<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define('app-bar', AppBar);