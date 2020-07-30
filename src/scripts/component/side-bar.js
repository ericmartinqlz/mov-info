class SideBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            side-bar{
                margin-left: -10px;
                width: auto;
            }
            side-bar hr{
                border-top: 1px solid rgba(255, 255, 255, 0.35);
            }
            
            side-bar ul{
                list-style: none;
                padding-left: 0;
            }
            
            side-bar .nav-link {
                color: rgba(255, 255, 255, 0.7);
            }
            side-bar .nav-link:hover{
                color: white;
            }
            
            side-bar ul .nav-item .nav-link {
                display: block;
                width: 100%;
                text-align: left;
                padding: 1rem;
                width: 14rem;
            }
            side-bar ul .nav-item .nav-link i {
                margin-right: 0.25rem;
            }
            
            side-bar .nav-item .collapse .collapse-inner .collapse-item,
            side-bar .nav-item .collapsing .collapse-inner .collapse-item {
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            display: block;
            color: #3a3b45;
            text-decoration: none;
            border-radius: 0.35rem;
            white-space: nowrap;
            }
            
            side-bar .nav-item .collapse .collapse-inner .collapse-item:hover,
            side-bar .nav-item .collapsing .collapse-inner .collapse-item:hover {
            background-color: #eaecf4;
            }
            
            side-bar .nav-item .collapse .collapse-inner .collapse-item:active,
            side-bar .nav-item .collapsing .collapse-inner .collapse-item:active {
            background-color: #dddfeb;
            }
            
            .bg-gradient-primary {
                background: linear-gradient(180deg, #FF0091 10%, #ff508a 100%);
                background-size: cover;
                color:white;
            }

            @media screen and (max-width: 767px) {
                side-bar{
                    margin-left: 0px;
                    margin-top: 30px;
                    padding-bottom: 20px;
                    border-radius: 10px;
                }
            }
        </style>
            <h5 class="text-center mt-4">Sortir Berdasarkan<hr></h5>
            <ul id="bagian1">
                <li class="nav-item">
                    <a class="nav-link collapsed" id="kepala1" href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-images"></i>
                        <span>Kategori</span>
                    </a>
                    <div id="collapse1" class="collapse" aria-labelledby="kepala1" data-parent="#bagian1">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <a class="collapse-item" href="#">Sub-Kategori - 1</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 2</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 3</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 4</a>
                        </div>
                    </div>
                </li>

                <hr>

                <li class="nav-item">
                    <a class="nav-link collapsed" id="kepala2" href="#" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-book-open"></i>
                        <span>Kategori</span>
                    </a>
                    <div id="collapse2" class="collapse" aria-labelledby="kepala2" data-parent="#bagian1">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <a class="collapse-item" href="#">Sub-Kategori - 1</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 2</a> 
                            <a class="collapse-item" href="#">Sub-Kategori - 3</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 4</a> 
                            <a class="collapse-item" href="#">Sub-Kategori - 5</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 6</a> 
                            <a class="collapse-item" href="#">Sub-Kategori - 7</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 8</a> 
                            <a class="collapse-item" href="#">Sub-Kategori - 9</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 10</a> 
                            <a class="collapse-item" href="#">Sub-Kategori - 11</a>
                            <a class="collapse-item" href="#">Sub-Kategori - 12</a> 
                        </div>
                    </div>
                </li>

                <hr>

                <li class="nav-item">
                    <a class="nav-link collapsed" id="kepala3" href="#" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapseTwo">
                        <i class="far fa-clock"></i>
                        <span>Kategori</span>
                    </a>
                    <div id="collapse3" class="collapse" aria-labelledby="kepala3" data-parent="#bagian1">
                        <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="#">Sub-Kategori - 1</a>
                        <a class="collapse-item" href="#">Sub-Kategori - 2</a>
                        </div>
                    </div>
                </li>
            </ul>`;
    }
}

customElements.define('side-bar', SideBar);