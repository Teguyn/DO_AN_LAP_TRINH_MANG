// Load multiple HTML partials into placeholders and then initialize main script
(function(){
    const partials = [
        {id: 'header', path: 'partials/header.html'},
        {id: 'hero', path: 'partials/hero.html'},
        {id: 'about', path: 'partials/about.html'},
        {id: 'skills', path: 'partials/skills.html'},
        {id: 'projects', path: 'partials/projects.html'},
        {id: 'certifications', path: 'partials/certifications.html'},
        {id: 'blog', path: 'partials/blog.html'},
        {id: 'contact', path: 'partials/contact.html'},
        {id: 'footer', path: 'partials/footer.html'}
    ];

    function loadPartial(p){
        return fetch(p.path).then(r => {
            if(!r.ok) throw new Error('Failed to load ' + p.path);
            return r.text();
        }).then(html => {
            const container = document.getElementById(p.id);
            if(container) container.innerHTML = html;
        });
    }

    function loadAll(){
        return Promise.all(partials.map(loadPartial));
    }

    window.loadPartialsAndInit = function(initCallback){
        loadAll().then(() => {
            if(typeof initCallback === 'function') initCallback();
        }).catch(err => {
            console.error('Error loading partials:', err);
        });
    };
})();
