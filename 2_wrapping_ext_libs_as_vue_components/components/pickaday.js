Vue.component('pickaday', {
    template: `<input :value="value" class="form-input" type="text" id="datepicker">`,

    props: ['value'],

    mounted: function() {
        var picker = new Pikaday({
            field: document.getElementById('datepicker'),
            onSelect: () => {
                this.$emit('input', picker.toString())
            }
        })
    }
})