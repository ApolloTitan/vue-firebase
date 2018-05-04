new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja.',
        name: 'people of the world',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            return `Hello ${this.name} and good ${time} - ${this.title}`
        }
    }
})