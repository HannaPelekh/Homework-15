class Menu {
    #menu = [];
    #hamburger = [];
    static CLASSES = {        
        desctop_list_cont: "desctop_list-container",
        hidden_hamburger: "hidden-hamburger",
        items:"items",

        mobile__list_cont: "mobile_list-container",
        show_hamburger: "mobile-hamburger",         
        hamburgerElement: "menu__span",   
        active: "active",  
        mobile_items:"mobile-items",   
        hover: "hover"  
    };

    constructor (el, options = { eventType: "mouseover" }){   
        this.options = options; 
        if (document.documentElement.clientWidth <= 768) {                  
        this.initMobile(el);        
        } else {
            this.initDesktop(el); 
        }
    };
                             // Desktop
    initDesktop(el){        
        this.setElementsDesktop(el);        
        this.initialClassSetDesktop(el); 
        console.log(el)
    }; 
    setElementsDesktop(el) {
        this.#menu = [...el.children[1].children];        
    };
    initialClassSetDesktop(el){
        this.setClassesItemsDesktop(this.#menu, Menu.CLASSES.items);     
        el.children[1].classList.add(Menu.CLASSES.desctop_list_cont);
        el.children[0].classList.add(Menu.CLASSES.hidden_hamburger);        
    };
    setClassesItemsDesktop(elements, ClassI) {
        elements.forEach((e) => {
            e.classList.add(ClassI);            
        });
    };     
    
                             // Mobile

    initMobile(el){        
        this.setElementsMobile(el);
        this.initialClassSetMobile(el);
        this.addListeners(el);     
            
    };
    setElementsMobile(el){
        this.#hamburger = [...el.children[0].children];  
        this.#menu = [...el.children[1].children];       
    }
    initialClassSetMobile(el){            
        this.setClassesHamburger(this.#hamburger, Menu.CLASSES.hamburgerElement);         
        el.children[0].classList.add(Menu.CLASSES.show_hamburger); 
        el.children[1].classList.add(Menu.CLASSES.mobile__list_cont);
        this.setClassesItemsMobile(this.#menu, Menu.CLASSES.mobile_items); 
    }   
    setClassesHamburger(el, ClassE) {
        el.forEach((e) => {
            e.classList.add(ClassE);             
        });
    };   
    setClassesItemsMobile(elements, ClassIt) {
        elements.forEach((e) => {
            e.classList.add(ClassIt);            
        });
    };  

    addListeners(el) {
        el.addEventListener("click", this.onMenuClick);
        el.addEventListener("touchstart", this.onMenuHover);        
    }
    onMenuClick = (e) => {
        const target = e.target;        
        if(e.target.classList.contains(Menu.CLASSES.show_hamburger) ||
           e.target.classList.contains(Menu.CLASSES.hamburgerElement)) {
            setTimeout(function(){
            el.children[1].classList.toggle(Menu.CLASSES.active);             
            }, 300);
        }
        if(e.target.classList.contains(Menu.CLASSES.mobile_items)) {
            setTimeout(function(){
                el.children[1].classList.remove(Menu.CLASSES.active); 
                el.children[0].classList.remove(Menu.CLASSES.hover);                 
            }, 300);
        }              
    }

    onMenuHover = (e) => {
        const target = e.target; 
        if(e.target.classList.contains(Menu.CLASSES.show_hamburger) ||
           e.target.classList.contains(Menu.CLASSES.hamburgerElement)) {
            el.children[0].classList.add(Menu.CLASSES.hover);                            
        }
        if(e.target.classList.contains(Menu.CLASSES.mobile_items)) {
            this.setClassesItemsHover(this.#menu, Menu.CLASSES.hover);
        }        
    }
    setClassesItemsHover(elements, ClassIt) {
        elements.forEach((e) => {
            e.classList.remove(ClassIt); 
        });  
        event.target.classList.add(ClassIt);
    }     
        
}

    


   


   
