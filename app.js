new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja.',
        firstname: 'Franzl',
        name: 'Sissi',
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: false,
        showAge: true,
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            { name: 'Crystal', age: 25, belt: 'black' },
            { name: 'Ryu', age: 30, belt: 'brown' },
            { name: 'Ken', age: 35, belt: 'orange' }
        ],
        posts: [{ title: 'test', body: 'test-body'}]
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        },
        logEvent(e){
            console.log(e);
            
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e){
            console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage(){
            console.log("Hello world")
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        },
        loadData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse => {
                console.log(reponse)
                this.posts = reponse.data
                console.log("Done: " + this.posts.length)
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => {
            console.log(reponse)
            this.posts = reponse.data
            console.log("Done: " + this.posts.length)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
})