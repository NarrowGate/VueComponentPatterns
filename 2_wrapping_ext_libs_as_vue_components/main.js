new Vue({
    el: '#vueId',

    data: {
        date:'2019-05-04',
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