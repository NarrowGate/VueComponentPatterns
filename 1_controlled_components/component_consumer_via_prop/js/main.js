new Vue({
    el: '#vueId',

    data: {
        email:'',
        recieveNewsletter: false,
    },

    methods: {
        submit : function() {
            console.log('Save settings', {
                email: this.email,
                newsletter: this.recieveNewsletter
            })
        },
        toggleNewsletter : function() {
            this.recieveNewsletter = !this.recieveNewsletter
        }
    }
})