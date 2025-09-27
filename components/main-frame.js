const { defineAsyncComponent } = Vue

const MainFrame = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    axios.get("./views/" + globals.framePage + ".html?v=" + indexPageVersion)
    .then(response => {
      resolve({
        template: response.data,
        props: {},
        data: function() {return {}},
        methods: {},
        computed: {
          frame() {
            return globals.framePage;
          }
        },
        created: function() {
          debugMessage('Frame created');
        }
      })
    })
    .catch(error => {
      debugMessage(error);
      resolve({ template: 'Error: ' + error.status })
    })
  })
})

export default MainFrame
