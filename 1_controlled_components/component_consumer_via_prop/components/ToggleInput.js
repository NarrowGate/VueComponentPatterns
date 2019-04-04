Vue.component('toggle-input', {
    template: `<span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
                    :aria-checked="val.toString()"
                    :data-someAttribute = "val.toString()"
                    @click= toggle
                    @keydown.space.prevent = "toggle"
                    >    
                </span>`,

    props: ['val'],

    methods: {
        toggle : function() {
            this.$emit('input', !this.val);
        }
    }

});