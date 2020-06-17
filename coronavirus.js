function CoronavirusWarning(language) {
    this.language = language;
    this.langs = {
        'AR': {
            desk: '<div><p>لسلامتكم - قمنا بتعقيم جميع شحناتنا</p></div>',
            mob: '<div><p>لسلامتكم - قمنا بتعقيم جميع شحناتنا</p></div>'
        },
        'EN': {
            desk: '<div><p>For your and our safety. All our shipments are sterilized</p></div>',
            mob: '<div><p>For your and our safety. All our shipments are sterilized</p></div>'
        }
    };
    this.createPanel = function() {
        var panel = document.createElement('div');
        document.body.insertAdjacentElement("afterbegin", panel);
        panel.classList.add('corona-wrapper');
        var paragraph = document.createElement('div');
        panel.insertAdjacentElement("afterbegin", paragraph);
        paragraph.innerHTML = document.documentElement.clientWidth > 768 ? this.langs[this.language].desk : this.langs[this.language].mob;
        var style = document.createElement("style");
        document.body.insertAdjacentElement("beforeend", style);
        style.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');.corona-wrapper{position:fixed;width:100%;top:0;left:0;background:#4F9356;padding:5px;box-sizing:border-box;z-index:999}.corona-wrapper p{color: #fff;text-align:center;font-family:'Roboto',Arial,sans-serif;margin:0 auto;font-size:15px;line-height:20px;}.corona-wrapper p:first-of-type{font-size:18px;line-height:21px;font-weight:700;margin-bottom:3px;}.corona-wrapper > div { max-width: 1020px;margin: 0 auto;padding-left:0;box-sizing:border-box;}";    
        document.querySelector('.corona-wrapper div').style.backgroundPosition = document.documentElement.clientWidth > 1024 ? 'center left 0px' : 'center left 150%';
        document.querySelector('.corona-wrapper div').style.paddingLeft = document.documentElement.clientWidth > 1024 ? '0' : '0';
        window.addEventListener('resize', this.onresize.bind(this));
        window.addEventListener('load', function(){
            var panelHeight = document.querySelector('.corona-wrapper').offsetHeight;
            document.body.style.paddingTop = panelHeight + 'px';
        });        
    };
    this.onresize = function() {
        document.querySelector('.corona-wrapper').innerHTML = document.documentElement.clientWidth > 1024 ? this.langs[this.language].desk : this.langs[this.language].mob;
        document.querySelector('.corona-wrapper div').style.backgroundPosition = document.documentElement.clientWidth > 1024 ? 'center left 0px' : 'center left 150%';
        document.querySelector('.corona-wrapper div').style.paddingLeft = document.documentElement.clientWidth > 1024 ? '0' : '0';
        var panelHeight = document.querySelector('.corona-wrapper').offsetHeight;
        document.body.style.paddingTop = panelHeight + 'px';
    };
}