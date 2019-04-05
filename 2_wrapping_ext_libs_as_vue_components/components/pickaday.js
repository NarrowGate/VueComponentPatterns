Vue.component('pickaday', {
    template: `<input :value="value" class="form-input" type="text" ref="someDatepicker">`,

    props: ['value'],

    mounted: function() {
        var picker = new Pikaday({
            field: this.$refs.someDatepicker,
            onSelect: () => {
                this.$emit('input', picker.toString())
            }
        })
    }
})