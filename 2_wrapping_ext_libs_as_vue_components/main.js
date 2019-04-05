new Vue({
    el: '#vueId',

    data: {
        date:'5-04-2019',
    },

    mounted: function() {
        var picker = new Pikaday({
            field: document.getElementById('datepicker'),
            format: 'YYYY-MM-DD'
        })
    }


})