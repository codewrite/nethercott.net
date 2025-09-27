export default  {
  props: {},
  data: function() {
    return {
      headers: { "home": { title: "Welcome to the Nethercott Website", subtitle: "Hi, my name is Jon Nethercott, and I maintain the Nethercott.Net website." },
                 "places": { title: "Places Called Nethercott", subtitle: "Placed called Nethercott or that have Nethercott in their name" },
                 "sports": { title: "Sporty Nethercotts", subtitle: "Some of the more sporty Nethercotts!" } }
      }
    },
    template: /*html*/`
      <div class="navbar"><a href="../">Home</a></div>
      <div class="p-5 mb-4 bg-body-secondary text-center">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    `,
    computed: {
      title() {
        return (this.headers[globals.framePage] ?? {title:''}).title;
      },
      subtitle() {
        return (this.headers[globals.framePage] ?? {subtitle:''}).subtitle;
      }
    },
    created: function() {
     debugMessage('Header created');
   }
}
