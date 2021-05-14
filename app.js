const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return {
            firstName: 'Jon',
            lastName:'Laboy',
            email: 'jon@gmail.com',
            gender: 'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
       async getUser() {
           const response = await fetch('https://randomuser.me/api')
           const data = await response.json()
           const results = data.results
        //    console.log(results) 
            this.firstName =results[0].name.first,
            this.lastName =results[0].name.last,
            this.email =results[0].email,
            this.gender = results[0].gender,
            this.picture =results[0].picture.large
        }
    }
})

app.mount('#app')