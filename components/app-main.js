import MainHeader from './main-header.js'
import MainFrame from './main-frame.js'
import MainFooter from './main-footer.js'
const AppMain = {
  components: {
    MainHeader, MainFrame, MainFooter
  },
  props: {
  },
  data() {
    return {
    }
  },
  template: /*html*/`
    <div>
      <main-header></main-header>
      <main-frame></main-frame>
      <main-footer></main-footer>
    </div>
  `,
  methods: {
  },
  created: function() {
    debugMessage('AppMain created');
  }
}

export default AppMain
