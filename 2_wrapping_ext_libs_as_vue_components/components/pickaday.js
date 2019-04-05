Vue.component('pickaday', {
    template: `<input :value="value" class="form-input" type="text" ref="someDatepicker">`,

    props: {
        value : {
            required: true
        },
        format: {
            default: 'YYYY-MM-DD'
        }

    },

    mounted: function() {
        var picker = new Pikaday({
            field: this.$refs.someDatepicker,
            format: this.format,
            onSelect: () => {
                this.$emit('input', picker.toString())
            }
        })
    }
})