Vue.component('announcement-modal', {
    template: `
        <div class="modal-backdrop" v-show="show">
            <div class="modal">
                <h1 class="text-center text-2xl font-bold mb-4">
                    Feature
                </h1>
                <p class="text-center text-grey-darker mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
                </p>
                <div class="text-center">
                    <button @click="dismiss" type="button" class="btn btn-blue">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    
    `,

    props: ['show'],

    methods: {
        dismiss: function() {
            this.$emit("close")
        }
    }
})