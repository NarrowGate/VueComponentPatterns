Vue.component('toggle-input', {
    template: `<span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
                    :aria-checked="value.toString()"
                    :data-someAttribute = "value.toString()"
                    @click= toggle
                    @keydown.space.prevent = "toggle"
                    >    
                </span>`,

    props: ['value'],

    methods: {
        toggle : function() {
            this.$emit('input', !this.value);
        }
    }

});