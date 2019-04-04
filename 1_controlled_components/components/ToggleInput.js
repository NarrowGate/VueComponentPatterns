Vue.component('toggle-input', {
    template: `<span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
                    :aria-checked="toggled.toString()"
                    :data-someAttribute = "toggled.toString()"
                    @click= toggle
                    @keydown.space.prevent = "toggle"
                    >    
                </span>`,
    model: {
        prop: 'toggled',
        event: 'toggle'
    },                

    props: ['toggled'],

    methods: {
        toggle : function() {
            this.$emit('toggle', !this.toggled);
        }
    }

});