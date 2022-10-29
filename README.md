<div align=center>
  <img src="https://i.imgur.com/9QamejA.png">
  <h2></h2>
  Ever referenced an SVG file in your HTML document, only to find that you can't manipulate the SVG's markup in real-time?
  <br><br>
  <b>Veco</b> is here to solve that problem!
  <br><br>
  Veco is short for Vectorization and Colorization, and it works by accessing the SVG's markup in real-time and inserting it into the DOM. Once in the DOM, you are free the manipulate the SVG's child elements and properties as you wish. Veco also includes a number of handy functions to let you recolor the SVGs dynamically.
  <br><br>
  Veco is free, lightweight and easy-to-use, so why not give it a go?
  <br><br>
  <br><br>
  
  <h2>How to Install Veco</h2>
  Right now, Veco is not available via CDN, so you will need to clone this GitHub repo and add veco.js to your project:
  <br><br>
  <b>&lt;script type="text/javascript" src="veco.js"&gt;&lt;/script&gt;</b>
  <br><br>
  <br><br>
  
  <h2>Using Veco to Access SVG Markup</h2>
  The first thing to do is to create an SVG stub in your HTML:
  <br><br>
  <b>&lt;svg/&gt;</b>
  <br><br>
  In order to get the SVG markup into the DOM, we need to call <b>veco_vectorize(element, resource_name)</b> on our SVG stub. The "<b>element</b>" parameter is simply the HTML element that we are taretting. In this case, it's our stub, so we simply pass "this". The "<b>resource_name</b>" is the name of the SVG file whose markup we want to insert. For the purposes of this explanation, we'll use the Veco logo; "veco.svg". We also need some event to fire in order to call veco_vectorise, so we'll use onload. That way the SVG markup will be inserted as soon as the document loads.
  <br><br>
  <b>&lt;svg onload="veco_vectorize(this, 'veco.svg')"/&gt;</b>
  <br><br>
  ...and that's it! The SVG markup is now in the stub. You can confirm this by using your browser's developer tools.
  
  <br><br>
  <br><br>
  <h2>Using Veco to Colorize an SVG</h2>
  Veco colorization relies on manipulating SVG markup. Therefore, you can only colorize the SVGs that you have set up with veco_vectorize(). Once that's done, it is simply a case of using one of Veco's colorize functions. For now, we'll just use <b>veco_colorize_by_id</b> (all Veco functions are documented at the bottom of this page).
  <br><br>
  We'll create a color picker input and use its onchange event to call our function. As the name implies, <b>veco_colorize_by_id(id, color, css_path_selector)</b> gets an SVG element via its ID property, and recolors it. The "id" parameter is simply the ID of the SVG element, so before we continue, let's update our SVG to have an ID:
  <br><br>
  <b>&lt;svg id="my_svg" onload="veco_vectorize(this, 'veco.svg')"/&gt;</b>
  <br><br>
  Now, going back to <b>veco_colorize_by_id</b>, the "<b>color</b>" parameter is the color that we want our SVG to use. Since we are using a color picker input, we can just pass in "this.value". The "<b>css_path_selector</b>" lets you select specific paths in your SVG with a CSS selector. It is discussed in more detail in the next section, but since it has a default argument, for now we can ignore it. The full input element for our color picker looks like this:
  <br><br>
  <b>&lt;input type=color onchange="veco_colorize_by_id('my_svg', this.value')"/&gt;</b>
  <br><br>
  ...and that's it for colorizing. You should now see your SVG's color update as you change the color picker value.
  <br><br>
  <br><br>
  <h2>Not Getting the Results You Want?</h2>
  ...
</div>
