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
  Let's start with a bit of background information. To put it simply, SVGs are made up of paths. Each path contains a series of points that the browser uses to display and resize your image dynamically. A very basic SVG might only have one path, but a more complex design might require many more.
  <br><br>
  The structure of an SVG's markup may vary depending on a number of factors such as the editor used to create the SVG, the use of masks or other effects, whether or not the file has been minified, etc. This makes it hard to standarize an approach to path detection for the purposes of recoloring (or any other manipulation). It is very likely that you will only want to target specific paths in your SVG in order to acheive the desired effect. This is where the "<b>css_path_selector</b>" parameter comes into play.
  <br><br>
  All of the <b>veco_colorize</b> functions have an optional "<b>css_path_selector</b>" parameter. It is essentially just a CSS selector used to target specific paths in your SVG markup. You may need to interrogate your SVG markup and experiment with CSS selectors to find the best solution to your individual problem, but no SVG will present an unsolvable problem, even if it means editing the SVG markup with an online editor such as https://editsvgcode.com before importing it. Here are a few examples of how a CSS selector can be used:
  <br><br>
  <ul align=left>
    <li>
      "path" - This is the default value. Target every path in the SVG.
    </li>
    <li>
      "g path" - Target all paths that are a child of a "g" element.
    </li>
    <li>
      "path:nth-child(3) - Target all paths that are the 3rd child of their parent element.
    </li>
    <li>
      "path#my_path" - Target all paths with the ID "my_path".
    </li>
    <li>
      "path.target_path" - Target all paths with the class name "target_path".
    </li>
  </ul>
  <br><br><br>
  <h2>Veco Functions</h2>
  <div align=left>
    <h3>veco_vectorize(element, resource_name)</h3>
    Imports an SVG file's markup into an SVG element in the DOM. Required to use any of the colorize functions.
    <br><br>
    <h3>veco_colorize_by_id(id, color, css_path_selector)</h3>
    Changes the color of an SVG by ID. CSS selector specifies the target paths in the SVG markup.
    <br><br>
    <h3>veco_colorize_by_class_name(class_name, color, css_path_selector)</h3>
    Changes the color of an SVG by class name. CSS selector specifies the target paths in the SVG markup.
    <br><br>
    <h3>veco_vectorize_all(color, css_path_selector)</h3>
    Changes the color of all SVGs. CSS selector specifies the target paths in the SVG markup.
    <br><br>
  </div>
</div>
