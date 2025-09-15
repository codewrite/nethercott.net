export default  {
  props: {
  },
  data: function() {
    return {
    }
  },
  template: /*html*/`
    <div class="alert alert-dismissible text-center cookiealert" role="alert" style="padding:5px">
      <div class="cookiealert-container">
        Cookies &#x1F36A; We use cookies to ensure you get the best experience on our website.
        <a href="https://cookiesandyou.com/" target="_blank">Learn more</a>
        <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close">
          I agree
        </button>
      </div>
    </div>
  `,
  methods: {
    pageVersion: function() { return indexPageVersion; },
    lastModified: function() { return new Date(document.lastModified).toDateString() }
  },
  created: function() {
  },
  mounted: function() {
    ShowCookieBanner();
  }
}
