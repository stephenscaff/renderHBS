
/**
 * Render HBS
 * A utilitiy to compile a handlebars template from a data source on
 * the client side and render it to the DOM. Uses Fetch API so polyfill that
 * if need be.
 * @author stephen scaff
 * @useage RenderHBS.init(yoDATA, yoRenderEl, yoTemplate)
 */
var RenderHBS = (function() {

  return {

    /**
     * Init
     * Just an init that passes params to the render function
     * @param data {obj} - The data source
     * @param renderEl {string} - DOM Element
     * @pram template {string} - Path to the hbs file
     */
    init: function(data, renderEl, template){
      this.render(data, renderEl, template);
    },

    /**
     * Render HBS Template to
     * Renders our hbs template with our data
     * @param {hbsTemplate} string - path to template
     * @param {renderEl} element - element to render to
     * @param {Object} data - data object
     */
    render: function(data, renderEl, hbsTemplate) {
      RenderHBS.getTemplate(hbsTemplate, function(template) {
        renderEl.insertAdjacentHTML('beforeend', template(data));
      });
    },

    /**
     * Get Template
     * Get's an external HBS template via fetch and compiles
     * with our data.
     * @param {string} path - path to our template file
     * @param {function} callback - our callback function to pass the response
     */
     getTemplate: function(path, callback) {
       var source, template;

       fetch(path)
        .then( function (response) {
          //console.log(response);
          return response.text();
        })
        .then( function (data) {
          source = data;
          template = Handlebars.compile(source);
          if (callback) callback(template);
        })
        .catch( function(error) {
          console.log(error);
      });
    }
  };
})();
