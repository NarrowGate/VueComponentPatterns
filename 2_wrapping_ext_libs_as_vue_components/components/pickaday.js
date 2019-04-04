Vue.component('pick-a-day', {
    template: `<input class="form-input" type="text" id="datepicker" placeholder="YYYY-MM-DD">`,

    mounted: function() {
        var picker = new Pikaday({
            field: document.getElementById('datepicker'),
            format: 'YYYY-MM-DD'
        })
    }
})