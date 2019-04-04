Vue.component('toggle-input', {
    template: `<span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
                    :aria-checked="recNewsLetter.toString()"
                    :data-someAttribute = "recNewsLetter.toString()"
                    @click = "toggle"
                    @keydown.space.prevent = "toggle"
                    >    
                </span>`,
    
    data: function() {
        return {
            recNewsLetter: false            
        }
    }, 

    methods: {
        toggle : function() {
            this.recNewsLetter = !this.recNewsLetter;
        }
    }

});