import CookieAlert from './cookie-alert.js'
export default  {
  components: {
    CookieAlert
  },
  props: {},
  data: function() {return {}},
  template: /*html*/`
    <div>
      <hr/>
	    <div class="versionDiv">v{{ pageVersion() }}: Last Update: {{ lastModified() }}</div>
    </div>
    <cookie-alert></cookie-alert>
  `,
  methods: {
    pageVersion: function() { return indexPageVersion; },
    lastModified: function() { return new Date(document.lastModified).toDateString() }
  },
  created: function() {
    debugMessage('Footer created');
  }
}
