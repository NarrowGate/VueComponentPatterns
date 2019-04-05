Vue.component('pickaday', {
    template: `<input :value="date" class="form-input" type="text" id="datepicker">`,

    data: function() {
        return {
            date:'2019-05-04'
        }
    },

    mounted: function() {
        var picker = new Pikaday({
            field: document.getElementById('datepicker'),
            onSelect: () => {
                this.date = picker.toString()
            }
        })
    }
})