/**

 * Dear Sir/Madam,

 * This is Cyanea.
 * Here is my resume.
 * Please be patient.

 */



/**

 * Let me spice it up a little bit.
 * Add a plain background.

 */



* {

    -webkit-transition: all 1s;

    -webkit-transform: translate3d(0,0,0);

    -webkit-backface-visibility: hidden;

    -webkit-transform-style: preserve-3d;

}



html {

    background-color: #244E6E;

}



/**

 * Text in black is uncomfortable to read.
 * Try something different.

 */



pre, a {

    color: #fff;

}



pre:not(:empty) {

    width: 49%;

    max-height: 45%;

    background: rgb(48, 48, 48);

    border: 1px solid #ccc;

    overflow: auto;

    font-family: monospace;

    padding: 10px 10px 20px;

    margin: 10px;

    white-space: pre-wrap;

    outline: 0;

}



/**

 * Code on the right side.

 */



#style-text {

    -webkit-transform: translateX(95%);

    position: absolute;

}



/**

 * Syntax highlighting.

 */



.comment       { color: #857F6B; font-style: italic; }

.selector      { color: #E69F0F; }

.selector .key { color: #64D5EA; }

.key           { color: #64D5EA; }

.value         { color: #BE84F2; }

.value.px      { color: #F92772; }



pre:not(:empty) {

    max-height: 90%;

}



/**

 * Get some 3D effect.

 */



body {

  -webkit-perspective: 1000px;

}



#style-text {

  -webkit-transform: translateX(98.5%) rotateY(-10deg);

  -webkit-transform-origin: right;

}



/**

 * Ready for my resume? Here we go.

 */



pre:not(#style-text) {

  -webkit-transform: rotateY(10deg);

  -webkit-transform-origin: left;

}

/**

 * I use markdown to build the page.
 * Add some fun feature to read.

 */



/**

 *

 *

 * 3...

 * 2...

 * 1...

 *

 *

 *

 */



/**

 * Need to change the style a bit.

 */



.md {

  font-family: "Helvetica Neue", Helvetica, sans-serif;

}



.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {

  display: inline-block;

  color: #ddd;

  border-bottom: 1px solid #ccc;

  padding-bottom: 5px;

}



.md li {

  margin: 5px 0;

}



.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {

  margin: 0px;

}





/**

 * I am so glad to meet you.
 * Thank you.

 * Yours Sincerely,
 * Cyanea

 */
